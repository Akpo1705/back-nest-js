import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, IsUUID, Model, PrimaryKey, Table, HasOne, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/user.model";



interface EventCreateAttr{
        name: string;
        description: string;
}

@Table({tableName: 'events'})
export class Event extends Model<Event, EventCreateAttr>{

        @PrimaryKey
        @IsUUID(4)
        @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4})
        id: string

        @ApiProperty({example:'Наименование', description: 'Имя'})
        @Column({type: DataType.STRING, unique: true, allowNull: false})
        name: string;

        @ApiProperty({example:'Наименование', description: 'Имя'})
        @Column({type: DataType.STRING, unique: true})
        description: string;

        
        // @HasOne(()=>User, 'id')
        // user_id: number
}