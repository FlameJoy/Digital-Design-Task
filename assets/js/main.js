"use strict"

function getDayInfo() {
  let date = document.getElementById("date").value;
  let arr = date.split('-');
  date = new Date(arr[0], arr[1]-1, arr[2]);

  let day = getWeekDay(date);
  let week = getWeekNum(date, arr[2]);
  let month = getYearMonth(date);
  let year = date.getFullYear();
  
  alert(day + ", " + week + " " + month + " " + year + " года");
}

function getWeekDay(date) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  return days[date.getDay()];
}

function getWeekNum(date, day) {
  let weekNum = 1;
  let weekDay = date.getDay();
  weekDay = (weekDay === 0) ? 6 : weekDay - 1;
  let monday = 1 + (7 - weekDay);

  while(monday <= day) {
    weekNum++;
    monday += 7;
    }

  let weekNums = ["1 неделя", "2 неделя", "3 неделя", "4 неделя", "5 неделя"];

  return weekNums[weekNum - 1]; 
}

function getYearMonth(date) {
  let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа' , 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  return months[date.getMonth()];
}
