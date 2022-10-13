
const outcome = [];
let total = 0;
outcome.forEach(function (each) {});
const makeOutcome = function (obj) {
  let message = {
    output: " ",
  };
  if (total > 3) {
    message.output = `you left at ${obj.timeLeft} and the traffic was ${obj.traffic} and your early for work`;
  } else if (total < 3) {
    message.output = `you left at ${obj.timeLeft} and the traffic was ${obj.traffic} and your late for work`;
  } else {
    message.output = `you left at ${obj.timeLeft} and the traffic was ${obj.traffic} and your right on time`;
  }
  outcome.push(message);
  renderChoice(outcome);
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
 
  if(fast.checked && slow.checked === false){
    message.push("You much pick with car your going to drive")
  }
  if(left.value === " "){
    message.push("please select a time to leave")
  }
  if(traffic.value === " "){
    message.push("please pick a traffic pattern")
  }
  if(message.length > 0)
{
  const errorEl = document.createElement("div")
  errorEl.textContent = `${message.join(", ")}`
    document.getElementById("error").appendChild(errorEl)
  
}  

  let name = form.elements.name.value;
  let sportscar = form.elements.fast.checked;
  let familycar = form.elements.slow.checked;
  let timeLeft = form.elements.left.value;
  let traffictype = form.elements.traffic.value;
  let newObj = {
    name: name,
    sportscar: sportscar,
    familycar: familycar,
    timeLeft: timeLeft,
    traffictype: traffic,
  };
  convert(newObj);
  makeOutcome(newObj);
  document.getElementById("form").reset();
});

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
