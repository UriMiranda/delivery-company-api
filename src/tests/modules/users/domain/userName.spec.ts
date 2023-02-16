import { UserName } from "../../../../modules/users/domain/userName";

describe("User Name", () => {
  describe("create username value object", () => {
    it("should create correctly", () => {
      const nameOrError = UserName.create("Uriel Miranda");
      expect(nameOrError.isSuccess).toBeTruthy();
    });

    it("should throw an characteres length error ", () => {
      const nameOrError = UserName.create("Yi");
      expect(nameOrError.isFailure).toBeTruthy();
    });
  });
});
