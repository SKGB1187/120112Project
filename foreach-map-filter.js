/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/
doubleValues([1,2,3]);
doubleValues([5,1,2,3,10]);

function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val * 2);
    });
    return newArr;
}
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*/
onlyEvenValues([1,2,3]); 
onlyEvenValues([5,1,2,3,10]); 

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val) {
      if (val % 2 === 0) {
        newArr.push(val);
      }
    });
    return newArr;
}
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*/
showFirstAndLast(['colt','matt', 'tim', 'test']);
showFirstAndLast(['hi', 'goodbye', 'smile']);

const wordArray = ['colt','matt', 'tim', 'test', 'hi', 'goodbye', 'smile']
function showFirstAndLast(arr){
    return arr.map(function(word){
        return word[0] + word[word.length-1];
    });
}

/*
Write a function called addKeyAndValue which accepts an array of objects, 
a key, and a value and returns the array passed to the function with the
 new key and value added for each object 
*/
addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

function addKeyAndValue(arr,key,value){
    return arr.map(function(val){
        val[key] = value;
        return val;
    })
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
*/
vowelCount('Elie');
vowelCount('Tim');
vowelCount('Matt');
vowelCount('hmmm');
vowelCount('I Am awesome and so are you');

function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
}


/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/
doubleValuesWithMap([1,2,3]);
doubleValuesWithMap([1,-2,-3]);

function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
      });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
*/
valTimesIndex([1,2,3]);
valTimesIndex([1,-2,-3]);

function valTimesIndex(arr){
    return arr.map(function(val, idx) {
        return val * idx;
    });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
*/
extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name');

function extractKey(arr, key){
    return arr.map(function(val) {
        return val[key];
      });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
*/
extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]);

function extractFullName(arr){
    return arr.map(function(val) {
        return val.first + " " + val.last;
    });
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
*/
filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner');

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
  });
}
/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
*/
find([1,2,3,4,5], 3);
find([1,2,3,4,5], 10);

function find(arr, searchValue) {
    return arr.filter(function(val) {
        return val === searchValue;
      })[0];
}
/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
*/
findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true);

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
      })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
*/
removeVowels('Elie');
removeVowels('TIM');
removeVowels('ZZZZZZ');

function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).
*/
doubleOddNumbers([1,2,3,4,5]);
doubleOddNumbers([4,4,4,4,4]);

function doubleOddNumbers(arr) {
    return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
}
