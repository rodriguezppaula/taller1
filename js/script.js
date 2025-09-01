function btnCambiarTexto() {
    document.getElementById('parrafo1').innerText = 'Texto cambiado.';
}

function sumar() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  let suma = num1 + num2;
  document.getElementById("resultado").innerText = "El resultado es: " + suma;
}
