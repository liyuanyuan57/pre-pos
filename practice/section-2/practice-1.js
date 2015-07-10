function findSameItem(itemCollection, newCollection) {
   for (var n = 0; n < newCollection.length; n++) {
     if (itemCollection === newCollection[n].key) {
        newCollection[n].count++;
        return;
      }
   }
   newCollection.push({key: itemCollection, count: 1});
}

function count_same_elements(collection){
  var result = [];
     for (var m = 0; m < collection.length; m++) {
        findSameItem(collection[m], result);
     }

  return result;
}
