//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - object
//output - returns array of the values
function objectValues(object) {
    //return array of values - using object.value()
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - object
//output - returns string of keys
//edge - keys in string separated by space
function keysToString(object) {
    //store array of objects keys
    let arrayKeys = Object.keys(object);
    //get a string of the keys - join using a space
    let stringKeys = arrayKeys.join(' ');
    return stringKeys;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - object
//output - returns onlt the string values of the object as a string
//edge - values in string separated by space
function valuesToString(object) {
    //output string
    let stringValues = '';
    //iterate through object values to find strings
    for (let key in object){
        if(typeof(object[key]) === 'string')
        stringValues = stringValues + object[key] + ' ';
    }
    //return value strings and remove last space
    return stringValues.slice(0, -1);
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - one parameter - collection
//output - returns 'array' if array or 'object' if object
//edge - none
function arrayOrObject(collection) {
    //check if array - if true return 'array'
    if(Array.isArray(collection)){
        return "array";
    } else if (collection === null){
        //checks for null - rules out
    } else if(collection instanceof Date){
        //checks for date - ruling out
    } else if (typeof(collection) === 'object'){
        //check if object
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - one string
//output - returns string with first letter capitalized
//edge - none
function capitalizeWord(string) {
    //get first letter of string 
    let firstLetter = string[0];
    //add frstLetter to rest of string 
    let capString = firstLetter.toUpperCase() + string.slice(1, string.length);
    //return capitalized string
    return capString;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - one string of words
//output - returns string with each capitalized
//edge - none
function capitalizeAllWords(string) {
    //get array of the words
    let words = string.split(" ");
    //iterate through words array to capitalize first letters
    for(let index = 0; index < words.length; index++){
        //cap first letter and save to words array
        words[index] = words[index][0].toUpperCase() + words[index].slice(1, string.length);
    }
    //return words array converted back to string
    return words.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - object with a name propert
//output - returns "Welcome <name>!"
//edge - make sure name is capitalized
function welcomeMessage(object) {
    //get string of name
    let firstName = object["name"];
    //capitalize the first letter of name
    firstName = firstName[0].toUpperCase() + firstName.slice(1, firstName.length);
    //return Welcome <Name>!
    return "Welcome " + firstName + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - object with a name and species properties
//output - returns '<Name> is a <species>'
//edge - make sure name and species is capitalized
function profileInfo(object) {
    //get string of name and species
    let firstName = object["name"];
    let speciesType = object["species"];
    //capitalize the first letter of name and species
    firstName = firstName[0].toUpperCase() + firstName.slice(1, firstName.length);
    speciesType = speciesType[0].toUpperCase() + speciesType.slice(1, speciesType.length);
    //return <Name> is a <Species>
    return (firstName + " is a " + speciesType);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - object 
//output - returns array of noises with space is object has noises - otherwise return string "there are no noises"
//edge - space between noises string
function maybeNoises(object) {
    //if noises-key doesn't exist in object
    if(!object["noises"]){
        return "there are no noises";
    } else if (object["noises"].length === 0){
        //checks for empty noises key
        return "there are no noises";
     } else {
         //store array noises - values
         let noises = object["noises"];
         //return joined array as string with space
         return (noises.join(' '));

     }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - string of words and string of one word
//output - return true if word is in string; otherwise false
//edge - 
function hasWord(string, word) {
    //store array of the words in the string
    let wordArray = string.split(" ");
    //iterate through array to match word
    for (let index = 0; index < wordArray.length; index++){
        if(wordArray[index] === word){
            return true;
        } 
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - name and object - 
//output - add name to object["friends"] and return updated object
//c 
//edge -
function addFriend (name, object) {
    //add the name to object['friends']
    object["friends"].push(name);
    //return updated object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - name and object - 
//output -return true if name is in friends-key value; false otherwise
//c 
//edge -

function isFriend(name, object) {
    //if no friends key in object - returns false
    if(!object["friends"]){
        return false;
    }
    //iterate through friends array in object
    for(let index = 0; index < object["friends"].length; index ++){
        if (object["friends"][index] === name){
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - name and array of objects - - 
//output - array of names person is not friends with
function nonFriends(name, array) {
    //output array
    let outputArray = [];
    //iterate through array for names
    for (let index = 0; index < array.length; index++ ){
        if(array[index]["name"] !== name){
          var matches = [];
            //iterate through the friends array in array-object 
           for(let j = 0; j < array[index]["friends"].length; j++){
            if (name === array[index]["friends"][j]){
              //loop through to check for match of name - add one if name matches
              matches.push(1);
            }
            }
          if(matches.length === 0){
            //if there are no matches - name should be added to outputArray
                  outputArray.push(array[index]["name"]);
           }
           
        }
    }
    return outputArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input - object, key, and value
//update the object with new key/value pair
function updateObject(object, key, value) {
    //update object
    object[key] = value;
    //return updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //iterate through array to get keys to remove
    for (let index = 0; index < array.length; index++){
        //remove the key from object
        let key = array[index];
        //object.key = null;
        delete object[key];
    }
    //return updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//i: takes array
//o: return array with duplicates removed
function dedup(array) {
    let outputArray = [];
      //iterate through input array
    for(let index = 0; index < array.length; index++){  
        //iterate through the outputArray
      //use matches array to count if array[index] is in outputArray  
      var matches = [];
    for(let j = 0; j < outputArray.length; j++){
      //check if array[index] matches outputArray[jdex]
        if(array[index] === outputArray[j]){
          matches.push(1);
        } 
      }
      //if no matches - add to outputArray
      if(matches.length === 0){
            outputArray.push(array[index]);
          }
    }
  return outputArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}