'use strict'


let money = +prompt("Ваш бюджет на месяц?", "");
let dateOfBorn = prompt("Ваша дата рождения в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: dateOfBorn,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};


let answ = prompt("Введите обязательную статью расходов в этом месяце", ""),
answ1 = prompt("Во сколько обойдется?", ""),
answ2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
answ3 = prompt("Во сколько обойдется?", "");    

appData.expenses.answ = answ1
appData.expenses.answ2 = answ3




alert ("Ваш бюджет на день " + money / 30);