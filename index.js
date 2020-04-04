let numberOfDrumButton = document.querySelectorAll('.drum').length;

let drumButtonNames = ['w','a','s','d','j','k','l'];

for (let index = 0; index < numberOfDrumButton; index++) {
    
    document.getElementsByClassName('drum')[index].addEventListener('click',function(){
        playAudioInit(drumButtonNames[index]);
    });
    
}



document.addEventListener('keydown',function(event){
    let keyName = event.key;
    playAudioInit(keyName);
});

// document.addEventListener('keyup',function(event){
//     document.querySelectorAll('.drum')[drumButtonNames.indexOf(event.key)].classList.remove('pressed');
// });




function playAudioInit(keyName){
    if(keyName === 'w'){

        playAudio('sounds/tom-1.mp3');
        addClass(keyName);

    }
    else if(keyName === 'a'){
        playAudio('sounds/tom-2.mp3');
        addClass(keyName);

    }
    else if(keyName === 's'){
        playAudio('sounds/tom-3.mp3');
        addClass(keyName);

    }
    else if(keyName === 'd'){
        playAudio('sounds/tom-4.mp3');
        addClass(keyName);

    }
    else if(keyName === 'j'){
        playAudio('sounds/snare.mp3');
        addClass(keyName);

    }
    else if(keyName === 'k'){
        playAudio('sounds/crash.mp3');
        addClass(keyName);

    }
    else if(keyName === 'l'){
        playAudio('sounds/kick-bass.mp3');
        addClass(keyName);

    }
}

function addClass(keyName){
    let index = drumButtonNames.indexOf(keyName);
    document.querySelectorAll('.drum')[index].classList.add('pressed');
    setTimeout(function(){
        document.querySelectorAll('.drum')[index].classList.remove('pressed');
    
    },200);
   
}

function playAudio(srcAudio){
    let audio = new Audio(srcAudio);
    audio.play();
}