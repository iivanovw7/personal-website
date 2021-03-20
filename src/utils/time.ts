/**
 * Module contains time-related utils.
 * @module utils/time
 */

/** Milliseconds in second. */
export const MILLISECONDS_IN_SECOND = 1000;

/** Milliseconds in minute. */
export const MILLISECONDS_IN_MINUTE = 60000;

/** Milliseconds in hour. */
export const MILLISECONDS_IN_HOUR = 3600000;

/** Milliseconds in day. */
export const MILLISECONDS_IN_DAY = 86400000;

/** Minutes in hour. */
export const MINUTES_IN_HOUR = 60;

/** Average reading speed, used in time calculation. */
export const SYMBOLS_PER_MINUTE = 653;

/**
 * Returns average reading time value in `minutes` with label text to be used in components
 * @param {number} textLength - Text length.
 * @return {number} reading time on minutes.
 */
export const textReadingTime = (textLength = 0): number => Math.floor(Math.abs(textLength) / SYMBOLS_PER_MINUTE);
