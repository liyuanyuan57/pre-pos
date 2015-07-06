function getNum(item){
  var value = item.replace(/[^0-9]/ig,'');
  return parseInt(value);
}

function findsameItem(itemA, temp){
   for (var n = 0; n < temp.length; n++) {
     if (itemA[0] === temp[n].name){
       if(itemA.length == 1){
         temp[n].summary++;
       }
       else
         temp[n].summary += getNum(itemA);
       return;
      }
   }
   if(itemA.length == 1)
        temp.push({name: itemA[0], summary: 1});
   else
       temp.push({name: itemA[0], summary: getNum(itemA)});
          

}

function count_same_elements(collection){
    var result = [];
     for (var m = 0; m < collection.length; m++){
        findsameItem(collection[m], result);
     }
return result;
}
