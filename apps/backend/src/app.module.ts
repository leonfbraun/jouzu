import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as mime from 'mime-types';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersModule } from './Users/users.module';

@Module({
  imports: [
    UsersModule,
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
