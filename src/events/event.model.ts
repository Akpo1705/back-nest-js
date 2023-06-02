import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, IsUUID, Model, PrimaryKey, Table, HasOne, ForeignKey, BelongsTo, IsEmail } from "sequelize-typescript";
import { User } from "src/users/user.model";



interface EventCreateAttr{
        name: string;
        description: string;
}

@Table({tableName: 'events'})
export class Event extends Model<Event, EventCreateAttr>{

        @PrimaryKey
        @IsUUID(4)
        @Column({type: DataType.UUID, unique: true, defaultValue: DataType.UUIDV4})
        id: string

        @ApiProperty({example:'Наименование', description: 'Имя'})
        @Column({type: DataType.STRING, unique: false, allowNull: false})
        name: string;

        @ApiProperty({example: 'adres@mail.ru', description:'email пользователя'})
        @IsEmail
        @Column({type: DataType.STRING, unique: false, allowNull: false})
        email: string;

        @ApiProperty({example:'Наименование', description: 'Имя'})
        @Column({type: DataType.STRING, unique: true})
        description: string;
        
        @ForeignKey(() => User)
        @Column({type: DataType.INTEGER})
        user_id: number;

        @BelongsTo(() => User)
        author: User;
}