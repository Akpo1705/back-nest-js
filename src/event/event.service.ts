import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EventDto } from './dto/create-event.dto';
import { Event } from './event.model'
import {v4 as uuidv4} from 'uuid';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class EventService {

        constructor(@InjectModel(Event) private eventRepository: typeof Event, private userService: UsersService){}

        async createEvent(dto: EventDto){
                const event_dto = {...dto, id: uuidv4()}
                
                const user = await this.userService.getUsersByEmail(dto.emailUser);
                const event = await this.eventRepository.create(event_dto);

                console.log(event, user);
        }

        async getAllEvent(){
                return await this.eventRepository.findAll();
        }

}
