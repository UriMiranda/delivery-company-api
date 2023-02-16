import { UserId } from "../../../../modules/users/domain/userId";


describe("User Id", () => {
  it("should create correctly id", () => {
    const userIdOrError = UserId.create();
    const userId = userIdOrError.getValue();
    expect(userIdOrError.isSuccess);
    expect(userId.id).toBeDefined();
  });
});
