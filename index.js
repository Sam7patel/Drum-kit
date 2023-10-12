
//Detecting Buttonpress
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handelClick); //We have not add parenthises here for calling our function because it will staright up call our function and we don't need that
    function handelClick(){
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    }
}

//Detecting Keyboard press
addEventListener("keydown",function(event){
makeSound(event.key);
buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
            
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        break;
        default:
            console.log(buttonInnerHTML);
    }
}

//Button animation
function buttonAnimation(currentKey){
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);
}


/* We can have the same effect by using "Annonoymus Function"
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    alert("i got click");
}); 


var audio = new Audio("./sounds/crash.mp3");
        audio.play();
 

Object Creation: 141 Video:
Constructor function
function HouseKeeper(yearsOfExperience,name,cleaningRepertoire){
    this.yearsOfExperience =yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper(13,"Jane",["bathroom","lobby"]);
var houseKeeper2 = new HouseKeeper(20,"Sam",["Hallway","Clothes"]);

Video 143: Method
Constructor function
function HouseKeeper(yearsOfExperience,name,cleaningRepertoire){
    this.yearsOfExperience =yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleanService = function(){
        alert("Cleaning in progress");
        

    }
}
*/


