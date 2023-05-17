function valido(){
    var palabra = document.getElementById("texto-escribir").value;
    /////////////verificar que no este vacio, y que no sea un caracter con acento o mayuscula
    if(palabra == '' || !(/^[a-z ]*$/.test(palabra))){   
        return false;
    }
    else{
        return true;
    }
}

function encriptarPalabra(){
    if(valido()){
        var palabra = document.getElementById("texto-escribir").value;
        var palabraEncriptada = '';
        for(let i = 0; i < palabra.length; i++){
            // var aux = palabra[i];
            // alert(aux);    
            switch(palabra[i]){
                case 'e':
                    palabraEncriptada += 'enter';
                    break;
                case 'i':
                    palabraEncriptada +='imes';
                    break;
                case 'a':
                    palabraEncriptada +='ai';
                    break;
                case 'o':
                    palabraEncriptada +='ober';
                    break;
                case 'u':
                    palabraEncriptada +='ufat';
                    break;
                default:
                    palabraEncriptada += palabra[i];
                    break;
            }
        }

        //////////ocultar la imagen y los textos////////////
        document.getElementById('imagen-textos').style.display = 'none';

        document.getElementById("mostrar-encriptado").innerHTML = palabraEncriptada;
        document.getElementById("mostrar-texto-encriptado").style.display = 'block';
    }
}

function desencriptarPalabra() {
    var palabra = document.getElementById("texto-escribir").value;
    var palabraDesencriptada = '';
    for(let i = 0; i < palabra.length; i++){
        switch(palabra[i]){
            case 'e':
                palabraDesencriptada += 'e';
                i += 4;
                break;
            case 'i':
                palabraDesencriptada += 'i';
                i += 3;
                break;
            case 'a':
                palabraDesencriptada += 'a';
                i += 1;
                break;
            case 'o':
                palabraDesencriptada += 'o';
                i += 3;
                break;
            case 'u':
                palabraDesencriptada += 'u';
                i += 3;
                break;
            default:
                palabraDesencriptada += palabra[i];
                break;
        }
    }

    //////////ocultar la imagen y los textos////////////
    document.getElementById('imagen-textos').style.display = 'none';

    document.getElementById("mostrar-encriptado").innerHTML = palabraDesencriptada;
}

function copiarTexto() {
    navigator.clipboard.writeText(document.getElementById("mostrar-encriptado").innerHTML).then(() => {
      /* clipboard successfully set */
    }, () => {
      /* clipboard write failed */
    });
  }