const output = document.querySelector('#output')
let decider =[{
value: 0
}] 


document.querySelector("#fast").addEventListener("change", function (e){
    console.log(e.target.checked)
    if (e.target.checked === true){const summary = document.createElement("h2")
summary.textContent = `You took the sports car you will fine` 
decider.value = decider.value + 1
document.querySelector("#output").appendChild(summary)

        console.log("you took the Sports car")
    }
})
document.querySelector("#slow").addEventListener("change", function (e){
    console.log(e.target.checked)
    
    if (e.target.checked === true){const summary = document.createElement("h2")
    summary.textContent = `You took the family car you have bet left early`
    decider.value = decider.value -1 
    document.querySelector("#output").appendChild(summary)
        console.log("you took the Family car")
    }
})
document.querySelector("#left").addEventListener("change", function (e){
    decider.value = decider.value + e.target.value
})
document.querySelector("#traffic").addEventListener("change", function (e){
    decider.value = decider.value - e.target.value
})
 console.log(decider.value)
const renderDecision = function (decider){
    if(decider.value < 0){
      const late = document.createElement("h2")
     late.textContent = "Your Late!"
    }else{ const onTime = document.createElement("h2")
    OnTime.textContent = "Your on time!"}
 }

renderDecision(decider)

