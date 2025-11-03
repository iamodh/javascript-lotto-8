import PRIZE_CONFIG from '../../constants/prizeConfig.js';

class Checker {
  getWinningStatistic(lottos, winningLotto) {
    const winningStatistic = {};

    for (let rank = 1; rank <= PRIZE_CONFIG.COUNT; rank++) {
      winningStatistic[rank] = [];
    }

    for (const lotto of lottos) {
      const rank = this.#checkRank(lotto, winningLotto);

      if (rank !== null && rank <= PRIZE_CONFIG.COUNT) {
        const numbers = lotto.getNumbers();

        winningStatistic[rank].push(numbers);
      }
    }

    return winningStatistic;
  }

  #checkRank(lotto, winningLotto) {
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
