import { IsEnum, IsNotEmpty, IsString, Matches } from 'class-validator';

export enum TipoSolicitacao {
  TROCA_LAMPADA = 'troca de lâmpada',
  TAPA_BURACO = 'tapa-buraco',
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
