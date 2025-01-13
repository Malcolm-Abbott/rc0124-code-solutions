function getStudentNames(students) {
  var names = students.map(function (student) {
    return student.name;
  });
  return names;
}
