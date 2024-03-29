# Nextjs Typeorm Connect

```typescript
// data.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Data {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  field: string;
}
```

먼저 Typeorm 엔티티를 만든다

```typescript
// data.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data } from './entity/data.entity';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(Data)
    private dataRepository: Repository<Data>,
  ) {}

  findAll(): Promise<Data[]> {
    return this.dataRepository.find();
  }

  create(data: Data): Promise<Data> {
    return this.dataRepository.save(data);
  }
}
```

서비스레이어에 엔티티에 대한 정보를 주입한다.

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { Data } from './entity/data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data])],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
```

모듈에 컨트롤러와 서비스와 데이터베이스를 불러온다.

```typescript
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
```

앱모듈에서는 TypeormModule을 설정하고, DataModule을 추가한다.
