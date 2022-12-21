function Criptografar() {
  //captura o texto
  var texto = document.getElementById("texto-inserido").value  
  
  texto = texto.replace(/a/g, 'ai')
  texto = texto.replace(/e/g, 'enter') 
  texto = texto.replace(/i/g, 'imes') 
  texto = texto.replace(/o/g, 'ober') 
  texto = texto.replace(/u/g, 'ufat') 

   console.log(texto)

  /*
  console.log(texto.replaceAll('a', 'ai'));
  console.log(texto.replaceAll('e', 'enter'));
  console.log(texto.replaceAll('i', 'imes'));
  console.log(texto.replaceAll('o', 'ober'));
  console.log(texto.replaceAll('u', 'ufat'));*/
  
  document.getElementsByClassName("info").innerHTML = texto
}

