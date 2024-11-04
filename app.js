// Assignmetn no 17 
// | FUNCTIONS| SWITCH | WHILE.. DO-WHILE  |

// Question no 1
// Write a custom function power ( a, b ), to calculate the value of a raised to b.
function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(power(2, 3));

// Question no 2
// Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2000, 2012, 2016, etc.
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
// If the lengths of the sides of a triangle are denoted by a, b, and c, then area of a triangle is given by area = (s(s - a)(s - b)(s - c)) where, s = ( a + b + c ) / 2
function calculateTriangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
console.log(calculateTriangleArea(3, 4, 5));

// Question no 4
// Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are sub functions.
function calculateAverageAndPercentage(marks) {
    var totalMarks = 0;
    for (var i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
    }
    var average = totalMarks / marks.length;
    var percentage = (totalMarks / (marks.length * 100)) * 100;
    return {
        average: average,
        percentage: percentage
    };
}
function mainFunction() {
    var marks = [80, 90, 70];
    var result = calculateAverageAndPercentage(marks);
    console.log("Average: " + result.average);
    console.log("Percentage: " + result.percentage + "%");
}

// Question no 5
//You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.
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
// Write a function to delete all vowels from a sentence. Assume that the sentence is not in uppercase and
//  also not in lowercase.
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
// Write a function with switch statement to count the number of 1’s that appear in a given string.
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