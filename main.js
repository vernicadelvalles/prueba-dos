// const boxInput = document.querySelector('#box-input');
const play = document.querySelector('#play');
const reset = document.querySelector('#reset');
const text = document.querySelector('#text');
const randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber); 

play.addEventListener('click', (e)=>{
  const valueInput = boxInput.value; //copia
  
  if (valueInput > randomNumber) {
    text.textContent = 'Muy Alto'
  } else if (valueInput < randomNumber){
    text.textContent = 'Muy Bajo'    
  } else {
    text.textContent = 'Ganaste!'    
  }

  boxInput.value = '';//referencia directa
}) 

const boxInput = document.querySelector('#box-input');
console.log(boxInput);

boxInput.value = "Hola";

console.log(boxInput);


let valueInput = boxInput.value; // valueInput ahora contiene "Hola"
console.log(valueInput);

valueInput = "Adiós";

console.log(valueInput)

