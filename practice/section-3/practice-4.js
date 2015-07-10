function getNum(item){
  var value = item.replace(/[^0-9]/ig,'');
  return parseInt(value,10);
}
function createCollectionC(itemA, newCollection){
  for (var n = 0; n < newCollection.length; n++) {
     if (itemA[0] === newCollection[n].key){
       if(itemA.length == 1){
         newCollection[n].count++;
       } else {
         newCollection[n].count += getNum(itemA);
       }

       return;
      }
   }
   if(itemA.length == 1){
     newCollection.push({key: itemA[0], count: 1});
   } else {
     newCollection.push({key: itemA[0], count: getNum(itemA)});
   }

   return newCollection;
}
function findSameItem(itemA, object){
  for(var n = 0; n < object.value.length; n++){
    if(itemA.key === object.value[n]){
       itemA.count -= parseInt(itemA.count / 3,10);
     }
  }

  return itemA;
}
function create_updated_collection(collection_a, object_b) {
  var collection_c = [];
  var result = [];
  for(var m = 0; m < collection_a.length; m++){
         createCollectionC(collection_a[m], collection_c);
     }
  for(var x = 0; x < collection_c.length; x++){
     result.push(findSameItem(collection_c[x], object_b));
  }
    return result;
}
