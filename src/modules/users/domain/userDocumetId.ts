import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";

interface UserDocumentIdProps {
  value: string;
}

export class UserDocumentId extends ValueObject<UserDocumentIdProps> {
  get value(): string {
    return this.props.value;
  }

  private constructor(props: UserDocumentIdProps) {
    super(props);
  }

  private static isDocumentIdValid(documentId: string): boolean {
    let soma;
    let resto;
    soma = 0;
    if (documentId == "00000000000") return false;

    for (let i = 1; i <= 9; i++) soma = soma + parseInt(documentId.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(documentId.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(documentId.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(documentId.substring(10, 11))) return false;
    return true;
  }

  private static format(documentId: string): string {
    return documentId.trim();
  }

  public static create(documentId: string): Result<UserDocumentId> {
    if(!this.isDocumentIdValid(documentId)) {
      return Result.fail<UserDocumentId>("Documento inválido");
    }
    return Result.ok<UserDocumentId>(new UserDocumentId({
      value: this.format(documentId),
    }));
  }
}
