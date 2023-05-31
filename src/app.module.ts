import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/users-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { TestModule } from './test/test.module';
import * as path from 'path';
import { Test } from "./test/test.model";
import { EventsModule } from './events/events.module';
import { Event } from "./events/event.model";
import { OrganizatorModule } from './organizator/organizator.module';

@Module({
        controllers: [],
        providers: [],
        imports: [
                ConfigModule.forRoot({
                       envFilePath: `.${process.env.NODE_ENV}.env`
                }),
                ServeStaticModule.forRoot({
                        rootPath: path.resolve(__dirname, 'static')
                }),
                SequelizeModule.forRoot({
                        dialect: 'postgres',
                        host: process.env.URL_PG || '176.195.145.159',
                        port: Number(process.env.PORT_PG) || 5432,
                        username: process.env.POSTGRES_USER || 'akpo',
                        password: 'P@ssw0rd',
                        database: process.env.POSTGRES_DB_NAME || 'akpo',
                        models: [User, Role, UserRoles, Post, Test, Event],
                        autoLoadModels: true
                }),
                UsersModule,
                RolesModule,
                AuthModule,
                PostsModule,
                FilesModule,
                TestModule,
                EventsModule,
                OrganizatorModule,
        ],
})
export class AppModule { }