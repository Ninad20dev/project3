
var score = 0
var hitrn;
var interval;

document.querySelector("#panel-bottom").addEventListener("click",function(obj){
    var clicked_number = Number(obj.target.textContent);
    if(hitrn === clicked_number){
        
        increaseScore();
        newHit();
        makebubble();
    }

})
function increaseScore(){
    score += 10
    document.querySelector("#scoreval").textContent = score
}

function makebubble(){
    var clutter =""
    for(var i = 0; i<=132; i++){
        clutter = clutter + `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.getElementById("panel-bottom").innerHTML = clutter

}

function timer(){
    let timer = 60;
    interval = setInterval(() => {
        if(timer > 0){
            timer = timer - 1;
            document.querySelector("#timer").textContent = timer
        }
        else{
            document.querySelector("#panel-bottom").innerHTML = `<h1>GAME OVER!</h1>`
            clearInterval(interval)
            timer()
        }
        
    }, 1000);
}

var flag = 0;
document.querySelector("#button")
.addEventListener("click", function(){
    if(flag == 0){
        document.querySelector("#panel-bottom").style.opacity = 1;
        document.querySelector("#button").innerHTML = "restart the game"
        timer();
        flag = 1;
    }else{
        document.querySelector("#button").setAttribute('disabled', '')
        document.querySelector("#button").innerHTML = "start the game"
        clearInterval(interval);
        timer();
        flag = 0
    }
    
})


function newHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn 
}


newHit()
makebubble();

