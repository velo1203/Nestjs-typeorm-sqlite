// data.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';
import { Data } from './entity/data.entity';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  findAll(): Promise<Data[]> {
    return this.dataService.findAll();
  }

  @Post()
  create(@Body() data: Data): Promise<Data> {
    return this.dataService.create(data);
  }
}
