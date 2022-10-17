const outcome = [];
let total = 0;
outcome.forEach(function (each) {});
const makeOutcome = function (obj) {
  let message = {
    output: " ",
    id: obj.id
  };
  if(total === 0){
    message.output = " "
  }
  else if (total > 3) {
    message.output = `you left at ${obj.timeLeft} and the traffic was ${obj.traffic} and your early for work`;
  } else if (total < 3 && total > 0) {
    message.output = `you left at ${obj.timeLeft} and the traffic was ${obj.traffic} and your late for work`;
  } else{
    message.output = `you left at ${obj.timeLeft} and the traffic was ${obj.traffic} and your right on time`;
  }
  
  if (error === -1){
    message.output = " "
  

  }else {

  outcome.push(message)
  renderChoice(outcome);
  }
};

let convert = function (obj) {
  let ttotal = 0;
  let ltotal = 0;
  let ctotal = 0;
  if (obj.traffic === "light") {
    ttotal = ttotal + 2;
  } else if (obj.traffic === "normal") {
    ttotal = ttotal + 1;
  }

  if (obj.timeLeft === "5:00 am") {
    ltotal = ltotal + 2;
  } else if (obj.timeLeft === "5:30 am") {
    ltotal = ltotal + 1;
  }

  if (obj.sportscar === true) {
    ctotal = ctotal + 2;
  } else if (obj.familycar === true) {
    ctotal = ctotal + 1;
  }
  total = ltotal + ttotal + ctotal;

  let x = {
    newtotal: total,
  };
  return x;
};

const renderChoice = function (outcome) {
  document.querySelector("#decision-output").innerHTML = "";
  if (outcome !== 0) {
    outcome.forEach(function (outcome) {
      const messageEl = document.createElement("h3");
      messageEl.textContent = `${outcome.output}`;
      document.querySelector("#decision-output").appendChild(messageEl);
      

    });
   
  } else {
    const noInputEl = document.createElement("h3");
    noInputEl.textContent = "Please create an input";
    document.querySelector("#decision-output").appendChild(noInputEl);
  }
};

const removeMessage = function  (output){
  const index = outcome.findIndex(function (outcome){
   
    return this.output.id === id
    
  })
  if(index > -1){
    outcome.splice(index, 1)
  }
}

const saveMessage = function (outcome){
  localStorage.setItem("outcome",JSON.stringify(outcome))
}

const myRemove = function (){
const remove = document.createElement("button")
        remove.textContent = "delete The message above ^"
        document.querySelector("#decision-output").appendChild(remove)
        remove.addEventListener("click",function (){
          removeMessage(outcome.id)
          saveMessage(outcome)
        })}