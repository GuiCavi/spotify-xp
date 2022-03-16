import { Token } from "../Token";

describe("Token", () => {
  it("isTokenExpired() should return true if token is expired", () => {
    const token = new Token(10, new Date(new Date().getTime() - 5000));
    expect(token.isTokenExpired()).toBe(true);
  });

  it("isTokenExpired() should return false if token is not expired", () => {
    const token = new Token(10, new Date(new Date().getTime() + 5000));
    expect(token.isTokenExpired()).toBe(false);
  });
});
