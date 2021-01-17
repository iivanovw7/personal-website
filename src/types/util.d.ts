/**
 * Module contains some additional utility types.
 * @module types/util
 */

/**
 * Gets property type.
 */
export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
