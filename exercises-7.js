function urutkanAbjad(str) {

    var splitStr = []

    for(i = 0; i < str.length; i++){
        splitStr.push(str[i])
    }

    for(i = 0; i < splitStr.length; i++){
        for(j = 0; j < splitStr.length; j++){
            if(splitStr[j] > splitStr[j+1]){
                temp = splitStr[j]
                splitStr[j] = splitStr[j+1]
                splitStr[j+1] = temp
            }
        }
    }
    
    var joinStr = ''

    for(i = 0 ; i < splitStr.length; i++){
        joinStr += splitStr[i]
    }
    
    return joinStr

}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'