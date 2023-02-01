function solution(A) {
  let halfLeng = Math.floor(A.length/2);
  let sorted = [...A].sort((a,b)=>a-b);
  for(let i=0; i<A.length;i++) {
    if(sorted[i] === sorted[i+halfLeng]) {
      return A.indexOf(sorted[i]);
    }
  }

  return -1
}

solution([3,4,3,2,3,-1,3,3]);
solution([2, 1, 1, 3]);
solution([2, 1, 1]);
