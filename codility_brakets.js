function solution(A) {
  let leftArr = [];
  let leftReg = /[\[\(\{]/;
  let rightReg = /[\}\)\]]/;

  for(let i=0; i<A.length; i++) {
    if(leftReg.test(A[i])) {
      leftArr.push(A[i]);
      continue;
    }else if (rightReg.test(A[i])) {
      let rightIem = A[i];
      let lastLeftItem = leftArr[leftArr.length-1];
      let cases = 
      (rightIem === ')' && lastLeftItem === '(') ||
      (rightIem === '}' && lastLeftItem === '{') ||
      (rightIem === ']' && lastLeftItem === '[')

      if(cases) {
        leftArr.pop();
      }
    }
  }

  return leftArr.length > 0 ? 0 : 1;
}

solution('{[()]}');
solution('))((');
solution('([)()]');
solution('');
solution('VW');
