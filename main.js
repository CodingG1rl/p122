screen_width=0;
screen_height=0;

draw_apple= "";
speak_data = "";
to_number = 0;

function preload(){
   apple= loadImage("apple.jpg")
}

var SpeechRecognition= window.webkitSpeechRecognition;
 var recognition= new SpeechRecognition();

 function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
 }

 recognition.onresult=function(event){
    console.log(event);
    content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized:" + content;
    to_number = Number(content);
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "apples drawn";
      draw_apple="";
    }
 }


