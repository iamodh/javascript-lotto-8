import { Console } from '@woowacourse/mission-utils';
import LOTTO_CONFIG from '../constants/lottoConfig';

class Input {
  async getInvestment() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    const investment = Number(input);
    this.#validateNumberPositive(investment);

    return investment;
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

    const numbers = input.split(',').map((number) => Number(number.trim()));

    numbers.forEach((number) => this.#validateNumberInRange(number));

    return numbers;
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

    const number = Number(input);

    this.#validateNumberInRange(number);

    return number;
  }

  #validateNumberPositive(number) {
    if (Number.isNaN(number) || !Number.isInteger(number) || number === 0) {
      throw new Error('[ERROR] 양의 정수가 아닌 입력 값이 존재합니다.');
    }
  }

  #validateNumberInRange(number) {
    this.#validateNumberPositive(number);

    if (
      number < LOTTO_CONFIG.NUMBER_RANGE_FROM ||
      number > LOTTO_CONFIG.NUMBER_RANGE_TO
    ) {
      throw new Error(
        '[ERROR] 로또 번호의 범위에서 벗어난 입력 값이 존재합니다.'
      );
    }
  }
}

export default Input;
