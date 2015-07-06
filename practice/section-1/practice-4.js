function findsameItem(ItemA,collection){
  for(var n = 0; n < collection.value.length; n++){
     if(ItemA === collection.value[n])
        return collection.value[n];
   }
}

function collect_same_elements(collection_a, collection_b){
    var result = [];
    for (var m = 0; m < collection_a.length; m++){
        var item = findsameItem(collection_a[m].key, collection_b )
        if(item)
           result.push(item);
    }
    return result;
}
