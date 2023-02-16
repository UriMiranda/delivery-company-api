export class Indentifier<T> {
  constructor(private value: T) {}

  equals(id?: Indentifier<T>): boolean {
    if (this.value === null || this.value === undefined) {
      return false;
    }
    if (!(id instanceof this.constructor)) {
      return false;
    }
    return this.value === id.toValue();
  }

  toValue(): T {
    return this.value;
  }

  toString(): string {
    return String(this.value);
  }
}
