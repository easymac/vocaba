export default (str: string) => {
  const TOTAL_COLORS = 7;
  let hash = 0;
  for (const char of str) {
    hash += char.charCodeAt(0);
  }

  return hash % TOTAL_COLORS;
}