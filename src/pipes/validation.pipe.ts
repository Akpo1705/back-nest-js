import { ArgumentMetadata, Injectable, ParseUUIDPipe, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { IsUUID } from "sequelize-typescript";
import { ValidationException } from "src/exeptions/validation.exception";

@Injectable()
export class ValidationPipe implements PipeTransform<any>{
        async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
                const obj = plainToClass(metadata.metatype, value);

                console.log(obj);

                if(metadata.type === 'param')
                        return value;

                if(metadata.type === 'body'){
                        const errors = await validate(obj);
                        if(errors.length){
                                let messages = errors.map((err)=>{
                                        return `${err.property} - ${Object.values(err.constraints).join(', ')}`
                                })
                                throw new ValidationException(messages);
                        }
                        return value;
                }
        }
}