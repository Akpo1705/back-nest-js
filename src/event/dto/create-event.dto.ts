import { ApiProperty } from "@nestjs/swagger";

export class EventDto{
        @ApiProperty({example:'Наименование', description:'Название мероприятия'})
        readonly name: string; 
        @ApiProperty({example:'user@email.ru', description:'Почта пользователя'})
        readonly emailUser: string;
        @ApiProperty({example:'Балашиха', description:'Место проведения'})
        readonly city: string; 
        @ApiProperty({example:'Проводит Филька', description:'Наименование организации'})
        readonly organizer: string;
        @ApiProperty({example:'42.2 километра', description:'Дистанция'})
        readonly distantion: string;
        @ApiProperty({example:'Бег', description:'Тип спорта'})
        readonly sportType: string;
        @ApiProperty({example:'Прекрасный забег', description:'Описание мероприятия'})
        readonly description: string;
        // @ApiProperty({example:'DateNow', description:'Дата мероприятия'})
        // readonly dataEvent: Date;
}