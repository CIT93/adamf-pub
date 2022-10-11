const outcome = []

const choices = function (obj) {
    let car = 0
    if (obj.sportscar === true){
        car = car + 2
    }else if(obj.familycar === true){
        car = car + 1
    } else car = 0
    outcome.push(car)
    outcome.push(obj.timeLeft)
    outcome.push(obj.traffic)
}

const renderChoice = function (outcome){
    if (outcome.foreach = 3){ 
    return " you just made it "}
    else if (outcome.foreach < 3){
        return "you didn't make it "
    }else {
        return "you made it "
    }
}
    




document.querySelector("form").addEventListener("submit",function (e){
    e.preventDefault()
    let sportscar = form.elements.fast.checked 
    let familycar = form.elements.slow.checked
    let timeLeft = form.elements.left.value
    let traffic = form.elements.traffic.value
    let newObj = {
        sportscar: sportscar,
        familycar: familycar,
        timeLeft: timeLeft,
        traffic: traffic,
    }
choices(newObj)
document.getElementById('form').reset()

})