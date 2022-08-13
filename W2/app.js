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
  


let time = 5.5 // time of day "example 1 is 1am 5 is 5am"
showOnPage('The current time is ' + time)
let weather = 'clar' // weather is clear or is not
if (weather ==='clear'){
    true
}else weather = 'bad weather'
showOnPage('The current weater is ' + weather) 
let perfect = weather  === 'clear' && time === 5.5 // true if wake up exactily at 5:30 and its clear
let good = time <6 && time>4 && weather === 'clear' // true if I wake on on time and its clear
let bad = false // Set bad boolean function to false in the global scope  

if (time >= 6 && weather === 'clear')/*woke up to late*/{
    showOnPage('You forgot to set your alarm on this beautiful day its to late to go for a bike ride')
    } else if (time <=4 && weather === 'clear')/*woke up to early*/{ 
    showOnPage('You woke up and looked outside its beautiful but too early go back to bed')
    }else if (time<6 && time>4 && weather != 'clear' )/*woke up on time but the weather is bad*/{
    showOnPage('You woke up on time but the weather is bad go back to sleep')
    }else if (time<6 && time>4 && weather === 'clear'  )/*woke up on time and the weather is clear*/{
        showOnPage('Yes you woke up on time and its nice out')
    }else showOnPage('You didnt wake up at the right time but its ok beause the weather is bad')

    
if (perfect){
      showOnPage('Today is perfect for riding')//woke up exactily at 5:30am and the weather is nice
    } else if (good){
        showOnPage('Today is a good for riding')//woke up at the right time and its clear
    } else if (weather != 'clear' || time >=6 || time <=4){
        bad = true // true if I didnot wake up on time or it's not clear.  the bad boolean function changes 
        // from false to true this happens in the local Scope
        showOnPage('Today is a bad day')
        showOnPage(bad)//weather is not clear or woke up at the wrong time
        
    }else showOnPage('Impossiable') // should never be true

    