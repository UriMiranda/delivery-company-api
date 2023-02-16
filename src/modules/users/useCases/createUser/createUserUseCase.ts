import { left, Result, right } from "../../../../shared/core/Result";
import { UseCase } from "../../../../shared/core/UseCase";
import { UserDocumentId } from "../../domain/userDocumetId";
import { UserEmail } from "../../domain/userEmail";
import { CreateUserRequestDto } from "./createUserRequestDto";
import { CreateUserResponse } from "./createUserResponse";

export class CreateUserUseCase implements UseCase<CreateUserRequestDto, CreateUserResponse> {
  execute(request: CreateUserRequestDto): CreateUserResponse {
    const emailOrError = UserEmail.create(request.email);
    const documentIdOrError = UserDocumentId.create(request.documentId);
    const combinedResult = Result.combine([emailOrError, documentIdOrError]);
    if (combinedResult.isFailure) {
      console.log(combinedResult.getErrorValue());
      return left(Result.fail<void>(combinedResult.getErrorValue())) as CreateUserResponse;
    }

    return right(Result.ok<void>());
  }
}
