import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";


export class CreateCorraloneDto {

    @ApiProperty({
        example: 'Corralon municipal N°1',
        description: 'The name of the corralon',
        maxLength: 50,
        minLength: 4,
    })
    @IsString({ message: 'The name of the corralon must be a string' })
    @IsNotEmpty({ message: 'The name of the corralon is required' })
    @MaxLength(50, { message: 'The name of the corralon must not exceed 50 characters' })
    @MinLength(4, { message: 'The name of the corralon must have at least 4 characters' })
    public nombre: string;

    @ApiProperty({
        example: 'Av. Peron, al 1500',
        description: 'Location of the corralon',
        maxLength: 50,
        minLength: 4,
    })
    @IsString({ message: 'The location of the corralon must be a string' })
    @IsNotEmpty({ message: 'The location of the corralon is required' })
    @MaxLength(50, { message: 'The location of the corralon must be less than 50 characters' })
    @MinLength(4, { message: 'The location of the corralon must be more than 4 characters' })
    public ubicacion: string;
}
