import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TestCreationAttrs{
        name: string;
}

@Table({tableName: 'tests'})
export class Test extends Model<Test, TestCreationAttrs>{

        @ApiProperty({example:'1', description: 'Уникальный идентификатор'})
        @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
        id: number;

        @ApiProperty({example:'user@mail.ru', description: 'email'})
        @Column({type: DataType.STRING, unique: true, allowNull: false})
        name: string;

}