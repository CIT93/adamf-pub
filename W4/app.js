// Deciding if I can ride my bike for 2 hours in the morning
// I like to wake up betweeen 5 and 6 oclock
// I only ride my bike if its clear outside

// Display on page function
const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};
let xmin = 1;
let xmax = 5;
let xrandomNum = Math.floor(Math.random() * (xmax - xmin + 1)) + xmin;
let ymin = 6;
let ymax = 7;
let yrandomNum = Math.floor(Math.random() * (ymax - ymin + 1)) + ymin;
let zmin = 8;
let zmax = 14;
let zrandomNum = Math.floor(Math.random() * (zmax - zmin + 1)) + zmin;

// time of day "example 1 is 1am 5 is 5am"
let xtime = {
  bed: 1,
  early: 2,
  perfect: 3,
  late: 4,
  work: 5,

  time: function (x = xrandomNum, morning) {
    if (x === 1) {
      return (morning = "4:45 am");
    } else if (x === 2) {
      return (morning = "5:15 am");
    } else if (x === 3) {
      return (morning = "5:30 am");
    } else if (x === 4) {
      return (morning = "5:45 am");
    } else if (x === 5) {
      return (morning = "6:00 am");
    }
    showOnPage(morning);
  },

  outside: function (y = yrandomNum, weather) {
    if (y === 6) {
      return (weather = "great weather");
    } else if (y === 7) {
      return (weather = "bad weather");
    }
    showOnPage(weather);
  },
  text: function (tx = xrandomNum) {
    if (tx === this.bed) {
      tx = " I am going back to sleep its to early";
      return tx;
    } else if (tx === this.early) {
      tx = " Its a little early but we can still ride";
      return tx;
    } else if (tx === this.perfect) {
      tx = " I woke up right on time";
      return tx;
    } else if (tx === this.late) {
      tx = " Its a little late but we can still ride";
      return tx;
    } else if (tx === this.work) {
      tx = " Its to late to ride I need to rush to work";
      return tx;
    }
    return tx;
  },
};
let dayOfTheWeek = {
  monday: 8,
  tuesday: 9,
  wednesday: 10,
  thursday: 11,
  friday: 12,
  saturday: 13,
  sunday: 14,

  days: function (today = zrandomNum) {
    if (today === this.monday) {
      today = "monday";
      return today;
    } else if (today === this.tuesday) {
      today = "tuesday";
      return today;
    } else if (today === this.wednesday) {
      today = "wednesday";
      return today;
    } else if (today === this.thursday) {
      today = "thursday";
      return today;
    } else if (today === this.friday) {
      today = "friday";
      return today;
    } else if (today === this.saturday) {
      today = "saturday";
      return today;
    } else if (today === this.sunday) {
      today = "sunday";
      return today;
    }
  },
};
showOnPage(
  `Today is ${dayOfTheWeek.days()} I woke up at ${xtime.time()}.${xtime.text()} I looked outside to find that its ${xtime.outside()}!`
);
