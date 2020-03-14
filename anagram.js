// An anagram is a word or a phrase made by rearranging the letters of another word or phrase; 
// for example, “act” is an anagram of “cat”, and “admirer” is an anagram of “married”.

// using builtin sort()
function isAnagram (str1, str2) {
    if (str1.length !== str2.length) {
    return false;
    }
    var sortStr1 = str1.split('').sort().join('');
    var sortStr2 = str2.split('').sort().join('');
    return (sortStr1 === sortStr2);
    }
    console.log(isAnagram('dog','god')); // true
    console.log(isAnagram('foo','bar')); // false
    console.log(isAnagram('foo','fooo')); // false
