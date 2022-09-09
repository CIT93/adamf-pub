const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

let randomTime  = function (realTime = ` `){
  let min = 0;
  let max = 4;
  let x = Math.floor(Math.random() * (max - min + 1)) + min;

  const choice = [
  {
    time: "4:45 am",
    body: " I am going back to sleep its to early",
  },
  {
    time: "5:15 am",
    body: " Its a little early but we can still ride",
  },
  {
    time: "5:30 am",
    body: " I woke up right on time",
  },
  {
    time: "5:45 am",
    body: " Its a little late but we can still ride",
  },
  {
    time: "6:00 am",
    body: " Its to late to ride I need to rush to work",
  },
];
realTime = `Its ${choice[x].time} and ${choice[x].body}`
return realTime
}

const day = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday ",
];




let week = function (x=''){
  for(count=0; count <7 ; count ++){
    x=`Today is ${day[count]} ${randomTime()}`
    showOnPage(x)
  }

}

showOnPage(week())

