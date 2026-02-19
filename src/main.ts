/** @notice Library imports */
import { NestFactory } from "@nestjs/core";
/// Local imports
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
