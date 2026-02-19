/** @notice Library imports */
import { Module } from "@nestjs/common";
/// Local imports
import { AppService } from "./app.service";
import { AppController } from "./app.controller";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
