const std = {
    user: "admin",
    pass: 536,
}

std.user = "student"
std.pass = 123
console.log(std)
const ppl = std
ppl.user = "staff"
console.log(ppl);

function user(){
    return{
        name : "Jim",
        ref : this
    };
}

let res = user();
console.log(res.ref.name);
