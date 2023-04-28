import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto{
        @ApiProperty({example:'ADMIN', description:'значение роли'})
        readonly value: string;

        @ApiProperty({example:'Администратор', description:'описание роли'})
        readonly description: string; 
}