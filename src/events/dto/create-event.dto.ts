import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEventDto{
        @ApiProperty({example:'Наименование', description:'Наименование'})
        @IsString()
        readonly name: string;

        @ApiProperty({example:'mail@email.ru', description:'email пользователя'})
        @IsString()
        readonly email: string;
}