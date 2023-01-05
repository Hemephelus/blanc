
/**
 * Removes empty rows for a 2d array, and returns the remaining values in the array.
 *
 * @param {array} array the array you are filtering.
 * @param {number} col the column that you want to filter by.
 * @return {array} the remaining array left after filtering.
 * @customfunction
 */
function removeEmptyRows(array,col){
 return  array.filter(function (x) {
      if (x[col] != '') {
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
 * @param {number} col the column that you want to filter by.
 * @param {string} startDate the starting date you want to filter by.
 * @param {string} endDate the ending date you want to filter by.
 * @return {array} the returns the range of values in the array.
 * @customfunction
 */
function filterByDate(array,col,startDate,endDate){
  return array.filter(function (a) {
    let date = a[col]
    return (date >= startDate && date <= endDate);
  });
}


/**
 * Checks for a possible error, and returns  'null' if there is an error.
 *
 * @param {any} value the value you want to check.
 * @return {null} the null type if error.
 * @customfunction
 */
function checkError(value) {

  try {
    value
  }
  catch (err) {
    return null
  }

}

/**
 * Filters a 2d array by a single value, and returns the matching values in the array.
 *
 * @param {array} array the array you are filtering.
 * @param {number} col the column that you want to filter by.
 * @param {any} value the matching value you want to filter by.
 * @return {array} the returns the matching values in the array.
 * @customfunction
 */
function filterBy(array,col,value){
 return    array.filter(function (x) {
      if (x[col] == value) {
        return true
      } else {
        return false
      }
    })
}


/**
 * Filters a 2d array by a single value, and returns the matching values in the array.
 *
 * @param {array} array the array you are filtering.
 * @param {number} col the column that you want to filter by.
 * @param {any} value the matching value you want to filter by.
 * @return {array} the returns the matching values in the array.
 * @customfunction
 */
function filterByValue(array,col,value){
 return    removeEmptyRows(array.filter(function (x) {
      if (value.includes(x[col])) {
        return true
      } else {
        return false
      }
    }),col)
}

// Changes rows to columns or columns to rows
/**
 * Returns the spesified column as a 1D array in a 2D array.
 *
 * @param {array} array the 2D array.
 * @param {number} col the column that you want to get.
 * @return {array} the an array with values from the column spesified.
 * @customfunction
 */
function getColumn(arr, col){

return arr.map(x => x[col]);
}


/**
 * Returns the coefficients of a the independent vairables.
 * 
 * @param {A1:C51} Array The range of cells
 *     to calculate.
 * @param {A1 or 1} Depdt_Var_Col_Num The value or cell
 *     that would be the dependent variable.
 *
 * @return The coefficients of a the independent vairables.
 * @customfunction
 */

/**
 * Converts an XML string to a JSON object, using logic similar to the
 * sunset method Xml.parse().
 * @param {string} xml The XML to parse.
 * @returns {Object} The parsed XML.
 */
function xmlToJson(xml) { 
  var doc = XmlService.parse(xml);
  var result = {};
  var root = doc.getRootElement();
  result[root.getName()] = elementToJson(root);
  return result;
}

/**
 * Converts an XmlService element to a JSON object, using logic similar to 
 * the sunset method Xml.parse().
 * @param {XmlService.Element} element The element to parse.
 * @returns {Object} The parsed element.
 */
function elementToJson(element) {
  var result = {};
  // Attributes.
  element.getAttributes().forEach(function(attribute) {
    result[attribute.getName()] = attribute.getValue();
  });
  // Child elements.
  element.getChildren().forEach(function(child) {
    var key = child.getName();
    var value = elementToJson(child);
    if (result[key]) {
      if (!(result[key] instanceof Array)) {
        result[key] = [result[key]];
      }
      result[key].push(value);
    } else {
      result[key] = value;
    }
  });
  // Text content.
  if (element.getText()) {
    result['Text'] = element.getText();
  }
  return result;
}



