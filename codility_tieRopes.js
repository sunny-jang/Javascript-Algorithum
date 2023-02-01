function solution(K,A) {
  A.sort((a,b)=>b-a);
  let cnt = 0;
  let sum = 0;

  for(let i=0; i<A.length; i++) {
    if(A[i] >= K) {
      cnt++;
      continue;
    }
    sum+=A[i];

    if(sum>=K) {
      cnt++;
      sum=0;
    };
  }
  console.log(cnt)

  return cnt;
}

solution(1,[1]);
// solution([1,2,3,4,1,1,3], 1);
// solution([1,2,3,4,1,1,3], 2);
solution(4,[1,2,3,4,1,1,3]);
// solution([], 4);
// solution
