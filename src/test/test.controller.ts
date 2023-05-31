import { Controller } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {

        constructor(private testService: TestService){}

        getAll(){
                return this.testService.getAll();
        }

}
