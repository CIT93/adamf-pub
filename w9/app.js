





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
  myRemove()
  document.getElementById("form").reset();
}});


