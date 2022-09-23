const output = document.querySelector("#output")



  
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

   const day = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday ",
  ];
  
  const updateDOM = function (text, element) {
    let newElement = document.createElement(element);
    newElement.textContent = text;
    output.append(newElement);
  };


  
  const print = function(){
  
  updateDOM(" ","br")
  updateDOM(`the day is ${day[0]}`,'li')
  updateDOM(`Time ${choice[1].time}`, 'li');
  updateDOM(`Message ${choice[1].body}`, 'li');
  updateDOM("_______________________","h1")
  updateDOM(" ","br")

  updateDOM(" ","br")
  updateDOM(`the day is ${day[1]}`,'li')
  updateDOM(`Time ${choice[2].time}`, 'li');
  updateDOM(`Message ${choice[2].body}`, 'li');
  updateDOM("_______________________","h1")
  updateDOM(" ","br")

  updateDOM(" ","br")
  updateDOM(`the day is ${day[2]}`,'li')
  updateDOM(`Time ${choice[3].time}`, 'li');
  updateDOM(`Message ${choice[3].body}`, 'li');
  updateDOM("_______________________","h1")
  updateDOM(" ","br")

  updateDOM(" ","br")
  updateDOM(`the day is ${day[3]}`,'li')
  updateDOM(`Time ${choice[4].time}`, 'li');
  updateDOM(`Message ${choice[4].body}`, 'li');
  updateDOM("_______________________","h1")
  updateDOM(" ","br")

  updateDOM(" ","br")
  updateDOM(`the day is ${day[4]}`,'li')
  updateDOM(`Time ${choice[0].time}`, 'li');
  updateDOM(`Message ${choice[0].body}`, 'li');
  updateDOM("_______________________","h1")
  updateDOM(" ","br")

  updateDOM(" ","br")
  updateDOM(`the day is ${day[5]}`,'li')
  updateDOM(`Time ${choice[1].time}`, 'li');
  updateDOM(`Message ${choice[1].body}`, 'li');
  updateDOM("_______________________","h1")
  updateDOM(" ","br")

  updateDOM(" ","br")
  updateDOM(`the day is ${day[6]}`,'li')
  updateDOM(`Time ${choice[4].time}`, 'li');
  updateDOM(`Message ${choice[4].body}`, 'li');
  updateDOM("_______________________","h1")
  updateDOM(" ","br")
  }
  document.querySelector("button").addEventListener("click",function(){
    print()
  })

  