import { UniqueEntityID } from "./UniqueEntityID";

export class Entity<T> {
  public _id: UniqueEntityID;
  public props: T;

  constructor(props: T, _id?: UniqueEntityID) {
    this.props = props;
    this._id = _id ?? new UniqueEntityID();
  }
}
