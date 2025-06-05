import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  Query,
} from '@nestjs/common';
import { SolicitationService } from './solicitation.service';
import { CreateSolicitationDto } from './dto/create-solicitation.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/jwt/jwt.guard';

@Controller('solicitations')
export class SolicitationController {
  constructor(private readonly solicitationService: SolicitationService) {}

  @Post()
  async create(@Body() createSolicitationDto: CreateSolicitationDto) {
    return this.solicitationService.create(createSolicitationDto);
  }

  @UseGuards(JwtGuard)
  @Get()
  async findAll(@Query('type') type?: string) {
    return this.solicitationService.findAll(type);
  }

  @UseGuards(JwtGuard)
  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: number,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    return this.solicitationService.updateStatus(id, updateStatusDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.solicitationService.delete(id);
  }
}
