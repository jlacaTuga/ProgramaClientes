export class Cliente{
  //para nao obrigar a inicializar colocar strictPropertyInitialization=false no compilerOptions no arquivo tsconfig.json
  id: number;
  nome: string;
  cpf: string;
  dataCadastro: string;
}
