/* 
  Array: Remove Duplicates

  Given a sorted array, remove duplicate values. 
  Because array elements are already in order, all duplicate values will be grouped together.

  Bonus: solve this without using any nested loops.
  Bonus: Do it in-place
  Bonus: Do it in-place with no nested loop
*/


function removeDuplicates(sortedArr) {
  const dedupedArr = [];

  for (let i = 0; i < sortedArr.length; ++i) {
    if (sortedArr[i] !== dedupedArr[dedupedArr.length - 1]) {
      dedupedArr.push(sortedArr[i]);
    }
  }
  return dedupedArr;
}

function removeDuplicatesHash(sortedArr) {
  const seen = {};
  const dedupedArr = [];

  for (let i = 0; i < sortedArr.length; i++) {

    const item = sortedArr[i];

    if (seen.hasOwnProperty(item) === false) {
      seen[item] = true;
      dedupedArr.push(item);
    }
  }
  return dedupedArr;
}


// skip over dupes and then when you find non dupe
// replace indexes with the non dupes
// cut array length at end
function removeDuplicatesInPlace(sortedArr) {

}