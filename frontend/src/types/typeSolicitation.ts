export type TipoSolicitacao = 'TROCA_LAMPADA' | 'TAPA_BURACO';

export type Status = 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDO';

export interface Solicitacao {
  nomeSolicitante: string;
  cpfCnpj: string;
  endereco: string;
  descricao: string;
  tipo: TipoSolicitacao;
  status?: Status;
}
