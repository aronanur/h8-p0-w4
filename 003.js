/*
================
Advanced Seating
================
trainSeating adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.
*/

function trainSeating (penumpang) {

  let passenger = {}

  for(i = 0; i < penumpang.length; i++){
    let gerbong = penumpang[i].gerbong

    if(!passenger[gerbong]){
      passenger[gerbong] = [{nama : penumpang[i].nama, seat: penumpang[i].seat}]
    }else{
      passenger[gerbong].push({nama : penumpang[i].nama, seat: penumpang[i].seat})
    }
  }
  
  return passenger

}
 
 
console.log(trainSeating([
  { nama: "Goku", gerbong: "VVIP", seat: 'A1' },
  { nama: "Vegeta", gerbong: "VIP", seat: 'V1' },
  { nama: "Sasuke", gerbong: "VVIP", seat: 'A2' },
  { nama: "Naruto", gerbong: "Regular", seat: 'R1' },
  { nama: "Sakura", gerbong: "Regular", seat: 'R3' },
  { nama: "Luffy", gerbong: "VIP", seat: 'V2' },
  { nama: "Zoro", gerbong: "VVIP", seat: 'A666' },
  { nama: "Nami", gerbong: "VIP", seat: 'V6' }
]));
/*
Output :
{
  VVIP:
  [ { nama: 'Goku', seat: 'A1' },
    { nama: 'Sasuke', seat: 'A2' },
    { nama: 'Zoro', seat: 'A666' } ],
  VIP:
  [ { nama: 'Vegeta', seat: 'V1' },
    { nama: 'Luffy', seat: 'V2' },
    { nama: 'Nami', seat: 'V6' } ],
  Regular:
    [ { nama: 'Naruto', seat: 'R1' },
      { nama: 'Sakura', seat: 'R3' } ]
}
*/
