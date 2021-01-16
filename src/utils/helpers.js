/**
 * Module contains helper functions.
 * @module utils/helpers
 */
import {
    equals,
    both,
    any,
    anyPass,
    complement,
    isEmpty,
    isNil,
    __,
    path,
    ap,
    curry,
    useWith,
    split,
    filter,
    map,
    of,
    is,
    find,
    propEq,
    uniqBy,
    prop,
    zipObj,
    values,
    keys,
} from 'ramda';

/**
 * Checks if input value is `String`
 * @func isString
 * @return {Boolean}
 * @example
 * isString(String, 'foo') //=> true
 * isString(String, {a: 'foo'}) //=> false
 */
export const isString = is(String);

/**
 * Checks if input value is `Number`
 * @func isNumber
 * @return {Boolean}
 * @example
 * isString(Number, 123) //=> true
 * isString(Number, {a: 'foo'}) //=> false
 */
export const isNumber = is(Number);

/**
 * Checks if input value is `undefined`
 * @func isUndefined
 * @return {Boolean}
 * @example
 * isUndefined(1); //=> false
 * isUndefined(undefined); //=> true
 * isUndefined(null); //=> false
 */
export const isUndefined = equals(undefined);

/**
 * Returns `true` if the given value is its type's empty value, `null` or `undefined`
 * @func isNilOrEmpty
 * @return {Boolean}
 * @see {@link http://ramdajs.com/docs/#isEmpty|isEmpty}
 * @see {@link {@link http://ramdajs.com/docs/#isNil|isNil}}
 * @see {@link https://char0n.github.io/ramda-adjunct/2.23.0}
 * @example
 * isNilOrEmpty([1, 2, 3]); //=> false
 * isNilOrEmpty([]); //=> true
 * isNilOrEmpty(''); //=> true
 * isNilOrEmpty(null); //=> true
 * isNilOrEmpty(undefined): //=> true
 * isNilOrEmpty({}); //=> true
 * isNilOrEmpty({length: 0}); //=> false
 */
export const isNilOrEmpty = anyPass([isNil, isEmpty]);

export const isNotEmptyString = both(is(String), complement(isNilOrEmpty));

/**
 * Acts as multiple path: arrays of paths in, array of values out. Preserves order.
 * @func paths
 * @param {Array} ps The property paths to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#derivative-of-rprops-for-deep-fields}
 * @see {@link http://ramdajs.com/docs/#props|R.props}
 * @see {@link https://char0n.github.io/ramda-adjunct/2.23.0}
 * @example
 * const obj = {
 *   a: { b: { c: 1 } },
 *   x: 2,
 * };
 *
 * RA.paths([['a', 'b', 'c'], ['x']], obj); //=> [1, 2]
 */
export const paths = curry((ps, obj) => ap([path(__, obj)], ps));

/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Parses dot paths, used in propsDotPath
 * @func dotPath
 * @memberOf {module:utils/helpers~propsDotPath}
 * @type {f1}
 */
const dotPath = useWith(path, [split('.')]);

/**
 * Derivative of R.props for deep fields
 * @func propsDotPath
 * @example
 * const obj = {
 *  a: { b: { c: 1 } },
 *  x: 2
 * };
 * propsDotPath(['a.b.c', 'x'], obj);
 * // => [ 1, 2 ]
 * @return {Array} array of props
 */
export const propsDotPath = useWith(ap, [map(dotPath), of]);

/**
 * Finds and returns first element that has `id` by default,
 *  or any other prop which is equal to passed in parameters.
 * @param {*} id - id value to be found
 * @param {*} [key=null] - specifies key to be found
 * @return {Function|*}
 *  should return found object in case there is a match
 */
export const findByPropValue = (id, key = 'id') => find(propEq(key, id));

/**
 * Removes duplicates from array of Objects by `id`.
 * @func uniqById
 * @return {Array}
 * @example
 * uniqById([{ id: '1' }, { id: '1' }, { id: '2' }]); //=> [{ id: '1' }, { id: '2' }]
 */
export const uniqById = uniqBy(prop('id'), __);

/**
 * Filters array by prop value
 * @param {string} key - prop key
 * @param {*} value - prop value
 * @return {Function|*}
 *  should return found filtered array
 */
export const hasPropValue = (key, value) => filter(any(propEq(key, value)));

export const mapKeys = curry((fn, obj) => zipObj(map(fn, keys(obj)), values(obj)));

/* eslint-enable react-hooks/rules-of-hooks */
