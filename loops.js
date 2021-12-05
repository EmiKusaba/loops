//Use a do...while loop to console.log the numbers from 1 to 1000.

do {
  i = 1;
  console.log(i)
  i++
} while (i <= 1000)

console.log(result);


let data = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}
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