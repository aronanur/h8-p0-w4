function digitPerkalianMinimum(angka) {

  var result = ''

  for(i = 1; i <= angka; i++){
    temp = ''
    if(angka % i === 0){
      hitung = angka / i
      temp = String(i) + String(hitung)
      
      if(result === ''){
        result = temp.length
      }else{
        result = temp.length < result ? temp.length : result
      }

    }
  }

  return result

}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2