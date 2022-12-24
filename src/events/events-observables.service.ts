import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EventsObservablesService {
  @OnEvent('order.start')
  handleOrderCreatedEvent(payload: any) {
    console.log(payload)
  }
  
  @OnEvent('order.startById')
  handleOtherOrderCreatedEvent(payload: any) {
    console.log()
    return "retorno evento"
  }
  
}
