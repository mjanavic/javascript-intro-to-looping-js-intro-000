function forLoop(array) {
  array = [];
  for(var i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
    }
  }
  return array;
}