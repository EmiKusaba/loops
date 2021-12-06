//Use a do...while loop to console.log the numbers from 1 to 1000.

do {
  i = 1;
  console.log(i)
  i++
} while (i <= 1000)

console.log(result);


let data = [{
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
},
{
  firstName: "Emi",
  lastName: "Kusaba",
  birthDate: "June 15, 1986",
  gender: "female"
},
{
  firstName: "Louis",
  lastName: "Khon",
  birthDate: "Sep 15, 2020",
  gender: "male"
},
{
  firstName: "Edward",
  lastName: "Khon",
  birthDate: "Sep 20, 1988",
  gender: "male"
},
{
  firstName: "Argo",
  lastName: "Khon",
  birthDate: "Aug 14, 2018",
  gender: "male"
}
]

//Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
let oddNumBd = () => {
  for (let key in data) {
    if (key === "birthDate") {
      value = data[key]
      tokens = value.split(" ")
      year = parseInt(tokens[2])
      if (year % 2 == 1) {
        console.log(value)
      }
    }
  }
}
//Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
//Use .map() to map over the arrayOfPersons and console.log() their information.

names = data.map((x) => {
  const fullName = `${x.firstName} ${x.lastName}`
  return fullName
})

console.log(names)

//Use .filter() to filter the persons array and console.log only males in the array.

const males = data.filter((x) => {
  return x['gender'] === "male"
})
console.log(males);
//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.