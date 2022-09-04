function seguroElegido() {
    let seguroElegido = document.getElementById("tipoDeSeguro").value;    
    switch(seguroElegido) {
        case "1": document.getElementById("mensaje").innerHTML=("El seguro Cuesta $ 500,00"); break;
        case "2": document.getElementById("mensaje").innerHTML=("El seguro Cuesta $ 1000,00"); break;
        case "3": document.getElementById("mensaje").innerHTML=("El seguro Cuesta $ 1500,00"); break;
    }
}
