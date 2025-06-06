import { IsEnum, IsNotEmpty, IsString, Matches } from 'class-validator';

export enum TipoSolicitacao {
  TROCA_LAMPADA = 'TROCA_LAMPADA',
  TAPA_BURACO = 'TAPA_BURACO',
}

export class CreateSolicitationDto {
  @IsEnum(TipoSolicitacao)
  tipo: string;

  @IsString()
  @IsNotEmpty()
  endereco: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  nomeSolicitante: string;

  @Matches(/^\d{11}$|^\d{14}$/, { message: 'CPF ou CNPJ inválido' })
  cpfCnpj: string;
}
