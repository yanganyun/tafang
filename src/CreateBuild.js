
(function(_Sprite){
    function CreateBuild(){
        CreateBuild.super(this);
        
        //this.init();
    };

    Laya.class(CreateBuild,'CreateBuild',_Sprite);

    var _proto = CreateBuild.prototype;
    var isCache = false;
    _proto.init = function(camp,name,attack,range,jiange,lv){

        //建筑阵营归属
        this.camp = camp;
        //建筑的名字
        this.name = name;
        //攻击力
        this.attack = attack;
        //攻击范围
        this.range = range;
        //攻击间隔
        this.jiange = jiange;
        //建筑等级
        this.lv = lv;
        //建筑价格
        this.price = {"jinbi":0,"mucai":0,"renkou":0};
        //攻击多少次触发技能
        this.maxLen = 10;
        //当前攻击次数
        this.alength = 0;
        //下一次攻击时间
        this.nextTime = Laya.Browser.now()+this.jiange;
        //缓存所有动画
        if(!isCache){
            var animation = Laya.Animation;
            animation.createFrames(['pic/xhd1.png','pic/xhd2.png','pic/xhd3.png'],this.name);
            animation.createFrames(['pic/zidan.png'],this.name+'jineng1');
        }
        
        //添加建筑动画
        this.body = new Laya.Animation();
        this.body.size(100,100);
        this.body.interval = 300;
        this.addChild(this.body);
        this.playAction(this.name);

        //给建筑添加自动攻击技能
        this.gongji();

        //建筑绑定事件
        this.on(Event.CLICK, this);

        //价格
        // if(name = '夏侯惇'){
        //     this.price = {"jinbi":500,"mucai":0,"renkou":2};
        // }else if(name = '赵云'){
        //     this.price = {"jinbi":1000,"mucai":0,"renkou":3};
        // }else if(name = '吕布'){
        //     this.price = {"jinbi":2000,"mucai":0,"renkou":5};
        // }

    };
    //播放动画
    _proto.playAction = function(action){
        this.body.play(0,true,action);
    }
    //自动攻击
    _proto.gongji = function(startX,startY){
        var self = this;
        //创建技能对象
        var jineng =  new CreateJineng();
        jineng.camp = this.camp;

        //当前锁定攻击的目标
        var nowAttack = null;
        //定时器
        Laya.timer.frameLoop(1,this,function(){


            // var xdiff = this.x - guai.x;            // 计算两个点的横坐标之差
            // var ydiff = this.y - guai.y;            // 计算两个点的纵坐标之差
            // var guaiJuli =  parseInt(Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5));
            var guaiBox = tafang.guaiBox;


            if(!nowAttack){
                //检测怪物是否在攻击范围内
                for(var k=0;k<guaiBox.numChildren;k++){
                    var tGuai = guaiBox.getChildAt(k);
                    var xdiff = (this.x+this.width/2) - (tGuai.x+tGuai.width/2);            // 计算两个点的横坐标之差
                    var ydiff = (this.y+this.height/2) - (tGuai.y+tGuai.height/2);            // 计算两个点的纵坐标之差
                    var tGuaiJuli =  parseInt(Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5));
                    //怪物进入攻击范围
                    if(tGuaiJuli<=this.range){
                        //锁定范围内的怪物
                        nowAttack = tGuai;
                        hasGuai = true;
                        break; //跳出
                    }
                };

            }else{
                var xdiff1 = (this.x+this.width/2) - (nowAttack.x+nowAttack.width/2);            // 计算两个点的横坐标之差
                var ydiff1 = (this.y+this.height/2) - (nowAttack.y+nowAttack.height/2);            // 计算两个点的纵坐标之差
                var nowAttackJuli =  parseInt(Math.pow((xdiff1 * xdiff1 + ydiff1 * ydiff1), 0.5));
                //锁定的目标是否在攻击范围里
                if(nowAttackJuli>this.range){
                    //检测怪物是否在攻击范围内
                    nowAttack = null;
                }else if(nowAttack.hp>0){//在范围内的锁定目标
                    
                    //发射子弹和技能
                    var nowTime = Laya.Browser.now();
                    //攻击和技能
                    if(nowTime>this.nextTime){
                        this.nextTime = nowTime+this.jiange;
                            //添加一个子弹，增加一次发射次数
                            this.alength +=1;
                            //读取技能缓存
                            var zidan = Laya.Pool.getItemByClass('CreateJineng',CreateJineng);
                            zidan.mubiao = nowAttack;
                            if(this.alength>=this.maxLen){
                                //大招
                                this.alength = 0;
                                zidan.init(this.name+'_'+'jineng2',4,parseInt(this.attack/4)); //技能名称，技能移动速度，技能攻击力
                                zidan.pos(-3,-20);
                                this.addChild(zidan);
                            }else{ 
                                //普通攻击
                                zidan.init(this.name+'_'+'jineng1',10,this.attack); //技能名称，技能移动速度，技能攻击力
                                zidan.pos(45,45);
                                this.addChild(zidan);
                            }
                            
                    };
                }else{
                    //检测怪物是否在攻击范围内
                    for(var k=0;k<guaiBox.numChildren;k++){
                        var tGuai = guaiBox.getChildAt(k);
                        var xdiff = (this.x+this.width/2) - (tGuai.x+tGuai.width/2);            // 计算两个点的横坐标之差
                        var ydiff = (this.y+this.height/2) - (tGuai.y+tGuai.height/2);            // 计算两个点的纵坐标之差
                        var tGuaiJuli =  parseInt(Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5));
                        //怪物进入攻击范围
                        if(tGuaiJuli<=this.range){
                            //锁定范围内的怪物
                            nowAttack = tGuai;
                            break; //跳出
                        }
                    }
                };
            };


            
            //循环建筑里的所有技能和子弹
            for(var i=0;i<this.numChildren;i++){
                var buildFind = this.getChildAt(i);
                if(buildFind && buildFind.speed){

                    
                    var thisJiNengX = this.x + buildFind.x + buildFind.width/2,
                        thisJiNengY = this.y + buildFind.y + buildFind.height/2;
                    var thisJiNengR = buildFind.radius;
                    var isJineng1 = /jineng1/.test(buildFind.name);

                    //目标
                    if(nowAttack){

                        if(isJineng1){
                            //子弹跟踪
                            
                            var xdiff2 = (thisJiNengX+buildFind.width/2) - (nowAttack.x+nowAttack.width/2);  // 计算两个点的横坐标之差
                            var ydiff2 = (thisJiNengY+buildFind.height/2) - (nowAttack.y+nowAttack.height/2);  // 计算两个点的纵坐标之差
                            buildFind.angle = Math.atan2(ydiff2,xdiff2);

                            if(buildFind.angle>2){
                                //移除技能
                                buildFind.removeSelf();
                                buildFind.visible = false;
                            }else{
                                //子弹跟踪
                                buildFind.x -= Math.cos(buildFind.angle) * buildFind.speed;
                                buildFind.y -= Math.sin(buildFind.angle) * buildFind.speed;
                            }
                            
                        }else{
                            //大招跟踪
                             if(!buildFind.angle){
                                var xdiff2 = (this.x+this.width/2) - (nowAttack.x+nowAttack.width/2);  // 计算两个点的横坐标之差
                                var ydiff2 = (this.y+this.height/2) - (nowAttack.y+nowAttack.height/2);  // 计算两个点的纵坐标之差
                                buildFind.angle = Math.atan2(ydiff2,xdiff2);
                            };
                            //子弹跟踪
                            buildFind.x -= Math.cos(buildFind.angle) * buildFind.speed;
                            buildFind.y -= Math.sin(buildFind.angle) * buildFind.speed;
                            
                            
                        }

                        //子弹出去的距离
                        var xdiff3 = thisJiNengX - (this.x+this.width/2);            // 计算两个点的横坐标之差
                        var ydiff3 = thisJiNengY - (this.y+this.height/2);            // 计算两个点的纵坐标之差
                        //碰撞距离
                        var jinengJuli =  parseInt(Math.pow((xdiff3 * xdiff3 + ydiff3 * ydiff3), 0.5));

                        //技能是否在范围内
                        if(jinengJuli>this.range && isJineng1 || jinengJuli>this.range*1.5){
                            //移除技能
                            buildFind.removeSelf();
                            buildFind.visible = false;
                            //回收动画
                            //Laya.Pool.recover('buildFind',buildFind);
                            
                        }else{
                            
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
                                        //Laya.Pool.recover('buildFind',buildFind);
                                    }
                                    var attack = buildFind.attack;
                                    //怪物归属
                                    thisGuai.locking = jineng.camp;
                                    //设置血量
                                    thisGuai.setHp(thisGuai.hp-attack);
                                    break;

                                }
                            };

                        }
                    };// else if(isJineng1){//目标结束
                    //     buildFind.removeSelf();
                    //     buildFind.visible = false;
                    // }
                }
            }



        });
    }



    return CreateBuild;
})(Laya.Sprite);

















