'use strict'

let money, dateOfBorn;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    dateOfBorn = prompt("Ваша дата рождения в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");

    }
}
// start();



let appData = {
    budget: money,
    timeData: dateOfBorn,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function () {
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
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let opt = prompt("Статься необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },


    choseIncome: function () {

        for (let i = 0; i < 1; i++) {

            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

            if ((typeof (items)) === "string" && (typeof (items)) != null && items != "") {

                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?", ""));
                appData.income.sort();

            } else {
                --i;
                console.log("Ошибка, не заполненны поля");
            };

        }
        appData.income.forEach(function (item, i, arr) {                          // Не могу понять, по какой причине алерт выскакивает ровно столько кол-во раз, сколько пользователь вводит слов
            appData.income.shift();                                               
            alert("Способы доп. заработка: " + arr)
        });
    }

}

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key)
};