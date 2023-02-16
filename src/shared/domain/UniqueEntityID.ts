import { Indentifier } from "./Indetifier";

export class UniqueEntityID extends Indentifier<number | string> {
  constructor(id?: string | number) {
    super(id ?? '{{randon_id}}');
  }
}
