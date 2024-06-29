alert('Boas vindas ao nosso site!');

let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random()*numeroMaximo + 1);
console.log(numeroSecreto);

//let nome = "Lua";
//let idade = 25;
//let numeroDeVendas = 50;
//let saldoDisponivel = 1000;
//let mensagemDeErro = "Erro! Preencha todos os campos";
//nome = prompt("qual o seu nome");

let chute;
let tentativas = 1;

while (chute!=numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute==numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`o numero secreto é menor que ${chute}`);
            
        } else {
            alert(`o numero secreto é maior que ${chute}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas': "tentativa"

alert(`Isso ai, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

