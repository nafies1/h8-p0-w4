 // [Exercises 6] Digit Perkalian Minimum
 // Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
  // you can only write your code here!faktor2
  var arrayFaktor = [];
  var jumlahDigit = [];
  for (var faktor1 = 1; faktor1 <= angka; faktor1++) {
  	for (var faktor2 = angka; faktor2 >= 0; faktor2--) {
  		if (faktor1 * faktor2 == angka){
	  		var hasil=String(faktor1)+String(faktor2)
	  		arrayFaktor.push(hasil);
  		}
  	}
  }
  for (var i = 0; i < arrayFaktor.length; i++) {
  	jumlahDigit.push(arrayFaktor[i].length)
  }
  return Math.min(...jumlahDigit);
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2


// Diberikan sebuah function digitPerkalianMinimum(angka) 
// yang menerima satu parameter angka. 
// Function akan mengembalikan jumlah digit minimal 
// dari angka yang merupakan faktor angka parameter 
// tersebut, Contoh, jika angka adalah 24, maka faktornya 
// adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
// Dari antara faktor tersebut, yang digit nya paling 
// sedikit adalah 3 * 8 atau 4 * 6, sehingga function 
// akan me-return 2.