class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumbersCount(numbers);
    this.#validateNumbersDuplicates(numbers);
    this.#numbers = numbers;
  }

  #validateNumbersCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateNumbersDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복이 불가합니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
