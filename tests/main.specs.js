var assert = require('assert')
  , validarCpf = require('validar-cpf')
  , gerarCpf = require('../')

describe('gerar-cpf', function () {
  var i = -1
    , previous
    , actual

  it('should have a validator', function () {
    assert(validarCpf('41866288822'))
  })

  while (++i < 99) {
    it('should generate valid cpf', function () {
      while (previous == actual) {
        actual = gerarCpf()
      }

      assert(validarCpf(actual))

      previous = actual
    })
  }
})
