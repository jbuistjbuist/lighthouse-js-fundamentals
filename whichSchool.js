
const age = 19

function whichSchool (a) {
  if (a < 13) {
    return "Elementary School";
  } else if (a >= 13 && a <= 18) { 
    return "Secondary School" 
  } else {
    return "Lighthouse Labs"
  }
}

console.log(whichSchool(age))
