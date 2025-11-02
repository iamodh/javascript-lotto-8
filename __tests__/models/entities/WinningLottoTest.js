import WinningLotto from '/src/models/entities/WinningLotto';

describe('당첨 로또 클래스 테스트', () => {
  test('당점 로또 번호의 개수가 6개가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5], 6);
    }).toThrow('[ERROR]');
  });

  test('당첨 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 5], 6);
    }).toThrow('[ERROR]');
  });

  test('보너스 로또 번호가 당첨 로또 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 6);
    }).toThrow('[ERROR]');
  });
});
