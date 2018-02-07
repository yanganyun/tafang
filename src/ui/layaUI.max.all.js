var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var tafangUI=(function(_super){
		function tafangUI(){
			
		    this.play1_score=null;
		    this.play2_score=null;
		    this.top_bg=null;
		    this.jinbi_text=null;
		    this.mucai_text=null;
		    this.renkou_text=null;
		    this.game_time=null;
		    this.jidi=null;
		    this.xitong_send=null;
		    this.send_box=null;
		    this.change_build=null;
		    this.build_1=null;
		    this.build_2=null;
		    this.build_3=null;
		    this.build_4=null;
		    this.build_5=null;
		    this.build_6=null;
		    this.build_name=null;
		    this.build_attack=null;
		    this.build_range=null;
		    this.build_jiange=null;
		    this.build_big_detail=null;
		    this.build_consume=null;
		    this.btn_jianzao=null;
		    this.btn_shengli=null;
		    this.btn_shibai=null;
		    this.btn_tuichu=null;

			tafangUI.__super.call(this);
		}

		CLASS$(tafangUI,'ui.tafangUI',_super);
		var __proto__=tafangUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tafangUI.uiView);

		}

		tafangUI.uiView={"type":"View","props":{"width":750,"height":1250},"child":[{"type":"Image","props":{"y":75,"x":10,"width":300,"skin":"pic/bai_bg.png","height":161}},{"type":"Text","props":{"y":130,"x":25,"width":193,"var":"play1_score","text":"玩家1杀敌：","height":34,"fontSize":32,"color":"#cd1915"}},{"type":"Text","props":{"y":175,"x":25,"width":193,"var":"play2_score","text":"玩家2杀敌：","height":32,"fontSize":32,"color":"#192cb9"}},{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"top_bg","skin":"pic/top_bg.png","sizeGrid":"1","height":65,"alpha":1}},{"type":"Text","props":{"y":14,"x":84,"width":123,"var":"jinbi_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":14,"x":310,"width":123,"var":"mucai_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":13,"x":495,"width":123,"var":"renkou_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":13,"x":623,"width":105,"var":"game_time","name":"game_time","height":34,"fontSize":28,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":85,"x":25,"width":193,"var":"jidi","text":"基地生命：30","height":34,"fontSize":32,"color":"#b514b5"}},{"type":"Label","props":{"y":553,"x":20,"wordWrap":true,"width":500,"var":"xitong_send","text":"系统提示：","strokeColor":"#de810a","stroke":1,"leading":10,"height":107,"fontSize":26,"color":"#f9ab04"}},{"type":"Label","props":{"x":20,"wordWrap":true,"width":500,"var":"send_box","top":245,"overflow":"scroll","name":"send_box","leading":10,"height":300,"fontSize":26,"color":"#ffffff"}},{"type":"Image","props":{"x":0,"width":750,"visible":false,"var":"change_build","skin":"pic/bottom.png","name":"change_build","mouseThrough":false,"mouseEnabled":true,"layoutEnabled":true,"height":390,"bottom":3},"child":[{"type":"Label","props":{"y":59,"x":36,"width":107,"var":"build_1","text":"张飞","name":"build_1","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":152,"width":107,"var":"build_2","text":"夏侯惇","name":"build_2","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":268,"width":107,"var":"build_3","text":"诸葛亮","name":"build_3","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":383,"width":105,"var":"build_4","text":"关羽","name":"build_4","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":498,"width":107,"var":"build_5","text":"赵云","name":"build_5","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":612,"width":107,"var":"build_6","text":"刘备","name":"build_6","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":175,"x":50,"width":63,"var":"build_name","text":"张飞","layoutEnabled":true,"height":28,"fontSize":28,"color":"#f4730e","bold":true}},{"type":"Label","props":{"y":220,"x":50,"width":134,"var":"build_attack","text":"攻击：","layoutEnabled":true,"height":27,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":216,"width":139,"var":"build_range","text":"范围：","layoutEnabled":true,"height":25,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":386,"width":136,"var":"build_jiange","text":"速度：","layoutEnabled":true,"height":27,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":554,"width":145,"layoutEnabled":true,"height":26,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":260,"x":50,"width":57,"text":"大招：","layoutEnabled":true,"height":23,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":260,"x":120,"wordWrap":true,"width":465,"var":"build_big_detail","text":"致命一击，每攻击5次触发一次大招。","rotation":0,"leading":10,"layoutEnabled":true,"height":116,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":178,"x":180,"width":249,"var":"build_consume","text":"消耗：500黄金、2人口","layoutEnabled":true,"height":27,"fontSize":24,"color":"#f8ee08"}},{"type":"Image","props":{"y":245,"x":590,"width":130,"var":"btn_jianzao","skin":"pic/jianzao.png","name":"btn_jianzao","mouseThrough":true,"mouseEnabled":true,"height":130}}]},{"type":"Image","props":{"y":474,"x":196,"width":356,"visible":false,"var":"btn_shengli","skin":"pic/shengli.png","mouseThrough":true,"mouseEnabled":true,"height":144}},{"type":"Image","props":{"y":475,"x":197,"width":353,"visible":false,"var":"btn_shibai","skin":"pic/shibai.png","mouseThrough":true,"mouseEnabled":true,"height":143}},{"type":"Image","props":{"y":75,"x":641,"width":100,"visible":false,"var":"btn_tuichu","skin":"pic/tuichu.png","name":"btn_tuichu","mouseThrough":true,"mouseEnabled":true,"height":100}}]};
		return tafangUI;
	})(View);