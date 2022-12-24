import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModuleUseMongoose } from './users-mongoose/users.module';
import { EventsModule } from './events/events.module';
import { AuthModule } from './jwt/auth/auth.module';
import { UsersModule } from './jwt/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_ATLAS_URL),
    EventEmitterModule.forRoot(),
    UsersModuleUseMongoose,
    EventsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
