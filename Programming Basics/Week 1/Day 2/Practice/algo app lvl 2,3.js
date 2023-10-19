// lessons;level 2;activity 1

var x =[1,2,4];
console.log(x);
//[1,2,4]

// lessons;level 2;activity 2
var x = [1,3,5];
console.log(x);
//[1,3,5]


//lessons;level 2;activity 3
var x = [2,4,6];
console.log(x[1]);
//4


//lessons;level 2;activity 4
var x = [2,4,6];
console.log(x[2]);
//6

//lessons;level 2;activity 5
var x = [1.3];
console.log(x[0]);
//1.3

//lessons; level 2; activitty 6
var x =[1,2,4];
x[0] = x[1];
console.log(x);
// [2,2,4]

//lessons ; level 2 ;activity 7
var x = [1,3,5]
var y=x.length;
console.log(y);
//3

//lessons ; level 2 ;activity 8
var x =[2,4,6,3,7];
var y = x.length-2;
console.log(x[y]);
// 3

//lessons ; level 2 ;activity 9 
var x = [2,4,6,3,7];
var y  =x.length;
console.log(x[y-1]);
//7

//lessons ; level 2; acyivity 10 
var x = [1,3,5,7];
x[0]=x[x.length-2];
console.log(x);
// [5,3,5,7]

//lessons ; level 2 ; activity 11
var x =[1,3,5,7];
x[x.length-3]= x[x.length/2+x.length/4];
consome.log(x)
// [1,7,5,7]

//lessons ;level 2 ;activity 12
var x = [1,3,5,7];
var y =[2,4,6];
x[2]=y[x.length-3];
console.log(x);
// [1,3,4,7]

//lessons ; level 2 ; activitty 13
var x =[1,3,5,7];
var y =[2,4,6];
x[2]=y[x.length-3] + x[x[0]+y[0]];
console.log(x);
//[1,3,11,7]

//lesssons; level 3 ; activity 1
var x = [1,3,5];
x[0] =x[2];
x[1] =x[0];
console.log(x);
//[5,5,5]

//lessons ; level 3 ; activitty 2
var x = [1,3,5];
var y =[0,5,7];
x[0]=x[1]+y[2];
y[1]=y[2]-x[0];
console.log(x);
//[10,3,5]

//lessons; level 3 ; activity 3
var x = [1,3,5,8]
x[0] = x[x.length-1];
console.log(x);
//[8,3,5,8]


//lessons ; level 3 ;activity 4
var x = [1,3,5,8]
var temp = x[x.length-1];
x[x.length-1]=x[0];
console.log(x);
//[1,3,5,1]

//lessons; level 3; activity 5
var x = [1,3,5,8]
var temp = x[x.length-1];
x[x.length-1]=[0];
x[0] = temp; 
console.log(x)


//lessons; level 3; activity 6
var x = [1,3,5,8]
x.pop();
x.push(7);
consqole.log(x);

//lessons; level 3; activity 7
var x =[1,3,5];
x[0] =15;
x[3]=77;
console.log(x);

//lessons; level 3; activity 8
var x = [1,3,5,8,2,-5,-8];
x[0] = x[x.length-1];
x[x.length-1] = x[0];
console.log(x);

//lessons; level 3; activity 9
var x = [1,3,5,8,2,-5,-8];
var temp = x[x.lenght-1];
x[0]=temp;
console.log(x);

//lessons; level 3; activity 10
var x=[1,3,5];
x.push(7);
console.log(x)


//lessons; level 3; activity 11
var x = [2,4,6];
x.push(3);
console.log(x);

//lessons; level 3; activity 12
var x = [1,3,5];
var y = x[0]+x[1];
x.push(y);
console.log(x);

//lessons; level 3; activity 13
var x = [2,3,5];
x.push(x[0]+x[1]);
console.log(x);

//lessons; level 3; activity 14
var x = [1,3,5];
x.pop();
console.log(x);






