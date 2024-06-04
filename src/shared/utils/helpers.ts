import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type UrlParams = Record<string, string | number | null | undefined>;

/**
 * 合并 Tailwind CSS 类名。
 *
 * 1. `npm install clsx`
 * 2. `npm install tailwind-merge`
 *
 * @param inputs CSS 类名
 * @returns {string} 合并后的 CSS 类名
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * 截断字符串值，使其长度等于指定的最大长度。
 *
 * 将长字符串的末尾替换为省略号 `…`（实际上省略号是单个 Unicode 字符，不是 `...` 这样的三个点）。
 *
 * @param value 要截断的字符串值
 * @param maxlength 最大长度
 * @returns {string} 截断后的字符串值
 */
export function truncate(value: string, maxlength: number): string {
  if (value.length <= maxlength) return value;

  return value.slice(0, maxlength - 1) + '…';
}

/**
 * 等待指定秒数。
 *
 * @param seconds 等待的秒数
 * @returns {Promise<void>} 等待指定秒数后，返回一个空的 `Promise` 对象
 */
export function wait(seconds: number): Promise<void> {
  return new Promise(resolve => window.setTimeout(resolve, seconds * 1000));
}

/**
 * 判断当前操作系统是否为 macOS。
 *
 * @returns {boolean} 当前操作系统是否为 macOS
 */
export function isMac(): boolean {
  return window.navigator.userAgent.toLowerCase().search('mac') !== -1;
}

/**
 * 判断当前操作系统是否为 Windows。
 *
 * @returns {boolean} 当前操作系统是否为 Windows
 */
export function isWindows(): boolean {
  return window.navigator.userAgent.toLowerCase().search('windows') !== -1;
}

/**
 * 判断当前操作系统是否为 Linux。
 *
 * @returns {boolean} 当前操作系统是否为 Linux
 */
export function isLinux(): boolean {
  return window.navigator.userAgent.toLowerCase().search('linux') !== -1;
}

/**
 * 将 URL 地址与 URL 参数合并。
 *
 * @param url URL 地址
 * @param params URL 参数
 * @returns {string} 合并后的 URL 地址
 */
export function mergeUrlWithParams(url: string, params?: UrlParams): string {
  if (!params) return url;
  const urlObject = new URL(url);
  Object.keys(params).forEach(key => {
    const value = params[key];
    urlObject.searchParams.append(key, value ? String(value) : '');
  });
  return urlObject.toString();
}
