function cariMedian(arr) {
    var oddArray = arr.length % 2 !== 0 ? true : false
    var result = ''
    var medianIndex = ''

    for (var i = 0; i < arr.length; i++) {
        if(oddArray){
            medianIndex = Math.floor(arr.length / 2)
            if(i === medianIndex){
                result = arr[i]
            }
        }else{
            medianIndex = arr.length / 2
            if(i === medianIndex){
                result = (arr[i] + arr[i - 1]) / 2
            }
        }
     }

    return result
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5