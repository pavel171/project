
const days=30;
let money = Number(prompt("Ваш бюджет на месяц?"));
let time = prompt("Введите дату в формате YYYY-MM-DD");

let a = prompt("Введите обязательную статью расходов в этом месяце");
let b = Number(prompt("Во сколько обойдется?"));

let c = prompt("Введите обязательную статью расходов в этом месяце");
let d = Number(prompt("Во сколько обойдется?"));

let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalexpenses: {},
    income:[],
    saving:false
};

appData.expenses.a=b;
appData.expenses.c=d;

var result = (appData.budget/days);

console.log(result);