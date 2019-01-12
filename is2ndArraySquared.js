function isSame(ar1, ar2) {
  if (ar1.length !== ar2.length) return false;
  let arObj1 = {};
  let arObj2 = {};
  for (let k1 of ar1) {
    arObj1[k1] = (arObj1[k1] || 0) + 1;
  }
  for (let k2 of ar2) {
    arObj2[k2] = (arObj2[k2] || 0) + 1;
  }
  console.log(arObj1);
  console.log(arObj2);
  for (let ob1 in arObj1) {
    if (!(ob1 ** 2 in arObj2)) return false;
    if (arObj2[ob1 ** 2] !== arObj1[ob1]) return false;
  }

  return true;
}

isSame([2, 1, 2], [1, 4, 45]);
