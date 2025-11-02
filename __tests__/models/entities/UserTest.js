import User from '/src/models/entities/User';
import { LOTTO_CONFIG } from '/src/constants/lottoConfig';

describe('사용자 클래스 테스트', () => {
  test('구매 금액이 로또의 가격으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new User(3200);
    }).toThrow('[ERROR]');
  });

  test('구매 금액에 맞는 개수의 로또를 구입한다.', () => {
    const PURCHASE_PRICE = 3000;
    const QUANTITY = PURCHASE_PRICE / LOTTO_CONFIG.PRICE;

    const user = new User(PURCHASE_PRICE);
    user.purchaseLottos(QUANTITY);

    const lottos = user.getPurchasedLottos();

    expect(lottos.length).toBe(QUANTITY);
  });
});
