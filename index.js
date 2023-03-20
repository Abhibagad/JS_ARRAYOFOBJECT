// Q1."We are interested in retrieving only the students' names; all the names should be in caps.
//    ['JOHN', 'BABA', 'YAGA', 'WICK']"
// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//                        {name: 'Baba', id: 101, marks : 23 },
//                        {name: 'yaga', id: 200, marks : 45 },
//                        {name: 'Wick', id: 115, marks : 75 } ] 
                       
// let ans=[];
// for(let i=0;i<studentRecords.length;i++){
//     ans.push(studentRecords[i].name.toUpperCase());
// }
// console.log(ans);

// Q2.let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//                        {name: 'Baba', id: 101, marks : 23 },
//                        {name: 'yaga', id: 200, marks : 45 },
//                        {name: 'Wick', id: 115, marks : 75 } ] 
// let ans=[];
// for(let i=0;i<studentRecords.length;i++){
//     if(studentRecords[i].marks>50){
//         ans.push(studentRecords[i]);
//     }
// }
// console.log(ans);

// Q3.let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//                        {name: 'Baba', id: 101, marks : 23 },
//                        {name: 'yaga', id: 200, marks : 45 },
//                        {name: 'Wick', id: 115, marks : 75 } ] 
// let ans=[];
// for(let i=0;i<studentRecords.length;i++){
//    if(studentRecords[i].marks>50 && studentRecords[i].id>120){
//             ans.push(studentRecords[i]);
//         }
//     }
//     console.log(ans);

// Q4.
// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//                        {name: 'Baba', id: 101, marks : 23 },
//                        {name: 'yaga', id: 200, marks : 45 },
//                        {name: 'Wick', id: 115, marks : 75 } ] 
// let totalMarks=[];
// for(let i=0;i<studentRecords.length;i++){
//     let totalMarks = studentRecords.reduce (((acc,emp)=> acc+emp.marks), 0)
// console.log(totalMarks);
// }

// Q5.let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//                        {name: 'Baba', id: 101, marks : 23 },
//                        {name: 'yaga', id: 200, marks : 45 },
//                        {name: 'Wick', id: 115, marks : 75 } ] 
        
// let ans=[];
// for(let i=0;i<studentRecords.length;i++){
//     if(studentRecords[i].marks>50){
//      ans.push(studentRecords[i].name)
// }
// console.log(ans);
// }

// Q6.let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//                        {name: 'Baba', id: 101, marks : 23 },
//                        {name: 'yaga', id: 200, marks : 45 },
//                        {name: 'Wick', id: 115, marks : 75 } ] 
        
// let ans=[];
// let mark=0;
// for(let i=0;i<studentRecords.length;i++){
//     if(studentRecords[i].id>120){
//         mark+=studentRecords[i].marks;
     
// }
// console.log(mark);
// }
// Q7.let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//                        {name: 'Baba', id: 101, marks : 23 },
//                        {name: 'yaga', id: 200, marks : 45 },
//                        {name: 'Wick', id: 115, marks : 75 } ] 
        
// let ans=[];
// let mark=0;
// for(let i=0;i<studentRecords.length;i++){
//     if(studentRecords[i].marks<50){
//         studentRecords[i].marks+=15;
//     }
//     if(studentRecords[i].marks>50)
//      mark+=studentRecords[i].marks;
// }
// console.log(mark);

// Q8.let first={
//     name:"Abhishek",
//     class:"first",
//     rollno: "1"
// }
// let second={
//     name:"Abhi",
//     class: "second",
//     rollno: "2",
// }
// let third={
//     name:"Amol",
//     class: "first",
//     rollno: "3",
// }
// let fourth={
//     name:"Raj",
//     class: "second",
//     rollno: "4",
// }
// let fifth={
//     name:"ram",
//     class: "first",
//     rollno: "5",
// }
// let six={
//     name:"raja",
//     class: "second",
//     rollno: "6",
// }
// let info=[];
// info.push(first);
// info.push(second);
// info.push(third);
// info.push(fourth);
// info.push(fifth);
// info.push(six);





