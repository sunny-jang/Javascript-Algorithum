function solution(A) {
  if(A.length <= 3) return A.reduce((a,b)=>a*b);
  let sorted = A.sort((a,b)=>a-b);
  let n = sorted.length;
  let posRes = sorted[n-3] * sorted[n-2] * sorted[n-1] ;
  let negRes = sorted[0] * sorted[1] * sorted[n-1];

  let res = Math.max(posRes, negRes);
  return res;
}

solution([-3,1,2,-2,5,6])
solution([-5, -5, 2, 5, 6])
