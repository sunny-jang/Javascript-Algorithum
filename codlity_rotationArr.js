function solution(A, K) {
  let rotationCnt = K%A.length;
  let uniqueArr = [...new Set(A)];
  
  if(K % A.length === 0 || uniqueArr.length === 1) return A;

  let sufA = A.slice(0,A.length-rotationCnt);
  let preA = A.slice(-rotationCnt);

  return [...preA, ...sufA];
}
