const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const students = {};
  const dbNames = fileLines[0].split(',');
  const studentPropNames = dbNames.slice(0, dbNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(students).includes(field)) {
      students[field] = [];
    }
    const studentEntries = studentPropNames.map((propName, idx) => [
      propName,
      studentPropValues[idx],
    ]);
    students[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object.values(students).reduce(
    (pre, cur) => (pre || []).length + cur.length
  );
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(students)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(
      `Number of students in ${field}: ${group.length}. List: ${studentNames}`
    );
  }
};

module.exports = countStudents;
