let menuVisible = false;

//Ocultar
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible= false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible= true;
    }
}

function seleccionar(){
    //Oculta una vez que se selecciona una opcion
    document.getElementById("nav").classList= "";
    menuVisible= false;
}

//Animaciones de habilidades

