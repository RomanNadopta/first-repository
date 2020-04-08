let money = +prompt ("Ваш бюджет на месяц?", ''),
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');

    let appData = {
      budget: money,
      expenses: {},
      optionalExpenses: {},
      income:[],
      savings: false
    };


for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
         b = prompt("Во сколько обойдется", '');
         
         appData.expenses[a] = b;
         if ((typeof(a))=== 'string' && (typeof(a)) != null && 
         (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
          console.log('done');
          appData.expenses[a] = b;
         } else {
           console.log("bad results");
           i--;
         }
}
// let i = 0;

// while ( i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//          b = prompt("Во сколько обойдется", '');
//   appData.expenses[a] = b;
//          if ((typeof(a))=== 'string' && (typeof(a)) != null && 
//          (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//           console.log('done');
//           appData.expenses[a] = b;
//          } 
//          else {
//           console.log("bad results");
//           i--;
//         }
//         i++;
// }
// let i = 0;
//          do {
//           let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//                b = prompt("Во сколько обойдется", '');
//           appData.expenses[a] = b;
//                    if ((typeof(a))=== 'string' && (typeof(a)) != null && 
//                    (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//                     console.log('done');
//                     appData.expenses[a] = b;
//                    } else {
//                               console.log("bad results");
//                               i--;
//                             }
//                             i++; 
//          } 
//          while (i < 2);

 appData.moneyPerDay = appData.budget / 30;
 alert("everyday budjet" + appData.moneyPerDay);

 if(appData.moneyPerDay < 100) {
  console.log("минимальный  уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
console.log("medium level rich");
} else if (appData.moneyPerDay > 200) {
  console.log("high level rich");
} else {
console.log("Error");
}
