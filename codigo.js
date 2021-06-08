/*Hacemos un array con los elementos que tengan como nombre la clase"play"*/
const playCancion= document.getElementsByClassName('play1');

const playCancion2= document.getElementsByClassName('play2');

const playCancion3= document.getElementsByClassName('play3');
/*Hacemos un array con los elementos que tengan como nombre la clase"play"*/
const stopCancion= document.getElementsByClassName('stop1');

const stopCancion2= document.getElementsByClassName('stop2');

const stopCancion3= document.getElementsByClassName('stop3');

const volumen= document.querySelector('.volumen');

let audio;
let audio2;
let audio3;

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

/*Por cada elemento del array playcancion, al hacer click, ponemos a sonar el audio*/
  for(elemento of playCancion2){
    elemento.addEventListener('click', function(){
      let cancion= this.getAttribute('id');
      audio2= new Audio(`./audio/${cancion}.mp3`)
      audio2.play();
    })
    }

    for(elemento of stopCancion2){
      elemento.addEventListener('click', function(){
        audio2.pause();
      })
    }

/*Por cada elemento del array playcancion, al hacer click, ponemos a sonar el audio*/
    for(elemento of playCancion3){
      elemento.addEventListener('click', function(){
        let cancion= this.getAttribute('id');
        audio3= new Audio(`./audio/${cancion}.mp3`)
        audio3.play();
      })
      }

      for(elemento of stopCancion3){
        elemento.addEventListener('click', function(){
          audio3.pause();
        })
      }



volumen.addEventListener('click', function(){
  let volumen= this.value;
  audio.volume = volumen;
})
