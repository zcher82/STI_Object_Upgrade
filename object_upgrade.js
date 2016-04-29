
function Person(name, number, salary, rating) {
  this.employeeName = name;
  this.employeeNumber = number;
  this.employeeSalary = salary;
  this.employeeRating = rating;
};

var atticus = new Person('Atticus', 2405, 47000, 3);
var jem = new Person('Jem', 62347, 63500, 4);
var boo = new Person('Boo', 11435, 54000, 3);
var scout = new Person('Scout', 6243, 74750, 5);

var employees = [atticus, jem, boo, scout];

var percentage = function(empName) {
  var percent = 0;
  switch (empName.employeeRating) {
    case 0:
    case 1:
    case 2:
      percent = 0;
      break;
    case 3:
      percent = 4;
      break;
    case 4:
      percent = 6;
      break;
    case 5:
      percent = 10;
      break;
  }
  if (empName.employeeNumber <= 4) {
    percent += 5;
  }
  if (empName.employeeSalary > 65000) {
    percent -= 1;
  }
  if (percent > 13) {
    percent = 13;
  }
  return percent;
}

function newArray(origArray) {
  var empArray = [];
  var perc = percentage(origArray);
  empArray[0] = origArray.employeeName;
  empArray[1] = perc + '%';
  empArray[2] = Math.round(((perc/100) + 1) * origArray.employeeSalary);
  empArray[3] = Math.round(empArray[2] - origArray.employeeSalary);
  return empArray;
};
for (var i = 0; i < employees.length; i++) {
  console.log(newArray(employees[i]));
}
