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
      savings: true,
      chooseExpenses: function () {
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
      },
      detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(); 
 
        alert("everyday budjet" + appData.moneyPerDay);
      },
      detectLevel: function () {
        if(appData.moneyPerDay < 100) {
          console.log("минимальный  уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
        console.log("medium level rich");
        } else if (appData.moneyPerDay > 200) {
          console.log("high level rich");
        } else {
        console.log("Error");
        }
      },
      checkSavings: function () {
        if(appData.savings == true) {
          let save = +prompt("How amount accumulation?"),
          percent = +prompt("At what percentage?");
      
          appData.monthIncome = save/100/12*percent;
          alert("Income per month from your deposit" + appData.monthIncome);
        }
      },
      chooseOptExspenses: function () {
        for (let i = 1; i <= 3; i++) {
          let questionOptExpenses = prompt("Статья необязательных расходов?");
          appData.optionalExpenses[i] = questionOptExpenses;
          console.log(appData.optionalExpenses);
        }
      },
      chooseIncome: function () {
        let items = prompt('what will be bring additional income? (list through comma)', '');
        if (typeof(items) !== 'string' || items == "" || typeof(items) == null) {
          console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
        appData.income = items.split(',');
        appData.income.push(prompt('Maybe something more?'));
        appData.income.sort();
        }
         appData.income.forEach (function(itemmassive, i) {
          alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
         });
   
      },

    };
      for (let key in appData) {
        console.log("Наша программа включает в себя данные:" + key + " - " + appData[key]);
      }

    
    // Лекции

    // let options = {
    //   width: 1024,
    //   height: 1024,
    //   name: "test"
    // };

    // console.log(options.name);
    // options.bool =false;
    // options.colors = {
    //   border: "black",
    //   bg: "red"
    //     };

    //     delete options.bool;

    //     console.log(options);

    //     for (let key in options) {
    //       console.log('Свойство' + key + 'имеет значение' + options[key]);
    //     }

    //     console.log(Object.keys(options).length);


// let arr = ["first", 2, 3, "four", 5];



// for (let  i =0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");

// arr.forEach(function(item, i, mass){
//   console.log(i + ': ' + item + "( массив: " + mass + ')');
// });

// console.log(arr);


// let mass = [1,3,4,6,7];

// for (let key of mass) {
//   console.log(key);
// }


// let ans = prompt("", ""),
// arr = [];


// arr = ans.split(',');
// console.log(arr);

// let arr = ['aawe', 'zzzz','pp','rpa'],
// i = arr.join(', ');

// console.log(i);

// let arr = ['aawe', 'zzzz','pp','rpa'],
// i = arr.sort();

// console.log(arr);


// let arr = [1,15,4],
// i = arr.sort(compareNum);

// function compareNum(a,b) {
//   return a-b;
// }

// console.log(arr);
