function getNum(item){
  var value = item.replace(/[^0-9]/ig,'');
  return parseInt(value,10);
}
function CollectionC(item_a, arr){
  for (var n = 0; n < arr.length; n++) {
     if (item_a[0] === arr[n].key){
       if(item_a.length == 1){
         arr[n].count++;
       } else {
         arr[n].count += getNum(item_a);
       }

       return;
      }
   }
   if(item_a.length == 1){
     arr.push({key: item_a[0], count: 1});
   } else {
     arr.push({key: item_a[0], count: getNum(item_a)});
   }

   return arr;
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
         CollectionC(collection_a[m], collection_c);
     }
  for(var x = 0; x < collection_c.length; x++){
     result.push(findSameItem(collection_c[x], object_b));
  }
    return result;
}
