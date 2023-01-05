
/**
 * Removes empty rows for a 2d array, and returns the remaining values in the array.
 *
 * @param {array} array the array you are filtering.
 * @param {number} column the column that you want to filter by.
 * @return {array} the remaining array left after filtering.
 * @customfunction
 */
function removeEmptyRows(array,column){
 return  array.filter(function (x) {
      if (x[column] != '') {
        return true
      } else {
        return false
      }
    })
}


/**
 * Filters a 2d array by the start and end date, and returns the range of values in the array.
 *
 * @param {array} array the array you are filtering.
 * @param {number} column the column that you want to filter by.
 * @param {string} startDate the starting date you want to filter by.
 * @param {string} endDate the ending date you want to filter by.
 * @return {array} the returns the range of values in the array.
 * @customfunction
 */
function filterByDate(array,column,startDate,endDate){
  return array.filter(function (a) {
    let date = a[column]
    return (date >= startDate && date <= endDate);
  });
}


/**
 * Filters a 2d array by a single value, and returns the matching values in the array.
 *
 * @param {array} array the array you are filtering.
 * @param {number} column the column that you want to filter by.
 * @param {any} value the matching value you want to filter by.
 * @return {array} the returns the matching values in the array.
 * @customfunction
 */
function filterByValue(array,column,value){
 return    array.filter(function (x) {
      if (x[column] == value) {
        return true
      } else {
        return false
      }
    })
}


/**
 * Returns the specified column as a 1D array from a 2D array.
 *
 * @param {array} array the 2D array.
 * @param {number} column the column that you want to get.
 * @return {array} the an array with values from the column specified.
 * @customfunction
 */
function getColumn(array, column){

return array.map(x => x[column]);
}