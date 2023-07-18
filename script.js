const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// ('A letra "a" é convertida para "ai"');
// ('A letra "e" é convertida para "enter"');
// ('A letra "i" é convertida para "imes"');
// ('A letra "o" é convertida para "ober"');
// ('A letra "u" é convertida para "ufat"');

function btnCriptografar() {
  const textoCriptografado = criptografar(textArea.value);
  mensagem.value = textoCriptografado;
  textArea.value = "";
}

function criptografar(stringCriptografada) {
  let matrizCodigo = [
    ["a", "axhnjk"],
    ["e", "ejkmsn"],
    ["i", "iklmn"],
    ["o", "ojkms"],
    ["u", "ulkmsn"],
  ];
  stringCriptografada = stringCriptografada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringCriptografada.includes(matrizCodigo[i][0])) {
      stringCriptografada = stringCriptografada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  if (stringCriptografada.length >= 1) {
    mensagem.style.backgroundImage = "none";
  }
  return stringCriptografada;
}

function btnDescriptografar() {
  const textoDescriptografado = descriptografar(textArea.value);
  mensagem.value = textoDescriptografado;
  textArea.value = "";
}

function descriptografar(stringDescriptografada) {
  let matrizCodigo = [
    ["a", "axhnjk"],
    ["e", "ejkmsn"],
    ["i", "iklmn"],
    ["o", "ojkms"],
    ["u", "ulkmsn"],
  ];
  stringDescriptografada = stringDescriptografada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptografada.includes(matrizCodigo[i][1])) {
      stringDescriptografada = stringDescriptografada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  if (stringDescriptografada.length >= 1) {
    mensagem.style.backgroundImage = "none";
  }
  return stringDescriptografada;
}

function btnCopiar() {
  var textCopied = document.getElementById("mensagem");
  textCopied.select();
  document.execCommand("copy");
  alert("Texto copiado!");
}
