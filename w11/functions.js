const outcome = [];
let total = 0;

const makeOutcome =  (obj) => {
  let message = {
    output: " ",
    id: obj.id,
  };
  if (total === 0) {
    message.output = " ";
  } else if (total > 3) {
    message.output = `you left at ${obj.timeLeft} and the traffic was ${
      obj.traffic
    } and your early for work. You entered in this information at ${now.format(
      "MMMM Do, YYYY"
    )}`;
  } else if (total < 3 && total > 0) {
    message.output = `you left at ${obj.timeLeft} and the traffic was ${
      obj.traffic
    } and your late for work.  You entered in this information at ${now.format(
      "MMMM Do, YYYY"
    )}`;
  } else {
    message.output = `you left at ${obj.timeLeft} and the traffic was ${
      obj.traffic
    } and your right on time.  You entered in this information at ${now.format(
      "MMMM Do, YYYY"
    )}`;
  }

  if (error === -1) {
    message.output = " ";
  } else {
    outcome.push(message);
    saveMessage(outcome)
    renderChoice(outcome);
  }
};

let convert = (obj) => {
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

const renderChoice = (outcome)=> {
  document.querySelector("#decision-output").innerHTML = "";
  if (outcome.length !== 0) {
    outcome.forEach((outcome) => {
      const messageEl = document.createElement("h3");
      messageEl.textContent = `${outcome.output}`;
      document.querySelector("#decision-output").appendChild(messageEl);
      saveMessage(outcome)
      myRemove(outcome);
      myEdit(outcome)
    });
  } else {
    const noInputEl = document.createElement("h3");
    noInputEl.textContent = "Please create an input";
    document.querySelector("#decision-output").appendChild(noInputEl);
  }
};

const saveMessage = (outcome) => {
  localStorage.setItem("outcome", JSON.stringify(outcome));
};

const myRemove = (id) => {

  const remove = document.createElement("button");
  remove.setAttribute("id",`${id.id}`)
  remove.textContent = "delete The message above ^";
  document.querySelector("#decision-output").appendChild(remove);
  saveMessage(outcome)
 
  remove.addEventListener("click",() => {
    saveMessage(outcome);
    removeMessage(outcome);
    renderChoice(outcome);
  });
};

const myEdit = (id) => {
  const edit = document.createElement("button");
  edit.setAttribute("id",`${id.id}`)
  edit.textContent = "Edit"; const removeT = document.createElement("h3");
  removeT.textContent = `${now.fromNow()}`;
  document.querySelector("#decision-output").appendChild(removeT);
  saveMessage(outcome)
  document.querySelector("#decision-output").appendChild(edit);
  edit.addEventListener("click", function () {
    location.assign(`edit.html`);
}
)}
const removeMessage = (id) => {
  const index = outcome.findIndex(() => outcome === id);
  if (index > -1) {
    outcome.splice(index, 1);
  }
};
