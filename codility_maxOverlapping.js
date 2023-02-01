function solution(A,B) {
  let n = A.length;
  let cnt = 1;
  let end = B[0];
  if(n<1) {
    return 0
  }

  for(let i=0; i<n;i++) {
    if(A[i]>end) {
      cnt++;
      end = B[i];
    }
  }

  return cnt;
  console.log(cnt)
}

solution([1,3,7,9,9],[5,6,8,9,10]);
