import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(user): Promise<any> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  @UsePipes(ValidationPipe)
  findById(id: string) {
    return this.userModel.findOne({ _id: id }).exec();
  }
}
