//* 1.Task: Array Filtering and Mapping
//! Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const users = [
  {
    name: "jon due",
    age: 22,
    gender: "male",
  },
  {
    name: "Mary J. Palmer",
    age: 46,
    gender: "female",
  },
  {
    name: "Aja M. Pope",
    age: 36,
    gender: "female",
  },
  {
    name: "Wilma C. Marr",
    age: 22,
    gender: "female",
  },
  {
    name: "William D. Peres",
    age: 68,
    gender: "male",
  },
  {
    name: "Eddie V. Olvera",
    age: 42,
    gender: "male",
  },
];

function arrayFilteringAndMapping() {
  // filter all females
  const females = users.filter((user) => user.gender === "female");
  //*   console.log("females", females);
  // filter all data without females gender
  const remainingData = users.filter((user) => user.gender !== "female");
  //*   console.log(remainingData);
  // map all remaining user with his name
  const result = remainingData.map((data) => data.name);
  return result;
}

// console.log(arrayFilteringAndMapping());

//* 5.Task: Array Reduction
//! Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array

function sumOfAllEvenNum(numbers) {
  //   if (numbers / 2 === 0) {
  //     console.log("this is even number");
  //   } else {
  //     console.log("this is odd number");
  //   }

  //! Way 1

  //   let sum = 0;

  //   for (number of numbers) {
  //     console.log("number", number);
  //     if (number % 2 === 0) {
  //       console.log("this is even number");

  //       sum += number;
  //       console.log(sum);
  //     } else {
  //       console.log("this is odd number");
  //     }
  //   }

  //! Way 2

  const filterEvenNum = numbers.filter((number) => number % 2 === 0);
  //   console.log(filterEvenNum);
  const sumOfAllEvenNum = filterEvenNum.reduce(
    (acc, current) => acc + current,
    0
  );
  return sumOfAllEvenNum;
}
const numbers = [20, 45, 62, 31, 96, 55, 12, 18, 34, 36, 51];
// console.log(sumOfAllEvenNum(numbers));
