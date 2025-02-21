// creating an object and deleting the properties using the for-in loop 

let person = {
    name: "jim",
    age: 20,
    salary: "8LPA",
}

for( k in person) {
    console.log(delete person[k]) // to get the value use [] and to get the key use obj.key
    }
console.log(person);

//  creating an empty object and adding the property separetly

let student = {};
student.name = "Rahul";
student.age = 23;

// nested object

let vehicles = {
    petrol : {
        model1 : "activa",
        model2 : "dio",
    },
    electric : {
        model1 : "ather",
        model2 : "f77",
    },
}

console.log(vehicles.electric.model1);

// Creating a arrow function within an object

let math = {
add : (a,b) =>{
    let sum = a+b;
    return sum;
},
sub : (a,b) =>{
    let sub = a-b;
    return sub;
}
};

console.log(math.add(2,3));

// The "this" keyword in a function-which is inside an object refers to the key of that object

let human = {
    fname : "jim",
    lname : "karry",
    fullname : function() {
        return (`Full name is ${this.fname} ${this.lname}`);
    },
};

console.log(human.fullname());

// Tasks of objects basics
// To check for emptiness of an object

let emp = {std: "sdff",};

function isempty() {
    for (let k in emp){
        return true;
    }
 return false;
}
console.log(isempty());