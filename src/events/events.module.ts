import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { Event } from './event.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports:[
        SequelizeModule.forFeature([
                Event, User
        ])
  ],
  exports:[EventsService]
})
export class EventsModule {}
