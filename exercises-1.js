function angkaPrima(angka) {
    var count = 0
    if(angka >= 2){
        for (var i = 1; i <= angka; i++) {
            if(i !== 1 && i !== angka){
                if(angka % i === 0){
                    count += 1
                }
            }
        }
    }else{
        count = 1
    }
    
    return count === 0
    
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
  console.log(angkaPrima(1001)); // false
