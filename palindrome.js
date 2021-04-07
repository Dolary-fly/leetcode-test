var isPalindrome = function (x) {
  let res = 0;
  let step = 10;
  while (x) {
    y = x % 10;
    x = parseInt(x / 10);
    res = res * step + y;
  }
  return res;
};