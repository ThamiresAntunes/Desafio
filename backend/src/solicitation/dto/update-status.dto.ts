import { IsEnum } from 'class-validator';

export class UpdateStatusDto {
  @IsEnum(['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDO'])
  status: 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDO';
}
