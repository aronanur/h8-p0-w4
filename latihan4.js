/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.
Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus
Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2
Output:
  [ 666, 10, 5, 6 ]
RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/

/* PSEUDOCODE
SET result WITH VALUE [] //empty array

FOR i TO array LENGTH
    SET remove WITH VALUE false
        IF i GREATER THAN EQUAL index AND i LESS THAN count THEN
            SET remove WITH VALUE true
        END IF
    IF NEGATION remove
        PUSH array[i] TO result
    END IF
END FOR
RETURN result
*/

function arrayRemover(array, index, count) {
    let result = []
    for(i = 0; i < array.length; i++){
        let remove = false
        if(i >= index && i < count){
            remove = true 
        }
        if(!remove){
            result.push(array[i])
        }
    }

    return result
    
}
  
  
  
  
  console.log(arrayRemover([1, 2, 3], 0, 2)); // [3]
  console.log(arrayRemover([666, 666, 333, 10, 5, 6], 1, 2)); // [ 666, 10, 5, 6 ]
  console.log(arrayRemover([1, 2, 3], 0, 3)) // []