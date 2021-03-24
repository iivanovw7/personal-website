/**
 * Module contains string utils.
 * @module utils/string
 */

/**
 * Splits string using passed key and returns last item.
 * Could be used to get last pathname part, in order to extract `id`.
 *
 * @param {string} targetString - string
 * @param {string} [splitter = '/'] - key witch is used to split string.
 * @return {string} result string expression.
 *
 * @example
 * getLastItem('https://somePath.com/test') //=> 'test'
 */
export function getLastItem(targetString: string, splitter = '/'): string {
    return targetString.substring(targetString.lastIndexOf(splitter) + 1);
}
