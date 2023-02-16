import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { User, UserProps } from "../../../../modules/users/domain/user";
import { UserDocumentId } from "../../../../modules/users/domain/userDocumetId";
import { UserEmail } from "../../../../modules/users/domain/userEmail";
import { UserName } from "../../../../modules/users/domain/userName";

describe("User Entity", () => {
  describe("create user entity", () => {
    it("should create entity correctly", () => {
      const userProps: UserProps = {
        name: UserName.create("QA Test").getValue(),
        email: UserEmail.create("moto@email.com").getValue(),
        documentId: UserDocumentId.create("44014004023").getValue(),
      };
      const user = User.create(userProps, new UniqueEntityID());
      expect(user.isSuccess).toBeTruthy();
    });
  });
});
