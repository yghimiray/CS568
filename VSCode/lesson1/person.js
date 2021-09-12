class Person {
    constructor(gender){
        this.gender = gender;
    }
    sayGender = ()=> `I am ${this.gender}`;
}

export default Person;