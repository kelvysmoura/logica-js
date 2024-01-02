
const fs = require("fs");

const mdPath = `${__dirname}/markdown`;

const sufix = fs.readFileSync(mdPath + '/sufix.md', 'utf8')

const issues = {
	hello: "Hello World (1.5)",
	soma: "Somar dois números (2.5)",
	soma_impar: "Somar apenas os números ímpares (2.5)",
	inverte_lista: "Inverter lista (2.75)",
	vogais: "Contar vogais (3.25)",
	fatorial: "Fatorial (3.25)",
	apenas_par: "Apenas números pares (3.5)",
	temperatura: "Conversor de temperatura (3.5)",
	palindromo: "Palindromo (3.75)",
	inverte_soma_itens: "Inverter e somar itens de uma lista (3.75)",
	cartaodecredito: "Validar cartão de crédito (3.75)",
	cpf: "Validar cpf (6.75)",
}

let issuesId = Object.getOwnPropertyNames(issues);

module.exports = issuesId.reverse().map(id => {
	return {
		title: issues[id],
		body: fs.readFileSync(`${mdPath}/${id}.md`) + sufix
	}
});
