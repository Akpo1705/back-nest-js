import { Controller, Get, Put, Post, Delete, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from './dto/create-event.dto';

@Controller('event')
export class EventController {

        constructor(private eventService: EventService){
        }

        @Get()
        getAllEvents(){
               return this.eventService.getAllEvent(); 
        }

        @Post()
        addEvent(@Body() eventDto: EventDto){
              return this.eventService.createEvent(eventDto);  
        }
}
