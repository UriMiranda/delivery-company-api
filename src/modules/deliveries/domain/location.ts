import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";

const regexLat = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;
const regexLon = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;

interface LocationProps {
  latitude: string;
  longitude: string;
  lastUpdateAt?: string | Date;
}

export class Location extends ValueObject<LocationProps> {
  get latitude(): string {
    return this.props.latitude;
  }

  get longitude(): string {
    return this.props.longitude;
  }

  get lastUpdateAt(): string | Date | undefined {
    return this.props.lastUpdateAt;
  }

  private constructor(props: LocationProps) {
    super(props);
  }

  private static validate(lat: string, lon: string): boolean {
    let validLat = regexLat.test(lat);
    let validLon = regexLon.test(lon);
    return validLat && validLon;
  }

  public static create(props: LocationProps): Result<Location> {
    if (!this.validate(props.latitude, props.longitude)) {
      return Result.fail<Location>("Latitu");
    }
    return Result.ok<Location>(new Location(props));
  }
}
