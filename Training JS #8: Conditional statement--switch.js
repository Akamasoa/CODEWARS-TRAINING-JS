//In javascript, is another condition statement.switch

switch(n){
  case 1:  
    //code block
    break;
  case 2:
    //code block
    break;
  case ...:
    //code block
    break;

  default:       //default is optional, sometimes it can be omitted
    //code block
                 //The last one does not need break
}

/*
switch is the keyword, is the variable to switch, means when , following the ,you can add some executable statement, 
with keyword as termination(if you forgot "break", code will running with case 2, case 3...until a "break" appear),
like in the if..else statement.ncase 1n===1":"breakdefaultelse

In some cases, use the statement to look more clearly than the statement.switchif..else

For example, we can write a function to calculate what day is today, like this:
*/

function whatDayIsToday(n){
  //getDay() is a methods of Date(), we will learn them later.
  var day=new Date().getDay(),x; 
  switch (day){
    case 0:
      x="Today it's Sunday";
      break;
    case 1:
      x="Today it's Monday";
      break;
    case 2:
      x="Today it's Tuesday";
      break;
    case 3:
      x="Today it's Wednesday";
      break;
    case 4:
      x="Today it's Thursday";
      break;
    case 5:
      x="Today it's Friday";
      break;
    case 6:
      x="Today it's Saturday";
      break;
  }
  return x;
}

/*
Task
Complete function , function accept 1 parameters:, means the month of year, 
different month has different days (refer to the following table), return a number that how many days 
in this month(month is always greater than 0, less than or equal to 12).howManydaysmonth
*/

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+

//little tips: Use for most of the cases can reduce your work.default
  

  function howManydays(month){
  var days;
  switch (){
  
  }
  return days;
}
