class parent {
    constructor(father) {
        this.father = "Najmot ali";
    }
}

class Child extends parent {
    constructor(name) {
        super();
        this.name = name;

    }
    getFullName() { // method deaclear 
        return this.name + " " + this.father;
    }
}
const baby1 = new Child("Rafi");
const baby2 = new Child("riad");
console.log(baby1.getFullName());
console.log(baby2.getFullName());