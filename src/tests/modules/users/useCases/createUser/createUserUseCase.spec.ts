import { CreateUserRequestDto } from "../../../../../modules/users/useCases/createUser/createUserRequestDto";
import { CreateUserUseCase } from "../../../../../modules/users/useCases/createUser/createUserUseCase";


describe("Create User UseCase", () => {
  describe("create user use case execution", () => {
    it("should create correctly", async () => {
      const useCase = new CreateUserUseCase();
      const dto = {
        name: "Teste",
        email: "test@test.com.br",
        documentId: "44014004023",
      } as CreateUserRequestDto;
      const result = useCase.execute(dto);
      expect(result.isRight()).toBeTruthy();
    });
  });
});
