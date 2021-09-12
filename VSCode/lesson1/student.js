import Person from "./person.js";


class Student extends Person{
    constructor(gender,fname, lname, age){
        super(gender)
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
sayHi = ()=> `Hi, I am ${this.fname} ${this.lname}. I am ${this.gender}`
}

export default Student;

