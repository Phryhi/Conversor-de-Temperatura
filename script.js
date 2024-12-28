let displayTextBox = document.getElementById("displayTextBox");
let result = document.getElementById("result");

const checkCelsius = document.getElementById("checkCelsius");
const checkFahrenheit = document.getElementById("checkFahrenheit");

let calculo;

function convert(){
    if (checkCelsius.checked){
        calculo = Number(displayTextBox.value); /*Não se esquecer de definir a variável como número - para que o cálculo seja executado!!!*/
        calculo = 5/9 * (calculo - 32);
        result.textContent = calculo + "°C";
    }else if(checkFahrenheit.checked){
        calculo = Number(displayTextBox.value);
        calculo = (calculo * 1.8) + 32;
        result.textContent = calculo + "°F";
    }else{
        result.textContent = `Código não executável`;
    }
}