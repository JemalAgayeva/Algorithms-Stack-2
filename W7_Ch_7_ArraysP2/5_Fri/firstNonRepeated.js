/* 
  Return the element with the lowest index that is
  not repeated in a given array of integers
*/

function firstUnique(arr) {

  const freq = {};

  for (const num of arr) {
    if (freq.hasOwnProperty(num)) 
      freq[num]++;
    else
      freq[num] = 1;
  }

  // obj key order is not guaranteed
  // so loop back thru arr for the proper order of elems
  for (const num of arr) {
    if (freq[num] === 1) return num;
  }
  return null; // all dupes
}

// Using nested loop
// If nested loops starts at i + 1, and there was a dupe before
// it would give a false positive b/c of only looking for dupes in front
function firstUniq(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let isUnique = true;

    for (let j = 0; j < arr.length; ++j) {
      if (i !== j && arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return arr[i];
    }
  }
  return null; // all dupes
}