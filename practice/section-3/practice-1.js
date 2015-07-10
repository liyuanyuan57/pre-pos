function findSameItem(itemA, object){
  for(var n = 0; n < object.value.length; n++){
    if(itemA.key === object.value[n])
       itemA.count--;
  }

  return itemA;
}
function create_updated_collection(collection_a, object_b) {
  var result = [];
  for(var m = 0; m < collection_a.length; m++){
         result.push(findSameItem(collection_a[m], object_b));
  }

  return result;
}
