// Deciding if I can ride my bike for 2 hours in the morning 
// I like to wake up betweeen 5 and 6 oclock
// I only ride my bike if its clear outside 

// Display on page function
const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };
  


// time of day "example 1 is 1am 5 is 5am"
let time = function(randomNum){
    let morning = 0
   if(randomNum(1)){ 
   morning ='4:45 am'}
    else if(randomNum === 2){
    morning ='5:15 am'}else if(randomNum === 3){
        return '5:30 am'}else if(randomNum === 4){
            return '5:45 am'}else if(randomNum === 5){
                return '6:00 am'}
  
}
let weather = function(wrandomNum){
    6 === 'clear'
    7 === 'bad weather'
    
}


const choices = {
   
    early: 1,
    etime: 2,
    perfect: 3,
    ltime: 4,
    late: 5, 
    goodweather: 6,
    badweather: 7

}

const min = 1
const max = 5
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
const minw = 6
const maxw = 7
let wrandomNum = Math.floor(Math.random() * (maxw - minw + 1)) + minw

const choice = function(randomNum,wrandomNum){
if (randomNum === 1 && wrandomNum === 6){
 showOnPage('the weather is great but its 4:45 am go back to sleep')
}else if (randomNum === 2 && wrandomNum === 6){
    showOnPage('the weather is great and its 5:15 let ride')
}else if (randomNum === 3 && wrandomNum === 6){
    showOnPage('the weather is great and its 5:30 everything is perfect')
}else if (randomNum === 4 && wrandomNum === 6){
    showOnPage('the weather is great and its 5:45 let ride')
}else if (randomNum === 5 && wrandomNum === 6){
    showOnPage('the weather is great and its 6:00am its to late to ride')
}else{showOnPage('its bad weather try again tomorrow')}}

let monday = (choice(randomNum+2,wrandomNum+1))
let tuesday = (choice(randomNum+1,wrandomNum-1))
let wednesday = (choice(randomNum-1,wrandomNum+1))
let thursday = (choice(randomNum+2,wrandomNum-1))
let friday = (choice(randomNum,wrandomNum))

showOnPage(randomNum)
showOnPage(wrandomNum)
showOnPage(choice)
let makeGuess = function (guess)
{ return randomNum == guess}



let mood = function(sick= 0){
    showOnPage('But get Some rest because your sick')
}

let line = function(end = 1){
   showOnPage('------------------------------------------------')
}

// Using all three functions 

