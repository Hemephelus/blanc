# Documentation

These are the function we have in this library, what they can do and why they are on this list.

1. [Remove Empty Rows](#remove-empty-rows)
2. [Filter By Date](#filter-by-date)
3. [Get Column](#get-column)
4. [Filter By Value](#filter-by)

Since I work with mostly google sheets, I end up using filter related functions. As you you can see. If you have any suggestions regarding the library reach out to me on [twitter](https://twitter.com/Hemephelus1).


## Remove Empty Rows

`removeEmptyRows(array,column)`

Removes empty rows for a 2d array, and returns the remaining values in the array.

 ### Arguments
1st

    Name: array
    Type: array of any 
    Description: The array where the empty rows would be removed.
2nd

    Name: column
    Type: number
    Description: The column that would be checked for empty rows.

### Return Value
    Name: return
    Type: array of any
    Description: The rest of the array all empty rows have been deleted.

## Filter By Date

`filterByDate(array,column,startDate,endDate)`


Filters a 2d array by the start and end date, and returns the array of values in the specified range.

 ### Arguments
1st

    Name: array
    Type: array of any 
    Description: The array where the date will be filtered.
2nd

    Name: column
    Type: number
    Description: The date column with valid dates.
3rd

    Name: startingDate
    Type: Date
    Description: A valid date syntax telling us the starting date or the array.
4th

    Name: endingDate
    Type: Date
    Description: A valid date syntax telling us the ending date or the array.


### Return Value
    Name: return
    Type: array of any
    Description: The rest of the array that falls into the specified start and end date range.
## Get Column

`getColumn(array, column)`


Returns a specified column as a 1D array from 2D array.

 ### Arguments
1st

    Name: array
    Type: array of any 
    Description: The array where the column will be selected.
2nd

    Name: column
    Type: number
    Description: The column that would be used for extraction.
### Return Value
    Name: return
    Type: array of any
    Description: A 1d array with the specified column values.
## Filter By Value

`filterByValue(array,column,value)`


Filters a 2d array by the specified value, and returns the array of values that meet that condition.

 ### Arguments
1st

    Name: array
    Type: array of any 
    Description: The array where the date will be filtered.
2nd

    Name: column
    Type: number
    Description: The column where you want to check for matching values.
3rd

    Name: startingDate
    Type: Date
    Description: The matching value you want to filter by.




### Return Value
    Name: return
    Type: array of any
    Description: Returns the matching values in the array.