  <script>
    
    function pick(obj, keys) {
      var object = {};
      Object.keys(obj).map(function(key) {
        keys.forEach(function(currentValue) {
          if (key == currentValue) {
            object[key] = obj[key];
          }
        });
      });
      return object;
    }
    
// делается намного проще (идея не моя):
    
    function pick(obj, keys){
      var object = {};
      for(var k in obj){
        if(keys.indexOf(k) != -1){
          object[k] = obj[k];
        }
      }
      return object;
    }
    
    function arrayToList(arr) {
      while(arr.length){
        return {value: arr.shift(), rest: arrayToList(arr)};
      }
      return null;
    }

    list = arrayToList([1, 2, 3, 4, 5]);
    
    function listToArray(list, arr) {
      if (list !== null){
        if(!arr){
          var arr = [];
        }
        arr.push(list.value);
        return listToArray(list.rest, arr);
      }
      return arr;
    }
    
// то же самое, но без рекурсии (намного короче):
    
    function listToArray(list) {
      var arr = [];
      while (list) {
        arr.push(list.value);
        list = list.rest;
      }
      return arr;
    }

// не мой вариант, с рекурсией. непонятно как, но работает:    
    
    function listToArray(l) {
      if( l === null ){ return []; }
      else return [l.value].concat( listToArray(l.rest) );
    }

    function prepend(num, list) {
      return {value: num, rest: list};
    }

    function nth(list, pos) {
      if (list == null) return undefined;
      else if (1 == pos) return list.value;
      return nth(list.rest, --pos);
    }

    function reverseArray(arr) {
      var arrRev = [];
      arr.forEach(function(item, index, array) {
        arrRev.unshift(item);
      });
      return arrRev;
    }
    
// то же самое можно было сделать, передав копию массива, а не сам массив. с помощью метода slice а потом применив функцию ниже:

    function reverseArrayInPlace(array) {
      var arrRev = [];
      while (array.length) {
        arrRev.push(array.pop());
      }
      arr = arrRev;
      return arr;
    }
    
// но в общем-то всё работает и так
    
    list = prepend(5, list);
    console.log(listToArray(list));
    console.log(nth(list, 4));

  </script>
