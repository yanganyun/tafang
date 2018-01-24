
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
        //攻击范围
        this.range = range;
        //攻击间隔
        this.jiange = jiange;
        //建筑等级
        this.lv = lv;
        //攻击多少次触发技能
        this.maxLen = 10;
        //当前攻击次数
        this.alength = 0;
        //下一次攻击时间
        this.nextTime = Laya.Browser.now()+this.jiange;
        //缓存所有动画
        if(!isCache){
            Laya.Animation.createFrames(['pic/xhd1.png','pic/xhd2.png','pic/xhd3.png'],this.name);

            Laya.Animation.createFrames(['pic/zidan.png'],this.name+'jineng1');
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
        //定时器
        Laya.timer.frameLoop(2,this,function(){


            // var xdiff = this.x - guai.x;            // 计算两个点的横坐标之差
            // var ydiff = this.y - guai.y;            // 计算两个点的纵坐标之差
            // var guaiJuli =  parseInt(Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5));
            var guaiBox = tafang.guaiBox;
            //循环建筑里的所有技能和子弹
            for(var i=0;i<this.numChildren;i++){
                var buildFind = this.getChildAt(i);
                if(buildFind && buildFind.speed){
                    buildFind.y -= buildFind.speed;

                    if(buildFind.y<=-this.y){
                        //移除
                        buildFind.removeSelf();
                        //隐藏
                        buildFind.visible = false;
                        //回收动画
                        Laya.Pool.recover('buildFind',buildFind);
                    }else{
                        var thisJiNengX = this.x + buildFind.x + buildFind.width/2,
                            thisJiNengY = this.y + buildFind.y + buildFind.height/2;
                        var thisJiNengR = buildFind.radius;

                        
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
                                var attack = buildFind.attack;
                                //怪物归属
                                thisGuai.locking = jineng.camp;
                                //设置血量
                                thisGuai.setHp(thisGuai.hp-attack);
                                //thisGuai.removeSelf();
                                //thisGuai.visible = false;
                                if(/jineng1/.test(buildFind.name)){
                                    buildFind.removeSelf();
                                    buildFind.visible = false;
                                }
                            }
                        }

                        // var xdiff = this.x - guai.x;            // 计算两个点的横坐标之差
                        // var ydiff = this.y - guai.y;            // 计算两个点的纵坐标之差
                        // var guaiJuli =  parseInt(Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5));
                    }
                }
            }

            var nowTime = Laya.Browser.now();
            if(nowTime>this.nextTime){
                this.nextTime = nowTime+this.jiange;
                
                    //添加一个子弹，增加一次发射次数
                    this.alength +=1;

                    var zidan = Laya.Pool.getItemByClass('CreateJineng',CreateJineng);
                    if(this.alength>=this.maxLen){
                        //大招
                        this.alength = 0;
                        zidan.init(this.name+'_'+'jineng2',10,100); //技能名称，技能移动速度，技能攻击力
                        zidan.pos(-3,-20);
                        this.addChild(zidan);
                    }else{ 
                        //普通攻击
                        zidan.init(this.name+'_'+'jineng1',20,500); //技能名称，技能移动速度，技能攻击力
                        zidan.pos(45,45);
                        this.addChild(zidan);
                    }
            }


        });
    }



    return CreateBuild;
})(Laya.Sprite);

















