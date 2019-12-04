function checkAB(num) {

    var posA = 0
    var posB = 0
    var result = 0

    for(i = 0; i < num.length; i++){
        if(num[i] === 'a'){
            posA = i
        }else if(num[i] === 'b'){
            posB = i
        }
        if(posA !== 0 && posB !== 0){
            hitung = Math.abs(posA - posB) - 1
            if(hitung === 3){
                result = 1
            }
        }
    }

    return result > 0

}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false