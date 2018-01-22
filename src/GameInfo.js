var GameInfo = (function(_tafangUI){

    function GameInfo(){
        GameInfo.super(this);
        //this.play1_score.text = '玩家1：';
        this.top_bg.width = 750;
    };

    Laya.class(GameInfo,'GameInfo',_tafangUI);

    var _proto = GameInfo.prototype;

    //设置积分
    _proto.jifen = function(number,tp){
        if (tp==2){
            this.play2_score.text = '玩家2：'+number;
        }else{
            this.play1_score.text = '玩家1：'+number;
        }
    };

    //设置金币
    _proto.jinbi = function(number){
        this.jinbi_text.text = number;
    };
    //设置木材
    _proto.mucai = function(number){
        this.mucai_text.text = number;
    };
    //设置人口
    _proto.renkou = function(number){
        this.renkou_text.text = number;
    };

    return GameInfo;
})(ui.tafangUI);