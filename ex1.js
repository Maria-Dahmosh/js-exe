//exe1.1
function yesOrNo(boolValue) {
  return boolValue ? "Yes" : "No";
}
console.log(yesOrNo(false));

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

//exe 2.2
function binaryToDecimal(arrOfNum) {
  const binaryNum = arrOfNum.join("");
  const decimalNum = parseInt(binaryNum, 2);
  return decimalNum;
}
console.log(binaryToDecimal([1, 0, 1, 1])); //output: 11

//exe 2.3
function nextSquare(num2) {
  SqrtRoot = Math.sqrt(num2);
  if (num2 % SqrtRoot == 0) {
    nextSqrtRoot = SqrtRoot + 1;
    return nextSqrtRoot * nextSqrtRoot;
  }
  return -1;

  //return Number.isInteger(sqrtRoot) ? Math.pow(sqrtRoot + 1, 2) : -1;
}

console.log(nextSquare(114));

//exe 2.4
function findDifferent(arr) {
  const repetitions = {};

  arr.forEach((element) => {
    repetitions[element] ? repetitions[element]++ : (repetitions[element] = 1);
  });

  for (const element in repetitions) {
    if (repetitions[element] === 1) {
      return parseInt(element); // Convert the key back to a number
    }
  }

  return null;
}
console.log(findDifferent([1, 1, 2, 1, 1, 1]));

//exe 2.5
function Summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(Summation(8));

//exe 2.6
function yearsAndCenturies(num) {
  return parseInt((num - 1) / 100 + 1);
}
console.log(yearsAndCenturies(1900));

//exe 2.7
function basicOp(op, num1, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      return "operator is not valid";
  }
}
console.log(basicOp("+", 4, 7));

//exe 3.1
function nb_year(p0, percent, aug, p) {
  percent = percent / 100;
  let population = p0 + p0 * percent + aug;
  let n = 1;
  while (population < p) {
    population = population + population * percent + aug;
    n++;
  }
  return n;
}
console.log(nb_year(1500000, 2.5, 10000, 2000000));

//exe 3.2
function busPassengers(arr) {
  let peopleOnBus = 0;
  for (const [up, down] of arr) {
    peopleOnBus = peopleOnBus + up - down;
  }
  return peopleOnBus >= 0 ? peopleOnBus : "arr is not valid";
}
console.log(
  busPassengers([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 3],
  ])
);

//exe 4.1
function Fibonacci(num) {
  const fibonacciArray = [1, 1];
  for (let i = 2; i < num; i++) {
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]); //or fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fibonacciArray;
}
console.log(Fibonacci(5));

//exe 4.2
function Tribonacci(num) {
  const tribonacciArray = [1, 1, 1];
  for (let i = 3; i < num; i++) {
    tribonacciArray.push(
      tribonacciArray[i - 1] + tribonacciArray[i - 2] + tribonacciArray[i - 3]
    );
  }
  return tribonacciArray;
}
console.log(Tribonacci(8));

//exe 5.1
function trimmingString(str) {
  return str.slice(1, -1);
  // strArray = str.split("");
  // strArray.pop();
  // strArray.shift();
  // return strArray.join("");
}
console.log(trimmingString("abcdefg"));

//exe 5.2
function repeat_str(count, str) {
  return str.repeat(count);
}
console.log(repeat_str(5, "maria"));
// let repeatedStr = "";
//   for (let i = 0; i < count; i++) {
//     repeatedStr += str;
//   }
//   return repeatedStr;

//exe 5.3
function toCamelCase(str) {
  const strArray = str.split("-");
  for (let i = 1; i < strArray.length; i++) {
    strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
  }
  return strArray.join("");
}
console.log(toCamelCase("the-stealth-warrior"));

//exe 5.4
function toWeirdCase(str) {
  const strArray = str.split(" ");
  for (let i = 0; i < strArray.length; i++) {
    let wordArray = strArray[i].split("");
    for (let j = 0; j < wordArray.length; j++) {
      wordArray[j] =
        j % 2 === 0 ? wordArray[j].toUpperCase() : wordArray[j].toLowerCase();
    }
    strArray[i] = wordArray.join("");
  }
  return strArray.join(" ");
}
console.log(toWeirdCase("Weird string case"));

//exe 5.5
function toWeirdCase(str) {
  const strArray = str.split(" ");
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].slice(0, 1).toUpperCase();
  }
  return strArray.join(".");
}
console.log(toWeirdCase("Maria Dahmosh"));

//exe 5.6
function maskify(str) {
  const strArray = str.split("");
  if (strArray.length > 4) {
    for (let i = 0; i < strArray.length - 4; i++) {
      strArray[i] = "#";
    }
  }
  return strArray.join("");
}
console.log(maskify("Nananananananananananananananana Batman!"));

//exe 5.7
function shortestWord(str) {
  const strArray = str.split(" ");
  minLength = strArray[0].length;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length < minLength) {
      minLength = strArray[i].length;
    }
  }
  return minLength;
}

console.log(shortestWord("one aaaa bbbbb jja"));

//exe 5.8
function longestWord(str) {
  const strArray = str.split(" ");
  let maxLength = strArray[0].length;
  let longestWord = strArray[0];
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > maxLength) {
      minLength = strArray[i].length;
      longestWord = strArray[i];
    }
  }
  return longestWord;
}

console.log(longestWord("one aaaa bbbbb jja"));
