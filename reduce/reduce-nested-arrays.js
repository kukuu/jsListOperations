var array_of_arrays = [[1, 2], [3, 4], [5, 6]];
var concatenated = array_of_arrays.reduce( function (previous, current) {
        return previous.concat(current);
});
 
console.log(concatenated); // [1, 2, 3, 4, 5, 6];