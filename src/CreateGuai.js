
(function(_Sprite){
    function CreateGuai(){
        CreateGuai.super(this);
        
        //this.init();
    };

    Laya.class(CreateGuai,'CreateGuai',_Sprite);
    var isCache = false;
    var _proto = CreateGuai.prototype;
    _proto.init = function(camp,name,hp,run){

        //建筑阵营归属
        this.camp = camp;
        //怪物的名字
        this.name = name;
        //血量
        this.hp = hp;
        //移动间隔
        this.run = run;
        
        

        //缓存所有动画
        if(!isCache){
            Laya.Animation.createFrames(['pic/guai1.png'],'guai1');
        }
        
        //添加建筑动画
        this.body = new Laya.Animation();
        this.body.size(50,80);
        this.body.interval = 300;
        this.addChild(this.body);
        this.playAction(this.name);


    };
    //播放动画
    _proto.playAction = function(action){
        this.body.play(0,true,action);
    }



    return CreateGuai;
})(Laya.Sprite);

















