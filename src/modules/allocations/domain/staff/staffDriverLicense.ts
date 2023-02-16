import { Result } from "../../../../shared/core/Result";
import { ValueObject } from "../../../../shared/domain/ValueObject";

export interface StaffDriverLicenseProps {
  category: string;
  dueAt: Date;
  issuedAt: Date;
}

export class StaffDriverLicense extends ValueObject<StaffDriverLicenseProps> {
  get category(): string {
    return this.props.category;
  }

  get dueAt(): Date {
    return this.props.dueAt;
  }

  get issuedAt(): Date {
    return this.props.issuedAt;
  }

  private constructor(props: StaffDriverLicenseProps) {
    super(props);
  }

  public isOverdue(): boolean {
    return StaffDriverLicense.isOverdue(this.dueAt);
  }

  private static isOverdue(dueAt: Date) {
    return new Date() > dueAt;
  }

  public static create(props: StaffDriverLicenseProps): Result<StaffDriverLicense> {
    if (this.isOverdue(props.dueAt)) {
      return Result.fail<StaffDriverLicense>("Drive license is overdue");
    }
    return Result.ok<StaffDriverLicense>(new StaffDriverLicense(props));
  }
}
