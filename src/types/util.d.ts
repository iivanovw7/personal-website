/**
 * Module contains some additional utility types.
 * @module types/util
 */

/**
 * Gets property type.
 */
export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export interface AnyObject<T = unknown> {
    [field: string]: T;
}

export type ObjectOrNull<T = unknown> = AnyObject<T> | null;

export type OptionalObject<T = unknown> = ObjectOrNull<T> | undefined;
