function solution(N, A) {
    let counters = Array.from({length:N},()=>0);
    let currentMax = 0;

    for(let i=0; i<A.length; i++){
      let num = A[i];
      if(num === N+1){counters.fill(currentMax)}
      else {counters[num-1] += 1;}

      if(counters[num-1] > currentMax) {
          currentMax = counters[num-1];
      }
    }

    return counters;
}

solution(5,[3,4,4,6,1,4,4])
