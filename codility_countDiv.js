function solution(A, B, K) {
  let offset = A % K === 0 ? 1: 0;
  return Math.floor(B/K) - Math.floor(A/K) + offset;
}

console.log(solution(6, 11,2));
