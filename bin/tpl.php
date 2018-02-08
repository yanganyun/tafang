<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8' />
	<title>塔防联盟</title>
	<meta name='viewport' content='width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
	/>
	<meta name="renderer" content="webkit">
	<meta name='apple-mobile-web-app-capable' content='yes' />
	<meta name='full-screen' content='true' />
	<meta name='x5-fullscreen' content='true' />
	<meta name='360-fullscreen' content='true' />
	<meta name="laya" screenorientation ="landscape"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<meta http-equiv='expires' content='0' />
	<meta http-equiv="Cache-Control" content="no-siteapp"/>
	<link rel="stylesheet" href="css/index.css">
	<?php 
        echo '<script> var userInfo = {"openid":"'.$user["openid"].'","name":"'.$user["nickname"].'","sex":"'.$user["sex"].'","headimgurl":"'.$user["headimgurl"].'"};</script>';
    ?>
	<script>
	//var userInfo = {"openid":"ASDASSD123DSA8ASD80","name":"????安云??????","sex":1,"headimgurl":"http://wx.qlogo.cn/mmopen/Lp0sLNhAk07FqhKt9oRAmyDGkaYapKZv2S9vYGU2ia2tM8uLATz4amYOoQBAOPhUYndlrRQ1wufh6iaw61bSDiceniblk3j49eV3/64?aa="+new Date().getTime()};
	userInfo.name = userInfo.name.replace(/\?/g,'').substring(0,5);
	 </script>
</head>
<body>
	<div class="loading" id="loading"><p>游戏载入中...</p></div>

	<div class="dialog_box" id="dialog_box">
		<dl class="dialog_list">
			<dt>张飞</dt>
			<dd>
				<!--<p><b>归属：</b><span>玩家1</span></p>
				<p><b>等级：</b><span>Lv1</span></p>
				<p><b>经验：</b><span>15/30</span></p>
				<p><b>攻击：</b><span>600</span></p>
				<p><b>攻速：</b><span>600</span></p>
				<p><b>攻击范围：</b><span>600</span></p>
				<p><b>大招范围：</b><span>600</span></p>
				<p><b>大招：</b><span>致命一击，每攻击5次触发一次。</span></p>
				<p><b>秘技：</b><span>张飞、关羽、赵云3个英雄都达到3级后，使用朱雀图腾可以触发逆天秘技。</span></p>-->
			</dd>
			<dd>
				<span class="btn js_sell" id="js_sell">出售</span>
			</dd>
		</dl>
		<span class="close">关闭按钮关闭按钮</span>
	</div>
	
	<div class="change_box" id="change_moshi">
		<ul class="change_list">
			<li class="danren">单人模式</li>
			<li class="shuangren">双人模式</li>
		</ul>
	</div>

	<div class="change_box" id="change_room">
		<dl class="player_list">
			<dt>我方阵营</dt>
			<dd id="player1"><div class="photo"></div></dd>
			<dd id="player2"><div class="photo">?</div></dd>
			<dt>
				<p>Tip：点击右上角发送给好友，邀请他（她）一起对抗敌人！</p>
				<div class="btn js_start" id="js_start" style="display:none;">开始游戏</div>
				<div class="btn btn_disabled js_back" id="js_back">退出队伍</div>
			</dt>
		</dl>
	</div>

	<div class="tuichu_tip" id="tuichu_tip">
		<p>确定要退出游戏？</p>
		<div class="tuichu_btn_box">
			<span class="btn js_jixu" id="js_jixu">继续游戏</span>
			<span class="btn btn_disabled js_tuichu" id="js_tuichu">退出游戏</span>
		</div>
	</div>

	<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
	<!--核心包，封装了显示对象渲染，事件，时间管理，时间轴动画，缓动，消息交互,socket，本地存储，鼠标触摸，声音，加载，颜色滤镜，位图字体等-->
	<script type="text/javascript" src="libs/laya.core.js"></script>
	<!--封装了webgl渲染管线，如果使用webgl渲染，可以在初始化时调用Laya.init(1000,800,laya.webgl.WebGL);-->
    <script type="text/javascript" src="libs/laya.webgl.js"></script>
	<!--是动画模块，包含了swf动画，骨骼动画等-->
    <script type="text/javascript" src="libs/laya.ani.js"></script>
	<!--包含更多webgl滤镜，比如外发光，阴影，模糊以及更多-->
    <script type="text/javascript" src="libs/laya.filter.js"></script>
	<!--封装了html动态排版功能-->
    <script type="text/javascript" src="libs/laya.html.js"></script>
	<!--粒子类库-->
    <script type="text/javascript" src="libs/laya.particle.js"></script>
	<!--提供tileMap解析支持-->
    <script type="text/javascript" src="libs/laya.tiledmap.js"></script>
	<!--提供了制作UI的各种组件实现-->
    <script type="text/javascript" src="libs/laya.ui.js"></script>
	<!--自定义的js(src文件夹下)文件自动添加到下面jsfile模块标签里面里，js的顺序可以手动修改，修改后保留修改的顺序，新增加的js会默认依次追加到标签里-->
	<!--删除标签，ide不会自动添加js文件，请谨慎操作-->
	
	<script src="../src/ui/layaUI.max.all.js"></script>
	<!--jsfile--startTag-->
	<script src="../src/CreateGuai.js"></script>
	<script src="../src/CreateJineng.js"></script>
	<script src="../src/CreateBuild.js"></script>
	<script src="../src/GameInfo.js"></script>
	<script src="../src/Map.js"></script>
	<script src="../src/Game.js"></script>
	<!--jsfile--endTag-->
	<script type="text/javascript">


	var url_mulu = window.location.href.split('?')[0].replace(/(.+\/).*$/g, '$1'); //URL根目录
	var xhr = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
    xhr.open('GET', 'http://www.fuzhangkeji.com/api/weixin/wxsdk.php?url='+encodeURIComponent(location.href), true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { // readyState == 4说明请求已完成
            var data = JSON.parse(xhr.responseText);
	            wx.config({
					appId: data.appId, // 必填，公众号的唯一标识
					timestamp: data.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，生成签名的随机串
					signature: data.signature,// 必填，签名，见附录1
					jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','hideMenuItems'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
			wx.ready(function () {

				var fxInfo = {
					title: '塔防联盟', // 分享标题
					desc: '三国题材，超级塔防联盟游戏，双人防守更刺激！', // 分享描述
					link: url_mulu, //分享地址
					imgUrl:url_mulu+'css/fx_img.png',  //分享的图片地址，需绝对路径
					success: function () { 
						//alert(url_mulu+'images/fx_img.jpg');
					},
					cancel: function () { 
						
					}
				};

				wx.onMenuShareTimeline(fxInfo);
				wx.onMenuShareAppMessage(fxInfo);
				wx.hideMenuItems({
					menuList: ['menuItem:share:qq','menuItem:share:weiboApp','menuItem:share:facebook','menuItem:share:QZone','menuItem:copyUrl','menuItem:originPage','menuItem:openWithQQBrowser','menuItem:openWithSafari','menuItem:share:email','menuItem:favorite'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
				});

			});
        }
    };
    xhr.send();





	
    


	</script>
</body>
</html>