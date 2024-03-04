// Modified taskFirst to use const for variable instantiation
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

// Modified taskNext to use let for variable instantiation
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
