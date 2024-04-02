import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateCombustibleDto {

    @ApiProperty({
        example: 90,
        description: 'fuel value',
    })
    @IsNumber()
    @IsNotEmpty({ message: 'A value is required' })
    public valor: number

    @ApiProperty({
        example: '02/01/2024 17:00',
        description: 'Date of paid',
        maxLength: 50,
        minLength: 4,
    })
    public fecha_actualizacion: string

}
