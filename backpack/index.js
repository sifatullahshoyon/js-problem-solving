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

console.log(arrayFilteringAndMapping());
