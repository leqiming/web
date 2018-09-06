$(function(){
// head部分导航栏下拉菜单
	var head_li=$('.nav .nav2');
	head_li.mouseover(function(){
		head_idx=$(this).index();
		head_li.eq(head_idx).children('ul').css('display','block');
		head_li.eq(head_idx).children('ul').children('li').mouseover(function(){
			$(this).css('background','#cdd0d4')
		})
		head_li.eq(head_idx).children('ul').children('li').mouseout(function(){
			$(this).css('background','')
		})
	})
	head_li.mouseout(function(){
		head_idx=$(this).index()
		head_li.eq(head_idx).children('ul').css('display','none')
	})

// 弹出层部分
// 显示弹出层
	function showLayer(html,width,height,closeCallback){
		// 显示弹出层遮罩
		$("#layer-mask").show();
		// 显示弹出层窗体
		$("#layer-pop").show();
		// 设置弹出层窗体样式
		$("#layer-pop").css({
			width : width,
			height : height
		});
		// 填充弹出层窗体内容
		$("#layer-content").html(html);
		// 弹出层关闭按钮绑定事件
		$("#layer-close").click(function(){
			// 弹出层关闭
			hideLayer();
			// 关闭的回调函数
			closeCallback();
		});
		// 鼠标滑过第三方标志
		$('.login .icon img').mouseover(function(){
			$(this).css('background','#07bbbf')
		})
		$('.login .icon img').mouseout(function(){
			$(this).css('background','')
		})
	}
	// 隐藏弹出层
	function hideLayer(){
		// 弹出层关闭
		$("#layer-mask").hide();
		$("#layer-pop").hide();
	}
	// 弹出层关闭回调函数
	function closeCallback(){
		$(".error-msg").css('display','none');
	}
	// 登录链接事件
	$(".login_btn").click(function(){
		// 获取登录窗体代码
		var loginHtml = $("#loginHtml").html();
		showLayer(loginHtml,400,400,closeCallback);

		// 登录表单校验
		$("#username").blur(function(){
			var username = $("input[name='username']").val();
			if(username === NaN|| username.length != 11){
				$(".error1").css('display','block');
			}
			else{
				$(".error1").css('display','none');
			}
		});
		$("#password").blur(function(){
			var password = $("input[name='password']").val();
			if(password === NaN|| password.length != 11){
				$(".error2").css('display','block');
			}
			else{
				$(".error2").css('display','none');
			}
		});
		// 切换注册弹出层
		$('.login .regtitle').click(function(){
			$('.rege_btn').click();
		})
	});

	// 注册链接事件
	$('.rege_btn').click(function(){
		// 获取注册窗体代码
		var regeHtml=$('#regeHtml').html();
		showLayer(regeHtml,400,400,closeCallback);
		// 注册表单校验
	$("#regename").blur(function(){
			var regename = $("input[name='regename']").val();
			if(regename === NaN|| regename.length != 11){
				$(".error3").css('display','block');
			}
			else{
				$(".error3").css('display','none');
			}
	})
	$("#verify_txt").blur(function(){
			var verify_txt = $("input[name='verify_txt']").val();
			if(verify_txt != "gyyd"){
				$(".error4").css('display','block');
			}
			else{
				$(".error4").css('display','none');
			}
		});
	// 切换登录弹出层
	$('.login .logtitle').click(function(){
			$(".login_btn").click();
		})
	});

// 鼠标滑过购物车
	$('.shopcar').mouseover(function(){
		$('.shopcar .shopcar_ul').css('display','block');
		$('.shopcar .shopcar_img').attr('src','file/icon/25.png');
		$('.shopcar .shopcar_img1').attr('src','file/icon/24.png');
		$('.shopcar .shopcar_span').css('color','red');
		$('.shopcar').css({
			'background':'#fff',
			'border':'1px solid #CDC9C9'})
		$('.shopcar .car_content li').mouseover(function(){
			$(this).css('background','#FFF5EE')
			$('.shopcar .car_content li').mouseout(function(){
				$(this).css('background','')
			})
		})
		$('.shopcar').mouseout(function(){
			$('.shopcar .shopcar_ul').css('display','none');
			$('.shopcar .shopcar_img').attr('src','file/icon/14.png');
			$('.shopcar .shopcar_img1').attr('src','file/icon/23.png');
			$('.shopcar .shopcar_span').css('color','#fff');
			$('.shopcar').css({
				'background':'red',
				'border':''})
			})	
	})
// 鼠标滑过banner区左侧菜单
	$('.menu_item').mouseover(function(){
		$('.sub_menu').css('display','none');
		$('.innerbox').css('display','none');
		var sub_idx=$(this).index()-1;
		$('.sub_menu').css('display','block');
		$('.innerbox').eq(sub_idx).css('display','block');
	});
	$('.sub_menu').mouseover(function(){
		$(this).css('display','block')
	});
	$('.sub_menu').mouseout(function(){
		$(this).css('display','none')
	});
	$('.menu_content').mouseleave(function(){
		$('.sub_menu').css('display','none')
	});

	// 图片轮播
	// 图片改变函数
	function changeImg(){
		$('.main_slide img').removeClass('slide_active');
		$('.banner_slide .dots span').removeClass('active');

		$('.main_slide img').eq(index).addClass('slide_active');
		$('.banner_slide .dots span').eq(index).addClass('active');
	}

	var index=0,
	timer=null,
	main=$('.banner_slide'),
	dots=$('.banner_slide .dots span'),
	prev=$('.prev'),
	next=$('.next'),
    len=$('.slide').length;

    // 鼠标划过时清除定时器
	main.mouseover(function(){
		if(timer) clearInterval(timer)	           
	}) 
	// 鼠标离开时开启定时器开始轮播
	main.mouseout(function(){
		timer=setInterval(function(){
			index++;
			if(index>=len) index=0;
			changeImg();
		},2000)
	});
	// 页面打开时触发鼠标离开事件
	main.trigger('mouseout');

	// 绑定圆点事件
	dots.click(function(){
		index=$(this).index();
		changeImg();
	})

	// 绑定前后键
	next.click(function(){
		index++;
		if(index>=len) index=0;
		changeImg();
	})
	prev.click(function(){
		index--;
		if(index<0) index=len-1;
		changeImg();
	})

// 楼层区
	// 楼层区每层切换内容
	$('.sub_floor1 .floor1_title_r div span').click(function(){
		var floor_content_idx=$(this).parent().index();
		$('.sub_floor1 .floor1_content').css('display','none');
		$('.sub_floor1 .floor1_content').eq(floor_content_idx).css('display','block');
		$('.sub_floor1 .floor1_title_r div img').css('visibility','hidden');
		$(this).next().css('visibility','visible');
	})
	$('.sub_floor2 .floor1_title_r div span').click(function(){
		var floor_content_idx=$(this).parent().index();
		$('.sub_floor2 .floor1_content').css('display','none');
		$('.sub_floor2 .floor1_content').eq(floor_content_idx).css('display','block');
		$('.sub_floor2 .floor1_title_r div img').css('visibility','hidden');
		$(this).next().css('visibility','visible');
	})
	$('.sub_floor3 .floor1_title_r div span').click(function(){
		var floor_content_idx=$(this).parent().index();
		$('.sub_floor3 .floor1_content').css('display','none');
		$('.sub_floor3 .floor1_content').eq(floor_content_idx).css('display','block');
		$('.sub_floor3 .floor1_title_r div img').css('visibility','hidden');
		$(this).next().css('visibility','visible');
	})
	$('.sub_floor4 .floor1_title_r div span').click(function(){
		var floor_content_idx=$(this).parent().index();
		$('.sub_floor4 .floor1_content').css('display','none');
		$('.sub_floor4 .floor1_content').eq(floor_content_idx).css('display','block');
		$('.sub_floor4 .floor1_title_r div img').css('visibility','hidden');
		$(this).next().css('visibility','visible');
	})
	$('.sub_floor5 .floor1_title_r div span').click(function(){
		var floor_content_idx=$(this).parent().index();
		$('.sub_floor5 .floor1_content').css('display','none');
		$('.sub_floor5 .floor1_content').eq(floor_content_idx).css('display','block');
		$('.sub_floor5 .floor1_title_r div img').css('visibility','hidden');
		$(this).next().css('visibility','visible');
	})

// 左侧导航
	$(window).scroll(function(){
		$('.floor1').each(function(index){
			if($(window).height()+$(window).scrollTop()>=($(this).offset().top+$('.floor1').height())){
				if(index===0){
					$('.floor_nav').fadeIn();
				}
				$('.floor_nav1').removeClass('floor_nav_active');
				$('.floor_nav li').eq(index).children('.floor_nav1').addClass('floor_nav_active');
				$('.floor_nav li').click(function(){
					$('html,body').stop().animate({
						scrollTop:$('.floor1').eq($(this).index()).offset().top
					})
				})
			}
			else{
				if(index===0){
					$('.floor_nav').fadeOut();
				}
			}
		})
	})

// 右侧导航
	$('.floor_nav_r li').mouseenter(function(){
		$(this).children('.nav_word').stop().animate({width:'toggle'},400);
	})
	$('.floor_nav_r li').mouseleave(function(){
		$(this).children('.nav_word').stop().animate({width:'toggle'},400);
		
	})
	$('.backTop').click(function(){
		$('html,body').stop().animate({
			scrollTop:0
		})
	})


});