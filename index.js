var button = document.getElementById("nobutton")
var button2 = document.getElementById("yesbutton")
button.addEventListener("mouseover",(e)=>{
    const j = Math.floor(Math.random()*500)+1;
    const i = Math.floor(Math.random()*500)+1;
    button.style.position="absolute";
    button.style.left=i+"px";
    button.style.top=j+"px";
    e.preventDefault();
})

