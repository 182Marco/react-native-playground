const texts = {
  clearBtnText: 'Clear all',
  goBackToListBtnText: 'Cancel',
  inputPlaceHolder: 'Add to do',
  inputGoalBtnText: 'Add',
  openModalBtnText: 'Add new goal',
  insult: 'You damn moron!',
  sameStrEr() {
    return `You entered the same string! ${this.insult}`;
  },
  noStrEr() {
    return `The goal could not be empty! ${this.insult}`;
  },
};

export { texts };
