class Word {
  constructor(eng, ko) {
    this._eng = eng;
    this._ko = ko;
  }
  get eng() {
    return this._eng;
  }
  get ko() {
    return this._ko;
  }
}

export default Word;
