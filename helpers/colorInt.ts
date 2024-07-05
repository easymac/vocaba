export default (str: string) => {
  const TOTAL_COLORS = 7;
  let hash = 0;
  try {
    for (const char of str) {
      hash += char.charCodeAt(0);
    }
  } catch (e) {
    console.log(str);
    console.log(e);
  }

  return hash % TOTAL_COLORS;
}