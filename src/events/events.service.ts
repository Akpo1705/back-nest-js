import { Get, Inject, Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './event.model';
import { CreateEventDto } from './dto/create-event.dto';
import { UsersService } from 'src/users/users.service';
import { DeleteEventDto } from './dto/delete.event.dto';
import { UpdateEventDto } from './dto/update.event.dto';
import { REQUEST } from '@nestjs/core';

@Injectable({scope: Scope.REQUEST})
export class EventsService {

        constructor(@InjectModel(Event) private eventRepository: typeof Event, 
                        private userService: UsersService,
                        @Inject(REQUEST) private readonly request: Request){}

        async getAll(){
                return this.eventRepository.findAll();
        }


        async addEvent(eventDto: CreateEventDto){
                const user = await this.userService.getUsersByEmail(eventDto.email);
                const uev = {...eventDto, user_id:user.id};
                const event = await this.eventRepository.create(uev);
                return event;
        }

        async deleteEvent(id: string){
                return await this.eventRepository.destroy({where:{id}});
        }

        async getEventByUuid(value: string) {
                return await this.eventRepository.findOne({where:{id: value}});
        }

        async updateEvent(value: string, upEventDto: UpdateEventDto) {
                let event = await this.eventRepository.findOne({where:{id: value}});
                return await this.eventRepository.update({name: upEventDto.name, email: upEventDto.email},{where: {id: value}});
        }
}
