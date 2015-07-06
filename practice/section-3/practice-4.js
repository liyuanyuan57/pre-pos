function getNum(item){
  var value = item.replace(/[^0-9]/ig,'');
  return parseInt(value);
}

function collectionC(item_a, temp){
   for (var n = 0; n < temp.length; n++) {
     if (item_a[0] === temp[n].key){
       if(item_a.length == 1){
         temp[n].count++;
       }
       else
         temp[n].count += getNum(item_a);
       return;
      }
   }
   if(item_a.length == 1)
        temp.push({key: item_a[0], count: 1});
   else
       temp.push({key: item_a[0], count: getNum(item_a)});
   return temp;
}

function findsameItem(itemA, object){
  for(var n = 0; n < object.value.length; n++){
    if(itemA.key === object.value[n])
       itemA.count -= parseInt(itemA.count / 3);
  }
  return itemA;
}

function create_updated_collection(collection_a, object_b) {
  var collection_c = [];
  var result = [];
  for(var m = 0; m < collection_a.length; m++){
         collectionC(collection_a[m], collection_c);
     }
  for(var x = 0; x < collection_c.length; x++){
     result.push(findsameItem(collection_c[x], object_b));
  }
    return result;
}
