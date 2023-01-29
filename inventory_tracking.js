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
    let sum = this._ratings.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    // note: toFixed(n) returns a string, hence parseFloat(...)
    return parseFloat((sum / len).toFixed(1));
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }

  set isCheckedOut(newValue) {
    this.isCheckedOut = newValue;
  }
};

// instantiate Book class
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
};
