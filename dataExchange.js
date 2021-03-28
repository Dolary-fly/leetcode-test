//整数反转
var reverse = function (x) {
  let temp = 10;
  let res = 0;
  let y;

  while (x) {
    y = x % 10;
    x = parseInt(x / 10);
    res = res * temp + y;
  }
  if (res <= -Math.pow(2, 31) || res >= Math.pow(x, 31) - 1) {
    return 0;
  }
  return res;

};