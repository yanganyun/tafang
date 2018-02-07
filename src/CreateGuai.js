
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
            Laya.Animation.createFrames(['pic/guai2_1.png','pic/guai2_2.png'],'guai2');
            Laya.Animation.createFrames(['pic/guai3_1.png','pic/guai3_2.png'],'guai3');
            Laya.Animation.createFrames(['pic/guai4_1.png','pic/guai4_2.png'],'guai4');
            Laya.Animation.createFrames(['pic/guai5_1.png','pic/guai5_2.png'],'guai5');
            Laya.Animation.createFrames(['pic/guai6_1.png','pic/guai6_2.png'],'guai6');
            Laya.Animation.createFrames(['pic/guai7_1.png','pic/guai7_2.png'],'guai7');
            Laya.Animation.createFrames(['pic/guai8_1.png','pic/guai8_2.png'],'guai8');
            Laya.Animation.createFrames(['pic/guai9_1.png','pic/guai9_2.png'],'guai9');
            Laya.Animation.createFrames(['pic/guai10_1.png','pic/guai10_2.png'],'guai10');
            Laya.Animation.createFrames(['pic/boss1_1.png','pic/boss1_2.png'],'boss1');
            Laya.Animation.createFrames(['pic/boss2_1.png','pic/boss2_2.png'],'boss2');
            Laya.Animation.createFrames(['pic/boss3_1.png','pic/boss3_2.png'],'boss3');
            Laya.Animation.createFrames(['pic/boss4_1.png','pic/boss4_2.png'],'boss4');
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
                    tafang.send('玩家1，杀死了BOSS，奖励4个人口');
                    gameinfo.addRenkou(4);
                }
            }else{
                var newJifen = gameinfo.addJifen(1,2);
                //积分奖励
                if(newJifen%rewardLength==0){
                    tafang.send('玩家2，杀敌200，奖励1个人口');
                    gameinfo.addRenkou(1);
                };
                if(this.isBoss){
                    tafang.send('玩家2，杀死了BOSS，奖励4个人口');
                    gameinfo.addRenkou(4);
                }
            };
            

            this.removeSelf();
            this.destroy(true);

            //是否是最后一个大BOSS
            if(this.name=="boss4"){
                tafang.bigBossDie++;
                if(tafang.bigBossDie>=2 || isDanji){
                    clearInterval(gameChange.getDataTimer);
                    //关闭所有定时器
                    tafang.clearGame();

                    var btn_shengli = gameinfo.btn_shengli;
                    btn_shengli.visible = true;
                    btn_shengli.on('click',this,function(){
                        btn_shengli.removeSelf();
                        tafang.restart();
                    });
                }
                
                
            }

        }else{
            var hpLong = 50 * (this.hp/this.maxHp);
            var graphics = this.hpBox.graphics;
            graphics.clear();
            graphics.drawLine(20,-10,20+hpLong , -10, "#f00",4);
            
        }
        
    };





    return CreateGuai;
})(Laya.Sprite);

















