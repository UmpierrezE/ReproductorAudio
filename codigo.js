/*Hacemos un array con los elementos que tengan como nombre la clase"play"*/
const playCancion= document.getElementsByClassName('play');
/*Hacemos un array con los elementos que tengan como nombre la clase"play"*/
const stopCancion= document.getElementsByClassName('stop');

const volumen= document.querySelector('.volumen');

let audio;
/*Por cada elemento del array playcancion, al hacer click, ponemos a sonar el audio*/
for(elemento of playCancion){
  elemento.addEventListener('click', function(){
    let cancion= this.getAttribute('id');
    audio= new Audio(`./audio/${cancion}.mp3`)
    audio.play();
  })
  }

  for(elemento of stopCancion){
    elemento.addEventListener('click', function(){
      audio.pause();
    })
  }
volumen.addEventListener('click', function(){
  let volumen= this.value;
  audio.volume = volumen;
})
