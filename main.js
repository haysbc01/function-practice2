// getName
console.log("Problem 1: getName");


function getName(object) {
  return (object.name);
}

console.log(getName ({name: 'Luisa', age: '25'}));

// totalLetters
console.log('Problem 2: totalLetters');

var arr = [];

function totalLetters (arr) {

  var join = arr.join("");

  //var letters = totalLetters.toString().length;
  return join.length;
}

console.log(totalLetters(['javascript', 'is', 'awesome']));
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));


// keyValue
console.log('Problem 3: keyValue');


var keyValue = function (x,y) {

  var object = {x,y};
  // object[x] = y;
  return object.x;
}

console.log(keyValue('city', 'Denver'));


// negativeIndex
console.log('Problem 4: negativeIndex');

var array = [];

function negativeIndex(array, x) {
    return array[array.length+x];

}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));


// removeM
console.log('Problem 5: removeM')

function removeM (str){
  var obj = []
  var array = str.split('')
  for (var i = 0; i < array.length; i++) {
    if(array[i] != 'm') {
      var noM = array[i];
      // console.log(array.join(''));
      // return(noM);
      obj.push(noM);
    }
  } return(obj.join(''));
  // function join (noM){}
  // var join = noM.join('');
  // return join
}

console.log(removeM('family'));
console.log(removeM('memory'));


// printObject
console.log('Problem 6: printObject');


function printObject (object) {
  for (var key in object){
    console.log(key + ' is '+object[key])
  }
}

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });


// vowels
console.log('Problem 7: vowels');

function vowels (str) {
  var split = str.split('');
  var vowels = []

  //  console.log (split)
  for (var i = 0; i < split.length; i ++) {

    if (split[i] == 'a' || split[i]== 'e' || split[i]== 'i' || split[i]== 'o' || split[i]== 'u') {

      vowels.push(split[i])
    }
  }return vowels;
}

console.log(vowels('alabama'));
console.log(vowels('What evil odd ducks!'));


// twins
console.log ('Problem 8: twins');

function twins (array){
  for (var i = 0; i < array.length; i+=2){
    if (array[i] != array [i+1]){
      return false;
    } else if (array.length%2 != 0){
      return false;
    }
  } return true;
}


console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', undefined]));


// or
console.log('Problem 9: or')

var array = []

function or (array) {
for (var i = 0; i < array.length; i++) {
  if (array[i]) {
    return true;
  }
}
return false

}

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));


// unique
console.log('Problem 10: unique')

function unique (arr){
  arr.sort()
  // console.log (arr)
  for (var i = 0; i<arr.length-1; i++){
    if (arr[i] === arr[i+1]){
      arr.splice([i+1],1)
      i--;
    }
  }return arr
}


console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));
