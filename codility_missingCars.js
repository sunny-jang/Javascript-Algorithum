function solution(A) {
    let count = 0;
    let sumArr = [];
    A.reduceRight((pre,val)=>{
      sumArr.push(pre+val);
      return pre+val
    },0)

    sumArr = sumArr.reverse();

    for(let i=0; i<A.length; i++) {
      if(count > 1000000000) return -1
      if(A[i] === 0) count += sumArr[i];
    }

    return count;
}


solution([0,1,0,1,1])
