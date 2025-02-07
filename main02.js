
const mensaje = document.getElementsByTagName('h3')[0];
let cont =""
function onKeyDownHandler(event) {
  var codigo = event.which || event.keyCode;
  if (codigo == 8)
    cont = cont.slice(0, -1)
  else
    cont = cont + String.fromCharCode(codigo)
  if (cont.length<8){
    mensaje.className = "red"
    mensaje.innerText = "Contraseña no segura"
  }
  if (cont.length>=8 && cont.length<=10){
    mensaje.className = "yellow"
    mensaje.innerText = "Contraseña insegura"
  }
  if (cont.length>10){
    mensaje.className = "green"
    mensaje.innerText = "Contraseña segura"
  }
  
}


   


