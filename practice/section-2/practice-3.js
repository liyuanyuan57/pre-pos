function getNum(item){
  var value = item.replace(/[^0-9]/ig,'');
  return parseInt(value, 10);
}
function findsameItem(itemA, arr){
  for (var n = 0; n < arr.length; n++) {
    if (itemA[0] === arr[n].name){
      if(itemA.length == 1){
        arr[n].summary++;
      } else {
        arr[n].summary += getNum(itemA);
      }

      return;
    }
  }
  if(itemA.length == 1){
    arr.push({name: itemA[0], summary: 1});
  } else {
    arr.push({name: itemA[0], summary: getNum(itemA)});
  }
}
function count_same_elements(collection){
  var result = [];
  for (var m = 0; m < collection.length; m++){
    findsameItem(collection[m], result);
  }

  return result;
}
