const validarCpf = require('validar-cpf');
const gerarCpf = require('.');

describe('gerar-cpf', () => {
	const cpfs = new Array(100).fill(0).map(() => gerarCpf());

	cpfs.forEach(cpf => {
		it('should generate valid cpf', () => {
			expect(validarCpf(cpf)).toBe(true);
		});
	});

	describe('mask argument', () => {
		it('should not output a masked cpf by default', () => {
			expect(gerarCpf()).toEqual(expect.stringMatching(/\d{11}/));
		});

		it('should accept a mask argument', () => {
			expect(gerarCpf('xxxx.xxxx.xxx')).toEqual(
				expect.stringMatching(/\d{4}\.\d{4}\.\d{3}/)
			);
		});

		it('should throw an error if the mask contains less than 11 placeholders', () => {
			expect(() => gerarCpf('xxxxxxxxxx')).toThrow();
		});

		it('should accept a placeholder argument', () => {
			expect(gerarCpf('aaabaaabaaabaa', 'a')).toEqual(
				expect.stringMatching(/\d{3}b\d{3}b\d{3}b\d{2}/)
			);
			expect(gerarCpf('(___.___.___-__)', '_')).toEqual(
				expect.stringMatching(/\d{3}.\d{3}.\d{3}-\d{2}/)
			);
			expect(gerarCpf('nnn nnn nnn nn', 'n')).toEqual(
				expect.stringMatching(/\d{3} \d{3} \d{3} \d{2}/)
			);
			expect(gerarCpf('nnn nnn nnn nn', 'n')).toEqual(
				expect.stringMatching(/\d{3} \d{3} \d{3} \d{2}/)
			);
			expect(gerarCpf('<><><> <><><> <><><> <><>', '<>')).toEqual(
				expect.stringMatching(/\d{3} \d{3} \d{3} \d{2}/)
			);
		});
	});
});
