/**
Jual Beli Pemaen Handal
=====================
Suatu pertandingan sepak bola tingkat RT akan diadakan dibelgia...
Pelatih TIM RT 12 ingin membentuk TIM, tetapi dia kekurangan 2 pemain

Disediakan fungsi kotrakPemaenHandal yang memiliki 2 parameter yaitu `anggaran` dan `minRating`
`anggaran`: adalah Uang yang dimiliki pelatih untuk membeli pemain
`minRating`: adalah minimal rating pemain yang dingin dikontrak oleh pelatih 

Berikut daftar-daftar pemain yang dapat dikontrak
_____________________________________________________________
| No | Nama Pemain       |   Rating  |        Harga          |
|------------------------------------------------------------|
|1.  | Jack Marpaung     |   *****   |              2000000  |
|2.  | Joko Donoloyo     |    ***    |              1500000  |
|3.  | Lesiong           |    ****   |              1750000  |
|4.  | Bambang           |    **     |              1000000  |
|5.  | Mul Daeng         |    *      |               700000  |
|6.  | D`kill		 |   *****   | 		    2100000  |
|____________________________________________________________|


Tugas kamu adalah membantu Pelatih TIM RT 12 untuk menemukan pemain yang dapat dikontrak untuk pertandingan tersebut 
berdasarkan anggaran yang ada

 *Info pemain yang akan diberikan harus sudah digroup sesuai dengan ratingnya dan diurutkan dari rating yang tertinggi
 *Disetiap groupnya urutkan pemain dari harga termahal (dengan asumsi makin tinggi rating, harga semakin tinggi)


# Kondisi khusus
- Jika tidak ada pemain yang dapat dikontrak oleh pelatih (baik karena anggaran kurang ataupun rating tidak sesuai)
Maka kembalikan response "Tidak ada pemain yang sesuai untuk dikontrak"


CONSTRAINTS
============
- Dilarang menggunakan build in function seperti sort, dkk
- DILARANG boongin temen
    *Karena diboongin itu...., #sakit -Joko Simare-mare, 2k19
*/


function kotrakPemaenHandal(anggaran, minRating){
  let daftarPemain = [
    {name: 'Jack Marpaung', rating : 5, harga : 2000000},
    {name: 'Joko Donoloyo', rating : 3, harga : 1500000},
    {name: 'Lesiong', rating : 4, harga : 1750000},
    {name: 'Bambang', rating : 2, harga : 1000000},
    {name: 'Mul Daeng', rating : 1, harga : 700000},
    {name: 'Dekill', rating : 5, harga : 2100000},
];

  let result = {}

  for(i = 0; i < daftarPemain.length; i++){
    let rating = `Rating ${daftarPemain[i].rating}`

    if(!result[rating]){
      if(daftarPemain[i].rating >= minRating && anggaran >= daftarPemain[i].harga){
        result[rating] = [{nama_pemain: daftarPemain[i].name, harga: daftarPemain[i].harga}]
        anggaran -= daftarPemain[i].harga
      }
    }else{
      if(daftarPemain[i].rating >= minRating && anggaran >= daftarPemain[i].harga){
        result[rating].push({nama_pemain: daftarPemain[i].name, harga: daftarPemain[i].harga})
        anggaran -= daftarPemain[i].harga
      }
    }
  }

  return result
}

// TEST CASES
console.log(kotrakPemaenHandal(10000000, 1));
/*
{
  'Rating: 5': [
    { nama_pemain: 'D`kill', harga: 2100000 },
    { nama_pemain: 'Jack Marpaung', harga: 2000000 }
  ],
  'Rating: 4': [ { nama_pemain: 'Lesiong', harga: 1750000 } ],
  'Rating: 3': [ { nama_pemain: 'Joko Donoloyo', harga: 1500000 } ],
  'Rating: 2': [ { nama_pemain: 'Bambang', harga: 1000000 } ],
  'Rating: 1': [ { nama_pemain: 'Mul Daeng', harga: 700000 } ]
}
*/

// console.log(kotrakPemaenHandal(0,1)) // "Tidak ada pemain yang sesuai untuk dikontrak"
// console.log(kotrakPemaenHandal(500000,5)) // "Tidak ada pemain yang sesuai untuk dikontrak"
// console.log(kotrakPemaenHandal(5000000,6)) // "Tidak ada pemain yang sesuai untuk dikontrak"
