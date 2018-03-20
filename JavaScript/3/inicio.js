function inicio() {
    var ventana = window.open("","ventana");
        ventana.document.write("<span>¡Hola Carmelo!</span>");
        setInterval(function(){
            ventana.close();
            continuar();
        },1000);
    }
    
    continuar = setInterval(function(){
       inicio();
    },5000);
    
    
    window.onload = inicio();