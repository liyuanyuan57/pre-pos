function getNum(item){
  var value = item.replace(/[^0-9]/ig,'');
  return parseInt(value, 10);
}
function findsameItem(itemCollection, newCollection){
  for (var n = 0; n < newCollection.length; n++) {
    if (itemCollection[0] === newCollection[n].name){
      if(itemCollection.length == 1){
        newCollection[n].summary++;
      } else {
        newCollection[n].summary += getNum(itemCollection);
      }

      return;
    }
  }
  if(itemCollection.length == 1){
    newCollection.push({name: itemCollection[0], summary: 1});
  } else {
    newCollection.push({name: itemCollection[0], summary: getNum(itemCollection)});
  }
}
function count_same_elements(collection){
  var result = [];
  for (var m = 0; m < collection.length; m++){
    findsameItem(collection[m], result);
  }

  return result;
}
