/*

Write a recursive function which accepts a number and returns
the nth number in the Fibonacci sequence.

*/

function fib(n) {
  let i = 1;

  function fibHelper(currentNum, prevNum = 0) {
    if (i === n) {
      return currentNum;
    }

    i++;
    
    return fibHelper(currentNum + prevNum, currentNum);
  }

  return fibHelper(1);
}
