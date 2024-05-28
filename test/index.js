const validarCpf = require('validar-cpf');
const gerarCpf = require('..');
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

describe('gerar-cpf', () => {
	it('should generate valid cpf', () => {
		for (let i = 0; i < 100; i++) {
			assert(validarCpf(gerarCpf()));
		}
	});

	describe('mask argument', () => {
		it('should not output a masked cpf by default', () => {
			assert.match(gerarCpf(), /\d{11}/);
		});

		it('should accept a mask argument', () => {
			assert.match(gerarCpf('xxxx.xxxx.xxx'), /\d{4}\.\d{4}\.\d{3}/);
		});

		it('should throw an error if the mask contains less than 11 placeholders', () => {
			assert.throws(() => gerarCpf('xxxxxxxxxx'));
		});

		it('should accept a placeholder argument', () => {
			assert.match(gerarCpf('aaabaaabaaabaa', 'a'), /\d{3}b\d{3}b\d{3}b\d{2}/);
			assert.match(
				gerarCpf('(___.___.___-__)', '_'),
				/\d{3}.\d{3}.\d{3}-\d{2}/,
			);
			assert.match(gerarCpf('nnn nnn nnn nn', 'n'), /\d{3} \d{3} \d{3} \d{2}/);
			assert.match(gerarCpf('nnn nnn nnn nn', 'n'), /\d{3} \d{3} \d{3} \d{2}/);
			assert.match(
				gerarCpf('<><><> <><><> <><><> <><>', '<>'),
				/\d{3} \d{3} \d{3} \d{2}/,
			);
		});
	});
});
