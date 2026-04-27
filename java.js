window.onload = function(){
    alert("Bienvenidos a mi página");
}
function mostrarTexto(card){

    var texto = card.querySelector("p");

    if(texto.style.display == "none"){
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }

}