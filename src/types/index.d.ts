export type ToString<T> = (v: T) => string;
export type Compare<T> = (a: T, b: T) => 1 | 0 | -1;
