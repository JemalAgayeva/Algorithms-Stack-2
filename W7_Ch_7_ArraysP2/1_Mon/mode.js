/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  Bonus:

  Second: memory constraints prevent using a new array.
  How does this affect your solution?

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

function findAllModes(arr) {
  if (arr.length === 1) return [arr[0]];
  
  const modes = [];
  const freq = {};
  let maxFreq = 0;
  let allSameFreq = true;

  for (const n of arr) {
    freq.hasOwnProperty(n) ? freq[n]++ : freq[n] = 1;

    if (freq[n] > maxFreq) {
      maxFreq = freq[n];
    }
  }

  for (const key in freq) {
    if (freq[key] === maxFreq) {
      // keys are strings, convert back to int
      modes.push(parseInt(key));
    }
    else {
      allSameFreq = false;
    }
  }
  // return empty array if allSameFreq, else return modes
  return allSameFreq ? [] : modes;
}