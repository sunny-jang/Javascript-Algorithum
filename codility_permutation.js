
function solution(A) {
  let counterArr = Array(A.length).fill(0);
  
  A.forEach((num) => {
    if(counterArr[num-1] === undefined) counterArr[num-1] = 0;
    counterArr[num-1] += 1;
  })

  return counterArr.includes(0) ? 0 : 1; 
}

solution([4,1,2,3]);
solution([4,1,2]);
