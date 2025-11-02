class Checker {
  checkWinningResult(winningLotto, lottos) {
    const winningResult = Array.from({ length: 5 }, () => new Array());

    for (const lotto of lottos) {
      const prize = this.#checkNumbers(winningLotto, lotto.getNumbers());

      if (prize !== null && prize <= 5) {
        winningResult[prize - 1].push(lotto.getNumbers());
      }
    }

    return winningResult;
  }

  #checkNumbers(winningLotto, numbers) {
    const intersectoinCounts = this.#getIntersectionCounts(
      winningLotto.getNumbers(),
      numbers
    );

    switch (intersectoinCounts) {
      case 6:
        return 1;
      case 5: {
        if (numbers.includes(winningLotto.getBonusNumber())) {
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
