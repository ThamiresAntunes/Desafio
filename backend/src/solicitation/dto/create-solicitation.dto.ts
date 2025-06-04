/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEnum, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateSolicitacaoDto {
  @IsEnum(['troca de lâmpada', 'tapa-buraco'])
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
