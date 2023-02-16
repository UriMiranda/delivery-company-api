export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  private error?: T | string;
  private _value?: T;

  constructor(isSuccess: boolean, error?: T | string, value?: T) {
    if (isSuccess && error) {
      throw new Error("InvalidOperation: A result cannot be successful and contain an error");
    }
    if (!isSuccess && !error) {
      throw new Error("InvalidOperation: A failing result needs to contain an error message");
    }
    this.isSuccess = isSuccess;
    this.error = error;
    this.isFailure = !isSuccess;
    this._value = value;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess || this._value === null || this._value === undefined) {
      console.log(this.error);
      throw new Error("Can't get the value of an error result. Use 'errorValue' instead.");
    }

    return this._value;
  }

  public getErrorValue(): T {
    return this.error as T;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }

  public static fail<U>(error: string): Result<U> {
    return new Result<U>(false, error);
  }

  public static combine(results: Result<any>[]): Result<any> {
    for (let result of results) {
      if (result.isFailure) return result;
    }
    return Result.ok();
  }
}

export type Either<L, R> = Left<L, R> | Right<L, R>;

export class Left<L, R> {
  constructor(public readonly value: L) {}

  isRight(): this is Right<L, R> {
    return false;
  }

  isLeft(): this is Left<L, R> {
    return true;
  }
}

export class Right<L, A> {
  constructor(public readonly value: A) {}

  isRight(): this is Right<L, A> {
    return true;
  }

  isLeft(): this is Left<L, A> {
    return false;
  }
}

export const left = <L, A>(l: L): Either<L, A> => {
  return new Left(l);
};

export const right = <L, A>(a: A): Either<L, A> => {
  return new Right(a);
};
