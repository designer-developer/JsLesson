'use strict'

let money, dateOfBorn;

let start1 = document.querySelector("#start"), // Кнопка "Начать расчет"
    rightBlock = document.querySelector(".result-table"), // Все блоки в правой части программы
    expensesItem = document.getElementsByClassName("expenses-item"), // Поля(input) c обязательными расходами
    confirm = document.getElementsByTagName('button')[0], // Кнопки “Утвердить” и “Рассчитать”
    confirm1 = document.querySelector("button.optionalexpenses-btn"),
    calculate = document.querySelector("button.count-budget-btn"),
    area1 = document.querySelectorAll('.optionalexpenses-item'), // Поля для ввода необязательных расходов
    budgetValue = document.getElementsByClassName('budget-value')[0], // 
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector(".day-value"),
    income = document.querySelector('#income'), // Поле возможного дохода
    sumArea = document.querySelector('#sum'), // Поле суммы
    percent = document.querySelector("#percent"), // Поле %
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    incomeItem = document.querySelector(".choose-income"),
    incomeValue = document.getElementsByClassName("income-value")[0],
    checkSavings = document.querySelector('#savings'),
    monthSavingValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingValue = document.getElementsByClassName('yearsavings-value')[0];
    

confirm.setAttribute("disabled", true);
confirm1.setAttribute("disabled", true);
for (let i = 0; i < expensesItem.length; i++) {
    expensesItem[i].addEventListener('input', function () {
        let items1 = document.querySelector('#expenses_1'),
            items2 = document.querySelector('#expenses_2'),
            items3 = document.querySelector('#expenses_3'),
            items4 = document.querySelector('#expenses_4');
        if (items1.value != '' && items2.value != '' && items3.value != '' && items4.value != '') {
            confirm.disabled = false;
        } else {
            confirm.setAttribute("disabled", true);
        }
    })
};



start1.addEventListener('click', function () {
    dateOfBorn = prompt("Ваша дата рождения в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = dateOfBorn;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(dateOfBorn)).getFullYear();
    monthValue.value = new Date(Date.parse(dateOfBorn)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(dateOfBorn)).getDate();
});

confirm.addEventListener('click', function () {
    let sum = 0;
        

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === "string" && (typeof (a)) != null && typeof (b) === "string" &&
            (typeof (a)) != null && a != "" && b != "" && a.length < 50) {
            console.log("Готово");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
            console.log("Ошибка, не заполненны поля");
        }
    }
    expensesValue.textContent = sum;

   appData.optionalExpenses = (appData.budget - sum) / 30;

});

confirm1.addEventListener('click', function () {
    for (let i = 0; i < area1.length; i++) {
        let opt = area1[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

calculate.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }

});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.saving == true) {
        appData.saving = false;
    } else {
        appData.saving = true
    }
});

sumArea.addEventListener('input', function () {
    if (appData.saving == true) {
        let sum = +sumArea.value,
            percent1 = +percent.value;

        appData.monthIncome = sum / 100 / 12 * percent1;
        appData.yearIncome = sum / 100 * percent1;

        monthSavingValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingValue.textContent = appData.yearIncome.toFixed(1);

    }
});


percent.addEventListener('input', function () {
    if (appData.saving == true) {
        let sum = +sumArea.value,
            percent1 = +percent.value;

        appData.monthIncome = sum / 100 / 12 * percent1;
        appData.yearIncome = sum / 100 * percent1;

        monthSavingValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingValue.textContent = appData.yearIncome.toFixed(1);

    }
});


let appData = {
    budget: money,
    timeData: dateOfBorn,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};
