import {
  ConflictException,
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { newUserDto } from './dto/create-user.dto';
import { User } from './interfaces/users.interface';
import { Model } from 'mongoose';
import { loginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { VersionsService } from '../versions/versions.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_MODEL')
    private readonly userModel: Model<User>,
    private jwtService: JwtService,
    @Inject(forwardRef(() => VersionsService))
    private versionsService: VersionsService,
  ) {}

  async register(createUserDto: newUserDto) {
    const { password, email, username } = createUserDto;
    if (await this.userModel.findOne({ email }))
      throw new HttpException('Email already exists', 409);
    if (await this.userModel.findOne({ username }))
      throw new HttpException('Username already exists', 409);

    const hash = await bcrypt.hash(password, 10);
    createUserDto.password = hash;

    return this.userModel.create(createUserDto);
  }

  async login(loginUser: loginUserDto) {
    const { username, password } = loginUser;
    if (!username) throw new ConflictException('username not provided');
    if (!password) throw new ConflictException('password not provided');

    const user = await this.userModel.findOne({ username });
    if (!user) throw new NotFoundException();

    const isMatching = await bcrypt.compare(password, user.password);
    if (!isMatching) throw new NotFoundException();

    const payload = { id: user.id, tipo: user.tipo };

    const token = this.jwtService.sign(payload);

    const version = await this.versionsService.getVersion();

    return {
      user,
      token,
      version,
    };
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findOne({ _id: id }).exec();
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id }).exec();
  }

  update(id: string, updateUserDto: Partial<newUserDto> & { id: string }) {
    return this.userModel
      .updateOne({ _id: updateUserDto.id }, updateUserDto)
      .exec();
  }

  checkToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (error) {
      return false;
    }
  }
}
