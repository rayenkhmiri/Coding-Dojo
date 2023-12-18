console.log(example);
var hello = 'world';
//error

//-----------2-------
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//magnet


//----------3----------
var berdan = 'super cool ';
function print(){
    berdan = 'only okay ';
    console.log(berdan)
}
console.log(berdan);
//1: super cool


//----------4---------------

var food = 'chicken'
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';

}
//1:chicken 
//2:half chicken


//----------5----------

mean();
console.log(food);
var mean = function(){
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//ERROR

//-----------6-----------
console.log(genre);
var genre = "disco";
rewind();
function rewind(){
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
console.log(genre);
}
console.log(genre)

// undefined , rock , r&b ,disco


//-------7------------
dojo = "san jose";
console.log(dojo);
learn();
function learn(){
    dojo = 'seattle';
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//san jose , seattle , burbank , burbank

//---------------8---------------

console.log(makeDojo("chicago",65));
console.log(makeDojo("berkley",0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name ;
    dojo.students = students ; 
    if(dojo.students = students);
    if(dojo.students>50){
        dojo.hiring = true ;

    }
    else if(dojo.student<=0){
        dojo = "closed for now";

    }
    return dojo;
}
//ERROR 
