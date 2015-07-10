function getNum(item) {
  var value = item.replace(/[^0-9]/ig,'');
  return parseInt(value, 10);
}

function findSameItem(itemA, arr) {
  for (var n = 0; n < arr.length; n++) {
    if (itemA[0] === arr[n].key){
      if(itemA.length == 1){
         arr[n].count++;
       } else {
       arr[n].count = getNum(itemA);
      }

      return;
    }
   }

   if(itemA.length == 1) {
     arr.push({key: itemA[0], count: 1});
    } else {
        arr.push({key: itemA[0], count: getNum(itemA)});
    }
}

function count_same_elements(collection) {
  var result = [];
  for (var m = 0; m < collection.length; m++) {
        findSameItem(collection[m], result);
  }

  return result;
}
