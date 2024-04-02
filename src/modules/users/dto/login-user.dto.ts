import { PartialType } from '@nestjs/swagger';
import { newUserDto } from './create-user.dto';


export class loginUserDto extends PartialType(newUserDto){}