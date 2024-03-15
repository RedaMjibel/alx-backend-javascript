export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  for (const [item, quantity] of map) {
    if (quantity === 1) {
      map.set(item, 100);
    } else {
      map.set(item, quantity);
    }
  }
  return map;
}
