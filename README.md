# gerar-cpf

> Gerador de CPF

[![Actions Status](https://github.com/guilhermehn/gerar-cpf/workflows/Node%20CI/badge.svg)](https://github.com/guilhermehn/gerar-cpf/actions)
[![npm version](https://badge.fury.io/js/gerar-cpf.svg)](http://badge.fury.io/js/gerar-cpf)
[![Coverage Status](https://coveralls.io/repos/github/guilhermehn/gerar-cpf/badge.svg?branch=master)](https://coveralls.io/github/guilhermehn/gerar-cpf?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/guilhermehn/gerar-cpf/badge.svg)](https://snyk.io/test/github/guilhermehn/gerar-cpf)
[![Greenkeeper badge](https://badges.greenkeeper.io/guilhermehn/gerar-cpf.svg)](https://greenkeeper.io/)

```
npm install --save gerar-cpf
```

## Uso

```js
const gerarCpf = require('gerar-cpf');
const listaCpf = [];

while (listaCpf.length < 100) {
	listaCpf[listaCpf.length] = gerarCpf();
}
```

## Referência de API

### gerarCPF([mask], [placeholder]) ⇒ <code>String</code>

Gera números de CPF válidos

**Kind**: global function

| Param         | Type                | Default                    | Description                             |
| ------------- | ------------------- | -------------------------- | --------------------------------------- |
| [mask]        | <code>String</code> |                            | Máscara a ser aplicada no número gerado |
| [placeholder] | <code>String</code> | <code>&#x27;x&#x27;</code> | Caratér placeholder usado na máscara    |

**Example**

```js
gerarCPF();
```

**Example** _(Usando máscaras)_

```js
gerarCPF('xxx.xxx.xxx-xx');
```

**Example** _(Usando máscaras com placeholder customizado)_

```js
gerarCPF('___.___.___-__', '_');
```

## Licensa

MIT
