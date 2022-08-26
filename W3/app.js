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
  

let ride = function(time= 5.5, weather= 'clear',){
// time of day "example 1 is 1am 5 is 5am"

if (weather!='clear'){
    weather = 'not clear'
}


if (time >= 6 && weather === 'clear')/*woke up to late*/{
    showOnPage(`You forgot to set your alarm and its ${time}am on this beautiful day its to late to go for a bike ride`)
        } else if (time <=4 && weather === 'clear')/*woke up to early*/{ 
    
            showOnPage(`You woke up and looked outside its ${weather} but too early you woke up at ${time}am go back to bed`)
                }else if (time<6 && time>4 && weather != 'clear' )/*woke up on time but the weather is bad*/{
    
                    showOnPage(`You woke up on time its ${time}am but the weather is ${wather} go back to sleep`)
                        }else if (time<6 && time>4 && weather === 'clear'  )/*woke up on time and the weather is clear*/{
        
                            showOnPage(`Yes you woke up on time its ${time}am and its ${weather}`)
                                }else showOnPage(`You didnt wake up at the right time because its ${time}am but its ok beause the weather is ${weather}`)

                                let perfect = weather  === 'clear' && time === 5.5 // true if wake up exactily at 5:30 and its clear

                                let good = time <6 && time>4 && weather === 'clear' // true if I wake on on time and its clear

                                let bad = false // Set bad boolean function to false in the global scope  


if (perfect){
    showOnPage('Today is perfect for riding')//woke up exactily at 5:30am and the weather is nice
        } else if (good){
    
        showOnPage('Today is a good for riding')//woke up at the right time and its clear
            } else if (weather != 'clear' || time >=6 || time <=4){
                bad = true // true if I didnot wake up on time or it's not clear.  the bad boolean function changes 
                // from false to true this happens in the local Scope
            showOnPage('Today is a bad day to ride a bike')
            //weather is not clear or woke up at the wrong time
        
            }else{}

let mood = function(sick= 0){
    showOnPage('But get Some rest because your sick')
}

let line = function(end = 1){
   showOnPage('------------------------------------------------')
}

// Using all three functions 

let monday = ride(5,'clear') || mood(0) || line(1)

let tuesday= ride(7,'not clear') || mood(1) || line(1)

let wednesday = ride(3,'clear') || mood(0) || line(1)