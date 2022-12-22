function Criptografar() {
  //captura o texto
  var texto = document.getElementById("texto-inserido").value  
  
  //realiza a criptografia proposta
  texto = texto.replace(/e/g,'enter') 
  texto = texto.replace(/i/g, 'imes')
  texto = texto.replace(/a/g, 'ai')
  texto = texto.replace(/o/g, 'ober') 
  texto = texto.replace(/u/g, 'ufat') 
 
  //seleciona o conteúdo do <h3 id="campo">
  var conteudoCaixa = document.getElementById("campo");

  //substitui o conteúdo da id pela var texto (com a mensagem criptografada)
  conteudoCaixa.innerHTML = texto;
  
  //oculta imagem e mensagem, e disponibiliza o botão para Copiar
  document.getElementById("imagem").style.display = "none";
  document.getElementById("texto-ocultar").style.display = "none";
  document.getElementById("adicionar-botao").style.display = "flex";
}

function Descriptografar() {
  //captura o texto
  var texto = document.getElementById("texto-inserido").value  
  
  //realiza a descriptografia proposta
  texto = texto.replace(/enter/g,'e') 
  texto = texto.replace(/imes/g, 'i')
  texto = texto.replace(/ai/g, 'a')
  texto = texto.replace(/ober/g, 'o') 
  texto = texto.replace(/ufat/g, 'u') 
 
  //seleciona o conteúdo do <h3 id="campo">
  var conteudoCaixa = document.getElementById("campo");

  //substitui o conteúdo da id pela var texto (com a mensagem criptografada)
  conteudoCaixa.innerHTML = texto;
  
  //oculta imagem e mensagem, e disponibiliza o botão para Copiar 
  document.getElementById("imagem").style.display = "none";
  document.getElementById("texto-ocultar").style.display = "none";
  document.getElementById("adicionar-botao").style.display = "flex";
}

//adiciona o evento ao botão copiar, pesquisando pelo seletor #campo e seu conteúdo!
document.getElementById('botao-copiar').addEventListener('click', copiarClipboard);
async function copiarClipboard () {
  var textoCopiado = document.querySelector('#campo').textContent;
  await navigator.clipboard.writeText(textoCopiado);
}