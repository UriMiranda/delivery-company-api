import { Entity } from "./Entity";
import { UniqueEntityID } from "./UniqueEntityID";

export class AggregateRoot<T> extends Entity<T> {
  get id(): UniqueEntityID {
    return this._id;
  }
}
