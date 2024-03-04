export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const taskInside = true;
    const task2Inside = false;

    task = taskInside;
    task2 = task2Inside;
  }

  return [task, task2];
}
