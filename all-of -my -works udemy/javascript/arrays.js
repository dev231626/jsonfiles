

var mFriends = ['shaw', 'sura', 'neba', 'zeba', 'zebiba']

console.log(mFriends[2]);
// results = neba b/c it starts to count from 0.

// update value

mFriends[0] = 'shawn'

mFriends[7] = 'alan'

mFriends[mFriends.length]= 'Rob'
console.log(mFriends);
// best way to enter value at the end.
mFriends.push('jack')
console.log(mFriends);


// delete a value
// this will return the last value to us and delete the value from list. 
mFriends.pop()
console.log();

// if we want to see the returned value to us we just declare a variable with the array name

var v = mFriends.pop()

console.log(v);

