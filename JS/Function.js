var alert = new Function('message', 'console.log(message);')
function callFunc(function1, args){
    function1(args)
}
alert('xxx')
callFunc(alert,'chenhao')