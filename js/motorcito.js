
var estadoLicuadodora = "Apagada";
var licuadora = document.getElementById("blender");
var sonidoButton = document.getElementById("blender-button-sound");
var sonidoLicuadora = document.getElementById("blender-sound");

function controlarLicuadora(){

    if(estadoLicuadodora == "Apagada"){

        estadoLicuadodora = "Encendida";
        console.log('Me prendiste');
        licuadora.classList.add("active");
        licuadora.classList.add("anuel");
        hacerBrr();

    }else{
        estadoLicuadodora = "Apagada";
        console.log('Me apagaste');
        licuadora.classList.remove('active');
        licuadora.classList.remove('anuel');        
        hacerBrr();

    }
}

function hacerBrr(){

    if(sonidoLicuadora.paused){
        sonidoButton.play();
        sonidoLicuadora.play();
    }else{
        sonidoButton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}


