var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var tafangUI=(function(_super){
		function tafangUI(){
			
		    this.play1_score=null;
		    this.play2_score=null;

			tafangUI.__super.call(this);
		}

		CLASS$(tafangUI,'ui.tafangUI',_super);
		var __proto__=tafangUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tafangUI.uiView);

		}

		tafangUI.uiView={"type":"View","props":{"width":375,"height":667},"child":[{"type":"Text","props":{"y":44,"x":15,"width":193,"var":"play1_score","text":"玩家1:","height":18,"fontSize":12,"color":"#ff0400"}},{"type":"Text","props":{"y":20,"x":13,"width":113,"text":"分数：","height":20,"font":"14"}},{"type":"Text","props":{"y":63,"x":14,"width":193,"var":"play2_score","text":"玩家2:","height":18,"fontSize":12,"color":"#253df1"}}]};
		return tafangUI;
	})(View);