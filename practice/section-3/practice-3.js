function CollectionC(item_a, arr)
{
  for(var y = 0; y < arr.length; y++){
    if(item_a === arr[y].key){
      arr[y].count++;
      return;
    }
  }

  arr.push({key: item_a, count:1})
  return arr;
}
function findSameItem(itemA, object){
  for(var n = 0; n < object.value.length; n++){
    if(itemA.key === object.value[n]){
       itemA.count -= parseInt(itemA.count / 3);
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
