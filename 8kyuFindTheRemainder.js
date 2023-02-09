/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
*/

function remainder(n, m){ 
 return n > m && m == 0 ? NaN:
        m > n && n == 0 ? NaN:
        n > m ? n % m:
        m > n ? m % n :
        n == m || m == n ? n % m:
        NaN
}