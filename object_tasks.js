// calculator using this keyword
let calculator = {
    read() {
        this.a = 5;
        this.b = 2;
    },
    mul() {
        return this.a * this.b;
    },
    sum() {
        return this.a + this.b;
    }
}
console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());

