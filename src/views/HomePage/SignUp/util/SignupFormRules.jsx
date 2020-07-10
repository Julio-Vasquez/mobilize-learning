const validateString = (v, min, max) => {
  let error = undefined;
  if (v === undefined || v === '' || v === null) {
    error = `Valor vacio, debe contener caracteres`;
  } else if (v.length < min) {
    error = `Debe contener al menos ${min}`;
  } else if (v.length > max) {
    error = `Debe contener maximo ${max}`;
  }
  return error === undefined ? true : error;
}

