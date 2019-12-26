<a name="gerarCPF"></a>

## gerarCPF([mask], [placeholder]) ⇒ <code>String</code>

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
