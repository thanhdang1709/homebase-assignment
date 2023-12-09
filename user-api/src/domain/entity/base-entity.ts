import { validateSync } from "class-validator";
import { BadRequestException } from "../exception";
import { plainToInstance } from "class-transformer";

export class BaseEntity {
  validateAndThrow(): void {
    const errors = validateSync(this);
    const result = errors.map(
      (error) => error.contexts![Object.keys(error.contexts!)[0]]
    );
    if (result.length > 0) {
      throw plainToInstance(BadRequestException, result[0] as object)
    }
  }
}
