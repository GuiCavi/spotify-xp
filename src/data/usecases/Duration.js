export class Duration {
  static format(ms) {
    const time = new Date(ms);

    return `${time.getMinutes()}:${time.getSeconds().toString().padStart(2, "0")}`;
  }
}
