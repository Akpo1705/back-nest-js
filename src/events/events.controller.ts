import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, SetMetadata, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update.event.dto';

import val = require('uuid-validate')

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

        @Delete('/:uuid')
        deleteEvent(@Param('uuid', new ParseUUIDPipe())value: string){
                return this.eventService.deleteEvent(value);
        }

        @Get('/:uuid')
        getOneEvent(@Param('uuid', new ParseUUIDPipe())uuid: string){
                return this.eventService.getEventByUuid(uuid);
        }

        @Get('/:uuid/description')
        OneEvent(@Param('uuid', new ParseUUIDPipe())uuid: string){
                return 'description event'
        }

        @Put('/:uuid')
        updateEvent(@Body() upEventDto: UpdateEventDto, @Param('uuid', new ParseUUIDPipe())value: string){
                return this.eventService.updateEvent(value, upEventDto);
        }
}
