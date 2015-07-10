function createCollectionC(itemA, newCollection)
{
  for(var y = 0; y < newCollection.length; y++){
    if(itemA === newCollection[y].key){
      newCollection[y].count++;
      return;
    }
  }

  newCollection.push({key: itemA, count:1})
  return newCollection;
}
function findSameItem(itemCollection, object){
  for(var n = 0; n < object.value.length; n++){
    if(itemCollection.key === object.value[n]){
       itemCollection.count -= parseInt(itemCollection.count / 3, 10);
    }
  }

  return itemCollection;
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
