import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class newUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @MaxLength(50, { message: 'El nombre debe tener menos de 50 caracteres' })
  @MinLength(4, { message: 'El nombre debe tener mas de 4 caracteres' })
  public name: string;

  @ApiProperty({
    example: 'Roberto93',
    description: 'The username of the user',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'El username debe ser un string' })
  @IsNotEmpty({ message: 'El username es requerido' })
  @MaxLength(50, { message: 'El username debe tener menos de 50 caracteres' })
  @MinLength(4, { message: 'El username debe tener mas de 4 caracteres' })
  public username: string;

  @ApiProperty({
    example: 'example@gmail.com ',
    description: 'email',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'El email debe ser un string' })
  @IsNotEmpty({ message: 'El email es requerido' })
  public email: string

  @ApiProperty({
    example: 'password',
    description: 'The password of the user',
    maxLength: 20,
    minLength: 4,
  })
  @IsString()
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  @MaxLength(20, { message: 'La contraseña debe tener menos de 20 caracteres' })
  @MinLength(4, { message: 'La contraseña debe tener mas de 4 caracteres' })
  public password: string;

  @ApiProperty({
    example: 'Inspector',
    description: 'The role of the user',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsEnum(['Administrador', 'Juez', 'Corralon','Inspector', 'Turismo'], {
    message: 'El rol debe ser Administrador, Juez, Corralon,Inspector o Turismo',
  })
  public tipo: string;

  @ApiProperty({
    example: 'Naindo',
    description: 'The hotel name',
  })
  @IsString({ message: 'El nombre del hotel debe ser un string' })
  @IsOptional()
  public nombre_hotel: string;

}
