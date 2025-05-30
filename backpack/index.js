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

function arrayFilteringAndMapping(users) {
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

// console.log(arrayFilteringAndMapping(users));

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

const numbers = [20, 45, 62, 31, 96, 55, 12, 18, 34, 36, 51]; //  multiple times i using this array for different function
// console.log(sumOfAllEvenNum(numbers));

//! 08. Task: Find Maximum Value:
//* Write a function that takes an array of numbers and returns the maximum value.

function findMaximumValue(arr) {
  let largestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // all numbers in array
    const element = arr[i];
    // console.log(element);
    if (element > largestNum) {
      largestNum = arr[i];
    }
  }

  return largestNum;
}

// console.log(findMaximumValue(numbers));

//! 7. Task: Unique Values
//* Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

function uniqueValues(arr) {
  let newArray = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     const element = arr[i];
  //     // console.log(element);
  //     if (element === arr) {
  //       console.log(element);
  //     }
  //   }

  arr.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });

  //   console.log(newArray);

  return newArray;
}

const numbersTwo = [45, 16, 35, 16, 45, 37, 8, 12, 15, 8, 8, 17, 12];

// console.log(uniqueValues(numbersTwo));

//* 2.Task: Object Manipulation
//! Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

function representingBooks(books) {
  let newArray = [];
  books.map((book) => {
    newArray.push(book.title);
  });
  return newArray;
}

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

// console.log(representingBooks(books));

//! 6. Task: Leap Year Checker
//** */ Write a function that determines whether a given year is a leap year.
//* Example: Happy New Year

function leapYearChecker(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 !== 0) {
        return "Happy New Year";
      }
    }
    return "Happy New Year";
  } else {
    return "Not Leap Year";
  }
}

const year = 2024;
// console.log(leapYearChecker(year));
