var users = [
    {
        'name':'chenhao',
        'age':78
    },
    {
        'name':'chen',
        'age':78
    }
]
var user = {
    'name':'chenhao',
    'age:':78
}
// 循环一个数组对象
for(let index in user){
    // console.log()
    console.log(user[index].name+ user[index].age)
}
users.forEach(function(v){
    console.log(v.name + v.age)
})
// 遍历一个json数据的key value
Object.keys(user).forEach(function(key,index,keyArray){
    console.log("key:" + key + "   index:" + index + "    value:" + user[key])
    // console.log("KeyArray:"+ keyArray)
})