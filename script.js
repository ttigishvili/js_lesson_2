// davaleba 1                           DASRULEBULI

// let  user = {	
// 	firstname:'giorgi',
// 	lastname: 'smith',
// 	age: 25,
// 	studentstatus: 'active'
// 	};
//  console.log(user.studentstatus);


 
// davaleba 2               DASRULEBULI

// let numbers = ["ani", "mani", "bani", null, 13, 31];

// for(let x = 0; x < numbers.length; x++){
//     console.log(numbers[x]);
// }


  
//davaleba 3             DASRULEBULI

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for(let x = 0; x < numbers.length; x++){
//         if (numbers[x] > 5){
//             console.log(numbers[x]);
//         }
//     }



// davaleba 4              DASRULEBULI

// var user = {
// 	name: "giorgi",
// 	age:  17,
// 	studentstatus: "inactive"
// }

// if(user.age < 18 && user.studentstatus == 'active'){
//     console.log('hello');
// }
// else if(user.name == 'levani' && user.age > 18){
//     console.log('levani');

// }
// else if (user.studentstatus == 'active' || user.age < 25){
//     console.log('hello world');
// }
// else{
//     console.log('error');
// }


// davaleba 5                          DASRULEBLULI

// let array = [ "watermelon", "pear", 10, 45, 50, "apple", "ananas" ] ;

// for(let item of array){
//     if(typeof item == "string"){
//         console.log(item);
//     }
// }


// davaleba 6  DASRULEBULIA

// let array = [32, 10, 'hello', null, 'hello2', 50 ]

// for(let y of array){
//     if( typeof y == 'number' && y % 5 == 0 ){         //typeof y == 'number' არის იმიტომ, რომ არ გამოშნდეს null
//         console.log(y);
//     }
// }
 
// davaleba 7   DASRULEBULI
 
// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

// for(let y of array[0] ){
//     if( y > 1 ){                               // შესაძლებელია შესრულდეს ორივე ნაირად
//         console.log(y);
//     }
// }
// for(let y of array[1] ){
//     if( y + 1 > 1 ){
//         console.log(y);
//     }
// }
// for(let y of array[2] ){
//     if( y + 1 > 1 ){
//         console.log(y);
//     }
// }


//davaleba 8 dasrulebuli

let array = [ 2, 3, 5, 10, 25, 24, 11, 100 , 6, 7, 10 ]

// luwi

// for(let y of array){
//     if( y % 2 == 0){
//         console.log(y);
//     }
// }

// kenti

// for(let y of array){
//     if( y % 2 == 1){
//         console.log(y);
//     }
// }


// davaleba 9  DASRULEBULI

// let lang =  "ka";

// switch(lang){
//     case 'ka':
//         console.log('გამარჯობა');
    
//     break;

//     case 'eng':
//         console.log('hello');
//     break;
//     default: 
//     console.log('error');
// }