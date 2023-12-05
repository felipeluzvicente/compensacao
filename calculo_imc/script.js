function calcularIMC() {
  var altura = parseFloat(document.getElementById('altura').value);
  var peso = parseFloat(document.getElementById('peso').value);

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      alert('Por favor, insira valores válidos para altura e peso.');
      return;
  }

  var imc = peso / (altura * altura);
  var contexto = "";

  if (imc < 18.5) {
      contexto = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
      contexto = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
      contexto = "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
      contexto = "Obesidade Grau I";
  } else if (imc >= 35 && imc < 39.9) {
      contexto = "Obesidade Grau II";
  } else {
      contexto = "Obesidade Grau III";
  }

  var resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = `Seu IMC é ${imc.toFixed(2)} - ${contexto}`;
}
