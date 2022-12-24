import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsObservablesService } from './events-observables.service';

@Controller('events')
export class EventsController {
  constructor(
    private readonly eventsService: EventsService,
    private readonly observableService: EventsObservablesService
  ) {}

  @Get()
  startEvent() {
    return this.eventsService.start();
  }

  @Get(':id')
  startEventById(@Param('id') id: string) {
    return this.eventsService.startById(id);
    // this.observableService.handleOrderCreatedEvent({})
  }
}
