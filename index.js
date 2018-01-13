// Code your solution here:
 function driversWithRevenueOver(arr, money) {
   return arr.filter(person => person.revenue > money);
 }
 function driverNamesWithRevenueOver(arr, money) {
   const newArr = arr.filter(person => person.revenue > money);
   return newArr.map(person => person.name);
 }
 function exactMatch(arr, obj) {
   const key = obj.key
   return arr.filter(person => )
 }
