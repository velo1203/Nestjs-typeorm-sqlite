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
