function solution(A) {
  let sorted = A.sort((a,b)=>a-b);
  if(sorted[0] !== 1) return 1;
  let res = A.length+1;

  for(let i=0; i<A.length-1; i++) {
    if(sorted[i+1] - sorted[i] !== 1){
      res = sorted[i]+1;
      break;
    }
  }    
  return res;
}
