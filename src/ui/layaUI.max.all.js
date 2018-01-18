var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var tafangUI=(function(_super){
		function tafangUI(){
			
		    this.play1_score=null;
		    this.play2_score=null;
		    this.jinbi_text=null;
		    this.mucai_text=null;
		    this.renkou_text=null;

			tafangUI.__super.call(this);
		}

		CLASS$(tafangUI,'ui.tafangUI',_super);
		var __proto__=tafangUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tafangUI.uiView);

		}

		tafangUI.uiView={"type":"View","props":{"width":750,"renderType":"render","height":1300},"child":[{"type":"Image","props":{"y":71,"x":7,"width":259,"skin":"pic/bai_bg.png","height":133}},{"type":"Text","props":{"y":92,"x":30,"width":193,"var":"play1_score","text":"玩家1:","height":34,"fontSize":32,"color":"#ff0400"}},{"type":"Text","props":{"y":144,"x":30,"width":193,"var":"play2_score","text":"玩家2:","height":32,"fontSize":32,"color":"#253df1"}},{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"pic/top_bg.png","sizeGrid":"1","height":65,"alpha":1}},{"type":"Text","props":{"y":14,"x":84,"width":123,"var":"jinbi_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":14,"x":326,"width":123,"var":"mucai_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":13,"x":570,"width":123,"var":"renkou_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}}]};
		return tafangUI;
	})(View);