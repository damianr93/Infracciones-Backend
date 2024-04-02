import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { newUserDto } from './dto/create-user.dto';
import { loginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  create(@Body() createUserDto: newUserDto) {
    return this.usersService.register(createUserDto);
  }

  @Post('/login')
  login(@Body() loginUser: loginUserDto) {
    return this.usersService.login(loginUser);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<newUserDto> & { id: string },
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Post('/checkToken')
  checkToken(@Body() token: { token: string }) {
    return this.usersService.checkToken(token.token);
  }
}
