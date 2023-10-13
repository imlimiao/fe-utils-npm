export declare const dayOfYear: (date?: Date | string) => number;
export declare function isEqual(arr1: any[], arr2: any[]): boolean;
/** 请写一个方法，移除数组中，指定的值，并且返回移除后的数组  */
export declare function remove(arr: any[], value: any): any[];
/** 写个函数，
 * var a=[1,2,[3,4],[[5,6],[7,8]]]；返回[1,2,3,4,5,6,7,8]
 * 能拍平数组，返回一个新的数组 */
export declare function flat(arr: any[]): any[];
/** 写个函数，返回数组中的最大值 */
export declare function max(arr: number[]): number;
/** 写个函数，返回数组中的最小值 */
export declare function min(arr: number[]): number;
/** 写一个函数，判断版本号，
 * a=10.1.2; b=10.0.3;
 * 判断a 是否大于b
 * 如果是返回true，否则返回false */
export declare function compareVersion(a: string, b: string): boolean;
/** 将给定的数组从左边开始删除 n 个元素,不改变原数组 */
/**
 *
 * @param arr  需要操作的数组
 * @param n   开始指定的索引
 * @returns
 */
export declare function removeLeft(arr: any[], n: number): any[];
/** 写一个方法，数组去除重复元素 */
/**
 *
 * @param arr   传入数组
 * @returns
 */
export declare function unique(arr: any[]): any[];
/** 写一个方法，返回唯一的一个UUID */
export declare function uuid(): string;
