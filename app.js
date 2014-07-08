// this is a single line comment//

/* this is a
 * multi-line
 * comment
 */
 var a = 3;
 var b = 2;
 var c = a+b;
 console.log(a);
 console.log(b);
 console.log(c);

 var first = 'liza'
 var last = 'carter'

 var fullName = first + ' ' + last;

console.log(fullName);

var first = 'Nashville';
var second = 'Software';
var third = 'School'
var nSS = first+' '+second+' '+third;

console.log(nSS);

var d = Math.pow(2,8);

console.log('2^8 ===', d);

a = 3;
b = 4;
c = 5;
var d = 6;
console.log(d);

var e = (a + b)/(b-c);
console.log(e);
var f = (b-a)/(c-d);
var g = e * f;
console.log(f);
var h = Math.pow(g,(b+a));
console.log(h);
var base = ((a+b)/(b-c)) * ((b-a)/(c-d));
var exp = b + a;
var e = Math.pow(base,exp);
console.log(e);

/*branching with if else statements*/

var age = 0;
if (age >=21) {
console.log('you are legal to drink');
}
else {
console.log('you are not legal to drink');
}

/*this is the maximum allowed rating you can see*/

if (age>0 && age < 5) {
  console.log('G-rated');
} else if (age<=12) {

  console.log('PG-rated');
} else if (age <= 16) 
{

  console.log('PG-13 rated');
}
else if (age === 17) {

  console.log('R rated');
}

else if (age === 18) {

  console.log('NC-17 rated');
} else {
  console.log('X rated');
}

/*this is a while loop*/

a = 1;

while (a <10) {
  console.log('a is looping...', a);
a += 1;
}

//for loop//

for (var i = 0; i <10; i++) {
  console.log('i ===', i); }

  
