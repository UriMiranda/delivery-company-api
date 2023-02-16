import { StaffBirthday } from "../../../../../modules/allocations/domain/staff/staffBirthday";

describe("Staff birthday", () => {
  let birthday: Date;

  beforeAll(() => {
    birthday = new Date();
  });

  describe("Create Staff Birthday", () => {
    it("should create staff birthday", () => {
      birthday.setFullYear(1995);
      const staffBirthdayOrError = StaffBirthday.create(birthday);
      const staffBirthday = staffBirthdayOrError.getValue()
      expect(staffBirthday.value).toBe(birthday);
      expect(staffBirthdayOrError).toBeTruthy();
    });

    it("should fail staff birthday because is under age", () => {
      birthday.setFullYear(2006);
      const staffBirthdayOrError = StaffBirthday.create(birthday);
      expect(staffBirthdayOrError.isFailure).toBeTruthy();
    });
  });
});
