// 返回传入的日期是今年的第几天,如果不传参数则默认是当前日期
export const dayOfYear = (date?: Date | string): number => {
  let formatDate = null;
  if (!date) {
    formatDate = new Date();
  } else {
    formatDate = typeof date === "string" ? new Date(date) : date;
  }
  console.log(formatDate, "===formatDate==")
  // 如果传入的是无效的字符串,那么就默认是当前日期
  if (!formatDate.getFullYear) {
    formatDate = new Date();
  }
  const year = formatDate.getFullYear();
  const firstDayOfYear = new Date(year, 0, 0);
  const timeGap = formatDate.getTime() - firstDayOfYear.getTime();
  return Math.floor(timeGap / 1000 / 60 / 60 / 24);
};



/* 请写一个方法，判断两个数组是否相等 ，如果相等则返回true，否则返回false*/
export function isEqual(arr1: any[], arr2: any[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((v, i) => v === arr2[i]);
}

/** 请写一个方法，移除数组中，指定的值，并且返回移除后的数组  */
export function remove(arr: any[], value: any): any[] {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

/** 写个函数，
 * var a=[1,2,[3,4],[[5,6],[7,8]]]；返回[1,2,3,4,5,6,7,8]
 * 能拍平数组，返回一个新的数组 */
export function flat(arr: any[]): any[] {
  return arr.flat(Infinity);
}


/** 写个函数，返回数组中的最大值 */
export function max(arr: number[]): number {
  return Math.max(...arr);
}

/** 写个函数，返回数组中的最小值 */
export function min(arr: number[]): number {
  return Math.min(...arr);
}

/** 写一个函数，判断版本号，
 * a=10.1.2; b=10.0.3;
 * 判断a 是否大于b
 * 如果是返回true，否则返回false */
export function compareVersion(a: string, b: string): boolean {
  const aArr = a.split('.');
  const bArr = b.split('.');
  const len = Math.max(aArr.length, bArr.length);
  for (let i = 0; i < len; i++) {
    if ((+aArr[i]) > (+bArr[i])) {
      return true;
    } else if ((+aArr[i]) < (+bArr[i])) {
      return false;
    }
  }
  return false
}

/** 将给定的数组从左边开始删除 n 个元素,不改变原数组 */
export function removeLeft(arr: any[], n: number): any[] {
  return arr.splice(0, n);
}


/** 写一个方法，数组去除重复元素 */
export function unique(arr: any[]): any[] {
  return [...new Set(arr)];
}

/** 写一个方法，返回唯一的一个UUID */
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

