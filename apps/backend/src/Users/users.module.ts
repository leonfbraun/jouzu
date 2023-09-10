import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import * as mime from 'mime-types';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve('assets'),
      exclude: ['/api*'],
      serveStaticOptions: {
        setHeaders: (res, path) => {
          const contentType = mime.lookup(path);
          res.set('Content-Type', contentType);
        },
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
