// llamando id y class
const display=document.getElementById("display");
const buttons=document.querySelectorAll('.btn');
const divi=document.getElementById("divi")
const mult=document.getElementById("mult")
const rest=document.getElementById("rest")
const suma=document.getElementById("suma")
const igual=document.getElementById("igual")
const limpiar=document.getElementById("C")

// una funcion para para los buttons para visual y muestre en la pantalla
buttons.forEach(button => {
    button.addEventListener("click",()=>{
     const buttonCheck=button.textContent;
    //   limpiar el display  
     if(button.id=="C"){
        display.textContent= "0";
        return;
     }
    //  accion del button borrar
       if(button.id== "borrar"){
        // si hay un solo digito en el display que lo vuelva zero
        if(display.textContent.length == 1 || display.textContent == "Error" ){
            display.textContent= "0"
        }else{// desde donde empiezo y donde termino empieza en 0 y termina en -1 para que empieze desde atras
            // lo que borra el ultimo digito
            display.textContent=display.textContent.slice(0, -1);
        }
        
        return;
       }
    //    operdor con eval que evalua los parametros encontrados dentro
       if (button.id == "igual"){
        try{
        display.textContent=eval(display.textContent); 
      }catch(error ){
        display.textContent="Error";}
      return;}
    //    si es 0 remplaza
       if(display.textContent == "0" || display.textContent == "Error"){
        display.textContent=buttonCheck
        // y sino agregar va agregar
        }else{
            display.textContent+=buttonCheck
        }
        })
});