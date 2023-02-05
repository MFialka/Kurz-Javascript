console.log("funguju");

// Task 1Create an object that describes a car (manufacturer, model, year, average  speed),  and  the  following  functions  for  working  with  this  object.
// 1. Function for displaying information about the car on the screen.
// 2. A function for calculating the necessary time to overcome the set distance with an average speed. Take into account that every 4 hours, the driver needs to take a break for 1 hour.

let car = {
  manufacturer: "škoda",
  model: "octavia",
  year: "2020",
  avgSpeed: "90",
};

function showInformation() {
  document.getElementById("car").innerHTML =
    car.manufacturer + ", " + car.model + ", " + car.year + "," + car.avgSpeed;
  return;
}

showInformation();

//2.
function calculatingTime(distance) {
  let avgSpeedNumber = Number(car.avgSpeed);
  let time = distance / car.avgSpeed;
  let timeIncrease = Math.floor(time / 4);
  let finalTime = time + timeIncrease;
  document.getElementById("finalTime").innerHTML =
    "Automobil pojede " +
    finalTime +
    " hodin včetně povinných přestávek po 4 hodinách";
  return finalTime;
}

//console.log(calculatingTime(800));

// Task 2
// Create an object that contains a separate numerator and denom-inator  of  the  fraction,  and  the  following  functions  for  working  with  this object.
let objectFraction = [
  {
    numerator: 5,
    denominator: 10,
  },
];

//Function of adding 2 fractional objects.
function addFraction(objectFraction) {
  objectFraction.push({ numerator1: 7, denominator1: 4 });
}

addFraction(objectFraction);

//console.log(objectFraction);

//The function of subtraction of 2 fractional objects.

let objectFraction1 = {
  numerator2: 5,
  denominator2: 10,

  numerator3: 7,
  denominator3: 4,
};

function substractFraction(objectFraction1) {
  let togetherDenom =
    objectFraction1.denominator2 * objectFraction1.denominator3;
  let firstNumerator =
    objectFraction1.numerator2 * objectFraction1.denominator3;
  let secondNumerator =
    objectFraction1.numerator3 * objectFraction1.denominator2;
  let numerators = firstNumerator - secondNumerator;
  let result = numerators + "/" + togetherDenom;
  return result;
}

//console.log(substractFraction(objectFraction1));

//Function of multiplying 2 fractional objects.

let multiplyingArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function multiplyingFraction(objectFraction1) {
  let numerators = objectFraction1.numerator2 * objectFraction1.numerator3;
  let denominators =
    objectFraction1.denominator2 * objectFraction1.denominator3;
  for (let i = 0; i < multiplyingArr.length; i++) {
    if (
      numerators % multiplyingArr[i] === 0 &&
      denominators % multiplyingArr[i] === 0
    ) {
      numerators = numerators / multiplyingArr[i];
      denominators = denominators / multiplyingArr[i];
    }
  }
  result = "Výsledek je " + numerators + "/" + denominators;
  return result;
}

//console.log(multiplyingFraction(objectFraction1));

//Function of dividing 2 objects-fractions.

function dividingFraction(objectFraction1) {
  let numerators = objectFraction1.numerator2 * objectFraction1.denominator3;
  let denominators = objectFraction1.denominator2 * objectFraction1.numerator3;
  for (let i = 0; i < multiplyingArr.length; i++) {
    if (
      numerators % multiplyingArr[i] === 0 &&
      denominators % multiplyingArr[i] === 0
    ) {
      numerators = numerators / multiplyingArr[i];
      denominators = denominators / multiplyingArr[i];
    }
  }
  let result = "Výsledek je " + numerators + "/" + denominators;
  return result;
}

//console.log(dividingFraction(objectFraction1));

//Function of reducing the fraction object.

function reductionFraction(objectFraction1) {
  numerator = objectFraction1.numerator2;
  denominator = objectFraction1.denominator2;
  for (let i = 0; i < multiplyingArr.length; i++) {
    if (
      numerator % multiplyingArr[i] === 0 &&
      denominator % multiplyingArr[i] === 0
    ) {
      numerator = numerator / multiplyingArr[i];
      denominator = denominator / multiplyingArr[i];
    }
  }
  let result = "Výsledek je " + numerator + "/" + denominator;
  return result;
}

//console.log(reductionFraction(objectFraction1));

//Task 3
//dělali jsme v hodině

const time = {
  hours: 15,
  minutes: 24,
  seconds: 30,
};

// první verze
function padNumberToTwoDigits(number) {
  let numberString = String(number);
  numberString = numberString.padStart(2, "0");
  return numberString;
}

// jiná verze toho samého - tato je nejlepší (využívá vlastnosti arrow funkcí)
const padNToTwo = (n) => String(n).padStart(2, "0");

function showTime(actualTime) {
  let timeString = "";
  timeString += padNToTwo(actualTime.hours);
  timeString += ":";
  timeString += padNToTwo(actualTime.minutes);
  timeString += ".";
  timeString += padNToTwo(actualTime.seconds);
  return timeString;
}

//console.log(showTime(time));
//console.log(showTime({ hours: 18, minutes: 56, seconds: 15 }));
/*console.log(
  showTime({
    hours: 12,
    minutes: 14,
    seconds: 29,
  })
);
*/
//console.log(showTime({ hours: 9, minutes: 4, seconds: 5 }));

const changeHours = (timeObject, hours) => {
  timeObject.hours += hours;
  while (timeObject.hours >= 24) {
    timeObject.hours -= 24;
  }
  while (timeObject.hours < 0) {
    timeObject.hours += 24;
  }
  //console.log("tohle je funkce co mění hodiny a zároveň vypisuje čas");
  //console.log("ukazuju čas uvnitř funkce changeHours", showTime(timeObject));
  return timeObject;
};

//changeHours(time, 5);
//changeHours(time, 7);
//changeHours(time, -2);
//changeHours(time, -5);
//changeHours(time, 3);
//console.log("------------");

const changeMinutes = (timeObject, minutes) => {
  timeObject.minutes += minutes;
  while (timeObject.minutes >= 60) {
    timeObject.minutes -= 60;
    changeHours(timeObject, 1);
  }
  while (timeObject.minutes < 0) {
    timeObject.minutes += 60;
    changeHours(timeObject, -1);
  }
  console.log(showTime(timeObject));
  return timeObject;
};

//console.log("už jen dvakrát změním minuty a jdu domů");
//console.log(showTime(time));
//changeMinutes(time, 5);
//changeMinutes(time, 35);

//koment přidání na github
