function minSubArrayLen(ar, num) {
  for (let i of ar) {
    if (num === ar[i]) return 1;
  }
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  let cur_sum = 0;
  while (end < ar.length) {
    while (cur_sum < num) cur_sum += ar[end++];
    while (cur_sum > num && start < ar.length) {
      if (end - start < minLength) minLength = end - start;
      cur_sum -= ar[start++];
    }
  }
  return minLength === Infinity ? 0 : minLength;
}
minSubArrayLen([1, 10, 3, 40, 18], 50);
