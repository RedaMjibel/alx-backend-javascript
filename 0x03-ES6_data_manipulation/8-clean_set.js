export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  const substrings = filteredValues.map((value) => value.substring(startString.length));
  return substrings.join('-');
}
