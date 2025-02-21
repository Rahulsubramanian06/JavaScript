function message(value_a, value_b="How are you ?"){
    alert(`Hello ${value_a} ${value_b}`);
}
message("Rahul");

message("Rahul", "S")

//power of a number

function pow(x,n){
    let temp = x;
    for(i=1;i<n;i++){
        temp*=x;
    }
    return temp;
}
console.log(pow(4,3));

//function expression
console.log(mix);
let mix = function(){
alert("HEy");
};

//arrow function
let ask=(question,yes,no) =>{
    if (confirm(question)) 
        yes();
    else no();
    return ask(
        "Do you agree?",
        yes() = alert("You agreed."),
        no() = alert("You canceled the execution.")
      )
};

//adding two numbers in arrow fucntion
let add = (a,b) => {
    if(a & b > 0){
    let result = a+b;
    return result;
}
};
console.log(add(1,1));

