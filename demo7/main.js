//index signatures
var todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
var prop = "Pizza";
console.log(todaysTransactions[prop]);
var todaysNet = function (transactions) {
    var total = 0;
    for (var transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
var student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
for (var key in student) {
    console.log("".concat(key, ": ").concat(student[key]));
}
Object.keys(student).map(function (key) {
    console.log(student[key]);
});
var logStudentKey = function (student, key) {
    console.log("Student ".concat(student[key]));
};
var monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (var revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
