 // [Exercises 5] Ubah Huruf
 // Logic Challenge - Ubah Huruf

function ubahHuruf(kata) {
  // you can only write your code here!
  var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  nextHuruf = '';
  for (var i = 0; i < kata.length; i++) {
  	var index = letter.indexOf(kata[i]);
  	index++;
  	nextHuruf += letter[index];
  }
  return nextHuruf;
} 

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu



// Diberikan function ubahHuruf(kata) yang akan menerima 
// satu parameter berupa string. Functiona akan me-return 
// sebuah kata baru dimana setiap huruf akan digantikan dengan 
// huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c 
// akan menjadi d, k menjadi l, dan z menjadi a.