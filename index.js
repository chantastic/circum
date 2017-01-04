'use strict';
module.exports = (arr, i) => {
	if (i < 0) {
		return ((i % arr.length) + arr.length) % arr.length;
	}
	if (i >= arr.length) {
		return i % arr.length;
	}
	return i;
};
