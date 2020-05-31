function cs142MakeMultiFilter(arr) {
  var originalArray = arr;
  var currentArray = arr;
  function arrayFilterer(filterCriteria, callback) {
    if (typeof filterCriteria !== "function") {
      return currentArray;
    }
    var filteredArray = [];
    var arrayLength = currentArray.length;
    for (var i = 0; i < arrayLength; i++) {
      var value = currentArray[i];
      if (filterCriteria(value)) {
        filteredArray.push(value);
      }
    }
    currentArray = filteredArray;
    if (typeof callback === "function") {
      callback.call(originalArray, currentArray);
    }
    return arrayFilterer;
  }
  return arrayFilterer;
}
