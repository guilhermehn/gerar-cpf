var assert = require('assert');
var validarCpf = require('validar-cpf');
var gerarCpf = require('../');

describe('gerar-cpf', function () {
  var i = -1;
  var cpfs = [];

  while (++i < 99) {
    cpfs[i] = gerarCpf();
  }

  cpfs.forEach(function (cpf) {
    it('should generate valid cpf', function () {
      assert(validarCpf(cpf));
    });
  });
});
