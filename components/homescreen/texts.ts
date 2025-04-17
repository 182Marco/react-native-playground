const texts = {
  inputPlaceHolder: 'Add to do',
  insult: 'You damn moron!',
  sameStrEr() {
    return `You entered the same string! ${this.insult}`;
  },
  noStrEr() {
    return `The goal could not be empty! ${this.insult}`;
  },
};

export { texts };
