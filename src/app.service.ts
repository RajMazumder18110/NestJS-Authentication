/** @notice Library imports */
import { Injectable } from "@nestjs/common";
/// Local imports

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
