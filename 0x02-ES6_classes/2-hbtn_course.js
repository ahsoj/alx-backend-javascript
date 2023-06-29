export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
    this._name = value;
  }
  get length() {
    return this._length;
  }
  set length(value) {
    if (typeof value !== 'number')
      throw new TypeError('Length must be a number');
    this._length = value;
  }
  get students() {
    return this._students;
  }
  set students(arr) {
    const isallString = arr.every((element) => {
      return typeof element === 'string';
    });
    if (!isallString)
      throw new TypeError('students must be array of a strings');
    this._students = arr;
  }
}
