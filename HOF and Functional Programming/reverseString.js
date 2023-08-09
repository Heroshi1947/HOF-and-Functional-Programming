function reverseString(str){
    return str.split('').reverse().join('');
}

var input = "I am going to learn JavaScript very soon ";

function delay(){
    setTimeout(function(){
        var reversed = reverseString(input);
        console.log("Reveresed String :"+ reversed);
    },2000 ) ;   // 2 sec delay 
}

delay(); 