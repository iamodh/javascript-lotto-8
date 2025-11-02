class Checker {
  getWinningStatistic(lottos, winningLotto) {
    const winningStatistic = Array.from({ length: 5 }, () => new Array());

    for (const lotto of lottos) {
      const prize = this.#checkPrize(lotto, winningLotto);

      if (prize !== null && prize <= 5) {
        winningStatistic[prize - 1].push(lotto.getNumbers());
      }
    }

    return winningStatistic;
  }

  #checkPrize(lotto, winningLotto) {
    const targetNumbers = lotto.getNumbers();
    const winningNumbers = winningLotto.getNumbers();
    const bonusNumber = winningLotto.getBonusNumber();

    const intersectoinCounts = this.#getIntersectionCounts(
      targetNumbers,
      winningNumbers
    );

    switch (intersectoinCounts) {
      case 6:
        return 1;
      case 5: {
        if (targetNumbers.includes(bonusNumber)) {
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

  #getIntersectionCounts(numsA, numsB) {
    const totalCounts = numsA.length + numsB.length;
    const unionCounts = new Set([...numsA, ...numsB]).size;

    return totalCounts - unionCounts;
  }
}

export default Checker;
