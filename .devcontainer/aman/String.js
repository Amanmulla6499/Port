const Fname = "Aman"
const Lname = " Mulla"

// console.log(Fname + Lname ); 

// we can right in modern way
// this is called string interpolation
console.log(`My First name is ${Fname} and My Last Name is ${Lname}`);

const gameName = new String('AmanRiyajMulla');

// lenght string madhe kiti word aheat te kalte

console.log(gameName.length); //op= 14

// uppercase sagle word mothe hotat

console.log(gameName.toUpperCase());  // op = AMANRIYAJMULLA

// charat ya madhe kontya number la konta word ahe he kalte 

console.log(gameName.charAt(5)); // op = i

//indexof  ya madhe kontya word la konta number ahe he kalte 
console.log(gameName.indexOf('R')); // op = 4

//substring
const NewString = gameName.substring(0,5);
console.log(NewString);

//slice
// ya mdhe apn negative value deto
const NewSlice = gameName.slice(-10, -2)
console.log(NewSlice);

// trim
const Newtrim = "       Aman      "
console.log(Newtrim);

//trim use kele ki extra space kadun takte 
console.log(Newtrim.trim());

//replace == ya madhe Aman chy jagi mla @gmail pahije hote te change hote
const url = "https://googleAman.com"

                       // konta change     ky change
console.log(url.replace('Aman',            '@gmail'));


// include

const abc = "Amanriyajmulla"
console.log(abc.includes('Aman'));  // he value asel tr true yenar
console.log(abc.includes('Arsiya')); // he value nahi mg false yenar

// split manje string to array convert

const zxcv = "Aman-Riyaj-mulla"
console.log(zxcv.split('-')); // op = [ 'Aman', 'Riyaj', 'mulla' ]

