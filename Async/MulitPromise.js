function callback(input) {
	console.log("resolve:" + input);
	var timeout = Math.random();
	return new Promise(function (resolve,reject){
		if(timeout < 0.5){
			setTimeout(resolve,1000,input * 2);
		}else{
			setTimeout(reject,1000,input * 2);
		}
	});
}

function reject(result){
	console.log("reject : "+result);
}

new Promise(function (resolve,reject){
	console.log("start");
	resolve(1);
}).then(callback)
	.then(callback)
	.then(callback)
	.then(callback)
	.catch(reject);