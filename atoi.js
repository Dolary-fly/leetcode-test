// 字符串转换为整数
// "42"--42
// "    -42"---42
// "4193 with words"--4193
// 范围：[-2^31,2^31-1]
var myAtoi = function (s) {
  //去除字符串首尾空格
  s1 = s.trim();
  var i = 0;
  var res = 0;
  var temp = "";
  var flag = true; //正数
  if (s1[i] == '-') {
    flag = false;
    i++;
  } else if (s1[i] == '+') {
    i++;
  }
  while ('0' <= s1[i] && s1[i] <= '9') {
    temp += s1[i];
    i++;
  }
  res = parseInt(temp);
  if (temp == "")
    res = 0;
  if (!flag)
    res = res - 2 * res;
  if (-2147483648 > res)
    res = -2147483648;
  if (res > 2147483647)
    res = 2147483647

  return res;
};