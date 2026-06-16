// LOADING
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 1500);
};

// COPY DISCORD
function copyDiscord(){
  navigator.clipboard.writeText("truongdzz1319");
  alert("Đã copy Discord!");
}

// MUSIC
const audio = document.getElementById("audio");

function toggleMusic(){
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
  }
}

function volume(v){
  audio.volume = v;
}

// CLOCK
function updateTime(){
  const now = new Date();
  document.getElementById("time").innerText =
    now.toLocaleTimeString();
}
setInterval(updateTime,1000);

// TYPING EFFECT
const text = "Developer • Gamer • Cute Bio 💗";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,100);
  }
}
typing();

// PARTICLES
particlesJS("particles-js",{
  particles:{
    number:{value:50},
    color:{value:"#fff"},
    shape:{type:"circle"},
    opacity:{value:0.5},
    size:{value:3},
    move:{enable:true,speed:2}
  }
});