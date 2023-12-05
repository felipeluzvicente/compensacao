function playSound(soundFile) {
   
    let musica = document.querySelector(soundFile);

    if(musica.paused){
        musica.play();
    } else{
        musica.pause();
        musica.currentTime = 0; // Opcional
    }
}

