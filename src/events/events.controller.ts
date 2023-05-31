import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventsController {
        constructor(private eventService: EventsService){}

        @Get()
        getAll(){
                return this.eventService.getAll();
        }

        @Post()
        addEvent(@Body() dto: CreateEventDto){
                return this.eventService.addEvent(dto);
        }
}
