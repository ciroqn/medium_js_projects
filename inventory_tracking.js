// keeping track of inventory in media store

// general class for use in extending 'subclasses' of books, cds, film etc.
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this.ratings;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let len = this._ratings.length
    this._ratings.reduce((accumulator, currentValue) => {
      return (accumulator + currentValue)/len;
    })
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }

  set isCheckedOut(newValue) {
    this.isCheckedOut = newValue;
  }
}