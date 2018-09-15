module.exports = function check(str, bracketsConfig) {
  var cor = [0];

    function ini(n) {
      var op = false;
      for (var j = 0; j<bracketsConfig.length;j++) {
        if (str[n] == bracketsConfig[j][0]) {
          cor[0]++;
          cor.push(j);
          op = true;
          break;
        }
      }
      if (!op) {
        for (var j = 0; j<bracketsConfig.length;j++) {
        if (str[n] == bracketsConfig[j][1]) {
          cor[0]++;
          cor.push(j);
          break;
        }
      }
      }
    } 

    ini(0);

  for (var i = 1; i<str.length;i++) {
    if (cor.length == 1) {
      ini(i);
      i++;
    }
    for (var j = 0; j<bracketsConfig.length;j++) {
      if (str[i] == bracketsConfig[cor[cor.length-1]][1]) {
        cor[0]--;
        cor.pop()
        break;
      } else {
        if (str[i] == bracketsConfig[j][0]) {
          cor[0]++;
          cor.push(j)
          break;
        }
      }
    }
  }
  if (cor[0] == 0) {
   return true; 
  } else {
   return false;
  }
}
