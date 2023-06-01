import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto{
        @ApiProperty({example:'Наименование', description:'Наименование'})
        readonly name: string;

        @ApiProperty({example:'mail@email.ru', description:'email пользователя'})
        readonly email: string;
}