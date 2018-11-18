// window.onload = function () {
	
// }

// 移动端一般很少使用on添加事件 使用最新的方式addEventListener的方法
// 有些H5C3里面新增的事件 只能使用 addEventListener方法添加
window.addEventListener('load', function () {
	/*1. 需求： 在滚动条滚动距离在轮播图高度范围内的时候实现顶部搜索的背景色透明度渐变
	    rgba(255,0,0,0)
	    rgba(255,0,0,1)
	    rgba的最后一个值透明度从0-1的变化
	2. 思路： 计算当前的滚动条滚动到的距离的透明度的值
	    1. 获取当前滚动条的距离 
	    2. 获取当前轮播图的高度 
	    3. 计算透明度 = 距离/高度
	    4. 计算好后把透明度值 设置背景色的rgba里面把最后一个值改成计算的透明度*/
	 // 3. 获取轮播图高度 
	 var slideHeight = document.querySelector('#slide').offsetHeight;
	 // 6. 获取顶部元素
	 var header = document.querySelector('#header');
	 // 1. 给window添加一个滚动条滚动的事件
	 window.addEventListener('scroll', setOpacity);
	 setOpacity();
	 function setOpacity() {
	 	  // 2. 获取滚动条滚动的距离  兼容性写法 浏览器版本不一样 属性不一样
	 	  //  || 断路运算符 如果 || 前面的值为true 返回前面的值  前面的值为false 就返回后面的值
	 	  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	 	  // 4. 计算透明度值 
	 	  var opacity = scrollTop / slideHeight;
	 	  console.log(opacity);
	 	  // 5. 判断当透明的值小于等于1 的时候就设置透明度样式
	 	  if(opacity <= 1){
	 	  	   // 7. 设置头部的透明度值为当前计算的透明度值
	 	  		header.style.backgroundColor = 'rgba(222, 24, 27, '+opacity+')';
	 	  }else{
	 	  		// 8. 如果透明度值超过了1 默认设置为1
	 	  		header.style.backgroundColor = 'rgba(222, 24, 27,1)';
	 	  }
	 }



	//  轮播图初始化函数
	 // 4. 调用JS的初始化函数初始化swiper
	 var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项 会自动在轮播图所有图片容器的最前面和最后面多放一张  第一张就是最后一张 最后一张就是第一张
        //初始化自动轮播图 参数也是一个对象 
        autoplay: {
		    delay: 3000,//间隔时间 
		    stopOnLastSlide: false,//在最后一张是否要停止  如果开启loop模式无效
		    disableOnInteraction: false,// 是否要当(交互的时候)滑动的时候禁用自动轮播图
		  },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
	})
	


	// 倒计时功能
	//设置未来的时间   国外的月份和星期天数是从0-6的顺序
	var featureTime=new Date(2018,10,14,21,00,00).getTime();
	console.log(featureTime);
	// 获取现在的时间
	var nowTime=new Date().getTime();
	console.log(nowTime);
	// 计算总毫秒数
	var time=Math.floor((featureTime-nowTime)/1000);
	console.log(time);
	// 设置定时器
	setInterval(function(){
	 time-- ;
	 if(time<0){
		 time=7200;
	 }
	//  获取所有的span元素
	 var spans=document.querySelectorAll('.seckill-time span');
	 var hour=Math.floor(time/3600);
	 console.log(hour);
	 var minute=Math.floor(time/60%60);
	 console.log(minute);
	 var seconds=Math.floor(time%60);
	 console.log(seconds);
	 spans[0].innerHTML=Math.floor(hour/10);
	 spans[1].innerHTML=Math.floor(hour%10);
	 spans[3].innerHTML=Math.floor(minute/10);
	 spans[4].innerHTML=Math.floor(minute%10);
	 spans[6].innerHTML=Math.floor(seconds/10);
	 spans[7].innerHTML=Math.floor(seconds%10);

	},1000)

});