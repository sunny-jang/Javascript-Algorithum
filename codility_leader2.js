//55점 ㅠㅠ 
function solution(A) {
  let cnt =0;

  for(let i=1; i<A.length; i++) {
    let preLeader = getLeader(A.slice(0,i));
    let sufLeader = getLeader(A.slice(-(A.length-i)));
    if(preLeader === -1 && sufLeader === -1) {cnt = 0; continue}
    if(preLeader === sufLeader){
      cnt++;
    }
  }
  return cnt;
}

function getLeader (A) {
  let sorted = [...A].sort((a,b)=>a-b);
  let halfN = Math.floor(A.length/2);
  let cnt = 0;

  sorted.forEach((n,i)=> {
    if(sorted[i] === sorted[halfN]) {
      cnt+=1;
    }
  })

  return cnt > halfN ? sorted[halfN] : -1
}

// solution([3,4,3,2,3,-1,3,3]);
// solution([2, 1, 1, 3]);
// solution([1, 2, 3, 4, 5]);
solution([4,3,4,4,4,2]);
// solution([1]);
