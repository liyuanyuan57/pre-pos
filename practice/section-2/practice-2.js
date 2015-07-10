function getNum(item) {
  var value = item.replace(/[^0-9]/ig,'');
  return parseInt(value, 10);
}

function findSameItem(itemCollection, newCollection) {
  for (var n = 0; n < newCollection.length; n++) {
    if (itemCollection[0] === newCollection[n].key){
      if(itemCollection.length == 1){
         newCollection[n].count++;
       } else {
       newCollection[n].count = getNum(itemCollection);
      }

      return;
    }
   }

   if(itemCollection.length == 1) {
     newCollection.push({key: itemCollection[0], count: 1});
    } else {
        newCollection.push({key: itemCollection[0], count: getNum(itemCollection)});
    }
}

function count_same_elements(collection) {
  var result = [];
  for (var m = 0; m < collection.length; m++) {
        findSameItem(collection[m], result);
  }

  return result;
}
