var user1 = prompt("Enter Player 1 Name : ");
var user2 = prompt("Enter Player 2 Name : ");


document.getElementsByClassName("player1")[0].innerHTML = user1;
document.getElementsByClassName("player2")[0].innerHTML = user2;
// document.querySelector("p")[0].innerHTML = user1;

var randomNumber1;
var randomNumber2;

function generateNumber1() {
     randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDice1 = "dice"+ randomNumber1 +".png";
    var leftImage = document.querySelectorAll("img")[0];
    leftImage.setAttribute("src" , randomDice1);
    
}

function generateNumber2(){
     randomNumber2 = Math.floor(Math.random() * 6 ) + 1 ;
    var randomDice2 = "dice"+randomNumber2+".png";
    var rightImage = document.querySelectorAll("img")[1];
    rightImage.setAttribute("src" , randomDice2) ;
 
    setTimeout(function(){
        window.location.reload();
     }, 1000);
}
function check() {

  
    
    if(randomNumber1 > randomNumber2) 
    {
        document.querySelector("h1").innerHTML = user1+" Wins 🍨" ;
        
    }
    else if(randomNumber1  == randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Draw 👻";
        
    }
    else if(randomNumber2 > randomNumber1 ){
        document.querySelector("h1").innerHTML = user2+" Wins 🍦";
        
    }
    else{
        document.querySelector("h1").innerHTML = "Let's Try Your Luck 🤞";
    }
}
