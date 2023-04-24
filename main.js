// llamando id y class
const display=document.getElementById("display");
const buttons=document.querySelectorAll('.btn');
const igual=document.getElementById("igual")
const limpiar=document.getElementById("C")

// una funcion para para los buttons para visual y muestre en la pantalla
buttons.forEach(button => {
    button.addEventListener("click",()=>{
     const buttonCheck=button.textContent;
    //   limpiar el display  
     if(button.id=="C"){
        display.textContent= "";
        return;
     }
    //  accion del button borrar
       if(button.id== "borrar"){
        // si hay un solo digito en el display que lo vuelva zero
        if(display.textContent.length == 1 || display.textContent == "Error" ){
            display.textContent= ""
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

window.addEventListener('keyup',(clicktecla)=>{
  console.log(clicktecla)
  if(clicktecla.key==0){
    display.textContent+=clicktecla.key
  }
  if(clicktecla.key==1){
    display.textContent+=clicktecla.key
  }
  if(clicktecla.key==2){
    display.textContent+=clicktecla.key
  }
  if(clicktecla.key==3){
    display.textContent+=clicktecla.key
  }
  if(clicktecla.key==4){
    display.textContent+=clicktecla.key
  }
  if(clicktecla.key==5){
    display.textContent+=clicktecla.key
  }
  if(clicktecla.key==6){
    display.textContent+=clicktecla.key
  }
  if(clicktecla.key==7){
    display.textContent+=clicktecla.key
  }
  if(clicktecla.key==8){
    display.textContent+=clicktecla.key
  }
  if(clicktecla.key==9){
    display.textContent+=clicktecla.key
  }
  if(clicktecla.key==9){
    display.textContent+=clicktecla.key
  }
  if(clicktecla.key=='Escape'){
          display.textContent=''
      }
  if(clicktecla.key=='Enter'){
    
      let texto=Array.from(display.textContent)
      if(texto.slice(0, -1)){
        texto.slice()
      }
      texto=texto.join('')
      console.log(texto)
      display.textContent=eval(texto)
    }
  if(clicktecla.key=='Backspace'){
       if(display.textContent.length == 1 || display.textContent == "Error" ){
        display.textContent= ""
    }else{
        display.textContent=display.textContent.slice(0, -1);
    }
    return;
  }
  if(clicktecla.key == '+'){
    display.textContent += clicktecla.key;
  }
  if(clicktecla.key == '*'){
    display.textContent += clicktecla.key;
  }
  if(clicktecla.key == '-'){
    display.textContent += clicktecla.key;
  }
  if(clicktecla.key == '/'){
    display.textContent += clicktecla.key;
  }


  })
