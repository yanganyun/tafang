
(function(_Sprite){
    function CreateGuai(){
        CreateGuai.super(this);
        
        //this.init();
    };

    Laya.class(CreateGuai,'CreateGuai',_Sprite);
    var isCache = false;
    var _proto = CreateGuai.prototype;
    _proto.init = function(camp,name,hp,run,gold,isBoss){

        //建筑阵营归属
        this.camp = camp;
        //怪物的名字
        this.name = name;
        //血量
        this.maxHp = hp;
        this.hp = hp;
        //初始化移动速度
        this.defrun = run;
        //移动间隔
        this.run = run;
        //攻击归属
        this.locking = '';
        //携带金币
        this.gold = gold;
        //是不是boss
        this.isBoss = isBoss?isBoss:false;
        //当前的buff
        this.buff = {
            'yun':null,
            'jiansu':null,
            'suo':null
        }

        //缓存所有动画
        if(!isCache){
            Laya.Animation.createFrames(['pic/guai1_1.png','pic/guai1_2.png','pic/guai1_3.png'],'guai1');
            Laya.Animation.createFrames(['pic/guai2_1.png','pic/guai2_2.png','pic/guai2_3.png'],'guai2');
            Laya.Animation.createFrames(['pic/boss1_1.png','pic/boss1_2.png','pic/boss1_3.png'],'boss1');
        }
        
        //添加怪物
        this.body = new Laya.Animation();
        this.body.size(100,100);
        this.width = 100;
        this.height = 100;
        this.radius = 30;
        this.body.interval = 300;

        this.addChild(this.body);
        this.playAction(this.name);

        //初始化血条
        this.hpBox = new Laya.Sprite();
        this.addChild(this.hpBox);
        this.setHp(0);
        
        


    };
    //播放动画
    _proto.playAction = function(action){
        this.body.play(0,true,action);
    }


    //播放动画
    _proto.addBuff = function(name,data){
        var self = this;
        //添加减速
        if(name=='jiansu' && !this.buff.jiansu && !this.buff.yun){
            this.run *= data.value;
            //移除减速
            setTimeout(function(){
                if(!self.buff.yun){
                    self.run = self.defrun;
                    self.buff[name] = null;
                }
            },data.time);
        }else if(name=='yun' && !this.buff.yun){
            this.run *= data.value;
            //移除减速
            setTimeout(function(){
                self.run = self.defrun;
                self.buff.yun = null;
                self.buff.jiansu = null;
            },data.time);
        };
        //添加buff状态
        this.buff[name] = data;
    }

    

    //设置血条
    _proto.setHp = function(hp,build){
        this.hp -= hp;
        var gameinfo = tafang.gameinfo;
        
        if(this.hp<=0){
            // if(nowAttack && nowAttack == this){
            //     console.log(111);
            // }
            
            //给当前阵营的选手加金币
            if(this.locking==playerCamp){
                gameinfo.addJinbi(this.gold);
            };

            //给建筑增加经验
            if(build){
                build.addExp();
            }
            

            //每达到200个杀敌，发放奖励
            var rewardLength = 200;

            if(this.locking=='player1'){
                var newJifen = gameinfo.addJifen(1);
                //积分奖励
                if(newJifen%rewardLength==0){
                    tafang.send('玩家1，杀敌200，奖励1个人口');
                    gameinfo.addRenkou(1);
                };
                if(this.isBoss){
                    tafang.send('玩家1，杀死了BOSS，奖励5个人口');
                    gameinfo.addRenkou(5);
                }
            }else{
                var newJifen = gameinfo.addJifen(1,2);
                //积分奖励
                if(newJifen%rewardLength==0){
                    tafang.send('玩家2，杀敌200，奖励1个人口');
                    gameinfo.addRenkou(1);
                };
                if(this.isBoss){
                    tafang.send('玩家2，杀死了BOSS，奖励5个人口');
                    gameinfo.addRenkou(5);
                }
            };
            
            

            this.removeSelf();
            this.visible = false;
            this.destroy(true);

        }else{
            var hpLong = 50 * (this.hp/this.maxHp);
            var graphics = this.hpBox.graphics;
            graphics.clear();
            graphics.drawLine(20,-10,20+hpLong , -10, "#f00",4);
            
        }
        
    };





    return CreateGuai;
})(Laya.Sprite);

















