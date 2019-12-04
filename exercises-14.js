function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let hasil = []
    //your code here
    for(i = 0; i < arrPenumpang.length; i++){
        var naik = 0
        var turun = 0
        var penumpang = {}
        penumpang['penumpang'] = arrPenumpang[i][0]
        penumpang['naikDari'] = arrPenumpang[i][1]
        penumpang['tujuan'] = arrPenumpang[i][2]

        for(j = 0; j < rute.length; j++){
            if(arrPenumpang[i][1] === rute[j]){
                naik = j
            }else if(arrPenumpang[i][2] === rute[j]){
                turun = j
            }
        }

        hitung = (turun - naik) * 2000
        penumpang['bayar'] = hitung
        hasil.push(penumpang)

    }

    return hasil
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]