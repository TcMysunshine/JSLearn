// var target = {}
// var handler = {
//     get:function(receiver, name){
//         return  'hello,${name}'
//     }
// }
// var p = new Proxy(target,handler)
// console.log(p.world==='hello,world')
// var target = {};
// var handler = {
//   get: function (receiver, name) {
//     return 'Hello, ${name}!';
//   }
// };

// var p = new Proxy(target, handler);
// p.world === 'Hello, world!';
export class Person{
    constructor(x,y){
        this.name = x
        this.age = y
    }
    toString(){
        return this.name + ":" +this.age
    }
}