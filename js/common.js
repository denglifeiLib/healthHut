//mui初始化
mui.init({
	swipeBack: true
});

//a跳转
mui('body').on('tap','a',function(){
	document.location.href=this.href;
});


var timeDom = null;
var timer = null;
function countDown(dom, time, callback) {
	if(!timeDom) {
		timeDom = dom
	}
	if(time) {
		time--;
		timeDom.innerHTML = time;
		setTimeout(function() {
			countDown(timeDom, time, callback)
		}, 1000);
	} else {
		timeDom.innerHTML = time;
		callback && callback()
	}
}


