import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Test } from './test.model';

@Injectable()
export class TestService {

        constructor(@InjectModel(Test) private testRepository: typeof Test){}

        @Get()
        getAll(){
                return "all test";
        }

}
