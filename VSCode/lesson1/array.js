const array1 = [1,2,3,4,5,6,7,8,9]
const array2 = array1.map(element=>{
return element*2;
});

const num1 = array1.find(element=>{
    return element > 4;
});

const index = array1.findIndex(element=>{
    return element >4;
});

const filteredArr = array1.filter(element=>{
    return element > 4;
});


console.log(filteredArr);