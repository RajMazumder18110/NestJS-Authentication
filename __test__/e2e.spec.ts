/** @notice Library imports */
import * as request from "supertest";
import TestAgent from "supertest/lib/agent";
import { Test, TestingModule } from "@nestjs/testing";
/// Local imports
import { AppModule } from "@/app.module";

describe("AppController (e2e)", () => {
  let server: TestAgent;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = moduleFixture.createNestApplication();
    await app.init();
    server = request(app.getHttpServer());
  });

  it("/ (GET)", async () => {
    const res = await server.get("/").expect(200).expect("Hello World!");
  });
});
