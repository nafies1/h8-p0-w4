 // [Exercises 4] Cari Modus
 // Logic Challenge - Mencari Modus

function cariModus(arr) {
  // you can only write your code here!
  var tampungAngka = [];
  var count = [];
  for (var i = 0; i < arr.length; i++) {
  	var angka = arr[i];
  	var status = true;
  	for (var j = 0; j < tampungAngka.length; j++) {
  		if (tampungAngka[j] == angka && j !== i){
  			status = false;
  			count[j] += 1;
  		}
  	}
  	if (status) {
  		tampungAngka.push(angka);
  		count.push(1);
  	}
  }
  if (count.length === 1) {
  	return -1;
  } else {
  	var totCount = 0;
  	for (var k = 0; k < count.length; k++) {
  		totCount += count[k];
  		if (k != count.length-1) {
  			if (count[k] > count[k+1]){
  				var index = k;
  			} else if (count[k] == count[k+1] && count[k] > count[k+2]) {
  				return tampungAngka[k];
  			}
  		}
  	}
  	if (totCount%count.length === 0) {
  		return -1
  	} 
  }
  return index !== undefined ? tampungAngka[index] : 'input not valid';
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1


// Diberikan sebuah function cariModus(arr) yang 
// menerima sebuah array angka. Function akan me-return 
// modus dari array atau deret angka tersebut. 
// Modus adalah angka dari sebuah deret yang paling 
// banyak atau paling sering muncul. 
// Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. 
// Jika modus tidak ditemukan, function akan me-return -1. 
// Apabila ditemukan lebih dari dua nilai modus, 
// tampilkan nilai modus yang paling pertama muncul 
// (dihitung dari kiri ke kanan). 
// Dan apabila di dalam modus hanya ada 1 nilai yang sama 
// maka function akan me-return -1, 
// Contohnya [1, 1, 1] adalah -1.