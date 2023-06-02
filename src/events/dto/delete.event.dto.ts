import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class DeleteEventDto{
        
        @ApiProperty({example:'e05c1759-6e70-4466-888a-9c9fbe6d1fc9', description:'Уникальный идентификатор события'})
        @IsString()
        readonly uuid: string;

}