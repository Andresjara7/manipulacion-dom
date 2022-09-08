//funciones 
const h1=document.querySelector('h1');
const input1 = document.querySelector('#calculo');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const result = document.querySelector('#presultad');

btn.addEventListener('click', btnClick);

function btnClick(){
   const sumaTotal = +input1.value + +input2.value;
    presultad.innerText = "Resultado: " + sumaTotal;
}

