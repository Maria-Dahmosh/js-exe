//exe1.1
function yesOrNo(boolValue) {
  return boolValue ? "Yes" : "No";
}
//console.log(yesOrNo(false));

//exe 2.1
function sumOfLowestNumbers(arr2) {
  const sortedArray = arr2.sort(function (a, b) {
    return a - b;
  });

  return sortedArray[0] + sortedArray[1];
}
arr2test1 = [19, 5, 42, 2, 77];
arr2test2 = [10, 343445353, 3453445, 3453545353453];

console.log(sumOfLowestNumbers(arr2test1));
