import LOTTO_CONFIG from './lottoConfig.js';

const ERROR_PREFIX = '[ERROR]';

const ERROR_MESSAGES = Object.freeze({
  NUMBERS_INVALID_COUNT: `${ERROR_PREFIX} 로또 번호의 개수는 ${LOTTO_CONFIG.NUMBERS_COUNT}개여야 합니다.`,
  NUMBERS_DUPLICATES: `${ERROR_PREFIX} 로또 번호는 중복되는 숫자를 가지면 안 됩니다.`,
  BONUS_NUMBER_DUPLICATES: `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복되면 안 됩니다.`,
  INVALID_PRICE: `${ERROR_PREFIX} 구입 금액은 ${LOTTO_CONFIG.PRICE}원으로 나누어져야 합니다.`,
  NUMBER_NOT_POSITIVE: `${ERROR_PREFIX} 입력 값이 0보다 큰 양수가 아닙니다.`,
  NUMBER_NOT_IN_RANGE: `${ERROR_PREFIX} 입력 값은 ${LOTTO_CONFIG.NUMBER_RANGE_FROM}부터 ${LOTTO_CONFIG.NUMBER_RANGE_TO} 사이여야 합니다.`,
});

export default ERROR_MESSAGES;
