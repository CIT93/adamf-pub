
const getSavedSuggestions = function() {
    const suggestionsJSON = localStorage.getItem('morning-tasks')
    if (suggestionsJSON != null) {
      return JSON.parse(suggestionsJSON);
    } else {
      return [];
    }
}

const saveSuggestions = function (drive) {
  localStorage.setItem('morning-tasks', JSON.stringify(drive));
};

const renderQualityCheck = function (each) {
  const span = document.createElement('p');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', each.id)
  span.textContent = 'Remove this decision output';
  
  span.appendChild(checkbox)
  return span
};

const renderDecisionDiv = function (each) {
    const decisionDiv = document.createElement('div');
    decisionDiv.setAttribute('class', 'decision-output');
    const trafficEl = document.createElement('h3');
    trafficEl.textContent = `${each.traffic}`;
    decisionDiv.appendChild(trafficEl);
    const listEl = document.createElement('h4');
    listEl.textContent = `${each.list}`;
    decisionDiv.appendChild(listEl);
    const messageEl = document.createElement('p');
    messageEl.textContent = `${each.message}`;
    decisionDiv.appendChild(messageEl);
    return decisionDiv
}

const removeSuggestion = function (e) {
  let foundTaskToDelete = drive.findIndex(function (task) {
    return task.id === e.target.id
  })
  if (foundTaskToDelete !== -1) {
    drive.splice(e.target.id, 1)
    saveSuggestions(drive)
    renderSuggestions(drive)
  }
}
  

const renderSuggestions = function (drive) {
  contentDiv.innerHTML = '';
  drive.forEach(function (each) {
    const decisionDiv = renderDecisionDiv(each);
    const qualityCheckEl = renderQualityCheck(each);
    qualityCheckEl.addEventListener('click', removeSuggestion)
    decisionDiv.appendChild(qualityCheckEl);
    contentDiv.appendChild(decisionDiv);
  })

}

const determineList = function (grandTotal, familyVan) {
  let message = '';
  let list = ['on your way to work'];
  if (familyVan) {
    list.push('a little slow');
    message = 'Hope there are green lights and no traffic';
  } else if (grandTotal > 0) {
    list.push('You made it');
    message = 'awesome!';
  } else if (grandTotal < 0 && grandTotal > -1) {
    list.push('Late but not too late');
    message = 'you should be fine';
  } else {
    list.push('really late');
    message = 'this is not good';
  }
  return { list: list, message: message };
};

const processSuggestion = function (obj) {
  let total = obj.streetLight + obj.timeLeft;
  if (obj.sportsCar) {
    grandTotal = total + obj.traffic ;
  } else {
    grandTotal = total + obj.traffic;
  }
  suggestionObj = determineList(grandTotal, obj.familyVan);
  suggestionObj.time = `${obj.time} Suggested Morning Tasks`;
  suggestionObj.id = uuidv4();
  drive.push(suggestionObj);
  saveSuggestions(drive)
  renderSuggestions(drive);
};