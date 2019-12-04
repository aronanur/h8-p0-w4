function cariModus(arr) {

  var modusArray = []

  for(i = 0; i < arr.length; i++){
    var unique = true
    for(j = 0; j < modusArray.length;j++){
      if(arr[i] === modusArray[j][0]){
        modusArray[j][1]++
        unique = false
      }
    }
    if(unique){
      modusArray.push([arr[i], 1])
    }
  }

  console.log(modusArray)
  if(modusArray.length <= 1){
    return -1
  }

  var countModus = 0
  var biggestModus = ''
  var notModusNumber = 1

  for(i = 0; i < modusArray.length;i++){

    if(countModus === 1){
      notModusNumber++
    }

    if(modusArray[i][1] > countModus){
      countModus = modusArray[i][1]
      biggestModus = modusArray[i][0]
    }
  }

  return notModusNumber === modusArray.length ? -1 : biggestModus

}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1
// console.log(cariModus([1,2,3,4,6,7,8,5,4,3,2,9,2,3,4,5]))