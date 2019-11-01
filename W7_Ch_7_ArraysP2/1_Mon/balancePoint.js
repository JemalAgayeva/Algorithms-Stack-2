/* 
  Balance Point

  Write a function that returns whether the given
  array has a balance point between indices, 
  where one side’s sum is equal to the other’s. 
  
  Input: [1,2,3,4,10]
  Output: true ( between indices 3 & 4 )

  Input: [1,2,4,2,1]
  Output: false
*/

// balance point is between indices
function balancePoint(arr) {
  const length = arr.length

  if (length < 2)
    return false;

  let left = arr[0], right = 0;

  for (let i = 1; i < length; i++) {
    right += arr[i];
  }

  for (let i = 1; i < length; i++) {
    if (left === right)
      return true;

    const num = arr[i];
    right -= num;
    left += num;
  }
  return false;
}