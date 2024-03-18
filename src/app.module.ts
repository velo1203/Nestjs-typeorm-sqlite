import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from './data/entity/data.entity';
import { DataModule } from './data/data.module'; // DataModule을 임포트합니다.

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // TypeOrmModule을 설정합니다.
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Data],
      synchronize: true,
    }),
    DataModule, // DataModule을 추가합니다.
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
