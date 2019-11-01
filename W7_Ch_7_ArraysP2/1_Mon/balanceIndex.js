/* 
  Balance Index

  Here, a balance point is on an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  Return -1 if none exist.
  
  Input: [-2,5,7,0,3]
  Output: 2
  
  Input: [9,9]
  Output: -1
*/

// balance point must be on an index
function balanceIndex(arr) {
  if (arr.length < 3) return -1;

  let left = arr[0], right = 0;
  for (let i = 2; i < arr.length; i++) {
    right += arr[i];
  }

  for (let i = 1; i < arr.length - 1; i++) {
    if (left === right) return i;
    right -= arr[i + 1];
    left += arr[i];
  }
  return -1;
}

function balanceIndexOutsideIn(arr) {
  if (arr.length < 3) return -1;
  
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let leftSum = 0;
  let rightSum = 0;

  while (leftIdx < rightIdx) {
    if (arr[leftIdx] == 0) {
      leftIdx++;
      continue;
    }
    if (arr[rightIdx] == 0) {
      rightIdx--;
      continue;
    }
    if (leftSum == rightSum) {
      leftSum += arr[leftIdx];
      rightSum += arr[rightIdx];
      leftIdx++;
      rightIdx--;
    }
    else if (leftSum < rightSum) {
      leftSum += arr[leftIdx];
      leftIdx++;
    }
    else {
      rightSum += arr[rightIdx];
      rightIdx--;
    }
  }
  if (leftSum == rightSum && leftIdx == rightIdx) {
    return leftIdx;
  }
  else {
    return -1;
  }
}

console.log(balanceIndex([-2, 5, 7, 0, 3]));
console.log(balanceIndexOutsideIn([-2, 5, 7, 0, 3]));