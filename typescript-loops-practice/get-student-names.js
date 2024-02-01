/* exported getStudentNames */
function getStudentNames(students) {
  var result = [];
  students.forEach(function (student) {
    result.push(student.name);
  });
  return result;
}
