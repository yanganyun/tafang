
(function(_Sprite){
    function CreateBuild(){
        CreateBuild.super(this);
        
        //this.init();
    };

    Laya.class(CreateBuild,'CreateBuild',_Sprite);

    var _proto = CreateBuild.prototype;
    var isCache = false;
    _proto.init = function(camp,name,attack,range,jiange,lv){

        this.camp = camp;
        this.name = name;
        this.attack = attack;
        this.range = range;
        this.jiange = jiange;
        this.lv = lv;
        this.MaxLen = 5;
        this.length = 0;
        this.nextTime = Laya.Browser.now()+this.jiange;

        if(!isCache){
            Laya.Animation.createFrames(['pic/xhd1.png','pic/xhd2.png','pic/xhd3.png'],this.name);

            Laya.Animation.createFrames(['pic/zidan.png'],this.name+'jineng1');
        }
        

        this.body = new Laya.Animation();
        this.body.size(100,100);
        this.body.interval = 300;
        this.addChild(this.body);
        this.playAction(this.name);

        this.on(Event.CLICK, this);
    };

    _proto.playAction = function(action){
        this.body.play(0,true,action);
        //new CreateJineng();
        this.gongji();
    }

    _proto.gongji = function(startX,startY){
        var self = this;
        //创建技能对象
        
        //jineng.init('jineng1',10,500);
        var jineng =  new CreateJineng();
        
        // var zidan = Laya.Pool.getItemByClass('CreateJineng',CreateJineng);
        // zidan.init('jineng1',10,500);
        // zidan.pos(this.x+40,this.y+40);
        // this.addChild(zidan);
        console.log(this)
        //定时器
        Laya.timer.frameLoop(2,this,function(){

            
            

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
                    }else if(true){

                    }
                }
            }

            var nowTime = Laya.Browser.now();
            if(nowTime>this.nextTime){
                this.nextTime = nowTime+this.jiange;
                var zidan = Laya.Pool.getItemByClass('CreateJineng',CreateJineng);
                    zidan.init('jineng1',20,100);
                    zidan.pos(40,40);
                    this.addChild(zidan);
            }
        });
    }



    return CreateBuild;
})(Laya.Sprite);

















