// Write a function that takes 2 strings and compares their length. The function returns 1 if the first line contains more characters than the second, -1 if the second contains more characters than the first, or 0 if the strings are of the same length.

let prvni = "ahoj jsem Martin!";
let druha = "Dneska vůbec nemám chuť na čočku.";

function compareLenght(prvni, druha) {
  if (prvni.length > druha.length) {
    return 1;
  } else if (prvni.length < druha.length) {
    return -1;
  } else {
    return 0;
  }
}

//console.log(compareLenght(prvni, druha));

// Write a function that converts the first character of a passed string to uppercase.
function upperLetter(prvni) {
  return prvni.charAt(0).toUpperCase() + prvni.slice(1);
}

//console.log(upperLetter(prvni));

// Write a function that counts vowels in a passed string.

function getVowels(prvni) {
  let vowelsCount = 0;
  let string = prvni.toString();

  for (let i = 0; i <= string.length - 1; i++) {
    if (
      string.charAt(i) == "a" ||
      string.charAt(i) == "e" ||
      string.charAt(i) == "i" ||
      string.charAt(i) == "o" ||
      string.charAt(i) == "u"
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

//console.log(getVowels(prvni));

// Write a function to check spam in a passed string. The function returns true if the string contains spam. The following words are to be considered as spam: 100% free, sales increase, only today, do not delete, xxx. The function must be case insensitive.

function isItSpam(prvni) {
  let phrase = prvni.toString();
  if (phrase.includes("jsem")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

console.log(isItSpam(prvni));

// Write a truncate function. The function takes a string and its maximum length. If the string length is greater than the maximum, then extra characters are discarded, and multiple periods are added instead of them. For example: truncate("Hello, world!", 8) should return "Hello...".

let phrase1 = "jelenovi pivo nelej";
let maxLenght = 22;
let phraseLenght = Number(phrase1.length);
console.log(phraseLenght);
let result = "";

function lenghtOfPhrase(maxLenghtOther) {
  if (phraseLenght > maxLenghtOther) {
    result = phrase1.slice(0, maxLenghtOther);
  } else {
    result = phrase1.padEnd(maxLenghtOther, "X");
  }
  return result;
}

/*lenghtOfPhrase(50);
console.log(result);
*/
// Write a function that checks whether the passed string is a palindrome.

function checkPalindrome(phrase1) {
  let reversePhrase = "";
  let withoutSpaces = phrase1.replaceAll(" ", "");
  console.log(withoutSpaces.length);
  for (let i = withoutSpaces.length - 1; i >= 0; i--) {
    reversePhrase = reversePhrase + withoutSpaces[i];
  }
  if (reversePhrase === withoutSpaces) {
    console.log(true);
  } else {
    console.log(false);
  }
}

console.log(checkPalindrome(phrase1));

//write a function that counts words in a sentence
let phrase2 = "Dneska je venku slunečné počasí.";

function totalWords(phrase2) {
  let totalCount = 0;
  String(phrase2);
  for (let i = 0; i < phrase2.length; i++) {
    if (phrase2[i] === " ") {
      totalCount += 1;
    }
  }

  return totalCount + 1;
}
//console.log(phrase2.length);
//console.log(totalWords(phrase2));

//write a funtion that returns the longest word in a sentence

let phrase3 = "Je velmi pohodlná a nikdy nepracuje.";

function longestWord(phrase3) {
  let countWords = phrase3.split(" ");
  console.log(countWords);
  let theLongestWord = 0;
  let word = null;
  for (let i = 0; i < countWords.length; i++) {
    if (theLongestWord < countWords[i].length) {
      theLongestWord = countWords[i].length;
      word = countWords[i];
    }
  }
  return word;
}

//console.log(longestWord(phrase3));

//write a function that considers the average word length in a sentence
let phrase4 = "Nevím jak se přesně jmenuji.";

function avgLengthWord(phrase4) {
  let stringPhrase4 = phrase4.split(" ");
  let avgCountLetter = 0;
  for (let i = 0; i < stringPhrase4.length; i++) {
    avgCountLetter += stringPhrase4[i].length;
  }
  return avgCountLetter / stringPhrase4.length;
}

//console.log(avgLengthWord(phrase4));

//write a function that takes a string and a character and outputs index of the characters position in the string.
//Also, output how many times this character occurs in a string.

let phrase5 = "V zoologické zahradě žijí žirafy a želvy.";
let letter = "ž";
let indexOfFirst = phrase5.indexOf(letter);

function showChar(phrase5, letter) {
  let numberLetter = 0;
  for (i = 0; i < phrase5.length; i++) {
    if (phrase5[i] === letter) {
      console.log(phrase5.indexOf(letter, i));
      numberLetter += 1;
      console.log(numberLetter);
    }
  }
}

//console.log(showChar(phrase5, letter));
