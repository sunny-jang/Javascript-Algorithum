function solution(A) {
    let sorted = A.sort((a,b)=>a-b);
    let res = 0;

    for(let i=0; i<A.length; i+=2) {
      if(sorted[i] !== sorted[i+1]) {
        res = sorted[i];
        break;
      }
    }

    return res;
}

solution([9,9,6,3,6,3,7])
