var prompt = require('prompt-sync')();
// let firstName = "Prakhar"
// let age = 17
// let isMarried = true

// console.log("this person's name is" +firstName+ "and his age is"+age)

// if(isMarried){
//     console.log(firstName+"is married")
// }
// else{
//     console.log(firstName+" is not married")
// }

// let random = prompt("naam batao")
// console.log(random)

// answer = 0;
// for(i=0;i<=100;i++){
//     answer+=i
// }
// console.log(answer)


////ques1
// let firstName = "prakhar";
// let secondName = "gurjar";
// console.log("Hello "+firstName + secondName+" , Greatings");


//ques2
// let firstName = "prakhar";
// gender = "female";
// if(gender == "Male"){
//     console.log("Hello sir");
// }
// else{
//     console.log("Hello Maam");
// }

//ques 3
// let count = 0;
// for(let i=0;i<=1000;i++){
//     console.log(i)
// }


// let age = [18,19,20,21,22]
// for(let i =0;i<age.length;i++){
//     if(age[i]%2 ==0){
//         console.log(age[i])
//     }
// }

// let arry = [18,19,20,21,22]
// let maxNum = 0
// for(let i=0;i<=arry.length;i++){
//     if(maxNum<arry[i]){
//         maxNum=arry[i]
//     }

// }
// console.log(maxNum)


//function for slicing string

// function cutIt(str,start,end){
//     newStr=""
//     for(let i=0;i<str.length;i++){
        
//         if(i>=start && i<end){
//             newStr+=str[i];
//         }   
//     }
//     return newStr;
// }

// const value = "prakhar";
// a = cutIt(value,0,3);
// console.log(a)

//function to replace word 
// function changeIt(str,target,replacement){
//     strArry = str.split(" ");
//     newstr = ""
//     for(let i=0;i<strArry.length;i++){
//         if(strArry[i] != target){
//             newstr+=" "+strArry[i]
            
//         }
//         else{
//             newstr+=" "+replacement
            
//         }

//     }
//     return newstr

// }
// const value = "Hello world my name is prakhar gurjar"
// a = changeIt(value,"prakhar","noName")
// console.log(a)

//function for splitting string
// function splitIt(str){
//     let newArry = [];
//     let test = "";
//     for(let i=0;i<str.length;i++){
        
//         if(str[i] !== " "){
//             test+=str[i];
            
//         }
        
//         if(str[i] == " "){
//             newArry.push(test);
//             test = "";
//         }
//     }
//     return newArry
// }
// const value="hello world my name is prakhar gurjar"
// a = splitIt(value)
// console.log(a)

