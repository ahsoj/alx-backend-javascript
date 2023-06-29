export default class ClassRoom {
  constructor(maxStudentSize) {
    this.maxStudentSize = maxStudentSize;
  }
  get _maxStudentSize() {
    return this.maxStudentSize;
  }
}
