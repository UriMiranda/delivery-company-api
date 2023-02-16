import { Result } from "./Result";
import { UseCaseError } from "./UseCaseError";

export namespace AppError {
  export class UnexpectedError extends Result<UseCaseError> {
    constructor(err: any) {
      super(false, {
        message: "Erro inexperado",
        error: err,
      } as UseCaseError);
      console.log(`[AppError]: An unexpected error occurred`);
      console.error(err);
    }
  }
}
