'use strict';


/**
 * Flattening input array into one-dimension array of items
 * 
 * 
 * @author Ivan Zakharov <https://github.com/Scotfarel> 
 *
 * @param {Array} arr - An array param
 * @return {Array} - Flatten or void array if param is not array
 *
 * @example
 *
 *     plain([1, 'two', [3.0, NaN]])
 */
function plain(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }
    return arr.flat(Infinity);
};
