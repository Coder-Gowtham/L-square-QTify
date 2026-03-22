// Truncate a string to a specified length, adding '...' if truncated
export function truncate(str, maxLength) {
  if (typeof str !== 'string') return '';
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}
