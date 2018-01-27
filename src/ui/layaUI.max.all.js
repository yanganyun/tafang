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

			tafangUI.__super.call(this);
		}

		CLASS$(tafangUI,'ui.tafangUI',_super);
		var __proto__=tafangUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tafangUI.uiView);

		}

		tafangUI.uiView={"type":"View","props":{"width":750,"height":1250},"child":[{"type":"Image","props":{"y":71,"x":7,"width":300,"skin":"pic/bai_bg.png","height":191}},{"type":"Text","props":{"y":148,"x":31,"width":193,"var":"play1_score","text":"玩家1杀敌：","height":34,"fontSize":32,"color":"#ff0400"}},{"type":"Text","props":{"y":201,"x":31,"width":193,"var":"play2_score","text":"玩家2杀敌：","height":32,"fontSize":32,"color":"#253df1"}},{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"top_bg","skin":"pic/top_bg.png","sizeGrid":"1","height":65,"alpha":1}},{"type":"Text","props":{"y":14,"x":84,"width":123,"var":"jinbi_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":14,"x":326,"width":123,"var":"mucai_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":13,"x":570,"width":123,"var":"renkou_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":96,"x":28,"width":193,"var":"jidi","text":"基地生命：30","height":34,"fontSize":32,"color":"#671716"}},{"type":"Image","props":{"x":0,"width":750,"skin":"pic/bottom.png","height":390,"bottom":0},"child":[{"type":"Label","props":{"y":59,"x":36,"width":107,"text":"张飞","layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":152,"width":107,"text":"夏侯惇","layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":268,"width":107,"text":"诸葛亮","layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":383,"width":105,"text":"关羽","layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":498,"width":107,"text":"赵云","layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":612,"width":107,"text":"曹操","layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":180,"x":50,"width":58,"text":"张飞","layoutEnabled":true,"height":24,"fontSize":22,"color":"#f4730e","bold":true}},{"type":"Label","props":{"y":220,"x":50,"width":132,"text":"攻击力：600","layoutEnabled":true,"height":23,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":205,"width":132,"text":"攻击范围：600","layoutEnabled":true,"height":23,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":386,"width":132,"text":"攻击速度：100","layoutEnabled":true,"height":23,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":556,"width":132,"text":"攻击速度：600","layoutEnabled":true,"height":23,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":260,"x":50,"width":57,"text":"大招：","layoutEnabled":true,"height":23,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":260,"x":115,"wordWrap":true,"width":575,"text":"致命一击，每攻击5次触发一次大招。致命一击，每攻击5次触发一次大招。致命一击，每攻击5次触发一次大招。","rotation":0,"leading":10,"layoutEnabled":true,"height":59,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":330,"x":50,"width":239,"text":"消耗：500黄金、2人口","layoutEnabled":true,"height":23,"fontSize":20,"color":"#f8ee08"}}]}]};
		return tafangUI;
	})(View);