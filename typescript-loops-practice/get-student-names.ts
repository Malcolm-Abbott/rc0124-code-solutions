/* exported getStudentNames */
function getStudentNames(students: any[]): string[] {
  const result = [];
  students.forEach((student) => {
    result.push(student.name);
  });
  return result;
}
