import { Module, forwardRef } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [EventController],
  providers: [EventService], 
  imports:[
                SequelizeModule.forFeature([
                        Event,
                ]),
                forwardRef(()=> AuthModule),
                UsersModule
        ],
  exports: [EventService]
})
export class EventModule {}
