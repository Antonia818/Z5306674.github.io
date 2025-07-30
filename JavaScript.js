function triggerAll(){
    let vid= document.getElementById("video1");
    let audio= document.getElementById("audio1");

    if(vid.paused){
        vid.play();
    }
    else{
        vid.pause()
    }

    if(audio.paused){
        audio.play();
        audio.volume=1;
    }
    else{
        audio.pause();
    }
}

function changeBackground(){
    document.getElementById("background").style.background=
    "linear-gradient(to right, rgba(255, 0, 0, 0), rgba(51, 85, 207, 0))";
    
}

function mypopup(){
    mywindow=window.open("popup.html","mywindow","location=1,status=1,scrollbars=1,width=500,height=500");
    mywindow.moveTo(2000,900)
}