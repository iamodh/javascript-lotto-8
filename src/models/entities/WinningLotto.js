import Lotto from '/src/models/entities/Lotto.js';
import ERROR_MESSAGES from '/src/constants/errorMessages';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);

    this.#validateBonusNumberDuplicates(numbers, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumberDuplicates(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATES);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
