> O objetivo desse desafio é criar um algoritmo que verifica se um número de cartão de crédito é válido 
> Para esse desafio você vai precisar pesquisar sobre Algoritmo de Luhn e Algoritmo de validação de cartão de crédito

### Comece por aqui
1. Clonar o projeto (se não tiver clonado ainda)
2. Criar uma branch com nome `cartaodecredito`
3. Entrar na branch `cartaodecredito`
4. Concluir os requisitos do desafio

### Requisitos
1. Dentro da pasta `src` deve existir um arquivo chamado `cartaodecredito.js`
2. Dentro do arquivo `cartaodecredito.js` deve existir uma função chamada `cartaodecredito`
3. A função deve receber como parâmetro um número de cartão de crédito com ou sem máscara
    - Exemplo de cartão de crédito sem máscara: 1234123412341234
    - Exemplo de cartão de crédito com máscara: 1234 1234 1234 1234
4. A função deve retornar `true`, `false` ou uma `mensagem de erro`
5. A mensagem de erro "Argumento inválido!" deve ser retornada quando
    - Não for passado nenhum argumento na função
    - O argumento passado não for do tipo string
    - O argumento passado não tiver nenhum caractere
