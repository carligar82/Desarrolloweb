const text = document.getElementsByTagName('h1')[0];
let text =""
const mensaje = document.getElementsByTagName('h2')[0];
let cont =""

let botton =document.getElementsById('Login')
botton.addEventListener('click', function onSubmitHandler(event) {
  event.preventDefault(event)
  console.log('login')
  
  }

  
)
function onKeyDownHandler(event) {
  var codigo = event.which || event.keyCode;
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
  text.className = "botton"
}


   


