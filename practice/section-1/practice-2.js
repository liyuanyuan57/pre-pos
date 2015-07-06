function findsameItem(ItemA,collection){
  for(var n = 0; n < collection[0].length; n++){
     if(ItemA === collection[0][n])
        return collection[0][n];
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
