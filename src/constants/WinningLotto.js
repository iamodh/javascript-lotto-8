import LOTTO_CONFIG from './lottoConfig';

class WinningLotto {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;

    this.#validateNumberRange(bonusNumber);
    this.#validateBonusNumberDuplicates(numbers, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(['[ERROR] 로또 번호는 6개여야 합니다.']);
    }

    this.#validateDuplicates(numbers);

    for (number of numbers) {
      this.#validateNumberRange(number);
    }
  }

  #validateDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복이 불가합니다.');
    }
  }

  #validateNumberRange(number) {
    if (
      number < LOTTO_CONFIG.NUMBER_RANGE_FROM ||
      number > LOTTO_CONFIG.NUMBER_RANGE_TO
    ) {
      throw new Error(['[ERROR] 유효하지 않은 범위의 로또 번호입니다.']);
    }
  }

  #validateBonusNumberDuplicates(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복이 불가합니다.');
    }
  }
}

export default WinningLotto;
