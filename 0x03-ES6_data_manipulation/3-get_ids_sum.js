export default function getStudentIdsSum(array) {
  return array.reduce((acc, value) => acc + value.id, 0);
}
