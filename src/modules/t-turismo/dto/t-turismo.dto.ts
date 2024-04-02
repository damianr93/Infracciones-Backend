import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateTranspTurismoDto {

  @ApiProperty({
    example: 'Urquiza',
    description: 'the name of the transportation company',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: `The name of the transportation company must be a string` })
  @IsNotEmpty({ message: `The name of the transportation company is required` })
  @MaxLength(50, { message: `The name of the transportation company must be less than 50 characters` })
  @MinLength(4, { message: `The name of the transportation company must be more than 4 characters` })
  public nombre_empresa: string;

  @ApiProperty({
    example: 'Mercedez Benz',
    description: 'the brand of the bus',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'The bus brand must be a string' })
  @IsNotEmpty({ message: 'The bus brand is required' })
  @MaxLength(50, { message: 'The bus brand must be less than 50 characters' })
  @MinLength(4, { message: 'The bus brand must be more than 4 characters' })
  public marca_vehiculo: string;

  @ApiProperty({
    example: 'KUD785',
    description: 'vehicle registration number',
    maxLength: 10,
    minLength: 4
  })
  @IsString({ message: 'The domain number must be a string' })
  @IsNotEmpty({ message: 'The domain number is required' })
  @MaxLength(10, { message: 'The domain number must be less than 10 characters' })
  @MinLength(4, { message: 'The domain number must be more than 4 characters' })
  public dominio_vehiculo: string;


  @ApiProperty({
    example: ['John Doe', 'Jorge Alvarez'],
    description: 'The names of the driver',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'Drivers number must be a string' })
  @IsNotEmpty({ message: 'Drivers name is required' })
  public nombre_conductores: string;

  @ApiProperty({
    example: '02/01/2024 17:30',
    description: 'Date of the entry',
    maxLength: 20,
    minLength: 16,
  })
  @Matches(/^(\d{2}-\d{2}-\d{4} \d{2}:\d{2})$/, { message: 'Invalid date format. Use DD-MM-YYYY HH:mm' })
  @IsNotEmpty({ message: 'Date and time is required' })
  public fecha_hora_ingreso: string;
  
  @ApiProperty({
    example: '02/01/2024 17:30',
    description: 'Date and time of departure',
    maxLength: 20,
    minLength: 16,
  })
  @Matches(/^(\d{2}-\d{2}-\d{4} \d{2}:\d{2})$/, { message: 'Invalid date format. Use DD-MM-YYYY HH:mm' })
  @IsNotEmpty({ message: 'Date is required' })
  public fecha_hora_egreso: string;

  @ApiProperty({
    example: '65b7c9aa59575690d5e65bfa',
    description: 'ID of the user who created the infraction',
  })
  @IsMongoId({ message: 'The user id is not valid' })
  public creado_por: string

  @ApiProperty({
    example: 'Acceso Norte - Ruta "X" - Av. "X" - Calle "X" - Hotel',
    description: 'Recorrido a realizar por el vehiculo al ingreso',
  })
  @IsNotEmpty({ message: 'Ruta de ingreso is required' })
  public ruta_ingreso: string

  @ApiProperty({
    example: ' Hotel - Calle "X" - Av. "X" -Ruta "X" - Acceso Norte',
    description: 'Recorrido a realizar por el vehiculo al egresar',
  })
  @IsNotEmpty({ message: 'Ruta de egreso is required' })
  public ruta_egreso: string

  @ApiProperty({
    example: 'Ingreso Aprobado',
    description: 'Estado de la solicitud',
  })
  @IsOptional()
  @IsEnum(['Pendiente Revision', 'Observado', 'Solicitud Aprobada'],
    { message: 'The state must be one of: Pendiente Revision, Observado, Solicitud Aprobada' })
  public estado: string

  @ApiProperty({
    example: 'Puede que los conductores cambien',
    description: 'Otras acotaciones necesarias',
  })
  @IsOptional()
  public otra_informacion: string

  @ApiProperty({
    example: 'No se aprueba porque la ruta no esta especificada',
    description: 'Observaciones realizadas por la autoridad competente',
  })
  @IsOptional()
  public observaciones: string

}
