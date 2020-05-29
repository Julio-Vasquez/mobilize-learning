const maxLength = (value) => (max) =>
  value && value.length < max ? undefined : `Maximo ${max} Caracteres!.`;

const minLength = (value) => (min) =>
  value && value.length > min ? undefined : `Minimo ${min} Caracteres!.`;

export const required = (value) =>
  value || value !== undefined ? undefined : "Requerido";

export const maxLength60 = maxLength(60);

export const maxLength45 = maxLength(45);

export const maxLength30 = maxLength(30);

export const maxLength15 = maxLength(15);

export const maxLength10 = maxLength(10);

export const maxLength5 = maxLength(5);

export const maxLength4 = maxLength(4);

export const maxLength3 = maxLength(3);

export const maxLength2 = maxLength(2);

export const maxLength1 = maxLength(1);

export const minLength1 = minLength(1);

export const minLength2 = minLength(2);

export const minLength3 = minLength(3);

export const minLength4 = minLength(4);

export const minLength5 = minLength(5);

export const minLength10 = minLength(10);

export const minLength15 = minLength(15);

export const minLength30 = minLength(30);

export const minLength45 = minLength(45);

export const minLength60 = minLength(60);

export const isNumber = (value) =>
  value && !isNaN(Number(value)) ? undefined : "Debe ingresar un Numero";

export const isString = (value) =>
  value && isNaN(value) ? undefined : "Debe ingresar un texto";

export const isEmail = (value) =>
  value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? undefined
    : "E-mail Invalido";

export const isPhone = (value) =>
  value && value.length >= 10 && value.length <= 15
    ? undefined
    : "El telefono no es correcto";

export const isDate = (value) =>
  value &&
  value.substring(0, 4) > 1900 &&
  value.substring(0, 4) <= new Date().getFullYear() - 15
    ? undefined
    : "Debe ingresar una fecha valida";
