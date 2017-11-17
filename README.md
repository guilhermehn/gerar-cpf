# gerar-cpf

> Gerador de CPF

[![npm version](https://badge.fury.io/js/gerar-cpf.svg)](http://badge.fury.io/js/gerar-cpf)

```js
npm install --save gerar-cpf
```

## Uso

```js
const gerarCpf = require('gerar-cpf')
const listaCpf = []

while (listaCpf.length < 100) {
	listaCpf[listaCpf.length] = gerarCpf()
}
```

**[Referência da API](./API_REFERENCE.md)**

## Licensa

MIT
