/*
==========
GET PRIMES
==========

Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 11.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

Deret bilangan prima
2, 3, 5, 7, 11, 13, 17, 19, 23, dst

Buatlah sebuah function getPrime dimana menerima sebuah parameter bertipe Number.
Function tersebut mengembalikan/me-return array kumpulan deret bilangan prima sampai parameter tersebut.

Contoh 1:

input: 10
output: [ 2, 3, 5, 7 ]
karena di-range angka 10 hanya bilangan 2, 3, 5 dan 7 saja yang merupakan bilangan prima

Contoh 2:

input: 44
output: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
karena di-range angka 44 hanya bilangan di atas saja yang merupakan bilangan prima


RULES:
- WAJIB membuat algoritma/pseudocode untuk program getPrime

PSEUDOCODE
=========================
SET result WITH VALUE [] //empty array

FOR i TO num
  SET notPrime WITH VALUE 0

    IF i GREATER THAN EQUAL 2 THEN
      FOR j TO num 
        IF j NEGATION DOUBLE QUEAL 1 AND j NEGATION DOUBLE EQUAL i THEN
          IF i MOD j THREE EQUAL 0 THEN
            notPrime INCREMENT
          END IF
        END IF
      END FOR
      IF notPrime THREE EQUAL 0 THEN
        PUSH i TO result
      END IF
      END IF
    END FOR

    RETURN result
*/

function getPrime(num) {

  let result = []

  for(i = 0; i < num; i++){
    let notPrime = 0
    if(i >= 2){
      for(j = 0 ; j < num; j++){
        if(j !== 1 && j !== i){
          if(i % j === 0){
            notPrime++
          }
        }
      }
      if(notPrime === 0){
        result.push(i)
      }
    }
  }
  return result

}



console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
console.log(getPrime(1)); // []
console.log(getPrime(0)); // []