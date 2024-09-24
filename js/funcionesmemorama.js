
    var tarjetas = [
        "1.jpg","1.jpg","2.jpg","2.jpg",
        "3.jpg","3.jpg","4.jpg","4.jpg",
        "5.jpg","5.jpg","6.jpg","6.jpg",
        "7.jpg","7.jpg","8.jpg","8.jpg"
    ];

    var imagentemporal, esperando = flase;

    function cambiarimagen(imagen, indice){
        imagen.src = `./img/${tarjetas[indice]}`;
        if (!esperando) {
            imagentemporal = imagen;
            alert("Paso por temporal");
        }else{
            if (imagentemporal.src == imagen.src) {
                //alert("Encontramos un par!!");
                eliminarpar(imagentemporal,imagen);
            }else{
                //alert("Lo siento, no encontraste par :c");
            }
        }
        esperando = !esperando;
    }

    function eliminarpar(imagen1,imagen2){
        /*imagen1.src = "";
        imagen1.style.display = "none";
        imagen2.src = "";
        imagen2.style.display = "none";
        */
        imagen1.style.visibility = "hidden";
        imagen2.style.visibility = "hidden";
    }
    function revolver(){
        var j = 0;
        for (let i = 15; i > 0; i--) {
            j = Math.floor(Math.random() * (i+1));
            [tarjetas[i], tarjetas[j]] = [tarjetas[j], tarjetas[i]];
        
        }
        //alert(tarjetas.join(" - "));
        document.getElementById("Salida").innerHTML = tarjetas.join(" - ");
    }
