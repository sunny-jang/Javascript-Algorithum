function solution(X, A) {
  let counterArr = new Array(X).fill(0);
  let availableSec = -1;

  for(let i=0; i<A.length; i++) {
    if(counterArr[A[i]-1] === undefined) continue;
    counterArr[A[i]-1] +=1;
    
    if(!(counterArr.indexOf(0) > -1)) {
      availableSec = i;
      break;
    } 
  }

  return availableSec;
}

solution(5, [1,3,1,4,2,3,5,4,6])
