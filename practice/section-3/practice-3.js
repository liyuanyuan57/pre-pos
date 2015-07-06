function collectionC(item_a, temp)
{
  for(var y = 0; y < temp.length; y++){
    if(item_a === temp[y].key){
      temp[y].count++;
      return;
    }
  }
  temp.push({key: item_a, count:1})
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
