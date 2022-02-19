let soundsNames=["kick-bass","snare","tom-1","tom-2","crash","tom-3","tom-4"];
let soundObject={
    'w':"kick-bass",
    'a':"snare",
    's':"tom-1",
    'd':"tom-2",
    'j':'crash',
    'k':"tom-3",
    'l':"tom-4"
}

let numberOfButtons=document.querySelectorAll('.drum').length;
for(let i=0;i<numberOfButtons;i++){
    playOnClick(i);        
}
playOnKeypress();   



function playOnClick(i){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        // console.log(this);
        this.classList.add("pressed");
        let className=this;
        className.style.color="white";

        setTimeout(function(){
            className.classList.remove("pressed");
            className.style.color="#DA0463";

        },100)
        let audioAddress='sounds/'+soundsNames[i]+'.mp3';
        let audio=new Audio(audioAddress);
        audio.play();
    });
}
function playOnKeypress(){
    document.addEventListener("keydown",function(event){
        let keypressed=event.key;
        document.querySelector("."+keypressed).style.color="white";

        if(soundObject[keypressed]){
            className=document.querySelector("."+keypressed);
            className.classList.add("pressed");
            setTimeout(function(){
                className.classList.remove("pressed");
                className.style.color="#DA0463";
            },100)
            let audioAddress='sounds/'+soundObject[keypressed]+'.mp3';
                let audio=new Audio(audioAddress);
                audio.play();
        }
    })
}