# gerar-cpf

[![Greenkeeper badge](https://badges.greenkeeper.io/guilhermehn/gerar-cpf.svg)](https://greenkeeper.io/)

> Gerador de CPF

[![Build Status](https://travis-ci.org/guilhermehn/gerar-cpf.svg?branch=master)](https://travis-ci.org/guilhermehn/gerar-cpf)
[![npm version](https://badge.fury.io/js/gerar-cpf.svg)](http://badge.fury.io/js/gerar-cpf)
[![Coverage Status](https://coveralls.io/repos/github/guilhermehn/gerar-cpf/badge.svg?branch=master)](https://coveralls.io/github/guilhermehn/gerar-cpf?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/guilhermehn/gerar-cpf/badge.svg)](https://snyk.io/test/github/guilhermehn/gerar-cpf)

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
