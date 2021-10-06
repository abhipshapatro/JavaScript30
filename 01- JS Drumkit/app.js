
function soundPlay(f) {
    // console.log(f)
    const audio = document.querySelector(`audio[data-key = "${f.keyCode}"]`);
    // console.log(audio);
    if(!audio)
    return; // stops the func from running all together
   
    //rewinds to the start
    audio.currentTime = 0;
    
    audio.play();
    
    // corresponding key elements
    const key = document.querySelector(`.key[data-key = "${f.keyCode}"]`);
    // console.log(key);
        
    key.classList.add("playing");
    // key.classList.remove("playing") ; removes the class
    // key.classList.toggle("playing") ; toggles the class      
}
function removeTransition(f){
    
    // console.log(f)
    if(f.propertyName !== 'transform')
    return; //skip if its not a transform
    // console.log(f)   
    // console.log(this);
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');

//for each key, after transition ends it removes
keys.forEach(key => key.addEventListener('transitionend' , removeTransition));

window.addEventListener('keydown',soundPlay);