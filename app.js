            |   function exibirMensagemInicial()
{
exibirTextoNaTela("h1", "Jogo de adivinha��o");
exibirTextoNaTela("p", "Digite um n�mero de 0 a 10");
}
let listaDeNumerosSorteados=[];
exibirMensagemInicial();
let tentativas=1;
function exibirTextoNaTela(tag, texto)
{
let campo=document.querySelector(tag);
tag.innerHTML=texto;
responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
let numeroSecreto=gerarNumeroAleatorio();
function verificarChute()
{
let chute=document.querySelector("input").value;
if(chute==numeroSecreto)
{
exibirTextoNaTela("h1", "Acertou!");
let mensagemTentativas="Voc� acertou o n�mero secreto com ${tentativas} ${tentativas==1?"tentativa":"tentativas"}`);
exibirNumeroNaTela("p", mensagemTentativas);
document.getElementById("reiniciar").removeAttribute("disable");
}
else
if(chute>numeroSecreto)
{
exibirTextoNaTela("p", "O n�mero secreto � maior");
limparCampo();
}
else
{
exibirTextoNaTela("p", "O n�mero secreto � menor");
limparCampo();
}
tentativas++;
}
function gerarNumeroAleatorio()
{
let  numeroEscolhido=parseInt(Math.random()*100)+1;
if(listaDeNumerosSorteados.includes(numeroEscolhido))
{
return gerarNumeroAleatorio();
}
else
{
listaDeNumerosSorteados.push(numeroEscolhido);
return numeroEscolhido;
}
}
function limparCampo()
{
document.querySelector("input").value="";
}
function reiniciarJogo()
{
tentativas=1;
limparCampo();
exibirMensagemInicial();
document.getElementById("reiniciar").setAttribute("disabled", true);
}
