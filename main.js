const num1=document.getElementById("num1")
const num2=document.getElementById("num2")
const operando=document.getElementById("operando")
const display=document.getElementById("display")
const divi=document.getElementById("divi")
const mult=document.getElementById("mult")
const rest=document.getElementById("rest")
const suma=document.getElementById("suma")
const igual=document.getElementById("igual")
const limpiar=document.getElementById("limpiar")
const buttons=document.querySelector('.contenedorboton')

buttons.addEventListener('click',(e)=>{
    switch(e.target.id){
    case'suma': operando.textContent="+"
break;
case'rest': operando.textContent="-"
break;
case'mult': operando.textContent="*"
break;
case'divi': operando.textContent="/"
break;
    }
if(e.target.id=='igual'){
    if(operando.textContent=="+"){
display.textContent=parseInt(num1.value)+parseInt(num2.value)
    }}
    if(e.target.id=='igual'){
        if(operando.textContent=="-"){
    display.textContent=parseInt(num1.value)-parseInt(num2.value)
        }}
        if(e.target.id=='igual'){
            if(operando.textContent=="/"){
        display.textContent=parseInt(num1.value)/parseInt(num2.value)
            }}
            if(e.target.id=='igual'){
                if(operando.textContent=="*"){
            display.textContent=parseInt(num1.value)*parseInt(num2.value)
                }}
})
limpiar.addEventListener('click',(e)=>{
display.textContent='0'
num1.value=''
num2.value=''
operando.textContent=''})