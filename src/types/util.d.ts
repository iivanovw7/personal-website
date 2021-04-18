/**
 * Module contains some additional utility types.
 * @module types/util
 */

/** Gets property type. */
export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

/** Represents type of any object. */
export interface AnyObject<T = unknown> {
    [field: string]: T;
}

/** Represents type of any nullable object. */
export type ObjectOrNull<T = unknown> = AnyObject<T> | null;

export type OptionalObject<T = unknown> = ObjectOrNull<T> | undefined;

export type PartialAndNullable<T> = {
    [P in keyof T]?: T[P] | null;
};

export type Nullable<T> = AnyObject<T> | null | undefined;
