function ubahHuruf(kata) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var result = ''

    for(i = 0;i < kata.length; i++){
        var tempString = ''
        for(j = 0; j < alphabet.length; j++){
            if(kata[i] === alphabet[j]){
                if(j < alphabet.length - 1){
                    tempString += alphabet[j+1]
                }else{
                    tempString += alphabet[0]
                }
            }
        }
        result += tempString
    }

    return result

  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  console.log(ubahHuruf('zzz')) // aaa