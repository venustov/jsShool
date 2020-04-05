<?php 
  echo 'Hello, world!';
  echo 'Hello, git';
  echo 'Congratulate';
echo 'Спать не пора уже?';
echo 'Сегодня пораньше пойдём спать!';
?>

<script>
  // это (код php выше) для тренировок по гиту, не более
  function decToHex(n) {
    return Number(n).toString(16);
  }

  // Задание №1. Написать функцию преобразования цвета из 10-ного представления в 16-ный. Функция должна принимать 3 числа от 0 до 255 и возвращать строковый хеш.

  function convertColor(a, b, c) {
    return "#" + convertRGBnum(a) + convertRGBnum(b) + convertRGBnum(c);
  }

  function convertRGBnum(num) {
    return (num < 16 ? '0' + Number(num).toString(16) : Number(num).toString(16));
  }

  // это можно было сделать и без функций:

  function enterRGBnum(step) {
    num = +prompt('Введите ' + step + '-е цветовое значение RGB. Целое число от 0 до 255 включительно:');
    while (num < 0 || num > 255) {
      num = +prompt('Введите целое число от 0 до 255 включительно:');
    }
    return num;
  }

  var a = enterRGBnum(1);
  var b = enterRGBnum(2);
  var c = enterRGBnum(3);

  alert(convertColor(a, b, c));

  // то же самое, но без функции. Также отпадает надобность в функции convertColor:

  hash = '#';
  for (var count = 1; count <= 3; count++) {
    var num = +prompt('Введите ' + count + '-е цветовое значение RGB. Целое число от 0 до 255 включительно:');
    while (num < 0 || num > 255 || isNaN(num)) {
      num = +prompt('Будьте внимательнее! Введите целое число от 0 до 255 включительно:');
    }
    hash += convertRGBnum(num);
  }

  alert(hash);

  // но, поскольку по условию задачи функция convertColor таки должна быть, сделаем так:

  var massive = [];

  for (var count = 1; count <= 3; count++) {
    var num = +prompt('Введите ' + count + '-е цветовое значение RGB. Целое число от 0 до 255 включительно:');
    while (num < 0 || num > 255 || isNaN(num)) {
      num = +prompt('Будьте внимательнее! Введите целое число от 0 до 255 включительно:');
    }
    massive[count - 1] = num;
  }

  var a = massive[0];
  var b = massive[1];
  var c = massive[2];

  alert(convertColor(a, b, c));

  // Задание №2. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

  function numToObject(num) {

    var buff = [
      'единицы',
      'десятки',
      'сотни',
      'тысячи',
      'десятки тысяч'
    ];

    var obj = new Object();
    var str = num.toString();

    for (var i = 1; i <= str.length; i++) {
      obj[buff[i - 1]] = str.charAt(str.length - i);
    }

    return obj;
  }

  // Здесь надо написать код ввода числа с необходимыми проверками на положительность, разрядность и является ли это вообще числом

  // Задание №3. Реализовать функцию objectToQueryString(object), которая принимает аргументом объект, возвращает строку. Примеры работы:

  function objectToQueryString(object) {
    var str = '';
    for (var prop in object) {
      str += prop + '=' + object[prop] + '&';
    }
    return (str.substring(0, str.length - 1));
  }

  // Сделать другой вариант с использованием map Object.keys(obj) (38-я минута видео 6-го урока):

  function objectToQueryString(object) {
    return Object.keys(object).map(function(key) {
      return key + '=' + object[key];
    }).join('&');
  }

</script>
