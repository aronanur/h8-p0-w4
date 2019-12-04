function latihanArray(arr) {
    
    var twinNumber = []
    
    for(i = 0; i < arr.length;i++){
        var sameNumber = false
        for(j = 0; j < arr.length; j++){
            if(i > 0){
                if(j !== i){
                    if(arr[i] === arr[j]){
                        sameNumber = true
                    }
                }
            }else{
                sameNumber = true
            }
        }
        if(sameNumber){
            twinNumber.push(arr[i])
        }
    }

    console.log(twinNumber)
    
    var modusNumber = []

    for(i = 0; i < twinNumber.length; i++){
        var uniqueNumber = true
        for(j = 0; j < modusNumber.length; j++){
            if(modusNumber[j][0] === twinNumber[i]){
                modusNumber[j][1]++
                uniqueNumber = false
            }
        }

        if(uniqueNumber){
            modusNumber.push([twinNumber[i], 1])
        }

    }

    return modusNumber

}

console.log(latihanArray([1,2,3,4,6,7,8,5,4,3,2,9,2,3,4,5]))