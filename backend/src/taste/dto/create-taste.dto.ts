import { ApiProperty } from "@nestjs/swagger";
export class CreateTasteDto {
    @ApiProperty()
    taste: string;

    @ApiProperty({ required: false})
    description?: string;

    @ApiProperty()
    price: number;


}