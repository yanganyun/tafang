
(function(_Sprite){
    function CreateGuai(){
        CreateGuai.super(this);
        
        //this.init();
    };

    Laya.class(CreateGuai,'CreateGuai',_Sprite);
    var isCache = false;
    var _proto = CreateGuai.prototype;
    _proto.init = function(camp,name,hp,run,gold){

        //建筑阵营归属
        this.camp = camp;
        //怪物的名字
        this.name = name;
        //血量
        this.maxHp = hp;
        this.hp = hp;
        //移动间隔
        this.run = run;
        //攻击归属
        this.locking = '';
        //携带金币
        this.gold = gold;
        

        //缓存所有动画
        if(!isCache){
            Laya.Animation.createFrames(['pic/guai1.png'],'guai1');
        }
        
        //添加怪物
        this.body = new Laya.Animation();
        this.body.size(50,80);
        this.radius = 25;
        this.body.interval = 300;

        this.addChild(this.body);
        this.playAction(this.name);

        //初始化血条
        this.hpBox = new Laya.Sprite();
        this.addChild(this.hpBox);
        this.setHp(hp);
        
        


    };
    //播放动画
    _proto.playAction = function(action){
        this.body.play(0,true,action);
    }

    //设置血条
    _proto.setHp = function(hp){
        this.hp = hp;
        var gameinfo = tafang.gameinfo;
        
        if(this.hp<=0){
            this.removeSelf();
            this.visible = false;
            //给当前阵营的选手加金币
            if(this.locking==playerCamp){
                gameinfo.addJinbi(this.gold);
            };

            //每达到1000个杀敌，发放奖励
            var rewardLength = 1000;

            if(this.locking=='player1'){
                var newJifen = gameinfo.addJifen(1);
                //积分奖励
                if(newJifen%rewardLength==0){
                    console.log('玩家1，奖励5个人口');
                    gameinfo.addRenkou(5);
                }
            }else{
                var newJifen = gameinfo.addJifen(1,2);
                //积分奖励
                if(newJifen%rewardLength==0){
                    console.log('玩家2，奖励5个人口');
                    gameinfo.addRenkou(5);
                }
            };


        }else{
            var hpLong = 50 * (this.hp/this.maxHp);
            var graphics = this.hpBox.graphics;
            graphics.clear();
            graphics.drawLine(0,-10,hpLong , -10, "#f00",4);
            
        }
        
    }



    return CreateGuai;
})(Laya.Sprite);

















