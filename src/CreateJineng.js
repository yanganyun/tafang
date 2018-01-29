
(function(_Sprite){
    function CreateJineng(){
        CreateJineng.super(this);
        
        //this.init();
    };

    Laya.class(CreateJineng,'CreateJineng',_Sprite);

    var _proto = CreateJineng.prototype;
    var isCache = false;
    _proto.init = function(name,speed,attack,time){
        var self = this;
        this.name = name; //名
        this.speed = speed; //速度
        this.attack = attack; //攻击力
        

        if(!isCache){
            //张飞
            Laya.Animation.createFrames(['pic/zidan5.png'],'张飞_jineng1');
            //夏侯惇
            Laya.Animation.createFrames(['pic/zidan.png'],'夏侯惇_jineng1');
            Laya.Animation.createFrames(['pic/feng1.png','pic/feng2.png','pic/feng3.png'],'夏侯惇_jineng2');
            //诸葛亮
            Laya.Animation.createFrames(['pic/zidan2.png'],'诸葛亮_jineng1');
            Laya.Animation.createFrames(['pic/bing1_1.png','pic/bing1_3.png'],'诸葛亮_jineng2');
            //关羽
            Laya.Animation.createFrames(['pic/zidan2.png'],'关羽_jineng1');
            Laya.Animation.createFrames(['pic/bing1_1.png','pic/bing1_3.png'],'关羽_jineng2');
            

            
        }
        //初始化技能动画
        this.body = new Laya.Animation();
        //技能的宽高范围
        if(/张飞/.test(this.name)){
            this.body.size(20,20);
            this.radius = 10;
            this.width = 20;
            this.height = 20;
        }else if(/夏侯惇/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(110,124);
                this.radius = 70;
                this.width = 110;
                this.height = 124;
            }
        }else if(/诸葛亮/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(110,124);
                this.radius = 20;
                this.width = 40;
                this.height = 80;
            }
        }else if(/关羽/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(110,124);
                this.radius = 20;
                this.width = 40;
                this.height = 80;
            }
        }
        
        
        //多少毫秒播放一帧
        this.body.interval = 300;
        this.addChild(this.body);
        this.playAction(this.name);

        if(time){
            setTimeout(function(){
                self.removeSelf();
                self.visible = false;
                self.destroy(true);
            },time);
        }
    };

    _proto.playAction = function(action){
        this.body.play(0,true,action);
    }



    return CreateJineng;
})(Laya.Sprite);

















