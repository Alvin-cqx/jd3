window.addEventListener('load', function() {
    //初始化左侧分类swiper内容滚动
  var swiper = new Swiper('.catelory-left .swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
  });
    //初始化右侧分类swiper内容滚动
  var swiper = new Swiper('.catelory-right .swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
          el: '.swiper-scrollbar',
      },
      mousewheel: true,
  });


  /*实现分类左侧点击功能： 点击当前的菜单要位移到 当前菜单吸顶的位置
     1. 默认插件使用translate3d设置的位移
     2. 要位移多少距离 =  当前点击的li的下标 * li的高度
     3. 设置当前swiper-wrapper 元素的位移属性上
     实现思路
        1. 给所有li添加点击事件 拿到当前点击li的索引
        2. 拿到当前li的高度
        3. 计算位移距离 =  li的索引+li的高度
        4. 获取当前swiper-wrapper元素设置位移
        5. 判断当前位移的距离是否超过了最小位移的距离(往上位移负值) 如果超过了就 设置为最小位移的距离
        6. 如果需要过渡在给swiper-wrapper添加一个过渡效果
        7. 获取所有li删除active类名
        8. 给当前li添加一个active类名
     */

    //1.获取所有的li元素
     var liList=document.querySelectorAll('.swiper-slide ul li');
    // 2.遍历li元素 给每个li添加一个索引属性
     for(var i=0;i<liList.length;i++){
         liList[i].index=i;
        //  3.每个li添加点击事件
         liList[i].addEventListener('click',function(){
            //  4.获取点击的li索引
           var index=this.index;
            // 5.获取点击li的高度
           var liHeight=this.offsetHeight;
            //6.计算要上移的距离 距离是负的  索引*高度
           var translateY=-index*liHeight;
            // 7.计算最小的的位移值  父元素category-left的高度-子元素ul的高度
           var mintranslateY=document.querySelector('.catelory-left').offsetHeight-this.parentNode.offsetHeight;
            // 8.进行判断 如果当前移动的值小于最小位移值 就不能滑动 就设置最小值
            if(translateY<mintranslateY){
                translateY=mintranslateY
            }   
            // 9.开始移动 
            document.querySelector('.swiper-wrapper').style.transform = 'translate3d(0px, '+translateY+'px, 0px)';
            // 10.移动的时候加动画效果
            document.querySelector('.swiper-wrapper').style.transistion='all 0.3s';
            // 11.把所有的li标签的active删除
            for(var i=0;i<liList.length;i++){
                liList[i].classList.remove('active');
            }
            // 12.给当前点击li添加active样式
            this.classList.add('active');
            av
            
         })
     }
})
