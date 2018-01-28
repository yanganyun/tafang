var GameInfo = (function(_tafangUI){

    function GameInfo(){
        GameInfo.super(this);
        //this.play1_score.text = '玩家1：';
        this.player1_jifen = 0;
        this.player2_jifen = 0;
        this.jinbi = 0;
        this.mucai = 0;
        this.renkou = 0;

        
        this.uiInit();
    };

    Laya.class(GameInfo,'GameInfo',_tafangUI);

    var _proto = GameInfo.prototype;

    _proto.uiInit = function(number,tp){
        //设置顶部宽度
        this.top_bg.width = 750;
        
    };

    //设置积分
    _proto.addJifen = function(number,tp){
        if (tp==2){
            this.player2_jifen += number;
            this.play2_score.text = '玩家2杀敌：' + this.player2_jifen;
            return this.player2_jifen;
        }else{
            this.player1_jifen += number;
            this.play1_score.text = '玩家1杀敌：' + this.player1_jifen;
            return this.player1_jifen;
        }
    };

    //设置金币
    _proto.addJinbi = function(number){
        this.jinbi += number
        this.jinbi_text.text = this.jinbi;
    };
    //设置木材
    _proto.addMucai = function(number){
        this.mucai += number;
        this.mucai_text.text = this.mucai;
    };
    //设置人口
    _proto.addRenkou = function(number){
        this.renkou += number;
        this.renkou_text.text = this.renkou;
    };

    //设置基地生命
    _proto.jidiHp = function(number){
        this.jidi.text = '基地生命：'+number;
    };

    
    //获取金币
    _proto.getJinbi = function(){
        return this.jinbi;
    };
    //获取木材
    _proto.getMucai = function(){
        return this.mucai;
    };
    //获取人口
    _proto.getRenkou = function(){
        return this.renkou;
    };

    //扣金币
    _proto.minusJinbi = function(number){
        this.jinbi -= number;
        this.jinbi_text.text = this.jinbi;
    };
    //扣木材
    _proto.minusMucai = function(number){
        this.mucai -= number;
        this.mucai_text.text = this.mucai;
    };
    //扣人口
    _proto.minusRenkou = function(number){
        this.renkou -= number;
        this.renkou_text.text = this.renkou;
    };

    // //显示选择建筑面板
    // _proto.showChangeBox = function(){
    //     this.change_build.visible = true;

    //     //绑定建造事件
    //     if(!this.btn_jianzao.isBind){
    //         this.btn_jianzao.isBind = true;
    //         this.btn_jianzao.on('click',this,this.clickShowChange);
    //     };
        
    // };
    // //隐藏选择建筑面板
    // _proto.hideChangeBox = function(){
    //     this.change_build.visible = false;
    //     this.btn_jianzao.off('click',this,this.clickShowChange);
    // };

    // //隐藏选择建筑面板
    // _proto.clickShowChange = function(){
        
    // };


    return GameInfo;
})(ui.tafangUI);