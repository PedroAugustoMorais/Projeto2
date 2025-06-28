
function exemplo1() {
  let num1 = parseInt(prompt("Digite um número para elevar ao quadrado:"));
  if (!isNaN(num1)) {
    alert(`O quadrado de ${num1} é ${num1 ** 2}`);
  } else {
    alert("Por favor, digite um número válido!");
  }
}


function exemplo2() {
  let palavra = prompt("Digite uma palavra para saber o número de letras:");
  if (palavra) {
    alert(`A palavra "${palavra}" tem ${palavra.length} letras.`);
  } else {
    alert("Você não digitou nada!");
  }
}


function exemplo3() {
  let resposta = confirm("Você gosta de programação?");
  if (resposta) {
    alert("Que ótimo! Continue aprendendo e se divertindo.");
  } else {
    alert("Tudo bem, talvez um dia você goste!");
  }
}
