/**
 * @jest-environment node
 */
 
import {email, cpf, number, maxLength3} from './UserValidationForm';

test('Passando um email valido', () => {
  const value = email('emails@gmail.com');
  expect(value).toBe(undefined);
});

test('Passando um email errado', () => {
  const value = email('emails');
  expect(value).toBe('email invalido');
});

test('CPF valido', () => {
	const value = cpf('96863667509');
	expect(value).toBe(undefined);
});


test('CPF invalido', () => {
	const value = cpf('111111111111');
	expect(value).toBe('CPF Invalido');
});


test('Somente number valido', () => {
	const value = number('12345667');
	expect(value).toBe(undefined);
});

test('Somente number invalido', () => {
	const value = number('12dd345667');
	expect(value).toBe('Deve ser só número');
});

test('Minimo de 3 catacteres valido', () => {
	const value = maxLength3('1234');
	expect(value).toBe(undefined);
});

test('Minimo de 3 catacteres invalido', () => {
	const value = maxLength3('13');
	expect(value).toBe('Campo deve conter 3 caracteres ou mais');
});