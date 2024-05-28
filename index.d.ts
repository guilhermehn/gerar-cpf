export = gerarCPF;
/**
 * Generate random Brazilian CPF document numbers.
 * @param {String} [mask] - Mask to be used in the resulting string.
 * @param {String} [placeholder='x'] - Character to be replaced by numbers in the mask.
 * @return {String} A CPF document number in string format.
 * @example
 * gerarCPF()
 * @example <caption>Using masks</caption>
 * gerarCPF('xxx.xxx.xxx-xx')
 * @example <caption>Using mask placeholder</caption>
 * gerarCPF('___.___.___-__', '_')
 */
declare function gerarCPF(
	mask?: string | undefined,
	placeholder?: string | undefined,
): string;
