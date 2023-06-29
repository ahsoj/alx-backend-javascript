export default class Building {
  constructor(sqrt) {
    this._sqrt = sqrt;
    this.evacuationWarningMessage();
  }
  get sqrt() {
    return this._sqrt;
  }
  set sqrt(value) {
    this._sqrt = value;
  }
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building')
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
  }
}
