export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
  [Symbol.toPrimitive](castType) {
    if (castType === 'number') {
      return this._size;
    } else if (castType === 'string') {
      return this._location;
    }
    return this;
  }
}
