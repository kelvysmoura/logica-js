> Objetivo desse desafio é criar um algoritmo que recebe um array e devolve um outro array.
> O novo array deve ter os mesmo itens do array origem porém na ordem inversa e somado numero 2 mais a posição do item mais o valor do item

### Comece por aqui
1. Clonar o projeto (se não tiver clonado ainda)
2. Criar uma branch com nome `inverte_soma_itens`
3. Entrar na branch `inverte_soma_itens`
4. Concluir os requisitos do desafio

### Requisitos
1. Dentro da pasta `src` deve existir um arquivo chamado `inverte_soma_itens.js`
2. Dentro do arquivo `inverte_soma_itens.js` deve existir uma função chamada `inverte_soma_itens`
3. A função deve receber como argumento um valor do tipo Array com apenas numeros
4. A função deve retornar um novo array com os mesmo valores do array original porém na ordem inversa e somando o número 2 com a posição atual e o valor da posição
5. A mensagem de erro "Argumento passado deve ser um array só com números." deve ser retornada quando
    - O array passado por argumento estiver qualquer item que não seja do tipo number
6. A mensagem de erro "Argumento inválido." deve ser retornada quando
    - O argumento for um array vazio
    - O argumento não for do tipo array

### Exemplo
```js
let arrayOrignal = [5,6,7,8];
let resultado = inverte_soma_itens(arrayOriginal);

// Resultado esperado
// [13, 11, 9, 7]
```

### Explicando o resultado esperado
1. O array original precisa ser invertido `[5,6,7,8] -> [8,7,6,5]`
2. Cada item do novo array precisa ser somado com a sua posição do array original mais uma constante que vai ser sempre 2

|  Item orignal | Posição original | Constante | Item do novo array | Índice no novo array |
|-|-|-|-|-|
| 8 | +3 | +2 | **13** | 0 |
| 7 | +2 | +2 | **11** | 1 |
| 6 | +1 | +2 | **9**  | 2 |
| 5 | +0 | +2 | **7**  | 3 |

Resultado final: `[13, 11, 9, 7]`
