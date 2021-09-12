import Student from "./student.js";
// import anyName from "./student.js";
import { minutesInHour } from "./helper.js";
import { sayHello } from "./helper.js";

const stu1 = new Student("Male","Yogesh","Ghimiray",10)
// console.log (stu1.sayHi())
// console.log(minutesInHour);
// console.log(sayHello());

let {gender,fname,lname,age} = stu1;
// let {fname} = stu1;
// let {lname} = stu1;
// let {age} = stu1;
console.log(gender,fname,lname,age);

// let stu2 = {...stu1}
// stu2.fname = "Jack";
// stu2.lname = "Smith";
// stu2.age = 20;
// stu2.hobby = "Swimming"
// // console.log(stu1);
// console.log(stu2);