/* 
  Alumni was asked this and given bonus

  Array: Binary Search

  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .

  useful methods:
    - .slice(startIdx, endIdx)
      - endIdx is exclusive, returns a copy of the specified portion of array or string

  Bonus: return how many times the given number occurs (0 or n)
*/

function binarySearch(arr, val) {
  let copy = arr.slice();

  while (copy.length) {

    const mid = Math.floor(copy.length / 2), item = copy[mid];
    if (item === val) return true;

    if (item < val) {
      copy = copy.slice(mid + 1);
    } 
    else {
      copy = copy.slice(0, mid);
    }
  }

  return false;
}


function binarySearchNoSlice(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length -1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor(rightIdx - leftIdx / 2);

    if (arr[midIdx] === val) {
      return true;
    }

    if (val < arr[midIdx]) {
      rightIdx = midIdx - 1;
    }
    else {
      leftIdx = midIdx + 1;
    }
  }
  return false;
}