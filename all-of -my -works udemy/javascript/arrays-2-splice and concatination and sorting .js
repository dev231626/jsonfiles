
// splice - element
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @param items — Elements to insert into the array in place of the deleted elements.

// @returns — An array containing the elements that were deleted.
var mFriends = ['shaw', 'clara', 'vab', 'kun', 'jacob', 'Dina']

mFriends.splice(0, 1, 'donna', 'rachel')


console.log(mFriends);


mFriends.splice(0, 1, )
// adding harvey to first list.

mFriends.splice(0, 0, 'harvey')



// remove vab

mFriends.splice(5, 1)

// remove harvey and vab

mFriends.splice()

// concatination - adding another list in a list 

// first create another list
var  mOffFreinds = ['Nina', 'Aron', 'Katie', 'Vic', 'Paula']

var mAllFriends = mFriends.concat(mOffFreinds)

console.log(mAllFriends);

//  sorting and reverse - ascending and Descending order.
// asscending
mAllFriends.sort()
console.log(mAllFriends);

console.log('................................');
// descending
mAllFriends.reverse()
console.log(mAllFriends);


 
mFriends.splice(5, 4)

















