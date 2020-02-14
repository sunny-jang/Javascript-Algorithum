let go = ( n ) => {
  if(n == 1) return 0; // if the number is 1, doesn need to calculate again.

  if(d[n] > 0) return d[n];

  d[n] = go(n-1) + 1;

  if(n%2 == 0) {
    let temp = go(n/2) + 1;
    if(d[n] > temp) d[n] = temp;
  }
  if(n%3 == 0) {
    let temp = go(n/3) + 1;
    if(d[n] > temp) d[n] = temp;
  }

  return d[n];
}

go(35);

go(40);