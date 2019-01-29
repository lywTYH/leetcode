export type DefineCompare<T = number | string | object, P = T> = (a: T, b: P) => 0 | -1 | 1;
export type Compare<T = number | string | object, P = T> = (a: T, b: P) => boolean;

export type TostringCallBack = (val: T) => string;
export type Tostring = (callback?: TostringCallBack) => string;

export type LinkNode = object | number | string;
