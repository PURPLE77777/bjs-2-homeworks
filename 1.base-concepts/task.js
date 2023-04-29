"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant == 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    let firstRoot = (-b + Math.sqrt(discriminant) ) / (2 * a),
      secondRoot = (-b - Math.sqrt(discriminant) ) / (2 * a);
    arr.push(firstRoot, secondRoot);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent) / 100 / 12;
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);
  
  if (![percent, contribution, amount, countMonths].every((item) => {
    return typeof item == 'number' && !isNaN(item);
  })) return false;

  let creditSum = (amount - contribution) * (percent + (percent / (((1 + percent) ** countMonths) - 1)));

  return Math.round(creditSum * countMonths * 100) / 100;
}