// console.log('Hello,chenhao')
// var user = {}
// Object.defineProperty(user,'name',{
//     value:'chenha0o'
//     // writable:true //设置为可写，否则无法设置值，默认不可写入
// })
// // console.log(user)
// user.name='chenhao'
// console.log(user)
// var user = {};
// Object.defineProperty(user, "name", {
//     value: "狂奔的蜗牛"
// })
// Object.defineProperty(user, "isSlow", {
//     value: true
// })
// Object.defineProperty(user, "sayHi", {
//     value: function () { console.log("Hi !") }
// })
// Object.defineProperty(user, "age", {
//     value: 12
// })
// Object.defineProperty(user, "birth", {
//     value: {
//         date: "2018-06-29",
//         hour: "15:30"
//     }
// })
// console.log(user);
// user.sayHi()
// let user={'name':12}
// let age = 12
// Object.defineProperty(user,'age',{
//     set:function(value){
//         console.log('set')
//         age = value
//     },
//     get:function(){
//         console.log('get')
//         return age
//     }
// })
// console.log(user.age)
// user.age = 89
// console.log(user.age)
// keys = Object.keys(user)
// for(key in user){
//     console.log(key)
// }
// delete user.age
// console.log(user.age)
// (function () {
var user = {}
var name = 'chenhao'
var modeltest = document.getElementById('modeltest')
var tongbu = document.querySelector('#tongbu')
modeltest.value = name
tongbu.textContent = name
Object.defineProperty(user, 'name', {
    set: function (value) {
        modeltest.textContent = value
        tongbu.textContent = value
        name = value
    },
    get: function () {
        return name;
    }
})
modeltest.addEventListener('keyup', function () {
    console.log('key up')
    user.name = this.value

}, false)

// })