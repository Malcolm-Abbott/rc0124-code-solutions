/* exported getStudentNames */
type Student = {
  name: string;
};

function getStudentNames(students: Student[]): string[] {
  const names: string[] = students.map((student) => student.name);
  return names;
}
