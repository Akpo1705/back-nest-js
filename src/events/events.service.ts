import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './event.model';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {

        constructor(@InjectModel(Event) private eventRepository: typeof Event){}

        async getAll(){
                return this.eventRepository.findAll();
        }


        async addEvent(eventDto: CreateEventDto){
                const event = this.eventRepository.create(eventDto);
                return event;
        }
}
