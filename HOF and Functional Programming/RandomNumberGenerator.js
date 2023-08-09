function randomNumber(){
    return Math.floor(Math.random()*100) + 1 ;  // random number between 1-100 
}

var delayinMiliSeconds= 3 ;

function countDown(seconds){
    var countDownInterval = setInterval(function(){
        console.log("Time Remaining : " + seconds + "seconds");
        seconds--;

        if ( seconds < 0){
            clearInterval(countDownInterval);
            var randomNum = randomNumber();
            console.log("Generated random number : "+ randomNum);
        }
    }, 1000); // 1 sec interval
}

function delayRandomNum(){
    setTimeout(function(){
        countDown(delayinMiliSeconds);
    }, delayinMiliSeconds*1000); // delay in mili seconds converted into seconds 
}

delayRandomNum();