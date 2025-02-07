
const mensaje = document.getElementsByTagName('h3')[0];
const boton = document.getElementsByTagName('button')[0];
let cont ="",cont2 =""
function onKeyDownHandler(event) {
  var codigo = event.which || event.keyCode;
  cont = cont + String.fromCharCode(codigo)
  if (codigo == 8){
    for (let i = 0;i<=cont.length-3;i++){
      cont2 = cont2 + cont.charAt(i)
    }
    cont = cont2;
    cont2 ="";
  }
  if (cont.length<8){
    mensaje.className = "red"
    mensaje.innerText = "Contraseña no segura"
    boton.className = "no"
  }
  if (cont.length>=8 && cont.length<=10){
    mensaje.className = "yellow"
    mensaje.innerText = "Contraseña insegura"
    boton.className = "no"
  }
  if (cont.length>10){
    mensaje.className = "green"
    mensaje.innerText = "Contraseña segura"
    boton.className = "si"
  }
  
}
function datos() {
  alert (document.getElementById("usuario").value + " " + document.getElementById("contra").value);
}


   


