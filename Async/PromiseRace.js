//Promise.race 并行执行返回较快结果,类似rxjava.takefirst
var p1 = new Promise(function(resolve,reject){
	setTimeout(resolve,3000,'p1');
});

var p2 = new Promise(function(resolve,reject){
	setTimeout(resolve,400,'p2');
});

Promise.race([p1,p2]).then(function(result){
	console.log(result);
});