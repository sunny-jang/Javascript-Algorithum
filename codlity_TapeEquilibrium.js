function solution(A) {
  let minDiff = 1;
  let sumArr = [];
  let allSum = A.reduce((pre,val)=>{
    sumArr.push(pre+val);
    return pre+val
  },0);

  for(let i=0; i<A.length-1; i++) {
    let pre = sumArr[i];
    let suf = allSum-sumArr[i];
    let diff = Math.abs(pre-suf);

    if(i===0) {minDiff = diff}
    else if(diff<minDiff) {minDiff = diff};
  }

  return minDiff
}

solution([-1000, 1000])
solution([3, 1, 2, 4, 3])
