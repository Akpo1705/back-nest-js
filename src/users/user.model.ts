import { ApiProperty } from "@nestjs/swagger";
import { AutoIncrement, BelongsToMany, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { EventsModule } from "src/events/events.module";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/users-roles.model";
import { Event } from "src/events/event.model";

interface UserCreationAttrs{
        email: string;
        password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{

        @PrimaryKey
        @AutoIncrement
        @ApiProperty({example:'1', description: 'Уникальный идентификатор'})
        @Column({type: DataType.INTEGER, unique: true})
        id: number;

        @ApiProperty({example:'user@mail.ru', description: 'email'})
        @Column({type: DataType.STRING, unique: true, allowNull: false})
        email: string;

        @ApiProperty({example:'123456', description: 'Пароль пользователя'})
        @Column({type: DataType.STRING, allowNull: false})
        password: string;

        @ApiProperty({example:'false', description: 'забанен или нет'})
        @Column({type: DataType.BOOLEAN, defaultValue: false})
        banned: boolean;

        @ApiProperty({example:'описание причины бана', description: 'причина бана'})
        @Column({type: DataType.STRING, allowNull: true})
        banReason: string;

        @ApiProperty({example:'false', description: 'является ли модератором'})
        @Column({type: DataType.BOOLEAN, defaultValue: false})
        moderator: boolean;

        @ApiProperty({example:'false', description: 'является ли организатором'})
        @Column({type: DataType.BOOLEAN, defaultValue: false})
        organizator: boolean;

        @ApiProperty({example:'забег титанов', description: 'наименование старта, если является организатором'})
        @Column({type: DataType.BOOLEAN, defaultValue: false})
        eventName: string;

        @BelongsToMany(()=>Role, () => UserRoles)
        roles: Role[];

        @HasMany(()=> Post)
        post: Post[];

        @HasMany(()=>Event)
        event: Event[]
        
        // @HasMany(()=>Event)
        // event: Event[];
}