var GameInfo = (function(_tafangUI){

    function GameInfo(){
        GameInfo.super(this);
        this.play1_score.text = '玩家1：0';
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

    return GameInfo;
})(ui.tafangUI);