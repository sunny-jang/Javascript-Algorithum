function solution(A) {
  let distictA = [...new Set(A)];
  return distictA.length;
}

solution([1,2,3,3,3,1,2])
