//O(n2)
function returnMaxConsecutiveSum(ar, num) {
  if (ar.length < num) return null;
  var max = -Infinity;
  for (var i = 0; i <= ar.length - num; i++) {
    // ar.length-num bcz we need to iterate only till 2 from 1,2,3 input array ,i.e possible sums are  1+2, 2+3, since last is 2+3 so we iterate till 2 and get 2nd term of 3, there is no number after 3 in input array 1,2,3
    //i.e, if num is 3 , input array is 1,2,3,4,5,6 then last sum we get from 4, 4+5+6, so iterate till 4
    var temp = 0;
    for (var j = 0; j < num; j++) {
      temp += ar[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
}

returnMaxConsecutiveSum([1, 2, 3], 2); // 1+2 = 3, 2+3 = 5 thus return 5
returnMaxConsecutiveSum([1, 2, 5, 2, 8, 1, 5], 4); //17

//O(N)
function Nform(ar, num) {
  if (ar.length < num) return null;
  let max = 0;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += ar[i];
  }
  max = sum;
  for (let i = num; i < ar.length; i++) {
    sum = sum - ar[i - num] + ar[i];
    max = Math.max(sum, max);
  }

  return max;
}
Nform([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
