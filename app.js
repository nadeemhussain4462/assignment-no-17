// Assignmetn no 17
// | FUNCTIONS| SWITCH | WHILE.. DO-WHILE  |

// Question no 1
function power(a, b) {
  var result = 1;
  for (var i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}
console.log(power(2, 3));

// Question no 2
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2020));
// true
console.log(isLeapYear(2021));

// Question no 3
function calculateTriangleArea(a, b, c) {
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
console.log(calculateTriangleArea(3, 4, 5));

// Question no 4
function calculateAverageAndPercentage(marks) {
  var totalMarks = 0;
  for (var i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
  }
  var average = totalMarks / marks.length;
  var percentage = (totalMarks / (marks.length * 100)) * 100;
  return {
    average: average,
    percentage: percentage,
  };
}
function mainFunction() {
  var marks = [80, 90, 70];
  var result = calculateAverageAndPercentage(marks);
  console.log("Average: " + result.average);
  console.log("Percentage: " + result.percentage + "%");
}

// Question no 5
function customIndexOf(str, char) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}
console.log(customIndexOf("hello", "l"));
// Question no 6
function removeVowels(sentence) {
  var vowels = ["a", "e", "i", "o", "u"];
  var result = "";
  for (var i = 0; i < sentence.length; i++) {
    var isVowel = false;
    for (var j = 0; j < vowels.length; j++) {
      if (sentence[i].toLowerCase() === vowels[j]) {
        isVowel = true;
        break;
      }
    }
    if (!isVowel) {
      result += sentence[i];
    }
  }
  return result;
}

// Question no 7
function countOnes(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "1":
        count++;
        break;
    }
  }
  return count;
}
console.log(countOnes("10101"));

// Question no 8
function convertDistance(distance) {
  var meters = distance * 1000;
  var feet = distance * 3280.84;
  var inches = distance * 39370.1;
  var centimeters = distance * 100000;
  console.log("Distance in meters: " + meters);
  console.log("Distance in feet: " + feet);
  console.log("Distance in inches: " + inches);
  console.log("Distance in centimeters: " + centimeters);
}
convertDistance(10);

// Question no 9
function calculateOvertimePay(hoursWorked) {
  var overtimeHours = hoursWorked - 40;
  if (overtimeHours <= 0) {
    return 0;
  } else {
    var overtimePay = overtimeHours * 12;
    return overtimePay;
  }
}
console.log(calculateOvertimePay(45));

// Question no 10
function calculateCurrencyNotes(amount) {
  var notes100 = Math.floor(amount / 100);
  var notes50 = Math.floor((amount % 100) / 50);
  var notes10 = Math.floor(((amount % 100) % 50) / 10);
  console.log("Notes of 100: " + notes100);
  console.log("Notes of 50: " + notes50);
  console.log("Notes of 10: " + notes10);
}
calculateCurrencyNotes(500);
