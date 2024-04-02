import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateNomencladoreDto {

  @ApiProperty({
    example: 'Exceso de velocidad',             //TODO: Rever ejemplo 
    description: 'The name of the nomencladore',
    maxLength: 100,
    minLength: 4,
  })
  @IsString({ message: 'The nomenclator name must be a string' })
  @IsNotEmpty({ message: 'The nomenclator name is required' })
  public nombre: string;

  @ApiProperty({
    example: 1,
    description: 'The units of value of the nomencladore',
  })
  @IsNumber()
  @IsNotEmpty({message: 'A value is required'})
  public unidades_de_valor: number;
}
