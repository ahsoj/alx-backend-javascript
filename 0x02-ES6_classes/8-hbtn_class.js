export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
  [Symbol.toPrimitive](castType) {
    if (castType === 'string') {
      return this._location;
    }
    if (castType === 'number') {
      return this._size;
    }
    return this;
  }
}
