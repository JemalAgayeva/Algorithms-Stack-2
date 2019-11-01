/* 
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  
  Input: [3,0,1]
  Output: 2

  Second: now the lowest value can now be any integer (including negatives),
  instead of always being 0.

  Input: [2,-4,0,-3,-2,1]
  Output: -1
  
  Input: [5,2,7,8,4,9,3]
  Output: 6
*/

// below solutions coded to work when min is not always 0

function missingValue(arr) {
  
  const seen = {};
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    
    if (!seen[arr[i]]) seen[arr[i]] = true;
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  let val = min + 1;

  while (val < max) {
    if (!seen[val]) return val;
    val += 1;
  }
  return -1;
}

function missing(arr) {

  let min = max = arr[0];
  let sum = 0;
  let expectedSum = 0;

  for (const n of arr) {
    if (n < min) min = n;
    if (n > max) max = n;
    sum += n;
  }

  for (let i = min; i <= max; i++) {
    expectedSum += i;
  }

  return sum == expectedSum ? null : expectedSum - sum;
}