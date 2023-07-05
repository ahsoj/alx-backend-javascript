export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const josh: Student = {
  firstName: 'joshua',
  lastName: 'jan',
  age: 22,
  location: 'Addis Abeba',
};
const rachel: Student = {
  firstName: 'rachel',
  lastName: 'mila',
  age: 20,
  location: 'Addis Abeba',
};

const studentsList: Student[] = [josh, rachel];

RenderTable(studentsList);

export function RenderTable(students: Student[]): void {
  const table = document.createElement('table');
  const row = document.createElement('tr');
  table.insertAdjacentElement('beforeend', row);

  row.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  row.insertAdjacentHTML('beforeend', '<th>lastName</th>');

  for (const student of students) {
    const _row = document.createElement('tr');
    _row.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    _row.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', _row);
  }
  document.body.insertAdjacentElement('beforeend', table);
}
