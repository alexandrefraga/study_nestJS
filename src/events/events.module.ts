import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventsObservablesService } from './events-observables.service';

@Module({
  controllers: [EventsController],
  providers: [EventsService, EventsObservablesService]
})
export class EventsModule {}
