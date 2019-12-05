/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikan nilai string yang merupakan jumlah terbanyak dan terdikit.
[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah ali
[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"
[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/

/*
================================================================
PSEUDOCODE:
-----------
================================================================
*/

function eMoneySplit (stringData) {
    
    let tempMoney = [[]]
    let tempString = ''
    let index = 0

    if(stringData === ''){
        return 'tidak ada catatan eMoney'
    }

    //gabungkan nama dengan money di 1 index array
    for(i = 0; i < stringData.length + 1; i++){
        if(stringData[i] === ',' || stringData[i] === ':' || stringData[i] === undefined){
            if(tempMoney[index][1] === undefined){
                tempMoney[index].push(tempString)
            }else{
                tempMoney.push([])
                index++
                tempMoney[index].push(tempString)
            }   
            tempString = ''
        }else{
            tempString += stringData[i]
        }
    }

    let currentMax = ''
    let currentMin = ''
    let money = 0
    let prevMinMoney = 0

    if(tempMoney.length === 1){
        return `terbanyak adalah ${tempMoney[0][0]} dan terdikit adalah ${tempMoney[0][0]}`
    }

    for(i = 0; i < tempMoney.length; i++){   
        if(Number(tempMoney[i][1]) > money){
            currentMax = tempMoney[i][0]
            money = tempMoney[i][1]
        }else{
            prevMinMoney = prevMinMoney === 0 ? money : ''
            if(Number(tempMoney[i][1]) < prevMinMoney){
                currentMin = tempMoney[i][0]
                prevMinMoney = tempMoney[i][1]
            }
        }
    }

    return `terbanyak adalah ${currentMax} dan terdikit adalah ${currentMin}`
}
  
  console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
  // terbanyak adalah bagas dan terdikit adalah ali
  console.log(eMoneySplit('andre:50000'))
  // terbanyak adalah andre dan terdikit adalah andre
  console.log(eMoneySplit(''))
  // tidak ada catatan eMoney