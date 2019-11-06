 // [Exercises 10] Change me
 // Logic Challenge - Change Me!

function changeMe(arr) {
  // you can only write your code here!
  if (arr.length == 0){
  	console.log('\"\"');
  } else{
	  var avengers = {};
	  for (var i = 0; i < arr.length; i++) {
	  	for (var j = 0; j < 4; j++) {
	  		switch (j){
	  			case 0 :
	  				avengers.firstName = arr[i][j];
	  				break;
	  			case 1 :
	  				avengers.lastName = arr[i][j];
	  				break;
	  			case 2 :
	  				avengers.gender = arr[i][j];
	  				break;
	  			case 3 :
	  				if (arr[i][j]) {
	  					avengers.age = 2019-arr[i][j];
	  				} else {
	  					avengers.age = 'Invalid Birth Year';
	  				}
	  				break;
	  		}
	  	}
	  	console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]} :`);
	  	console.log(avengers);
	  	console.log('\n');
	  }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""


// Diberikan sebuah function changeMe(arr) yang 
// menerima satu parameter berupa array multidimensi 
// dimana array tersebut berisi value (pasti berurut 
// dari kiri ke kanan) First Name, Last Name, Gender 
// dan Birth Year . Fungsi ini akan menampilkan 
// object literal yang memiliki property firstName, 
// lastName, gender dan age. Nilai age didapatkan 
// dari tahun sekarang dikurang tahun lahir. 
// Jika tahun lahir tidak diisi atau tahun lahir 
// lebih besar dibandingkan tahun sekarang maka age 
// akan berisi 'Invalid Birth Year'

// Contoh jika arr inputan adalah 
// [['Platinum', 'Fox', 'female', 1995], 
// ['John', 'Doe', 'male', 2000]] maka output:

// Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
// John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }