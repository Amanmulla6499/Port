let score = "33" // ya madhe true,none == Nan, undefined==NaN  he try karne

//console.log(typeof score);

// console.log(typeof(score)); //yach op yetay = string bcoz apan " " madhe value diloe ahe

//for conversion

// ya madhe pahila ek let varibale declare karne ya nanatar kasha madhe convert karayache ahe te datatype lihne Pahila word Capital mg konla conversion  karayche tycha name

let value = Number(score)

//console.log(value);




// atta number to boolena conversion 

let loggedInn = 0  //0 == false ,1== true

//jr loggedInn he empty string ASEL tr FALSE yenar ||  "" = False 
// jr loggedInn he empty string NASEL tr TRUE yenar ||  "Aman"= True

let loggedOut = Boolean(loggedInn)

console.log(loggedOut);



// number to string conversion

let anyNumber = 33

let someNumber = String (anyNumber)

console.log(someNumber);
// he convert zalele astay string madhe pn value he number dakhwat astay
console.log(typeof someNumber);