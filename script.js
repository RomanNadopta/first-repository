let money, time;

function start() {
   money = +prompt ("Ваш бюджет на месяц?", '');
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');
    
    while(isNaN(money) || money =="" || money == null) {
      money = +prompt ("Ваш бюджет на месяц?", '');
    }
}
start();

    let appData = {
      budget: money,
      expenses: {},
      optionalExpenses: {},
      income:[],
      savings: true
    };

    function chooseExpenses() {
      for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
               b = prompt("Во сколько обойдется", '');
              
               if ((typeof(a))=== 'string' && (typeof(a)) != null && 
               (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
               } else {
                 console.log("bad results");
                 i = i - 1;
               }
      }
    }
chooseExpenses();

function detectDayBudget() {
 appData.moneyPerDay = (appData.budget / 30).toFixed(); 
 
 alert("everyday budjet" + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel () {
if(appData.moneyPerDay < 100) {
  console.log("минимальный  уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
console.log("medium level rich");
} else if (appData.moneyPerDay > 200) {
  console.log("high level rich");
} else {
console.log("Error");
}
}
detectLevel();

function chooseOptExspenses () {
  for (let i = 1; i <= 3; i++) {
    let questionOptExpenses = prompt("Статья необязательных расходов?");
    appData.optionalExpenses[i] = questionOptExpenses;
    console.log(appData.optionalExpenses);
  }
}

chooseOptExspenses ();



function checkSavings() {
  if(appData.savings == true) {
    let save = +prompt("How amount accumulation?"),
    percent = +prompt("At what percentage?");

    appData.monthIncome = save/100/12*percent;
    alert("Income per month from your deposit" + appData.monthIncome);
  }
}

checkSavings();



