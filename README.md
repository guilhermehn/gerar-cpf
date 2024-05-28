# gerar-cpf

Generate random Brazilian CPF document numbers.

[![Actions Status](https://github.com/guilhermehn/gerar-cpf/workflows/Node%20CI/badge.svg)](https://github.com/guilhermehn/gerar-cpf/actions)
[![npm version](https://badge.fury.io/js/gerar-cpf.svg)](http://badge.fury.io/js/gerar-cpf)
[![Coverage Status](https://coveralls.io/repos/github/guilhermehn/gerar-cpf/badge.svg?branch=master)](https://coveralls.io/github/guilhermehn/gerar-cpf?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/guilhermehn/gerar-cpf/badge.svg)](https://snyk.io/test/github/guilhermehn/gerar-cpf)
[![Greenkeeper badge](https://badges.greenkeeper.io/guilhermehn/gerar-cpf.svg)](https://greenkeeper.io/)

```
npm install --save gerar-cpf
```

## Usage

```js
const generateCpf = require('gerar-cpf');
const list = [];

while (list.length < 100) {
	list.push(generateCpf());
}
```

## License

MIT
