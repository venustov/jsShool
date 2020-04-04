  var users = [{
      id: 0,
      firstName: 'Dmitry',
      lastName: 'Bondarchuck',
      birthDay: '16.07.1990',
      phones: [
        '89002565656',
        '89053658978'
      ]
    },
    {
      id: 1,
      firstName: 'Ivan',
      lastName: 'Petrov',
      birthDay: '24.12.1984',
      phones: [
        '89002565656',
        '89053658978'
      ]
    }
  ];

  function addUser(users) {
    var user = {};

    user.id = users[users.length - 1].id + 1;

    user.firstName = prompt('Введите имя:');
    user.lastName = prompt('Введите фамилию:');
    user.birthDay = prompt('Введите дату рождения:');

    user.phones = [];
    user.phones[0] = prompt('Введите номер телефона');

    while (true) {
      var phone = prompt('Дополнительный номер телефона (для выхода введите пустой номер):');
      if (!phone) break;
      user.phones.push(phone);
    }

    users.push(user);
    document.getElementById('users').appendChild(printUser(user));
  }

  users.forEach(function (user) {
    console.log('ID: ' + user.id + '; Имя: ' + user.firstName + '; Фамилия: ' + user.lastName + '; Дата рождения: ' + user.birthDay + '; Телефоны: ' + user.phones.join(', '));
  });

  function csvFormat(users) {
    return users.map(function (user) {
      return Object.keys(user).map(function (key) {
        if (typeof user[key] == 'string' || typeof user[key] == 'number') return '"' + user[key] + '"';
        else return user[key].map(function (phone) {
          return '"' + phone + '"';
        }).join(';');
      }).join(';');
    }).join('\r\n');
  }

  /* function deleteUser(users, id) {
     users.forEach(function (user) {
       if (user.id == id) {
         users.splice(users.indexOf(user), 1);
         document.getElementById('u_' + user.id).remove();
       }
     });
   }*/

  function deleteUser(users, id) {
    users.splice(id, 1);
    document.getElementById('u_' + id).remove();
  }

  function search(value, users) {
    var result = [];
    var re = new RegExp(value, 'i');

    users.forEach(function (item) {
      var findString = item.firstName + ' ' + item.lastName;
      if (re.test(findString)) {
        result.push(item);
      }
    })
    return result;
  }

  function printUser(user) {
    var row = document.createElement('div');
    row.id = 'u_' + user.id;
    row.className = 'row';
    row.innerHTML = '<div class="col" onclick="showUser(users, ' + user.id + ')">' + user.firstName + '</div>' + '<div class="col" onclick="showUser(users, ' + user.id + ')">' + user.lastName + '</div>'
      /* +
            '<div class="col">' + user.birthDay + '</div>' + '<div class="col">' + user.phones.join(', ') + '</div>'*/
      +
      '<div class="del_btn" onclick="deleteUser(users, ' + user.id + ')">X</div>';
    return row;
  }

  function showUser(users, id) {
    var info = 'Информация о контакте:\n\nФ.И.О.: ' + users[id].firstName + ' ' + users[id].lastName + ';\nДата рождения: ' + users[id].birthDay + ';\nТелефон (телефоны): ' + users[id].phones.join(', ') + '.';
    alert(info);
  }

  add.onclick = function () {
    addUser(users);
  };

  /*
  add.addEventListener('click', function () {
    addUser(users);
  });
  */

  window.onload = function (event) {
    var usersTable = document.getElementById('users');
    users.forEach(function (user) {
      usersTable.appendChild(printUser(user));
    });
  }

  inputSearch.onclick = function () {
    var searchStr = document.getElementById('inputValue').value;

    var removeElem = document.getElementById('searchresults');
    removeElem && removeElem.remove();

    if (searchStr) {
      document.getElementById('x').classList.remove('o-hide');
      var elem = document.createElement('div');
      elem.id = 'searchresults';
      document.body.appendChild(elem);
      document.getElementById('users').classList.add('hide');
      var searchRes = search(searchStr, users);
      if (searchRes.length) {
        var isResults = document.createElement('h4');
        isResults.innerHTML = 'Результаты поиска:';
        searchresults.appendChild(isResults);
        searchRes.forEach(function (user) {
          searchresults.appendChild(printUser(user));
        });
      } else {
        var noResults = document.createElement('h4');
        noResults.innerHTML = 'Ничего не найдено =(';
        searchresults.appendChild(noResults);
      }
    } else {
      document.getElementById('users').classList.remove('hide');
      document.getElementById('x').classList.add('o-hide');
    }
  };

  inputValue.onchange = inputSearch.onclick;

  x.onclick = function () {
    var removeElem = document.getElementById('searchresults');
    removeElem && removeElem.remove();
    document.getElementById('users').classList.remove('hide');
    document.getElementById('x').classList.add('o-hide');
    document.getElementById('inputValue').value = '';
  }

  /*
  addUser(users);
  console.log(csvFormat(users));
  */
