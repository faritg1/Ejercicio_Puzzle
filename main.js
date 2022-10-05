//ejercicio puzzle
let fichas = [0,1,2,3,4,5,6,7,8]
let num_click = 0
let primerclick = 0 

//funcion para seleccionar la imagenes de los componentes
function seleccionar(casilla){
    num_click++;

    if(num_click == 1)
    {
        primerclick = casilla;
    }
    if(num_click == 2)
    {
        let segundoclick = casilla;
        let intercambio = fichas[primerclick];
        fichas[primerclick] = fichas[segundoclick]
        fichas[segundoclick] = intercambio;

        num_click = 0
        moverfichas();
    }
    quitarborde();
    document.getElementById("img_"+casilla).style.border = "4px solid blue"
}

function quitarborde(){
    for (let i = 0; i < 9; i++) {
        document.getElementById("img_"+i).style.border = null
    }
}

function desordenar(){
    fichas = fichas.sort(function(){
        return Math.random() - 0.5
    })
}

function moverfichas(){
    for (let i = 0; i < 9; i++) {

        let imagenfichas = fichas[i]

        document.getElementById("img_"+i).src = "images/"+(imagenfichas+1)+".jpg"
    }
}

function comprobarpuz(){
    let comprobar = true

    for (let i = 0; i < 9; i++) {

        if(fichas[i] !== i)
        {
            comprobar = false
        }
    }

    if(comprobar == true){
        alert("/* PUZZLE COMPLETO */")
    }
    else{
        alert("/* PUZZLE INCOMPLETO */")
    }
}

let btn = document.querySelector("#btn_com")
btn.addEventListener("click",(event)=>{
    comprobarpuz();
});

window.onload = function()
{
    desordenar();
    moverfichas();
}



