import { Result } from "../../../shared/core/Result";
import { Entity } from "../../../shared/domain/Entity";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { UserDocumentId } from "./userDocumetId";
import { UserEmail } from "./userEmail";
import { UserName } from "./userName";

export interface UserProps {
  name: UserName;
  email: UserEmail;
  documentId: UserDocumentId;
}

export class User extends Entity<UserProps> {
  public static create(props: UserProps, id?: UniqueEntityID): Result<User> {
    
    
    const isNewUser = !!id == false;


    return Result.ok(new User(props, id));
  }
}
