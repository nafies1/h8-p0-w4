 // [Exercises 7] Urutkan Abjad
 // Logic Challenge - Mengurutkan Abjad

function urutkanAbjad(str) {
  // you can only write your code here!
  var kataTerurut = '';
  var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (var i = 0; i < letter.length; i++) {
  	for (var j = 0; j < str.length; j++) {
  		if (letter[i] == str[j]){
  			kataTerurut += str[j];
  		}
  	}
  }
  return kataTerurut;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

 // Diberikan sebuah function urutkanAbjad(str) 
 // yang menerima satu parameter berupa string. 
 // Function tersebut akan mengembalikan string 
 // baru yang telah diubah urutan abjadnya dari a hingga z. 
 // Contohnya, halo akan menjadi ahlo. 
 // Kamu tidak perlu memikirkan apabila ada simbol 
 // ataupun angka didalam string tersebut.