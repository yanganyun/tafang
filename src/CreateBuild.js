
(function(_Sprite){
    function CreateBuild(){
        CreateBuild.super(this);
        
        //this.init();
    };

    Laya.class(CreateBuild,'CreateBuild',_Sprite);

    var _proto = CreateBuild.prototype;
    var isCache = false;
    _proto.init = function(data){
//camp,name,attack,range,bigRange,bigType,bigDetail,miji,jiange,maxLen,lv
        //建筑阵营归属
        this.camp = data.camp;
        //建筑的名字
        this.name = data.name;
        //初始化攻击力
        this.defattack = data.attack;
        //攻击力
        this.attack = data.attack;
        //攻击范围
        this.range = data.range;
        //大招范围
        this.bigRange = data.bigRange;
        //大招类型
        this.bigType = data.bigType;
        //大招介绍
        this.bigDetail = data.bigDetail;
        //秘技
        this.miji = data.miji;
        //攻击间隔
        this.jiange = data.jiange;
        //建筑等级
        this.lv = data.lv;
        //建筑经验
        this.exp = 0;
        //建筑价格
        this.price = {"jinbi":data.jinbi,"mucai":data.mucai,"renkou":data.renkou};
        //攻击多少次触发技能
        this.maxLen = data.maxLen;
        //当前攻击次数
        this.alength = 0;
        //下一次攻击时间
        this.nextTime = Laya.Browser.now()+this.jiange;
        //当前锁定的目标
        this.nowAttack = null;
        //缓存所有动画
        if(!isCache){
            var animation = Laya.Animation;

            animation.createFrames(['pic/zf1_1.png'],'张飞');
            animation.createFrames(['pic/zf2_1.png','pic/zf2_2.png'],'张飞_gongji');
            animation.createFrames(['pic/baoji.png'],'baoji');

            animation.createFrames(['pic/xhd1_1.png'],'夏侯惇');
            animation.createFrames(['pic/xhd2_1.png','pic/xhd2_2.png','pic/xhd1_1.png'],'夏侯惇_gongji');

            animation.createFrames(['pic/zgl1_1.png'],'诸葛亮');
            animation.createFrames(['pic/zgl2_1.png','pic/zgl2_2.png','pic/zgl1_1.png','pic/zgl1_1.png'],'诸葛亮_gongji');

            animation.createFrames(['pic/zgl1_1.png'],'关羽');
            animation.createFrames(['pic/zgl2_1.png','pic/zgl2_2.png','pic/zgl1_1.png','pic/zgl1_1.png'],'关羽_gongji');

            animation.createFrames(['pic/zy1_1.png'],'赵云');
            animation.createFrames(['pic/zy1_1.png','pic/zy2_1.png'],'赵云_gongji');

            animation.createFrames(['pic/lb1_1.png'],'刘备');
            animation.createFrames(['pic/lb2_1.png','pic/lb2_2.png'],'刘备_gongji');
            
            //animation.createFrames(['pic/zidan.png'],this.name+'jineng1');
            isCache = true;
        }
        
        //添加建筑动画
        this.body = new Laya.Animation();
        this.body.size(100,100);
        this.body.interval = 200;
        this.addChild(this.body);
        this.playAction(this.name);

        this.baoji = new Laya.Animation();
        this.baoji.size(58,36);
        //this.body.interval = 200;
        this.baoji.x = 20;
        this.baoji.y = -10;
        this.addChild(this.baoji);

        //给建筑添加自动攻击技能
        this.gongji();

        //建筑绑定事件
        this.on(Event.CLICK, this);


    };
    //播放动画
    _proto.playAction = function(action){
        this.body.play(0,true,action);
    };

    //播放动画
    _proto.action = function(){
        var self = this;
        this.baoji.play(0,true,'baoji');

        setTimeout(function(){
            self.baoji.clear();
        },600);
    };

    //建筑升级
    _proto.addExp = function(){
        this.exp++;
        //建筑升级策略
        if(this.lv<3 && this.exp>=this.lv*30){
            //建筑等级
            this.lv++;
            //攻击力
            this.attack = this.defattack*parseInt(this.lv*(this.lv/2));
            //攻击范围
            this.range *= 1.1;
            //大招范围
            this.bigRange *= 1.1;
            //攻击间隔
            this.jiange *= 0.8;     
            //重置经验
            this.exp = 0;
            //提示信息
            var lvTip = this.lv>=3?'3(Max)':this.lv;
            tafang.send(playerCamp+'的'+this.name+'升级到 LV'+lvTip+' 实力大增！');
        }
    };


    //自动攻击
    _proto.gongji = function(){
        var self = this;
        var jineng =  new CreateJineng();
        jineng.camp = this.camp;

        //每一帧监听技能
        Laya.timer.frameLoop(1,this,function(){
            
            //是否有锁定目标
            if(!this.nowAttack){
                //发现周围的怪物
                var hasGuai = this.hasGuai();
                //有怪物则锁定目标
                if(hasGuai.length){
                    this.nowAttack = hasGuai[0];
                }
            };

            
            //锁定目标是否在攻击范围
            var nowAttack = this.nowAttack;

            if(nowAttack){
                var xdiff1 = (this.x+this.width/2) - (nowAttack.x+nowAttack.width/2);            // 计算两个点的横坐标之差
                var ydiff1 = (this.y+this.height/2) - (nowAttack.y+nowAttack.height/2);            // 计算两个点的纵坐标之差
                var nowAttackJuli =  parseInt(Math.pow((xdiff1 * xdiff1 + ydiff1 * ydiff1), 0.5));
                //锁定的目标是否在攻击范围里
                if(nowAttackJuli>this.range || nowAttack.hp<=0){
                    //检测怪物是否在攻击范围内
                    this.nowAttack = null;
                    this.playAction(this.name);
                }

                //现在的时间
                var nowTime = Laya.Browser.now();
                //时间大于下次攻击时间，开始下次攻击
                if(nowTime>this.nextTime){
                    //重置下次攻击时间
                    this.nextTime = nowTime+this.jiange;
                    //添加一个子弹，增加一次发射次数
                    this.alength +=1;
                    //读取技能缓存
                    var zidan = Laya.Pool.getItemByClass('CreateJineng',CreateJineng);
                    zidan.nowAttack = this.nowAttack;

                    if(this.alength>=this.maxLen){
                        //大招
                        this.alength = 0;
                        //移动单位大招
                        if(this.bigType==1){
                            zidan.init(this.name+'_'+'jineng2',4,parseInt(this.attack/2)); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(-3,-20);
                            this.addChild(zidan);
                        }else if(this.bigType==2){
                            //寒冰大招
                            var rangeGuaiArr = this.hasGuai();
                            for(var i=0;i<rangeGuaiArr.length;i++){
                                var thisGuai = rangeGuaiArr[i];
                                var bigs = Laya.Pool.getItemByClass('CreateJineng',CreateJineng);
                                bigs.buff = {'name':'jiansu','value':0.5};
                                bigs.init(this.name+'_'+'jineng2',6,parseInt(this.attack/4),this.lv*4500); //技能名称，技能移动速度，技能攻击力，多长时间摧毁技能
                                bigs.pos(-(this.x-thisGuai.x-thisGuai.radius),-(this.y-thisGuai.y-thisGuai.radius/2));
                                this.addChild(bigs);
                            }
                        }else if(this.bigType==3){
                            //暴击
                            zidan.init(this.name+'_'+'jineng1',10,this.attack*5); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(45,45);
                            this.addChild(zidan);
                            this.action('baoji');
                        }else if(this.bigType==4){
                            //暴击+眩晕
                            zidan.buff = {'name':'yun','value':this.lv*1000};
                            zidan.init(this.name+'_'+'jineng1',10,this.attack*5); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(45,45);
                            this.addChild(zidan);
                            this.action('baoji');
                        };

                        
                        
                    }else{ 
                        //普通攻击
                        zidan.init(this.name+'_'+'jineng1',10,this.attack); //技能名称，技能移动速度，技能攻击力
                        zidan.pos(45,45);
                        this.addChild(zidan);
                    };
                    this.playAction(this.name+'_gongji');
                };
            
            }
            

            //怪物层
            var guaiBox = tafang.guaiBox;
            //子弹和技能移动
            for(var i=0;i<this.numChildren;i++){
                var buildFind = this.getChildAt(i);
                //是否存在技能
                if(buildFind && buildFind.speed){
                    var thisJiNengX = this.x + buildFind.x + buildFind.width/2,
                        thisJiNengY = this.y + buildFind.y + buildFind.height/2;
                    var thisJiNengR = buildFind.radius;
                    var isJineng1 = /jineng1/.test(buildFind.name);
                    

                    //释放技能的方式
                    if(isJineng1){
                        
                        if(nowAttack){
                            //子弹跟踪
                            var xdiff2 = (thisJiNengX+buildFind.width/2) - (nowAttack.x+nowAttack.width/2);  // 计算两个点的横坐标之差
                            var ydiff2 = (thisJiNengY+buildFind.height/2) - (nowAttack.y+nowAttack.height/2);  // 计算两个点的纵坐标之差
                            buildFind.angle = Math.atan2(ydiff2,xdiff2);
                            if(!buildFind.nowAttack){
                                buildFind.nowAttack = nowAttack;
                            }else if(buildFind.nowAttack != nowAttack && !buildFind.nowAttack.length){
                                
                            };
                            
                            //子弹跟踪
                            buildFind.x -= Math.cos(buildFind.angle) * buildFind.speed;
                            buildFind.y -= Math.sin(buildFind.angle) * buildFind.speed;
                        }else{
                            //移除技能
                            buildFind.removeSelf();
                            buildFind.visible = false;
                            buildFind.destroy(true);
                            break;
                        }
                        
                    }else{

                        if(this.bigType==1){
                            //大招只首次跟踪,之后直行轨迹
                            if(!buildFind.angle){
                                var xdiff2 = (this.x+this.width/2) - (nowAttack.x+nowAttack.width/2);  // 计算两个点的横坐标之差
                                var ydiff2 = (this.y+this.height/2) - (nowAttack.y+nowAttack.height/2);  // 计算两个点的纵坐标之差
                                buildFind.angle = Math.atan2(ydiff2,xdiff2);
                            };
                            //大招移动
                            buildFind.x -= Math.cos(buildFind.angle) * buildFind.speed;
                            buildFind.y -= Math.sin(buildFind.angle) * buildFind.speed;

                            //大招的移动范围
                            var xdiff3 = thisJiNengX - (this.x+this.width/2);            // 计算两个点的横坐标之差
                            var ydiff3 = thisJiNengY - (this.y+this.height/2);            // 计算两个点的纵坐标之差
                            //碰撞距离
                            var jinengJuli =  parseInt(Math.pow((xdiff3 * xdiff3 + ydiff3 * ydiff3), 0.5));
                            if(jinengJuli>this.bigRange){
                                //移除技能
                                buildFind.removeSelf();
                                buildFind.visible = false;
                                buildFind.destroy(true);
                            }
                        }else if(this.bigType==3){

                        }
                        
                        
                    };//技能类型检测

                    

                    //碰撞检测
                    for(var j=0;j<guaiBox.numChildren;j++){
                        var thisGuai = guaiBox.getChildAt(j);
                        var guaiR = thisGuai.radius,
                            guaiX = thisGuai.x + thisGuai.width/2,
                            guaiY = thisGuai.y + thisGuai.height/2;

                        var xdiff = thisJiNengX - guaiX;            // 计算两个点的横坐标之差
                        var ydiff = thisJiNengY - guaiY;            // 计算两个点的纵坐标之差
                        //碰撞距离
                        var pongJuli =  parseInt(Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5));

                        //碰撞
                        if(pongJuli <= thisJiNengR + guaiR ){

                            var thisBuff = buildFind.buff;
                            if(isJineng1){
                                //检测技能buff
                                
                                if(thisBuff && thisBuff.name == 'yun'){
                                    //眩晕buff
                                    thisGuai.addBuff('yun',{'time':thisBuff.value,'value':0})
                                }
                                buildFind.removeSelf();
                                buildFind.visible = false;
                                buildFind.destroy(true);
                                //Laya.Pool.recover('buildFind',buildFind);
                            }else if(thisBuff && thisBuff.name == 'jiansu'){
                                //减速buff
                                thisGuai.addBuff('jiansu',{'time':2000,'value':0.5});
                                
                            };
                            var attack = buildFind.attack;
                            //怪物归属
                            thisGuai.locking = jineng.camp;
                            //设置血量
                            thisGuai.setHp(thisGuai.hp-attack,this);
                            break;
                        }
                    };



                }
            };


        });
    };

    //发现周围怪物
    _proto.hasGuai = function(){
        var guaiBox = tafang.guaiBox;
        var guaiArr = [];
        for(var k=0;k<guaiBox.numChildren;k++){
            var tGuai = guaiBox.getChildAt(k);
            var xdiff = (this.x+this.width/2) - (tGuai.x+tGuai.width/2);            // 计算两个点的横坐标之差
            var ydiff = (this.y+this.height/2) - (tGuai.y+tGuai.height/2);            // 计算两个点的纵坐标之差
            var tGuaiJuli =  parseInt(Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5));
            //怪物进入攻击范围
            if(!tGuai.visible || tGuai.hp<=0){
                buildFind.removeSelf();
                buildFind.visible = false;
                buildFind.destroy(true);
            }else if(tGuaiJuli<=this.range){
                guaiArr.push(tGuai); //锁定范围内的怪物
            };
        };
        return guaiArr;
    };



    return CreateBuild;
})(Laya.Sprite);

















