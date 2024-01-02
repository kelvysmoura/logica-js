> Objetivo desse desafio é criar um algoritmo que faz a validação dos dois dígitos verificadores de um CPF.
> Os dígitos verificadores são os dois últimos números de um CPF e são gerados a partir de um cálculo feito com os outros números do CPF.

### Comece por aqui
1. Clonar o projeto (se não tiver clonado ainda)
2. Criar uma branch com nome `cpf`
3. Entrar na branch `cpf`
4. Concluir os requisitos do desafio

### Requisitos
1. Dentro da pasta `src` deve existir um arquivo chamado `cpf.js`
2. Dentro do arquivo `cpf.js` deve existir uma função chamada `cpf`
3. A função deve aceitar como argumento um CPF com ou sem máscara
    - Exemplo de CPF sem máscara: 12345678900
    - Exemplo de CPF com máscara: 123.456.789 -00
4. A função deve retornar `true`, `false` ou uma mensagem de erro
1. A mensagem de erro "CPF inválido!" deve ser retornada quando
    - O argumento passado não for do tipo string
    - A quantidade números do argumento for diferente de 11
  