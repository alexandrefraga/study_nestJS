import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { isMongoId } from 'class-validator';

export class MongoIdValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    if (!isMongoId(value)) {
      throw new BadRequestException(`Invalid param: ${metadata.data}`);
    }
    return value;
  }
}
