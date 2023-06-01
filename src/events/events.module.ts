import { Module, forwardRef } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { Event } from './event.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports:[
        SequelizeModule.forFeature([
                Event, User
        ]),
        forwardRef(()=>UsersModule)
  ],
  exports:[EventsService]
})
export class EventsModule {}
