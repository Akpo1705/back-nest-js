import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './event.model';
import { CreateEventDto } from './dto/create-event.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class EventsService {

        constructor(@InjectModel(Event) private eventRepository: typeof Event, private userService: UsersService){}

        async getAll(){
                return this.eventRepository.findAll();
        }


        async addEvent(eventDto: CreateEventDto){
                const user = await this.userService.getUsersByEmail(eventDto.email);
                const uev = {...eventDto, user_id:user.id};
                const event = await this.eventRepository.create(uev);
                return event;
        }
}
