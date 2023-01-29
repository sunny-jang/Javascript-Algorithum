function solution(A) {
  let filtered = A.filter((n=>n>0));
  let uniqArr = [...new Set(filtered)];
  let counter = Array.from({length:Math.max(...uniqArr)},()=>0);
  let smallist = 0;
  
  for(let i=0; i<uniqArr.length; i++) {
    counter[uniqArr[i]-1]++;
  }

  if(uniqArr.length >0){
    smallist = counter.indexOf(0);
    if(smallist < 0) smallist = A.length;
  };

  return smallist+1;
}

solution( [1, 3, 6, 4, 1, 2, -1,10]);
solution( [-1,-3]);
solution( [1,2,3]);
