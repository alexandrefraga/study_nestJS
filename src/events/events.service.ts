import { Injectable } from '@nestjs/common';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EventsService {
  constructor(private eventEmitter: EventEmitter2) {}
  start() {
    const event  = this.eventEmitter.emit(
      'order.start',
      {
        orderId: 1,
        payload: {},
      },
    );
    
    return `This action returns all ${event}`;
  }

  startById(id: string) {
    const event  = this.eventEmitter.emit(
      'order.startById',
      {
        orderId: 1,
        payload: {},
      },
    );
    
    return `This action returns a ${event} by ${id}`;
  }

  
}
