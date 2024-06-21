class Pasha{
    name = "Pasha"
    age = 20
    Pasha(){

    }
    method1() {
        console.log(this)
    }
}
const pasha = new Pasha()
console.log(pasha.method1())