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
import * as path from 'path';

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
                        host: process.env.URL_PG,
                        port: Number(process.env.PORT_PG),
                        username: 'postgres',
                        password: process.env.POSTGRES_PASSWORD,
                        database: process.env.POSTGRES_DB_NAME,
                        models: [User, Role, UserRoles, Post],
                        autoLoadModels: true
                }),
                UsersModule,
                RolesModule,
                AuthModule,
                PostsModule,
                FilesModule,
        ],
})
export class AppModule { }