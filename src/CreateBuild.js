
(function(_Sprite){
    function CreateBuild(){
        CreateBuild.super(this);
        
        //this.init();
    };

    Laya.class(CreateBuild,'CreateBuild',_Sprite);

    var _proto = CreateBuild.prototype;
    var isCache = false;
    _proto.init = function(camp,name,attack,range,bigRange,bigType,jiange,lv){

        //建筑阵营归属
        this.camp = camp;
        //建筑的名字
        this.name = name;
        //攻击力
        this.attack = attack;
        //攻击范围
        this.range = range;
        //大招范围
        this.bigRange = bigRange;
        //大招类型
        this.bigType = bigType;
        //攻击间隔
        this.jiange = jiange;
        //建筑等级
        this.lv = lv;
        //建筑价格
        this.price = {"jinbi":0,"mucai":0,"renkou":0};
        //攻击多少次触发技能
        this.maxLen = 5;
        //当前攻击次数
        this.alength = 0;
        //下一次攻击时间
        this.nextTime = Laya.Browser.now()+this.jiange;
        //当前锁定的目标
        this.nowAttack = null;
        //缓存所有动画
        if(!isCache){
            var animation = Laya.Animation;
            animation.createFrames(['pic/xhd1_1.png','pic/xhd1_2.png','pic/xhd1_1.png','pic/xhd1_4.png'],'夏侯惇');
            animation.createFrames(['pic/xhd2_1.png','pic/xhd2_2.png','pic/xhd2_3.png','pic/xhd2_4.png'],'夏侯惇_gongji');
            animation.createFrames(['pic/zgl1_1.png','pic/zgl1_2.png','pic/zgl1_1.png','pic/zgl1_4.png'],'诸葛亮');
            animation.createFrames(['pic/zgl2_1.png','pic/zgl2_2.png','pic/zgl1_1.png','pic/zgl1_1.png'],'诸葛亮_gongji');
            //animation.createFrames(['pic/zidan.png'],this.name+'jineng1');
            isCache = true;
        }
        
        //添加建筑动画
        this.body = new Laya.Animation();
        this.body.size(100,100);
        this.body.interval = 200;
        this.addChild(this.body);
        this.playAction(this.name);

        //给建筑添加自动攻击技能
        this.gongji();

        //建筑绑定事件
        this.on(Event.CLICK, this);


    };
    //播放动画
    _proto.playAction = function(action){
        this.body.play(0,true,action);
    }


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
                            zidan.init(this.name+'_'+'jineng2',6,parseInt(this.attack/4)); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(-3,-20);
                            this.addChild(zidan);
                        }else if(this.bigType==2){
                            //寒冰大招
                            var rangeGuaiArr = this.hasGuai();
                            for(var i=0;i<rangeGuaiArr.length;i++){
                                var thisGuai = rangeGuaiArr[i];
                                var bigs = Laya.Pool.getItemByClass('CreateJineng',CreateJineng);
                                bigs.buff = 'jiansu';
                                bigs.init(this.name+'_'+'jineng2',6,parseInt(this.attack/100),3000); //技能名称，技能移动速度，技能攻击力，多长时间摧毁技能
                                bigs.pos(-(this.x-thisGuai.x-thisGuai.radius),-(this.y-thisGuai.y-thisGuai.radius/2));
                                this.addChild(bigs);
                            }
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
                        }else if(this.bigType==2){

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
                            if(isJineng1){
                                buildFind.removeSelf();
                                buildFind.visible = false;
                                buildFind.destroy(true);
                                //Laya.Pool.recover('buildFind',buildFind);
                            }else if(buildFind.buff == 'jiansu' && thisGuai.buff != 'jiansu'){
                                //减速buff
                                thisGuai.buff = 'jiansu';
                                thisGuai.run *= 0.5; 
                                thisGuai.removebuff(0.5*4);
                                
                            };
                            var attack = buildFind.attack;
                            //怪物归属
                            thisGuai.locking = jineng.camp;
                            //设置血量
                            thisGuai.setHp(thisGuai.hp-attack);
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

















