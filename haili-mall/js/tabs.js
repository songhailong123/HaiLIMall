	//选项卡切换界面功能，以及引用swipper插件
	window.onload = function() {
	  var tabsSwiper = new Swiper('#tabs-container',{
	    speed:300,
	    onSlideChangeStart: function(){
	      $(".tabs .change").removeClass('change')
	      $(".tabs a").eq(tabsSwiper.activeIndex).addClass('change')  
	    }
	  })
	  $(".tabs a").on('touchstart mousedown',function(e){
	    e.preventDefault()
	    $(".tabs .change").removeClass('change')
	    $(this).addClass('change')
	    tabsSwiper.slideTo( $(this).index() )
	  })
	  $(".tabs a").click(function(e){
	    e.preventDefault()
	  })
	}