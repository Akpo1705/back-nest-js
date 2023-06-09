import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/users-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { Post } from 'src/posts/posts.model';
import { EventsModule } from 'src/events/events.module';
import { Event } from 'src/events/event.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
        RolesModule,
        SequelizeModule.forFeature([
                User,
                Role,
                UserRoles,
                Post,
                Event
        ]),
        forwardRef(()=> AuthModule),
        forwardRef(()=> EventsModule)
  ],
  exports: [UsersService]
})
export class UsersModule {}
