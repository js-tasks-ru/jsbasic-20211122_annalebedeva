function factorial(n) {
  if ( n == 0 || n == 1 ) {
    return 1;
  }
  for (let i = n - 1; i >= 1; i--) { // i = n - 1, n -2 , n - 3, ..., 1
    n *= i;                          
   }
   return n;
}
