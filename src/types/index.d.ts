export type ToString<T> = (_v: T) => string;
export type Compare<T> = (_a: T, _b: T) => 1 | 0 | -1;
