function callback(resolve, reject){
	console.log('callback');
	var random = Math.random();
	setTimeout(function(){
		if(random < 0.5){
			resolve('ok');
		}else{
			reject('fail');
		}
	},2000);
}

var promise = new Promise(callback);
promise.then(function(result){
	console.log('成功:' + result);
}).catch(function(result){
	console.log('失败:' + result);
});
console.log('aa');