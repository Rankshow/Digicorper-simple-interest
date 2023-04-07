
// function that will calculate the simple interest result

const calculatePRI = () => {
  // storing the value in a variable
  const principal = document.querySelector(".principal").value;
  const rate = document.querySelector(".rate").value;
  const time = document.querySelector(".time").value;
  const result = document.querySelector(".result");

  const totalSum = Math.round(principal * rate * time) / 100;

  // When the button is submit and ther is no value enter
  if(!totalSum){
    return result.innerHTML = `
     <h3>Please enter a value in the input</h3>
    `
  }


  result.innerHTML = `
    <h2>The sum of the PRT is <span>${totalSum}</span></h2>
  `
}