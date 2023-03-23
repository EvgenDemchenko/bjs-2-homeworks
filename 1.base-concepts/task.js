"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2)-4*a*c;
  
  if(discriminant === 0) {
    arr.push(-b/(2*a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-b - Math.sqrt(discriminant) )/(2*a));
  }
  console.log(arr);
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentage = (percent / 100) / 12;
  let currAmount;
  let monthlyPayment;
  let totalSumm;

  if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    console.log('Неверное значение одного из параметров');
    return false;
  }

  currAmount = amount - contribution;
  currAmount < 0? currAmount = 0 : currAmount;
  monthlyPayment = currAmount * (percentage + (percentage / (((1 + percentage)** countMonths) - 1)));
  totalSumm = monthlyPayment * countMonths;


  return +totalSumm.toFixed(2);
}