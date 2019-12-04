function tukarBesarKecil(kalimat) {

    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var result = ''

    for(i = 0; i < kalimat.length;i++){
        temp = ''
        var found = false
        for(j = 0; j < upperCase.length; j++){
            
            if(kalimat[i] === upperCase[j]){
                temp = lowerCase[j]
                found = true
            }else if(kalimat[i] === lowerCase[j]){
                temp = upperCase[j]
                found = true
            }

        }

        if(!found){
            temp = kalimat[i]
        }

        result += temp
    }

    return result
    
}
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"