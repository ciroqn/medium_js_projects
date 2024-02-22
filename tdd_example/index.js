// export object to index_test.js

const Calculate = {
  factorial(num) {
    if (num === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

module.exports = Calculate;
