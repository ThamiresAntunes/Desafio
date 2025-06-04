import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { SolicitationService } from './solicitation.service';
import { CreateSolicitationDto } from './dto/create-solicitation.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('solicitations')
export class SolicitationController {
  constructor(private readonly solicitationService: SolicitationService) {}

  @Post()
  async create(@Body() createSolicitationDto: CreateSolicitationDto) {
    return this.solicitationService.create(createSolicitationDto);
  }

  @Get()
  async findAll(@Query('type') type?: string) {
    return this.solicitationService.findAll(type);
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: number,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    return this.solicitationService.updateStatus(id, updateStatusDto);
  }
}
