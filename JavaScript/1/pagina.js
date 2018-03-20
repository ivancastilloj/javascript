function acceder(){
    var user=document.getElementById("user").value;
    var password=document.getElementById("password").value;
    console.log(user);
    console.log(password); 
   if(user=="admin" && password=="1234"){
    document.cookie = "cookie= Contraseña correcta";
    location.href="felicidades.html";

   }else{
    var texto="Acceso denegado";
    $( "#error2" ).html( "<strong>" + texto + "</strong>" );
   }
 
}
