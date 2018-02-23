export const email = value => {

return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'email invalido'
    : undefined;	
}

export const required = value => (value ? undefined : 'Campo obrigatório')


const maxLength = max => value => {
  return value && value.length > max ? undefined : `Campo deve conter ${max} caracteres ou mais`;
}

export const maxLength3 = maxLength(3);

export const cpf = (value = '')  => {
    const resultError = 'CPF Invalido';
    value = value.replace(/[^\d]+/g,'');
    const r = /^(0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11})$/
    if (!value || value.length !== 11 || r.test(value)) {
        return resultError;
    }
    function validateDigit(digit) {
        var add = 0;
        var init = digit - 9;
        for (var i = 0; i < 9; i ++) {
            add += parseInt(value.charAt(i + init)) * (i+1);
        }
        return (add%11)%10 === parseInt(value.charAt(digit));
    }
    return validateDigit(9) && validateDigit(10) ? undefined : resultError;
}

export const number = value => value && isNaN(Number(value)) ? 'Deve ser só número' : undefined;

export const maxLength11 = maxLength(11);