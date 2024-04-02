import { ApiProperty } from "@nestjs/swagger";
import {
    IsMongoId,
    IsNotEmpty,
  } from 'class-validator';

export class CreatePagoDto {

    @ApiProperty({
        example: '02/01/2024 17:00',
        description: 'Date of paid',
        maxLength: 50,
        minLength: 4,
    })
    public payment_date:string;

    @ApiProperty({
      example: '35165163251',
      description: 'Fine that was paid',
    })
    @IsNotEmpty({ message: 'The infraction is required' })
    @IsMongoId({ message: 'The assigned value is not valid' })
    public infraction: string;

}
