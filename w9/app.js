

const outcome = [];
let total = 0;
outcome.forEach(function (each) {});
const makeOutcome = function (obj,id) {
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

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let message = []
  let error = 0
  const id = uuidv4()
 if(fast.checked === true && slow.checked === true){
  message.push("You can't physically take two cars")
 }
  if(fast.checked === false && slow.checked === false){
    message.push(" You must pick which car your going to drive")
   }
  if(left.value === " "){
    message.push(" please select a time to leave")
  }
  if(t.value === " "){
    message.push(" please pick a traffic pattern")
  }
  
    if(message.length !== 0)
{
  const errorEl = document.createElement("div")
  errorEl.textContent = `${message.join(" , ")}`
    document.getElementById("error").appendChild(errorEl)
 error = -1
}  else{
  

  let sportscar = form.elements.fast.checked;
  let familycar = form.elements.slow.checked;
  let timeLeft = form.elements.left.value;
  let traffic =form.elements.t.value
  let newObj = {
    id: id,
    sportscar: sportscar,
    familycar: familycar,
    timeLeft: timeLeft,
    traffic: traffic,
  };
  convert(newObj);
  makeOutcome(newObj);
  document.getElementById("form").reset();
}});

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
