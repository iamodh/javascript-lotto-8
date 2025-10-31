class Checker {
  #winningLotto;
  #bonusNumber;
  #lottos = [];
  #result = Array.from({ length: 5 }, () => new Array());

  constructor(winningLotto, bonusNumber, lottos) {
    this.#winningLotto = winningLotto;
    this.#bonusNumber = bonusNumber;
    this.#lottos = lottos;
  }

  checkAllLottos() {
    for (const lotto of this.#lottos) {
      const prize = this.#check(lotto);

      if (prize !== null && prize <= 5) {
        this.#result[prize - 1].push(lotto);
      }
    }

    return this.#result;
  }

  #check(numbers) {
    const intersectoinCounts = this.#getIntersectionCounts(
      this.#winningLotto,
      numbers
    );

    switch (intersectoinCounts) {
      case 6:
        return 1;
      case 5: {
        if (numbers.includes(this.#bonusNumber)) {
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
