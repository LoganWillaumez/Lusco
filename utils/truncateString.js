/**
 * truncate string
 * @param {string} string
 * @param {number} n
 * @returns
 */
export const truncateString = (string, n) => {
  if (string) {
    return string.length > n ? string.substring(0, n - 1) + '...' : string;
  }
};
