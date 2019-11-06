 // [Exercises 9] Cek AB
 // Logic Challenge - Check AB

function checkAB(num) {
  // you can only write your code here!
  var indexA = [];
  var indexB = [];
  for (var i = 0; i < num.length; i++) {
  	if (num[i] == 'a') {
  		indexA.push(i);
  	} else if (num[i] == 'b') {
  		indexB.push(i);
  	}
  }
  for (var j = 0; j < indexA.length; j++) {
  	for (var k = 0; k < indexB.length; k++) {
  		var selisih = indexA[j] - indexB[k];
  		if (Math.abs(selisih) == 4){
  			return true;
  		} 
  	}
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false



// Diberikan sebuah function checkAB(str) yang menerima 
// satu parameter berupa string. function tersebut 
// mengembalikan nilai true jika di dalam string tersebut 
// terdapat karakter a dan b yang memiliki jarak 3 karakter
// lain minimal satu kali. Jika tidak ditemukan 
// sama sekali, kembalikan nilai false. 
// Jarak bisa dari a ke b, atau b ke a.