const validarCpf = require('validar-cpf');
const gerarCpf = require('..');
const { expect } = require('chai');

describe('gerar-cpf', () => {
	it('should generate valid cpf', () => {
		for (let i = 0; i < 100; i++) {
			expect(validarCpf(gerarCpf())).equal(true);
		}
	});

	describe('mask argument', () => {
		it('should not output a masked cpf by default', () => {
			expect(gerarCpf()).match(/\d{11}/);
		});

		it('should accept a mask argument', () => {
			expect(gerarCpf('xxxx.xxxx.xxx')).match(/\d{4}\.\d{4}\.\d{3}/);
		});

		it('should throw an error if the mask contains less than 11 placeholders', () => {
			expect(() => gerarCpf('xxxxxxxxxx')).throw();
		});

		it('should accept a placeholder argument', () => {
			expect(gerarCpf('aaabaaabaaabaa', 'a')).match(/\d{3}b\d{3}b\d{3}b\d{2}/);
			expect(gerarCpf('(___.___.___-__)', '_')).match(
				/\d{3}.\d{3}.\d{3}-\d{2}/,
			);
			expect(gerarCpf('nnn nnn nnn nn', 'n')).match(/\d{3} \d{3} \d{3} \d{2}/);
			expect(gerarCpf('nnn nnn nnn nn', 'n')).match(/\d{3} \d{3} \d{3} \d{2}/);
			expect(gerarCpf('<><><> <><><> <><><> <><>', '<>')).match(
				/\d{3} \d{3} \d{3} \d{2}/,
			);
		});
	});
});
