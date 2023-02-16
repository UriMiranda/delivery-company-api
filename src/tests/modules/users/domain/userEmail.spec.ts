import { UserEmail } from "../../../../modules/users/domain/userEmail";


describe("User Email", () => {
  describe("create email object value", () => {
    it("should create correctly", () => {
      const result = UserEmail.create("test@hotmail.com");
      expect(result.isSuccess).toBeTruthy();
    });

    it("should throw invalid email error", () => {
      const result = UserEmail.create("test-(@hotmail.com");
      expect(result.isFailure).toBeTruthy();
    });
  });
});
