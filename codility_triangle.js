function solution(A) {
  let sorted = A.sort((a,b)=>b-a);

  for(let i=0; i<sorted.length-2; i++) {
    let p = sorted[i]
    let q = sorted[i+1]
    let r = sorted[i+2]
    if(p< q+r && q<p+r && r < p+q) {
      return 1;
    }
  }

  return 0;
}
