
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
        //初始攻击间隔
        this.defjiange = data.jiange;
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
        //是否正在释放大招
        this.biging = false;
        //buff
        this.buff = null;
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

            animation.createFrames(['pic/gy1_1.png'],'关羽');
            animation.createFrames(['pic/gy2_1.png','pic/gy2_2.png','pic/gy1_1.png'],'关羽_gongji');

            animation.createFrames(['pic/zy1_1.png'],'赵云');
            animation.createFrames(['pic/zy1_1.png','pic/zy2_1.png','pic/zy1_1.png','pic/zy1_1.png'],'赵云_gongji');
            animation.createFrames(['pic/zy2_2.png','pic/zy2_3.png'],'赵云_gongji2');

            animation.createFrames(['pic/lb1_1.png'],'刘备');
            animation.createFrames(['pic/lb2_1.png','pic/lb2_2.png','pic/lb1_1.png'],'刘备_gongji');


            animation.createFrames(['pic/buff1.png','pic/buff2.png','pic/buff3.png'],'build_buff');
            
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

        //buff状态
        this.buffRun = new Laya.Animation();
        this.buffRun.size(100,100);
        //this.body.interval = 200;
        this.buffRun.x = 0;
        this.buffRun.y = 0;
        this.buffRun.interval = 300;
        this.addChild(this.buffRun);
        
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
    _proto.action = function(name){
        var self = this;
        this.baoji.play(0,true,name);

        setTimeout(function(){
            self.baoji.clear();
        },600);
    };

    //buff动画
    _proto.actionBuff = function(name){
        var self = this;
        this.buffRun.play(0,true,name);
        setTimeout(function(){
            self.buffRun.clear();
        },600);
    };

    //建筑升级
    _proto.addExp = function(){
        if(this.lv>=3){
            return false;
        }
        this.exp++;
        //建筑升级策略
        if(this.lv<3 && this.exp>=this.lv*tafang.lvExp){
            //建筑等级
            this.lv++;
            //攻击力
            this.attack = this.defattack*this.lv;
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
            tafang.send(playerName+'的'+this.name+'升级到 LV'+lvTip+' 实力大增！');

            this.defattack = this.attack;
            this.defjiange = this.jiange;

            if(this.lv==3){

                //检测玩家是否存在秘技
                var thisPlayerHasMiji = false,
                    mijiData = tafang.mijiData;
                for(var i=0;i<mijiData.length;i++){
                    if(mijiData[i].camp == playerCamp){
                        thisPlayerHasMiji = true;
                    }
                };

                if(!thisPlayerHasMiji){
                    var MapBg = tafang.gameMap.MapBg;
                    //检测是否满足开启秘技的条件
                    var maxData = {'zf':{'xy':null,'value':0},'lb':{'xy':null,'value':0},'gy':{'xy':null,'value':0}};
                    for(var i=0;i<MapBg.numChildren;i++){
                        var thisBuild = MapBg.getChildAt(i);
                        if(thisBuild.lv==3){
                            if(thisBuild.name=='张飞' && !maxData.zf.value){
                                maxData.zf.value = 1;
                                maxData.zf.xy = [thisBuild.x+thisBuild.width/2,thisBuild.y+thisBuild.height/2];
                            }else if(thisBuild.name=='关羽' && !maxData.gy.value){
                                maxData.gy.value = 1;
                                maxData.gy.xy = [thisBuild.x+thisBuild.width/2,thisBuild.y+thisBuild.height/2];
                            }else if(thisBuild.name=='刘备' && !maxData.lb.value){
                                maxData.lb.value = 1;
                                maxData.lb.xy = [thisBuild.x+thisBuild.width/2,thisBuild.y+thisBuild.height/2];
                            }
                        }
                    };

                    
                    //检测秘技条件
                    if(maxData.zf.value+maxData.lb.value+maxData.gy.value == 3){
                        var arrAll = (maxData.zf.xy +','+ maxData.gy.xy + ',' + maxData.lb.xy).split(',');
                        for(var i=0;i<arrAll.length;i++){
                            arrAll[i] = parseInt(arrAll[i]);
                        };

                        //检测两个坐标点的差
                        var xdiff1 = arrAll[0] - arrAll[2];            // 计算两个点的横坐标之差
                        var ydiff1 = arrAll[1] - arrAll[3];           // 计算两个点的纵坐标之差
                        var xdiff2 = arrAll[0] - arrAll[4];            // 计算两个点的横坐标之差
                        var ydiff2 = arrAll[1] - arrAll[5];           // 计算两个点的纵坐标之差
                        var xdiff3 = arrAll[2] - arrAll[4];            // 计算两个点的横坐标之差
                        var ydiff3 = arrAll[3] - arrAll[5];           // 计算两个点的纵坐标之差

                        //碰撞距离
                        var juli1 =  parseInt(Math.pow((xdiff1 * xdiff1 + ydiff1 * ydiff1), 0.5));
                        var juli2 =  parseInt(Math.pow((xdiff2 * xdiff2 + ydiff2 * ydiff2), 0.5));
                        var juli3 =  parseInt(Math.pow((xdiff3 * xdiff3 + ydiff3 * ydiff3), 0.5));
                        if(juli1<600 && juli2<600 && juli3<600){
                            //激活秘技
                            mijiData.push({'camp':playerCamp,'attack':8000,'lineColor':'#ffc706','filterColor':'#ff0000','xyArr':arrAll});
                        }else{
                            //提示
                            tafang.send('刘、关、张，距离太远无法触发秘技，触发位置以第一个为准！');
                        }
                        
                    }
                }
            }
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
                    //是否正在释放大招
                    if(!this.biging){
                        this.playAction(this.name);
                    }
                    
                }

                //现在的时间
                var nowTime = Laya.Browser.now();
                //时间大于下次攻击时间，开始下次攻击
                if(nowTime>this.nextTime && !this.biging){ ////是否正在释放大招
                    
                    //读取技能缓存
                    var zidan = Laya.Pool.getItemByClass('CreateJineng',CreateJineng);
                    zidan.nowAttack = this.nowAttack;

                    if(this.alength>=this.maxLen){
                        //大招
                        this.alength = 0;
                        //夏侯惇大招
                        if(this.bigType==1){
                            zidan.init(this.name+'_'+'jineng2',4,parseInt(this.attack/5)); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(-3,-20);
                            this.addChild(zidan);
                        }else if(this.bigType==2){
                            //寒冰大招
                            var rangeGuaiArr = this.hasGuai();
                            for(var i=0;i<rangeGuaiArr.length;i++){
                                var thisGuai = rangeGuaiArr[i];
                                var bigs = Laya.Pool.getItemByClass('CreateJineng',CreateJineng);
                                bigs.buff = {'name':'jiansu','value':0.5};
                                bigs.init(this.name+'_'+'jineng2',6,parseInt(this.attack/6),this.lv*1500); //技能名称，技能移动速度，技能攻击力，多长时间摧毁技能
                                bigs.pos(-(this.x-thisGuai.x-thisGuai.radius),-(this.y-thisGuai.y-thisGuai.radius/2));
                                this.addChild(bigs);
                            }
                        }else if(this.bigType==3){
                            //张飞大招
                            zidan.init(this.name+'_'+'jineng1',10,this.attack*5); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(45,45);
                            this.addChild(zidan);
                            this.action('baoji');
                        }else if(this.bigType==4){
                            //关羽大招
                            zidan.buff = {'name':'yun','value':this.lv*1000};
                            zidan.init(this.name+'_'+'jineng1',10,this.attack*6); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(45,45);
                            this.addChild(zidan);
                            this.action('baoji');
                        }else if(this.bigType == 5){
                            //赵云大招
                            zidan.init(this.name+'_'+'jineng2',10,this.attack/4,this.lv*1500); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(-240,-260);
                            this.addChild(zidan);
                            //添加释放大招的状态
                            this.biging = true;
                            //播放大招动作
                            this.playAction('赵云_gongji2');
                            setTimeout(function(){
                                self.biging = false;
                            },this.lv*1500)
                            
                        }else if(this.bigType == 6){
                            //刘备大招
                            var aroundFriend = this.aroundFriend(this.bigRange);
                            for(var i=0;i<aroundFriend.length;i++){
                                if(!aroundFriend[i].buff){
                                    var buffData = {'attack':1.2,'jiange':0.8,'time':this.lv*2000};
                                    aroundFriend[i].addBuff(buffData);
                                    aroundFriend[i].actionBuff('build_buff');
                                }
                                
                            };
                        };

                        
                        
                    }else{ 
                        //重置下次攻击时间
                        this.nextTime = nowTime+this.jiange;
                        //添加一个子弹，增加一次发射次数
                        this.alength +=1;
                        //普通攻击
                        zidan.init(this.name+'_'+'jineng1',10,this.attack); //技能名称，技能移动速度，技能攻击力
                        zidan.pos(45,45);
                        this.addChild(zidan);
                        this.playAction(this.name+'_gongji');
                    };
                    
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

                    //赵云旋转技能
                    if(!isJineng1 && this.bigType == 5){
                        thisJiNengX-=300;
                        thisJiNengY-=300;
                    };
                    

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
                        }else if(this.bigType==5){
                            buildFind.pivot(300,300);
                            buildFind.x = 50;
                            buildFind.y = 50;
                            buildFind.rotation += 20;
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
                            if(thisBuff && thisBuff.name == 'yun'){
                                //眩晕buff
                                thisGuai.addBuff('yun',{'time':thisBuff.value,'value':0});
                                //Laya.Pool.recover('buildFind',buildFind);
                            }else if(thisBuff && thisBuff.name == 'jiansu'){
                                //减速buff
                                thisGuai.addBuff('jiansu',{'time':2000,'value':0.5});
                                
                            };
                            
                            

                            var attack = buildFind.attack;
                            //怪物归属
                            thisGuai.locking = jineng.camp;
                            //设置血量
                            thisGuai.setHp(attack,this);

                            if(isJineng1 || this.bigType==3 || this.bigType==4){
                                buildFind.removeSelf();
                                buildFind.visible = false;
                                buildFind.destroy(true);
                            };
                            
                            if(this.bigType!=5){
                                break;
                            }
                        };


                        
                        


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

    _proto.addBuff = function(data){
        var self = this;
        //{'attack':1.2,'jiange':0.8,'time':3000}
        this.attack *= data.attack;
        this.jiange *= data.jiange;
        this.buff = data;
        setTimeout(function(){
            self.attack = self.defattack;
            self.jiange = self.defjiange;
            self.buff = null;
            //self.buffRun.clear();
        },data.time);
    };

    //获取周围的友军
    _proto.aroundFriend = function(range){
        var MapBg = tafang.gameMap.MapBg;
        var friendArr = [];
        for(var k=0;k<MapBg.numChildren;k++){
            var tFriend = MapBg.getChildAt(k);
            var xdiff = (this.x+this.width/2) - (tFriend.x+tFriend.width/2);            // 计算两个点的横坐标之差
            var ydiff = (this.y+this.height/2) - (tFriend.y+tFriend.height/2);            // 计算两个点的纵坐标之差
            var tFriendJuli =  parseInt(Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5));
            //范围内的友军
            if(tFriendJuli<=range){
                friendArr.push(tFriend); //锁定范围内的怪物
            };
        };
        return friendArr;
    };

    return CreateBuild;
})(Laya.Sprite);

















