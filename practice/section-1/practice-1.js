function findsameItem(ItemA,collection){
  for(var n = 0; n < collection.length; n++){
     if(ItemA === collection[n])
        return collection[n];
   }
}

function collect_same_elements(collection_a, collection_b){
    var result = [];
    for (var m = 0; m < collection_a.length; m++){
        var item = findsameItem(collection_a[m], collection_b )
        if(item)
           result.push(item);
    }
    return result;
}
