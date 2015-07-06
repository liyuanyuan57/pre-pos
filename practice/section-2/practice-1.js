function findsameItem(itemA, temp)
{
   for (var n = 0; n < temp.length; n++)
   {
     if (itemA === temp[n].key)
     {
        temp[n].count++;
        return;
      }
   }
   temp.push({key: itemA, count: 1});
}

function count_same_elements(collection)
{
    var result = [];
     for (var m = 0; m < collection.length; m++)
     {
        findsameItem(collection[m], result);
     }
return result;
}
