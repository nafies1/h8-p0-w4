// [Exercises 14] Naik Angkot
// Logic Challenge - Naik Angkot

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if (arrPenumpang.length === 0) {
  	return '[]';
  }
  var daftarPenumpang = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
  	var dataPenumpang = {};
  	dataPenumpang.penumpang = arrPenumpang[i][0];
  	dataPenumpang.naikDari = arrPenumpang[i][1];
  	dataPenumpang.tujuan = arrPenumpang[i][2];
  	dataPenumpang.bayar = (rute.indexOf(arrPenumpang[i][2])-rute.indexOf(arrPenumpang[i][1]))*2000;
  	daftarPenumpang.push(dataPenumpang);
  }
  return daftarPenumpang;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

/*
Diberikan function naikAngkot(listPenumpang) yang akan 
menerima satu parameter berupa array dua dimensi. 
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan 
membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] 
output: [
			{ 	penumpang: 'Dimitri', 
				naikDari: 'B', 
				tujuan: 'F', 
				bayar: 8000 
			}
		]
*/