
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
            //马超
            Laya.Animation.createFrames(['pic/zidan.png'],'马超_jineng1');
            Laya.Animation.createFrames(['pic/feng1.png','pic/feng2.png','pic/feng3.png'],'马超_jineng2');
            //诸葛亮
            Laya.Animation.createFrames(['pic/zidan2.png'],'诸葛亮_jineng1');
            Laya.Animation.createFrames(['pic/bing1.png'],'诸葛亮_jineng2');
            //关羽
            Laya.Animation.createFrames(['pic/zidan3.png'],'关羽_jineng1');

            //赵云
            Laya.Animation.createFrames(['pic/zidan6.png'],'赵云_jineng1');
            Laya.Animation.createFrames(['pic/longjuan.png'],'赵云_jineng2');

            //刘备
            Laya.Animation.createFrames(['pic/zidan4.png'],'刘备_jineng1');




            //典韦
            Laya.Animation.createFrames(['pic/zidan5.png'],'典韦_jineng1');
            //曹仁
            Laya.Animation.createFrames(['pic/zidan.png'],'曹仁_jineng1');
            Laya.Animation.createFrames(['pic/huoquan1.png','pic/huoquan2.png','pic/huoquan3.png'],'曹仁_jineng2');
            //郭嘉
            Laya.Animation.createFrames(['pic/zidan.png'],'郭嘉_jineng1');
            Laya.Animation.createFrames(['pic/huo1_1.png','pic/huo1_2.png','pic/huo1_3.png'],'郭嘉_jineng2');
            //张辽
            Laya.Animation.createFrames(['pic/zidan3.png'],'张辽_jineng1');
            Laya.Animation.createFrames(['pic/shuijuan.png'],'张辽_jineng2');

            //夏侯惇
            Laya.Animation.createFrames(['pic/zidan6.png'],'夏侯惇_jineng1');
            Laya.Animation.createFrames(['pic/longjuan.png'],'夏侯惇_jineng2');

            //曹操
            Laya.Animation.createFrames(['pic/zidan4.png'],'曹操_jineng1');
            

            
        }
        //初始化技能动画
        this.body = new Laya.Animation();
        this.body.interval = 200;
        
        //技能的宽高范围
        if(/张飞/.test(this.name)){
            this.body.size(20,20);
            this.radius = 10;
            this.width = 20;
            this.height = 20;
        }else if(/马超/.test(this.name)){
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
                this.body.size(80,72);
                this.radius = 40;
                this.width = 80;
                this.height = 72;
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
        }else if(/赵云/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(110,124);
                this.radius = 350;
                this.width = 600;
                this.height = 600;
            }
        }else if(/刘备/.test(this.name)){
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
        };
        


        //魏国
        //技能的宽高范围
        if(/典韦/.test(this.name)){
            this.body.size(20,20);
            this.radius = 10;
            this.width = 20;
            this.height = 20;
        }else if(/曹仁/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.interval = 100;
                this.body.size(120,120);
                this.radius = 80;
                this.width = 120;
                this.height = 120;
            }
        }else if(/郭嘉/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(150,150);
                this.radius = 60;
                this.width = 150;
                this.height = 150;
            }
        }else if(/张辽/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(576,576);
                this.radius = 300;
                this.width = 576;
                this.height = 576;
            }
        }else if(/夏侯惇/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(110,124);
                this.radius = 350;
                this.width = 600;
                this.height = 600;
            }
        }else if(/曹操/.test(this.name)){
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
        };
        
        //多少毫秒播放一帧
        
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

















