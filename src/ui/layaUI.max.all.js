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
		    this.jidi=null;
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

			tafangUI.__super.call(this);
		}

		CLASS$(tafangUI,'ui.tafangUI',_super);
		var __proto__=tafangUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tafangUI.uiView);

		}

		tafangUI.uiView={"type":"View","props":{"width":750,"height":1250},"child":[{"type":"Image","props":{"y":71,"x":7,"width":300,"skin":"pic/bai_bg.png","height":191}},{"type":"Text","props":{"y":148,"x":31,"width":193,"var":"play1_score","text":"玩家1杀敌：","height":34,"fontSize":32,"color":"#ff0400"}},{"type":"Text","props":{"y":201,"x":31,"width":193,"var":"play2_score","text":"玩家2杀敌：","height":32,"fontSize":32,"color":"#253df1"}},{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"top_bg","skin":"pic/top_bg.png","sizeGrid":"1","height":65,"alpha":1}},{"type":"Text","props":{"y":14,"x":84,"width":123,"var":"jinbi_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":14,"x":326,"width":123,"var":"mucai_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":13,"x":570,"width":123,"var":"renkou_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":96,"x":28,"width":193,"var":"jidi","text":"基地生命：30","height":34,"fontSize":32,"color":"#671716"}},{"type":"Image","props":{"x":0,"width":750,"visible":false,"var":"change_build","skin":"pic/bottom.png","name":"change_build","mouseEnabled":true,"layoutEnabled":true,"height":390,"bottom":3},"child":[{"type":"Label","props":{"y":59,"x":36,"width":107,"var":"build_1","text":"张飞","name":"build_1","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":152,"width":107,"var":"build_2","text":"夏侯惇","name":"build_2","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":268,"width":107,"var":"build_3","text":"诸葛亮","name":"build_3","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":383,"width":105,"var":"build_4","text":"关羽","name":"build_4","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":498,"width":107,"var":"build_5","text":"赵云","name":"build_5","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":612,"width":107,"var":"build_6","text":"曹操","name":"build_6","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":175,"x":50,"width":63,"var":"build_name","text":"张飞","layoutEnabled":true,"height":28,"fontSize":28,"color":"#f4730e","bold":true}},{"type":"Label","props":{"y":220,"x":50,"width":134,"var":"build_attack","text":"攻击：600","layoutEnabled":true,"height":27,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":216,"width":139,"var":"build_range","text":"范围：600","layoutEnabled":true,"height":25,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":386,"width":136,"var":"build_jiange","text":"速度：100","layoutEnabled":true,"height":27,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":554,"width":145,"layoutEnabled":true,"height":26,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":260,"x":50,"width":57,"text":"大招：","layoutEnabled":true,"height":23,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":260,"x":120,"wordWrap":true,"width":465,"var":"build_big_detail","text":"致命一击，每攻击5次触发一次大招。致命一击，每攻击5次触发一次大招。致命一击，每攻击5次触发一次大招","rotation":0,"leading":10,"layoutEnabled":true,"height":116,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":178,"x":180,"width":249,"var":"build_consume","text":"消耗：500黄金、2人口","layoutEnabled":true,"height":27,"fontSize":24,"color":"#f8ee08"}},{"type":"Image","props":{"y":245,"x":590,"width":130,"var":"btn_jianzao","skin":"pic/jianzao.png","name":"btn_jianzao","mouseEnabled":true,"height":130}}]}]};
		return tafangUI;
	})(View);