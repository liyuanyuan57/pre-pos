function findSameItem(itemA, arr) {
   for (var n = 0; n < arr.length; n++) {
     if (itemA === arr[n].key) {
        arr[n].count++;
        return;
      }
   }
   arr.push({key: itemA, count: 1});
}

function count_same_elements(collection){
  var result = [];
     for (var m = 0; m < collection.length; m++) {
        findSameItem(collection[m], result);
     }

  return result;
}
