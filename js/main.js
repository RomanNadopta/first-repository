let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    expensesItemBtn.disabled = true;
    optionalexpensesBtn.disabled = true;
    countBudgetBtn.disabled = true;







let money, time;


startBtn.addEventListener('click', function() {
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt ("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money =="" || money == null) {
      money = +prompt ("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesItemBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function(){
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
           b = expensesItem[++i].value;
          
           if ((typeof(a))=== 'string' && (typeof(a)) != null && 
           (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
           } else {
             console.log("bad results");
             i = i - 1;
           }
  }
  expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function(){
  for (let i = 0; i <= optionalexpensesItem.length; i++) {
    let questionOptExpenses = optionalexpensesItem[i].value;
    appData.optionalExpenses[i] = questionOptExpenses;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBudgetBtn.addEventListener('click', function(){
  if(appData.budget != undefined) {

    appData.moneyPerDay = (appData.budget / 30).toFixed(); 
    daybudgetValue.textContent = appData.moneyPerDay;

    if(appData.moneyPerDay < 100) {
      levelValue.textContent = "минимальный  уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    levelValue.textContent = "medium level rich";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "high level rich";
    } else {
    levelValue.textContent = "Error";
    }
  } else {
    daybudgetValue.textContent = 'error';
  }
 
});

chooseIncome.addEventListener('input', function(){
  let items = chooseIncome.value;
  console.log(1);
  if (isNaN(items) || items != '') {
  appData.income = items.split(',');
  incomeValue.textContent = appData.income;
  }
});

checkSavings.addEventListener('click', function(){
  if(appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function(){
  if( appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value; 
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;


    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function(){
  if( appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value; 
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;


    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
    let appData = {
      budget: money,
      expenses: {},
      optionalExpenses: {},
      income:[],
      savings: false
    };