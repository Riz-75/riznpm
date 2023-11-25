function factorial(n) {

  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 0) {
      return 'Invalid input. Please provide a positive integer for n.';
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const fibSeries = fibonacci(n - 1);
      fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);
      return fibSeries;
    }
  }


module.exports = {factorial,fibonacci};