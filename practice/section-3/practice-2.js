function findSameItem(itemCollection, object){
  for(var n = 0; n < object.value.length; n++){
    if(itemCollection.key === object.value[n])
      itemCollection.count -= parseInt(itemCollection.count / 3,10);
  }

  return itemCollection;
}
function create_updated_collection(collection_a, object_b) {
  var result = [];
  for(var m = 0; m < collection_a.length; m++){
    result.push(findSameItem(collection_a[m], object_b));
     }

  return result;
}
