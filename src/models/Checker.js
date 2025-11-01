class Checker {
  #winningLotto;
  #lottos;

  #result = Array.from({ length: 5 }, () => new Array());

  constructor(winningLotto, lottos) {
    this.#winningLotto = winningLotto;
    this.#lottos = lottos;
  }

  checkAllLottos() {
    for (const lotto of this.#lottos) {
      const prize = this.#checkNumbers(lotto.getNumbers());

      if (prize !== null && prize <= 5) {
        this.#result[prize - 1].push(lotto.getNumbers());
      }
    }
  }

  getResult() {
    return this.#result;
  }

  #checkNumbers(numbers) {
    const intersectoinCounts = this.#getIntersectionCounts(
      this.#winningLotto.getNumbers(),
      numbers
    );

    switch (intersectoinCounts) {
      case 6:
        return 1;
      case 5: {
        if (numbers.includes(this.#winningLotto.getBonusNumber())) {
          return 2;
        }
        return 3;
      }
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return null;
    }
  }

  #getIntersectionCounts(numbers1, numbers2) {
    const sumOfLength = numbers1.length + numbers2.length;
    const unionLength = new Set([...numbers1, ...numbers2]).size;

    return sumOfLength - unionLength;
  }
}

export default Checker;
