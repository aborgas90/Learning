class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    return 'owooooo';
  }
}

module.exports = Wolf;
