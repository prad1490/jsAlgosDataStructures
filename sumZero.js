//Naive Solution
/* function sumZero(array) {
  let getArray = array.sort();
  for (let i = 0; i < getArray.length; i++) {
    for (let j = i + 1; j < getArray.length; j++) {
      if (getArray[i] + getArray[j] === 0) {
        return [getArray[i], getArray[j]];
      }
    }
  }
} */

//better Soln

function sumZero(array) {
  array.sort();
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) return [array[left], array[right]];
    else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
sumZero([5, 0, 3, 1, 4, 6, -4]);
