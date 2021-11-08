export interface Cep {
  id: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}
export const ceps = [
  {
    id: 1,
    cep: '18105000',
    logradouro: 'Av Paraná',
    complemento: '',
    bairro: 'Cajuru do Sul',
    localidade: 'Sorocaba',
    uf: 'SP',
  },
  {
    id: 2,
    cep: '93212260',
    logradouro: 'Av.Hugo Gerdau',
    complemento: '',
    bairro: 'São Jorge',
    localidade: 'Sapucaia do Sul',
    uf: 'RS',
  },
  {
    id: 3,
    cep: '94853310',
    logradouro: 'Rua: Manoel Bernardes',
    complemento: '',
    bairro: 'Intersul',
    localidade: 'Alvorada',
    uf: 'RS',
  },
  {
    id: 4,
    cep: '90620001',
    logradouro: 'Av. Princesa Isabel',
    complemento: '',
    bairro: 'Azenha',
    cidade: 'Porto Alegre',
    uf: 'RS',
  },
];