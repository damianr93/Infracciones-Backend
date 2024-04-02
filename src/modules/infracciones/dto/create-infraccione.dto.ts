import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateInfraccioneDto {

  @ApiProperty({
    example: 'ABC123',
    description: 'Domain number',
    maxLength: 6,
    minLength: 6,
  })
  @IsString({ message: 'The domain must be a string' })
  @IsNotEmpty({ message: 'The domain is required' })
  @MinLength(6, { message: 'The domain must be 6 characters' })
  public dominio: string

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the owner',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: `The owner's name must be a string` })
  @IsNotEmpty({ message: `'The owner's name is required` })
  @MaxLength(50, { message: `The owner's name must be less than 50 characters` })
  @MinLength(4, { message: `The owner's name must be more than 4 characters` })
  public nombre_propietario: string

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the driver',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'Driver name must be a string' })
  @IsNotEmpty({ message: 'Driver name is required' })
  @MaxLength(50, { message: 'Driver name must be less than 50 characters' })
  @MinLength(4, { message: 'Driver name must be more than 4 characters' })
  public nombre_conductor: string

  @ApiProperty({
    example: 'Belgrano 932 La Rioja',
    description: 'Address of the driver',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: `The driver's address must be a string` })
  @IsNotEmpty({ message: `The driver's address is required` })
  @MaxLength(50, { message: `The driver's address must be less than 50 characters` })
  @MinLength(4, { message: `The driver's address must be more than 4 characters` })
  public domicilio_conductor: string

  @ApiProperty({
    example: 'Ford',
    description: 'the brand of the car',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'The car brand must be a string' })
  @IsNotEmpty({ message: 'The car brand is required' })
  @MaxLength(50, { message: 'The car brand must be less than 50 characters' })
  @MinLength(4, { message: 'The car brand must be more than 4 characters' })
  public marca_vehiculo: string

  @ApiProperty({
    example: 'megane',
    description: 'the model of the car',
    maxLength: 15,
    minLength: 4,
  })
  @IsString({ message: 'The car model must be a string' })
  @IsNotEmpty({ message: 'The car model is required' })
  @MaxLength(15, { message: 'The car model must be less than 15 characters' })
  @MinLength(4, { message: 'The car model must be more than 4 characters' })
  public modelo_vehiculo: string

  @ApiProperty({
    example: 'Rojo',
    description: 'the color of the car',
    maxLength: 15,
    minLength: 4,
  })
  @IsString({ message: 'The car color must be a string' })
  @IsNotEmpty({ message: 'The car color is required' })
  @MaxLength(15, { message: 'The car color must be less than 15 characters' })
  @MinLength(4, { message: 'The car color must be more than 4 characters' })
  public color_vehiculo: string

  @ApiProperty({
    example: '37444999',
    description: 'number of the license',
    maxLength: 100,
    minLength: 7,
  })
  @IsString({ message: `The driver's license number must be a string` })
  @IsNotEmpty({ message: `The driver's license number is required` })
  @MaxLength(100, { message: `The driver's license number must be less than 10 characters` })
  @MinLength(7, { message: `The driver's license number must be more than 4 characters` })
  public numero_licencia_conductor: string

  @ApiProperty({
    example: 'Av. Peron, al 1500',
    description: 'place of infraction',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'The location of the infraction must be a string' })
  @IsNotEmpty({ message: 'The location of the infraction is required' })
  @MaxLength(200, { message: 'The location of the infraction must be less than 200 characters' })
  @MinLength(4, { message: 'The location of the infraction must be more than 4 characters' })
  public ubicacion_infraccion: string

  @ApiProperty({
    example: 'Frente a YPF',
    description: 'reference near the place',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'The reference to the location must be a string' })
  @IsOptional({ message: 'The reference to the location is required' })
  @MaxLength(50, { message: 'The reference to the location must be less 50 characters' })
  @MinLength(4, { message: 'The reference to the location must be more then 4 characters' })
  public referencia_ubicacion: string

  @ApiProperty({
    example: ['65b7c9aa59575690d5e65bfa', '65b7c9a159575690d5e65bf8', '65b7c9b859575690d5e65bfc'],
    description: 'ID of the related Nomenclator collection',
  })
  @IsArray()
  @IsNotEmpty({ message: 'The nomenclator id is required' })
  @IsMongoId({ each: true, message: 'The nomenclator id is not valid' })
  public id_nomenclador: string[];

  @ApiProperty({
    example: 'ABC665',
    description: 'number of the infraction',
    maxLength: 100,
    minLength: 4,
  })
  @IsString({ message: 'The infraction number must be a string' })
  @IsNotEmpty({ message: 'The infraction number is required' })
  @MaxLength(100, { message: 'The infraction number must not exceed 10 characters' })
  @MinLength(1, { message: 'The infraction number must have at least 1 characters' })
  public numero_infraccion: string

  @ApiProperty({
    example: 'PENDIENTE',
    description: 'State of infraction',
    maxLength: 50,
    minLength: 4,
  })
  @IsOptional()
  @IsEnum(['NULO', 'PENDIENTE', 'PAGADO'],
    { message: 'The state must be one of: NULO, PENDIENTE, PAGADO' })
  public estado: string

  @ApiProperty({
    example: 'Javier Navarro',
    description: 'Assigned judge',
  })
  @IsOptional()
  @IsMongoId({ message: 'The assigned judge is not valid' })
  public juez_asignado: string

  @ApiProperty({
    example: 'URL',
    description: 'URL of the image'
  })
  @IsArray()
  public foto: string[];

  @ApiProperty({
    example: '65b7c9aa59575690d5e65bfa',
    description: 'ID of the user who created the infraction',
  })
  @IsMongoId({ message: 'The user id is not valid' })
  public creado_por: string

}


