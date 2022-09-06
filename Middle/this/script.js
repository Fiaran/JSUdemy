// const obj = {
//     a:20,
//     b:15,
//     sum: function(){
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();


// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num){
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));

//console.log(double(13));

// 1) обычная функция: this = window, но если use strict - undefined
// 2) контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind.

const obj= {
    num: 5,
    sayNumber: function(){
        const say = () =>{
            console.log(this.num);
        };
        say();
    }
}
obj.sayNumber();

const double = a => a * 2;
console.log(double(4));