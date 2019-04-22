'use strict'

let money, dateOfBorn;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    dateOfBorn = prompt("Ваша дата рождения в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");

    }
}
start();



let appData = {
    budget: money,
    timeData: dateOfBorn,
    expenses: {

    },
    optionalExpenses: {},
    income: [],
    saving: true
};


function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
    
        if ((typeof (a)) === "string" && (typeof (a)) != null && typeof (b) === "string" &&
            (typeof (a)) != null && a != "" && b != "" && a.length < 50) {
            console.log("Готово");
            appData.expenses[a] = b
        } else {
            i = i - 1;
            console.log("Ошибка, не заполненны поля");
        }
    };
}
chooseExpenses();


function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();


function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();



function checkSavings(){
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

let first = 1,
second = 2,
thrist = 3;

function chooseOptExpenses(){
    let a = prompt("Статься необязательных расходов?", ""),
    b = prompt("Статься необязательных расходов?", ""),
    c = prompt("Статься необязательных расходов?", "");


        appData.optionalExpenses[1] = a;
        appData.optionalExpenses[2] = b;
        appData.optionalExpenses[3] = c;

}
chooseOptExpenses();
