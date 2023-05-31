import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto{
        @ApiProperty({example:'Наименование', description:'Наименование'})
        readonly name: string;
}