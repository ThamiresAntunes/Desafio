import { IsEnum } from 'class-validator';

export class UpdateStatusDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEnum(['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDO'])
  status: 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDO';
}
