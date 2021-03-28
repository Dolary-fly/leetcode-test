// 将特定字符串Z字型输出
var convert = function(s, numRows) {
  if(numRows==1)
    return s;
  var list=new Array(numRows).fill("");//每一个数组元素都是一个字符串
  var index=0;//记录第index行
  var godown=false;//是否向下走
  var res="";//记录结果
  for(let i=0;i<s.length;i++){
    list[index]+=s[i];
    if(index==0||index==numRows-1){
      godown=!godown
    }
    index+=godown?1:-1;
  }
  res=list.join("");
  return res;
};