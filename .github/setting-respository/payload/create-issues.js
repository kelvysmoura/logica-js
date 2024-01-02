
const fs = require("fs");

const mdPath = `${__dirname}/markdown`;

const sufix = fs.readFileSync(mdPath + '/sufix.md', 'utf8')

const issues = {
	hello: "Comece por aqui (1.5)",
	soma: "Somar dois números (2.5)",
	soma_impar: "Somar apenas os números ímpares (2.5)",
	inverte_lista: "Inverte lista (2.75)",
	vogais: "Contar vogais (3.25)",
	fatorial: "Fatorial (3.25)",
	apenas_par: "Retornar apenas números pares (3.5)",
	temperatura: "Conversor de temperatura (3.5)",
	palindromo: "Palindromo (3.75)",
	inverte_soma_itens: "Inverte e soma itens (3.75)",
	cartaodecredito: "Validar cartão de crédito (3.75)",
	cpf: "Validar cpf (6.75)",
}

let payload = [];
for (let id in issues) {
	payload.push({
		title: issues[id],
		body: fs.readFileSync(`${mdPath}/${id}.md`) + sufix
	})
}

module.exports = payload;
