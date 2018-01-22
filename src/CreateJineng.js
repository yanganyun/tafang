
(function(_Sprite){
    function CreateJineng(){
        CreateJineng.super(this);
        
        //this.init();
    };

    Laya.class(CreateJineng,'CreateJineng',_Sprite);

    var _proto = CreateJineng.prototype;
    var isCache = false;
    _proto.init = function(name,speed){

        this.name = name;
        this.speed = speed;
        this.nextTime = Laya.Browser.now()+this.speed;

        if(!isCache){
            Laya.Animation.createFrames(['pic/zidan.png'],this.name);
        }
        this.body = new Laya.Animation();
        this.body.size(30,30);
        this.body.interval = 300;
        this.addChild(this.body);
        this.playAction(this.name);

    };

    _proto.playAction = function(action){
        this.body.play(0,true,action);
    }



    return CreateJineng;
})(Laya.Sprite);

















