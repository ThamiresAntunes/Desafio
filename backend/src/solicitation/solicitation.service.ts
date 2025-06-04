import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSolicitacaoDto } from './dto/create-solicitation.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class SolicitationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSolicitacaoDto) {
    return this.prisma.solicitacao.create({ data });
  }

  async findAll(tipo?: string) {
    const where = tipo ? { tipo } : {};
    return this.prisma.solicitacao.findMany({ where });
  }

  async updateStatus(id: number, dto: UpdateStatusDto) {
    const solicitacao = await this.prisma.solicitacao.findUnique({
      where: { id },
    });
    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }

    return this.prisma.solicitacao.update({
      where: { id },
      data: { status: dto.status },
    });
  }
}
