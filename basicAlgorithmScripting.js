//Reverse any provided string.
function reverseString(str) {
  var array = str.split('');
  var reversedString ='';
  for(var i=array.length-1; i >=0; i--){
    reversedString += array[i];
  }

  return reversedString;
}

reverseString("Greetings from Earth");


// Return the factorial of the provided integer.
//If the integer is represented with the letter n,
// a factorial is the product of all positive integers less than or equal to n.

function factorialize(num) {
  var factorial = 1;
  for(var i=num; i>0; i--){
    factorial *= i;
  }
  return factorial;
}

factorialize(5);


//Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
  var cleanStr = str.replace(/\s+/g,'');
  cleanStr = str.replace(/[\W_]+/g,'');
  cleanStr = cleanStr.toLowerCase();
  var array = cleanStr.split('');
  var lastPosition = (array.length-1);
  var matching = true;

    for(var i=0; ((i <= lastPosition) && (matching)); i++){
      var currentInitial = array[i];
      var currentLast = array[lastPosition];
      console.log("currentIntitial: " + currentInitial);
      console.log("currentLast: " + currentLast);
        if(currentInitial != currentLast){
          matching = false;
          console.log("letters don't match");
        }
      lastPosition--;
    }
    return matching;
  }
palindrome("never odd or even");


//Return the length of the longest word in the provided sentence.
function findLongestWord(str) {
  var space = ' ';
  var arrayOfString = str.split(space);
  var longestString = 0;
    for(var i=0; i < arrayOfString.length; i++){
      if(longestString < arrayOfString[i].length){
        longestString = arrayOfString[i].length;
    }
  }
  return longestString;
}

findLongestWord("The quick brown fox jumped over the lazy dog");





// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".



function titleCase(str) {
  var space = ' ';
  var originalArray = str.split(space);
  var currentString = '';
    for(var i=0; i < originalArray.length; i++){
      currentString = originalArray[i].toLowerCase();
      var firstLetter = currentString.charAt(0);
      var upperLetter = firstLetter.toUpperCase();
      currentString = currentString.replace(firstLetter, upperLetter);
      originalArray[i] = currentString;
    }
  return originalArray.join(' ');
}
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");





//Return an array consisting of the largest number from each provided sub-array.
//For simplicity, the provided array will contain exactly 4 sub-arrays.
function largestOfFour(arr) {
  var largestNumsArray = [];
  for(var i=0; i<arr.length; i++){
    var highestNum = arr[i][0];
      for(var j=0; j<4; j++){
        if(arr[i][j]>highestNum){
          highestNum = arr[i][j];
        }
      }
    largestNumsArray[i]=highestNum;
    }
  return largestNumsArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



// Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
// "Never give up and good luck will find you."
// -- Falcor

function confirmEnding(str, target) {
  var targetLettersCount = target.length;
  var endOfString = str.substr(-targetLettersCount);
    if(endOfString == target){
      return true;
    }
    else return false;
  }
confirmEnding("Bastian", "n");





//Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  var repeatedString = "";
    if (num > 0){
      for(var i=0; i<num; i++){
        repeatedString += str;
      }
    }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);





/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.*/
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num && num>3){
    return str.slice(0, num-3) + "...";
  }
  if(num >= str.length){
    return str;
  }
  else{
    return str.slice(0,num) + "...";
  }
}

truncateString("A-", 1);

/* Advance solution
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

if statement above fails, we move to the else, where we are going to return a "slice" of the string. The slice method extracts a section of a string and returns a new string. Here we pass 0 as the starting point for our slice. To determine the endpoint, we use a ternary operator: num > 3 ? num - 3 : num. In our ternary, if num is larger than 3, we must factor in the three dots to our total length, and thus we end our slice at num-3. If num is less than or equal to 3, our slice gets an end variable of just num. Finally, the '...' is appended to the end of our new string and is returned.
*/








/*
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var dimensionalArray = [];
  var changingSize = size;
  
  for(var i=0; i < arr.length; i+=size){
    dimensionalArray.push(arr.slice(i,changingSize));
    changingSize += size;
  }
    
  return dimensionalArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);



/*
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.
*/
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany,arr.length+1);
}

slasher([1, 2, 3], 2);

/*
function slasher(arr, howMany) {

  // Return elements after the amount chopped off.
  return arr.slice(howMany);

}
*/




/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.*/

function mutation(arr) {
 var allLetters = true;
 var word1 = arr[0].toLowerCase();
 var word2 = arr[1].toLowerCase();
  
 for(var i=0; i< word2.length; i++){
  if(word1.indexOf(word2.charAt(i)) == -1){
    allLetters = false;
  }
 } 
  
  return allLetters;
}

mutation(["floor", "for"]);




/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  return arr.filter(function(value){
      return Boolean(value);     
});
  
}

bouncer([7, "ate", "", false, 9]);



/*
advance coding solution:

function bouncer(arr) {
  return arr.filter(Boolean);
}

*/





/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.*/

function getIndexToIns(arr, num) {  
  var sortedArr = arr.sort(function(a,b){
    return a-b;  
  });

  for(var i = 0; i<sortedArr.length; i++){
    if(sortedArr[i] >= num){
      return i;
    }   
  }
  return sortedArr.length;
}

getIndexToIns([2, 5, 10], 15);
