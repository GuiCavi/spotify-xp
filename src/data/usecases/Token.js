export class Token {
  constructor(expiresIn, loginAt) {
    this.expiresIn = expiresIn;
    this.loginAt = loginAt;
  }

  isTokenExpired() {
    const now = new Date();

    const loginDate = new Date(this.loginAt);
    loginDate.setSeconds(loginDate.getSeconds() + parseInt(this.expiresIn, 10));

    return now > loginDate;
  }
}
