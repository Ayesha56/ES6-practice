class student {
    constructor(Sid, Sname) {
        this.id = Sid;
        this.name = Sname;
        this.school = "milestone school";
    }
}
const stu1 = new student(12, "ayesha")
const stu2 = new student(122, "raisa")
console.log(stu1, stu2);
console.log(stu1.id, stu2.name);