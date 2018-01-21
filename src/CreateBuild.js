
(function(_Sprite){
    function CreateBuild(){
        CreateBuild.super(this);
        
        //this.init();
    };

    Laya.class(CreateBuild,'CreateBuild',_Sprite);

    var _proto = CreateBuild.prototype;

    _proto.init = function(camp,name,attack,range,speed,lv){

        this.camp = camp;
        this.name = name;
        this.attack = attack;
        this.range = range;
        this.speed = speed;
        this.lv = lv;


        Laya.Animation.createFrames(['pic/xhd1.png','pic/xhd2.png','pic/xhd3.png'],this.name);

        this.body = new Laya.Animation();
        this.body.size(100,100);
        this.body.interval = 300;
        this.addChild(this.body);
        this.playAction(this.name);

        this.on(Event.CLICK, this);
    };

    _proto.playAction = function(action){
        this.body.play(0,true,action);
    }

    _proto.gongji = function(action){
        
    }



    return CreateBuild;
})(Laya.Sprite);

















