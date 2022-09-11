/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
	if (index === nums.length) return 1;
	return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, len = 0, i = 0) {
	if (words.length === i) return len;
	if (words[i].length > len) len = words[i].length;
	return longest(words, len, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, acc = "", i = 0) {
	if (str.length === i) return acc;
	if (i % 2 === 0) acc += str[i];
	return everyOther(str, acc, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, leftIndex = 0, rightIndex = str.length - 1) {
	if (str[leftIndex] !== str[rightIndex]) return false;
	if (rightIndex === Math.floor(str.length / 2)) return true;
	return isPalindrome(str, leftIndex + 1, rightIndex - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
	if (i === arr.length) return -1;
	if (arr[i] === val) return i;
	return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
