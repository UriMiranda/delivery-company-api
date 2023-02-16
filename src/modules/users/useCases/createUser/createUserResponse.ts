import { AppError } from "../../../../shared/core/AppError";
import { Either, Result } from "../../../../shared/core/Result";

export type CreateUserResponse = Either<AppError.UnexpectedError | Result<void>, Result<void>>;
