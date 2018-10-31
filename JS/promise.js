function cook(x){
    console.log("开始煮饭")
    let p = new Promise(function(resolve,reject){
        if(x == 1){
            // 调用then后的执行第一个函数
            setTimeout(() => {
                console.log("执行9s了")
                resolve("success")
            }, 9000);
        }
        else{
            setTimeout(() => {
                console.log("执行4s了")
                reject("fail")
            }, 4000);
            // 调用then之后的第二个函数
            
        }
    })
    return p
}
// 等到cook执行完才执行then后面的函数防止js由于异步的原因直接去执行后面的
cook(0).then(function(data){
    console.log("成功" + data)
},function(data){
    console.log("失败" + data)
})