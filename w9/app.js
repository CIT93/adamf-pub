const contentDiv = document.querySelector('#content');
const decisionDiv = document.querySelector('#decision-output')
const errorDiv = document.querySelector('#error-message');

let drive = getSavedSuggestions();

let test = document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let errMessages = [];
  const timeLeft = form.elements.time.value;
  const streetLight = form.elements.streetLight.value;
  const sportsCar = form.elements.sportsCar.checked;
  const familyVan = form.elements.familyVan.checked;
  const traffic = form.elements.traffic.value;
  if(timeLeft === "0" || streetLight === "0" || traffic === "0" ) {
    errMessages.push('You need to provide the time you left, the car you drove,street lights and the amount of traffic')
  } else {
     let newObj = {
       time: time,
       streetLight: streetLight,
       sportsCar: sportsCar,
       familyVan: familyVan,
       traffic: traffic
     };
     processSuggestion(newObj);
     document.querySelector('form').reset();
     errorDiv.innerHTML = ''
  }
  if (errMessages.length > 0){
    errorDiv.textContent = errMessages.join(', ')
  }
 
});

renderSuggestions(drive);