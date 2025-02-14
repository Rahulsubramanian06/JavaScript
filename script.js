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
