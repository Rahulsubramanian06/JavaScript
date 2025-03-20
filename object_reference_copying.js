let emp = {
    emp1 : {
    emp1_name : "Max",
    emp1_no : 1,
    emp1_sal : 12,
    },
    emp2 : {
        emp2_name : "Bil",
        emp2_no : 2,
        emp2_sal : 11,
        },
}
const admin ={
    admin1 : "admin",
    admin2 : "admin2"
}

let emp_copy = {}
//copying the object using object_assign - nested obj change is reflected on both OE and copy
Object.assign(emp_copy, emp)

emp_copy.location = "chennai"
console.log(emp);
console.log(emp_copy);

// copying the object using structuredClone the change is not reflected on both the nested and outer object (OE and copy)

emp_copy = structuredClone(emp)
emp_copy.emp1.location = "chennai"
console.log(emp);
console.log(emp_copy);

