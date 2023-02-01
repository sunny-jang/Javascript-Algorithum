function solution(A, B) {
 let aliveFish = 0;
 let downFish = [];

 for(let i=0; i<B.length; i++) {
   if(B[i] === 1) {
     downFish.push(i);
   }else {
     while(downFish.length !==0) {
       const downFishIdx = downFish.pop();
       if(A[downFishIdx] > A[i]) {
         downFish.push(downFishIdx);
         break;
       } else {
         downFish.pop();
       }
     }

     if(downFish.length === 0) aliveFish++;
   }
 }

 return aliveFish + downFish.length;
}

solution(
  [4,3,2,1,5], [0,1,0,0,0]);
