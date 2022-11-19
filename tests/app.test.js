const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("should return 200 OK", () => {
    return request(app).get("/").expect(200);
  });
});
