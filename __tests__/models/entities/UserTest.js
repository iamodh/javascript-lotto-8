import User from '/src/models/entities/User';
import { LOTTO_CONFIG } from '/src/constants/lottoConfig';

describe('사용자 클래스 테스트', () => {
  test('투자 금액이 로또의 가격으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new User(3200);
    }).toThrow('[ERROR]');
  });

  test('투자 금액에 맞는 개수의 로또를 구입한다.', () => {
    const investment = 3000;
    const quantity = investment / LOTTO_CONFIG.PRICE;

    const user = new User(investment);
    user.purchaseLottos(quantity);
    const purchasedLottos = user.getPurchasedLottos();

    expect(purchasedLottos.length).toBe(quantity);
  });
});
