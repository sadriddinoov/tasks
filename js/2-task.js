// Sizga students array beriladi, siz funksiya yasaysiz, 
// u funksiyaga students arrayni va (22)yosh kiritaman. 
// Va u menga returnida yangi array qaytaradi va 
// unda faqat 22 yoshga teng va undan kattalarni qaytaradi.

let students = [
    {
        name: "Sarvar",
        age: "27"
    },
    {
        name: "Avazbek",
        age: "25"
    },
    {
        name: "Umid",
        age: "21"
    },
    {
        name: "O'ktam",
        age: "22"
    },
    {
        name: "Valijon",
        age: "19"
    },
    {
        name: "Sardor",
        age: "17"
    },
    {
        name: "Toxir",
        age: "16"
    }
];



function ageGreaterThan(array, minAge) {
    let newArray = [];

    for (const key of array) {
        if(key.age >= minAge){
            newArray.push(key);
        } 
    }
    
    return newArray;
}

// console.log(ageGreaterThan(students, 22));


// ageGreaterThan(students, 22);

// // Result
// [
//     {
//         name: "Avazbek",
//         age: "25"
//     },
//     {
//         name: "O'ktam",
//         age: "22"
//     },
//     {
//         name: "Sarvar",
//         age: "27"
//     }
// ];