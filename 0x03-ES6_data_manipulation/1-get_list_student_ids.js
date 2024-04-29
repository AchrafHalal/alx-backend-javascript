export default function getListStudentIds(listStudent) {
  return Array.isArray(listStudent) ? listStudent.map(({ id }) => id) : [];
}
