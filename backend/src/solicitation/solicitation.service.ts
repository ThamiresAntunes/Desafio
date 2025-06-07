import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSolicitationDto } from './dto/create-solicitation.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class SolicitationService {
  constructor(private readonly prisma: PrismaService) {}

  private formatCpfCnpj(cpfCnpj: string): string {
    if (cpfCnpj.length === 11) {
      // Formata como CPF: 000.000.000-00
      return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    if (cpfCnpj.length === 14) {
      // Formata como CNPJ: 00.000.000/0000-00
      return cpfCnpj.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        '$1.$2.$3/$4-$5',
      );
    }
    return cpfCnpj;
  }

  async create(data: CreateSolicitationDto) {
    const cpfCnpjFormatado = this.formatCpfCnpj(data.cpfCnpj);
    return this.prisma.solicitacao.create({
      data: { ...data, cpfCnpj: cpfCnpjFormatado },
    });
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

  async delete(id: number) {
    const solicitacao = await this.prisma.solicitacao.findUnique({
      where: { id },
    });
    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }

    return this.prisma.solicitacao.delete({
      where: { id },
    });
  }
}
