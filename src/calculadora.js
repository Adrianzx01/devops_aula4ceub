function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

// SIMULAÇÃO DE VAZAMENTO DE SEGREDO
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE1234567890abcdef";

module.exports = {
  somar,
  subtrair
};