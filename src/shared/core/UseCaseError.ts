export interface IUseCaseError {
  message: string;
}

export abstract class UseCaseError implements IUseCaseError {
  constructor(public readonly message: string) {}
}
