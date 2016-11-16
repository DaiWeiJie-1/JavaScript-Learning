//promise.all可以同时并行执行多个任务,并且等待所有结果返回后回调,类似rxjava.zip

var p1 = new Promise(function (resolve,reject) {
	setTimeout(resolve,1000,'p1');
});

var p2 = new Promise(function (resolve,reject){
	setTimeout(resolve,3000,'p2');
});

Promise.all([p1,p2]).then(function (results){
	console.log(results);
});