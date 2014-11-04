# gerar-cpf
> Gerador de CPF

[![npm version](https://badge.fury.io/js/gerar-cpf.svg)](http://badge.fury.io/js/gerar-cpf)

```js
npm install gerar-cpf
```

## Uso:
```js
var gerarCpf = require('gerar-cpf');
var listaCpf = []

while (listaCpf.length < 100) {
  listaCpf[listaCpf.length] = gerarCpf();
}
```

## Licensa
MIT
