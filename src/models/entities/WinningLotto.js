import Lotto from '/src/models/entities/Lotto.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);

    this.#validateBonusNumberDuplicates(numbers, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumberDuplicates(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복이 불가합니다.');
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
