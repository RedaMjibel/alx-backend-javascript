export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) return res;
  for (const value of set) { if (value && value.startsWith(startString)) res += `${value.slice(startString.length)}-`; }
  return res.slice(0, res.length - 1);
}
