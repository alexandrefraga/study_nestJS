import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModuleUseMongoose } from './users-mongoose/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_ATLAS_URL),
    UsersModuleUseMongoose,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
