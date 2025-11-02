import ERROR_MESSAGES from '/src/constants/errorMessages';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumbersCount(numbers);
    this.#validateNumbersDuplicates(numbers);
    this.#numbers = numbers;
  }

  #validateNumbersCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.NUMBERS_INVALID_COUNT);
    }
  }

  #validateNumbersDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.NUMBERS_DUPLICATES);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
