
(function(_Sprite){
    function CreateJineng(){
        CreateJineng.super(this);
        
        //this.init();
    };

    Laya.class(CreateJineng,'CreateJineng',_Sprite);

    var _proto = CreateJineng.prototype;
    var isCache = false;
    _proto.init = function(name,speed,attack){

        this.name = name;
        this.speed = speed;
        this.attack = attack;
        this.nextTime = Laya.Browser.now()+this.speed;

        if(!isCache){
            Laya.Animation.createFrames(['pic/zidan.png'],'夏侯惇_jineng1');
            Laya.Animation.createFrames(['pic/feng1.png','pic/feng2.png','pic/feng3.png'],'夏侯惇_jineng2');
        }
        //初始化技能动画
        this.body = new Laya.Animation();
        //技能的宽高范围
        if(this.name == '夏侯惇_jineng1'){
            this.body.size(110,124);
        }else{
            this.body.size(10,10);
        }
        
        //多少毫秒播放一帧
        this.body.interval = 300;
        this.addChild(this.body);
        this.playAction(this.name);

    };

    _proto.playAction = function(action){
        this.body.play(0,true,action);
    }



    return CreateJineng;
})(Laya.Sprite);

















