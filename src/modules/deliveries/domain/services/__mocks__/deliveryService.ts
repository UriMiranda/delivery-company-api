import { Result } from "../../../../../shared/core/Result";

// Import this named export into your test file:
export const mockCalculatePrice = jest.fn().mockImplementation(() => Result.ok<number>(100));

const mock = jest.fn().mockImplementation(() => {
  return { calculatePrice: mockCalculatePrice };
});

export default mock;
