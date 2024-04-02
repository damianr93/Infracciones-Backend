import { ApiProperty } from '@nestjs/swagger';
import {
    IsArray,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateActaDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the owner',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: `The recipient's name must be a string` })
  @IsNotEmpty({ message: `'The recipient's name is required` })
  @MaxLength(50, {
    message: `The recipient's name must be less than 50 characters`,
  })
  @MinLength(4, {
    message: `The recipient's name must be more than 4 characters`,
  })
  public nombre_receptor: string;

  @ApiProperty({
    example: 'Liberacion',
    description: 'Type of acta',
    maxLength: 15,
    minLength: 4,
  })
  @IsEnum(['Recibido', 'Liberacion aprobada', 'Liberado'], {
    message:
      'The type of acta must be one of: Recibido, Liberacion aprobada, Liberacion',
  })
  @IsOptional()
  public estado: string;

  @ApiProperty({
    example: '02/01/2024',
    description: 'Date of reception',
    maxLength: 50,
    minLength: 4,
  })
  public fecha_recepcion: string;

  @ApiProperty({
    example: '02/01/2024',
    description: 'release date',
    maxLength: 50,
    minLength: 4,
  })
  @IsString({ message: 'Release date must be String' })
  @IsOptional()
  public fecha_liberacion: string;

  @ApiProperty({
    example: 'Javier Navarro',
    description: 'Assigned judge',
  })
  @IsMongoId({ message: 'The assigned judge is not valid' })
  @IsOptional()
  public juez: string;

  @ApiProperty({
    example: '35165163251',
    description: 'Infraction id',
  })
  @IsNotEmpty({ message: 'The infraction is required' })
  @IsMongoId({ message: 'The assigned value is not valid' })
  public infraccion: string;

  @ApiProperty({
    example: '35165163251',
    description: 'Corralon id',
  })
  @IsNotEmpty({ message: 'The corralon is required' })
  @IsMongoId({ message: 'The corralon is not valid' })
  public corralon: string;

  @ApiProperty({
    example: ['https://example.com/image.jpg'],
    description: 'Photos of the infraction',
  })
  @IsArray({ message: 'The photos must be an array' })
  public fotos: string[];
}
