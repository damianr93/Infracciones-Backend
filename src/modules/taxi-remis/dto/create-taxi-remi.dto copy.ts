import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';



export class CreateTaxiRemisDto {

  @ApiProperty({
    example: '23A/24',
    description: 'Number of the file',
    maxLength: 50,
    minLength: 4
  })
  @IsString({ message: 'The file number must be a string' })
  @IsNotEmpty({ message: 'The file number is required' })
  @MaxLength(100, { message: 'The file number must be less than 50 characters' })
  @MinLength(4, { message: 'The file number must be more than 4 characters' })
  public numero_legajo: string;

  @ApiProperty({
    example: 'KUD785',
    description: 'vehicle registration number',
    maxLength: 100,
    minLength: 4
  })
  @IsString({ message: 'The domain number must be a string' })
  @IsNotEmpty({ message: 'The domain number is required' })
  @MaxLength(100, { message: 'The domain number must be less than 10 characters' })
  @MinLength(4, { message: 'The domain number must be more than 4 characters' })
  public dominio_vehiculo: string;

  @ApiProperty({
    example: '230A2000',
    description: 'vehicle identification number (engine)',
    maxLength: 200,
    minLength: 4
  })
  @IsString({ message: 'The engine number must be a string' })
  @IsNotEmpty({ message: 'The engine number is required' })
  @MaxLength(200, { message: 'The engine number must be less than 20 characters' })
  @MinLength(4, { message: 'The engine number must be more than 4 characters' })
  public numero_motor: string;

  @ApiProperty({
    example: '8A5V75TFXFJ033364',
    description: 'chassis number',
    maxLength: 30,
    minLength: 4
  })
  @IsString({ message: 'The chassis number must be a string' })
  @IsNotEmpty({ message: 'The chassis number is required' })
  @MaxLength(100, { message: 'The chassis number must be less than 30 characters' })
  @MinLength(4, { message: 'The chassis number must be more than 4 characters' })
  public numero_chasis: string;

  @ApiProperty({
    example: 'Ford',
    description: 'the brand of the car',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'The car brand must be a string' })
  @IsNotEmpty({ message: 'The car brand is required' })
  @MaxLength(100, { message: 'The car brand must be less than 50 characters' })
  @MinLength(4, { message: 'The car brand must be more than 4 characters' })
  public marca_vehiculo: string;

  @ApiProperty({
    example: 'megane',
    description: 'the model of the car',
    maxLength: 15,
    minLength: 4,
  })
  @IsString({ message: 'The car model must be a string' })
  @IsNotEmpty({ message: 'The car model is required' })
  @MaxLength(150, { message: 'The car model must be less than 15 characters' })
  @MinLength(4, { message: 'The car model must be more than 4 characters' })
  public modelo_vehiculo: string;

  @ApiProperty({
    example: 'https://www.google.com',
    description: 'Vehicle photo',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'The vehicle photo must be a string' })
  @IsOptional()
  public foto_vehiculo: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the owner',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: `The owner's name must be a string` })
  @IsNotEmpty({ message: `'The owner's name is required` })
  @MaxLength(150, { message: `The owner's name must be less than 50 characters` })
  @MinLength(4, { message: `The owner's name must be more than 4 characters` })
  public nombre_titular: string;

  @ApiProperty({
    example: '37444999',
    description: 'number of the license',
    maxLength: 10,
    minLength: 7,
  })
  @IsString({ message: `The driver's license number must be a string` })
  @IsNotEmpty({ message: `The driver's license number is required` })
  @MaxLength(100, { message: `The driver's license number must be less than 10 characters` })
  @MinLength(7, { message: `The driver's license number must be more than 4 characters` })
  public numero_licencia_conductor: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the driver',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'Driver name must be a string' })
  @IsNotEmpty({ message: 'Driver name is required' })
  @MaxLength(150, { message: 'Driver name must be less than 50 characters' })
  @MinLength(4, { message: 'Driver name must be more than 4 characters' })
  public nombre_conductor: string;

  @ApiProperty({
    example: 'https://www.google.com',
    description: 'Driver photo',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'Driver photo must be a string' })
  @IsOptional()
  public foto_titular: string;

  @ApiProperty({
    example: '00230055102',
    description: 'Insurance policy number',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'Insurance policy number must be a string' })
  @IsNotEmpty({ message: 'Insurance policy number is required' })
  @MaxLength(150, { message: 'Insurance policy number must be less than 50 characters' })
  @MinLength(4, { message: 'Insurance policy number must be more than 4 characters' })
  public poliza_seguro: string;

  @ApiProperty({
    example: 'Vigente',
    description: 'State of VTV',
    maxLength: 10,
    minLength: 4,
  })
  @IsOptional()
  @IsEnum(['Vencida', 'Vigente'],
    { message: 'The state of VTV must be one of: Vigente or Vencida' })
  public vtv: string;

  @ApiProperty({
    example: 'Vigente',
    description: 'health screening status',
    maxLength: 10,
    minLength: 4,
  })
  @IsOptional()
  @IsEnum(['Vigente', 'Pendiente'],
    { message: 'The health screening status must be one of: Vigente, Pendiente' })
  public revision_salud: string;

  @ApiProperty({
    example: 'Regular',
    description: 'Vehicle disinfection certificate status',
    maxLength: 10,
    minLength: 4,
  })
  @IsOptional()
  @IsEnum(['Regular', 'Pendiente'],
    { message: 'The vehicle disinfection certificate status must be one of: Regular, Pendiente' })
  public desinfeccion_vehicular: string;

  @ApiProperty({
    example: 'En condiciones',
    description: 'Taximeter status',
    maxLength: 10,
    minLength: 4,
  })
  @IsOptional()
  @IsEnum(['En condiciones', 'Novedades'],
    { message: 'The Taximeter status must be one of: En condiciones, Novedades' })
  public taximetro: string;

  @ApiProperty({
    example: 'Otras observaciones',
    description: 'additional comments',
    maxLength: 50,
    minLength: 4,
  })
  @IsOptional()
  public observaciones: string;

  @ApiProperty({
    example: 'Remis',
    description: 'Vehicle type',
    maxLength: 10,
    minLength: 4,
  })
  @IsString()
  @IsEnum(['Remis', 'Taxi'],
    { message: 'The vehicle type must be one of: Remis, Taxi' })
  public tipo: string;

}

