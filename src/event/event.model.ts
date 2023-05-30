import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface EventCreationAttrs{
        name: string;
        dataEvent: Date;
        organizer: string;
        distantion: string;
        sportType: string;
}

@Table({tableName: 'events'})
export class Event extends Model<Event, EventCreationAttrs>{

        @ApiProperty({example:'123e4567-e89b-12d3-a456-426655440000', description: 'Уникальный идентификатор'})
        @Column({type: DataType.STRING, unique: true, primaryKey: true})
        id: string;

        @ApiProperty({example: 'Забег титатнов', description: 'Наименование мероприятия'})
        @Column({type: DataType.STRING, unique: true, allowNull: false})
        name: string;

        // @ApiProperty({example: 'Alex', description: 'Имя пользователя добавившего забег'})
        // @Column({type: DataType.STRING, unique: true})
        // userName: string;

        @ApiProperty({example:'user@mail.ru', description: 'email'})
        @Column({type: DataType.STRING, unique: true, allowNull: false})
        emailUser: string;

        // @ApiProperty({example:'Россия', description: 'В какой стране проходит мероприятие'})
        // @Column({type: DataType.STRING, unique: true})
        // country: string;

        // @ApiProperty({example:'Московская область', description: 'Регион страны'})
        // @Column({type: DataType.STRING, unique: true})
        // region: string;

        @ApiProperty({example:'Балашиха', description: 'Город'})
        @Column({type: DataType.STRING, unique: true})
        city: string;

        // @ApiProperty({example:'Пестовский парк', description: 'Аддрес'})
        // @Column({type: DataType.STRING, unique: true})
        // addres: string;

        @ApiProperty({example:'Веселые старты для всей семьи', description: 'Описание мероприятия'})
        @Column({type: DataType.STRING, unique: true})
        description: string;

        @Column({type: DataType.STRING, unique: true})
        sportType: string;

        // @Column({type: DataType.DATE, unique: true})
        // dataEvent: Date;

        // @Column({type: DataType.DATE, unique: true})
        // dataCreate: Date;

        @Column({type: DataType.STRING, unique: true})
        organizer: string;

        // @Column({type: DataType.STRING, unique: true})
        // contactEmail: string;

        // @Column({type: DataType.STRING, unique: true})
        // constactTel: string[];

        @Column({type: DataType.STRING, unique: true})
        distantion: string;
}