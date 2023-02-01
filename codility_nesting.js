function solution(A) {
  let leftStack = [];
  let res = 0;
  
  for(let i=0; i<A.length; i++) {
    let n = A[i];
    if(n === '(') {leftStack.push(n)}
    else if(n===')'){
      if(leftStack.length >0) leftStack.pop();
      else {
        return 0;
      }
    };
  }
  res = leftStack.length>0 ? 0 : 1;
  return res;
}

solution('(())');
solution('(()');
solution('))((');
solution('VW');
