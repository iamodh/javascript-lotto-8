import User from '../../../src/models/entities/User';

// 심층 방어
describe('사용자 클래스 테스트', () => {
  test('전달 받은 구입 금액이 로또의 가격으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    const PURCHASE_PRICE = 3200;

    expect(() => {
      new User(PURCHASE_PRICE);
    }).toThrow('[ERROR]');
  });
});
