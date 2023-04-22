var elemento = document.getElementById("b3");
elemento.classList.add('esconder');



function cambiarNombreBoton(){
  var botonCopiar = document.getElementById("b3");
  botonCopiar.textContent="Copiar";
}


function toggleContenedor(fondo) {
  const contenedor = document.getElementById("contenedor");
  if(fondo==1){
    contenedor.style.backgroundImage = 'url("../img/2.jpg")';    
  }else if (fondo==2){
    contenedor.style.backgroundImage = '';
  }
}


function enviarTexto(textoModificado){
document.getElementById("contenedor").value = textoModificado;
}

function limpiarTexto(indice){
if(indice==1){
  document.getElementById("parrafo").value="";
}else if (indice==2){
  document.getElementById("contenedor").value="";
}
}


function validar(textoriginal){
  
  const expresionRegular = /^[a-z\s\p{P}]+$/gu;

  if(textoriginal==""){
    alert("Favor de ingresar un texto");
    return false;
    }else if(!textoriginal.match(expresionRegular)){
    alert("No cuenta con el formato correcto, favor de revisar su texto.");
    return false;
    }
  return true;
}



function encriptar() {
    let text = document.getElementById("parrafo");
    var textoriginal = text.value;   
    var indice=1;
    var fondo=1;
   
    if (!validar(textoriginal)) {
      return; 
    }
    
    let textoModificado = textoriginal
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    
    enviarTexto(textoModificado);   
    limpiarTexto(indice);
    toggleContenedor(fondo);
    cambiarNombreBoton();
    aparecer();
  }


function desencriptar() {
  let text = document.getElementById("parrafo");
  var textoriginal = text.value;  
  var indice=1;
  var fondo=1;
  
  if (!validar(textoriginal)) {
    return; 

  }  


  let textoModificado = textoriginal
  .replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ai/g, "a")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u");    

  enviarTexto(textoModificado); 
  limpiarTexto(indice);
  toggleContenedor(fondo);
  cambiarNombreBoton();
  aparecer();
  }



function copy() {
  var indice=2;  
  var fondo=2;  
  var texto = document.getElementById("contenedor").value;
        // Asignamos el valor del primer textarea al segundo textarea
    document.getElementById("parrafo").value = texto;
    limpiarTexto(indice);
    toggleContenedor(fondo); 
    desaparecer()   
}


function copiarTexto(){
  var copiar = document.getElementById("contenedor");
  var textCopiado = copiar.value;  
  navigator.clipboard.writeText(textCopiado)
  
  var botonCopiar = document.getElementById("b3");
  botonCopiar.textContent="Copiado";
}

function desaparecer(){
  var elemento = document.getElementById("b3");
  elemento.classList.add('esconder');
}

function aparecer(){
  var elemento = document.getElementById("b3");
  elemento.classList.remove('esconder');
}