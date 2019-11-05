 // [Exercises 1] Angka Prima
 // Logic Challenge - Angka Prima

 function angkaPrima(angka) {
  // you can only write your code here!
  if (angka%angka === 0 && angka%2 !== 0 && angka%11){
  	return true;
  }
  return false;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

// Diberikan sebuah function angkaPrima(angka) 
// yang menerima satu parameter berupa angka. 
// Function akan me-return true jika angka 
// tersebut adalah bilangan prima. 
// Jika tidak, return false.