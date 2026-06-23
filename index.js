const calculateWeightedSum = (digits, startWeight, step = 1) => {
  let sum = 0;

  for (let i = 0, weight = startWeight; i < digits.length; i++, weight += step) {
    sum += digits[i] * weight;
  }

  return sum;
};

const calculateCpfDigit = (digits, startWeight) => {
  const remainder = calculateWeightedSum(digits, startWeight, -1) % 11;

  return remainder < 2 ? 0 : 11 - remainder;
};

export const validateCpf = (cpf) => {
  const cleanCpf = cpf.replace(/\D/g, "");

  if (cleanCpf.length !== 11 || /^(\d)\1{10}$/.test(cleanCpf)) {
    return false;
  }

  const baseDigits = cleanCpf.slice(0, 9).split("").map(Number);
  const digit1 = calculateCpfDigit(baseDigits, 10);
  const digit2 = calculateCpfDigit([...baseDigits, digit1], 11);

  return cleanCpf.endsWith(`${digit1}${digit2}`);
};

export const validateCnh = (cnh) => {
  const cleanCnh = cnh.replace(/\D/g, "");

  if (cleanCnh.length !== 11 || /^(\d)\1{10}$/.test(cleanCnh)) {
    return false;
  }

  const baseDigits = cleanCnh.slice(0, 9).split("").map(Number);

  let digit1 = calculateWeightedSum(baseDigits, 9, -1) % 11;
  let offset = 0;

  if (digit1 >= 10) {
    digit1 = 0;
    offset = 2;
  }

  const digit2 = ((calculateWeightedSum(baseDigits, 1) - offset) % 11) % 10;

  return cleanCnh.endsWith(`${digit1}${digit2}`);
};
