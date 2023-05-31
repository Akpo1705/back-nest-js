import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { Test } from './test.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [TestController],
  providers: [TestService],
  imports:[
        SequelizeModule.forFeature([
                Test,
        ])
  ],
  exports:[TestService]
})
export class TestModule {}
