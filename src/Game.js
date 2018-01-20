var Browser = Laya.Browser;
var WebGL = Laya.WebGL;
var Event = Laya.Event;
var Stage = Laya.Stage;
var Sprite = Laya.Sprite;

var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;    
//游戏入口
var Game = (function(){
    (function Game(){
        //初始化游戏
        Laya.init(Browser.width, Browser.height,WebGL);

        //设置适配模式
        Laya.stage.scaleMode = "showall";
        //设置横竖屏
        //Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
        //设置水平对齐
        Laya.stage.alignH = "center";
        //设置垂直对齐
        Laya.stage.alignV = "middle";
        //Laya.setScreenSize
        //Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        //Laya.init(550, 400, WebGL);
        //Laya.stage.alignV = 'middle';
		// Laya.stage.alignH = Stage.ALIGN_CENTER;
        // Laya.stage.scaleMode = Stage.SCALE_FIXED_HEIGHT;

        //Laya.stage.scaleMode = 'full';
        
        //按宽度缩放
        Laya.stage.scaleMode = 'fixedheight';
        

        //实例化一个容器
        var bgAll = new Laya.Image();
        Laya.stage.addChild(bgAll);


        //创建地图和默认信息
        var gameMap = new CreateMap(function(){

            this.MapBg = new Laya.Sprite();
            this.MapBg.pos(this.mX,this.mY);
            Laya.stage.addChild(this.MapBg);   
            
            //初始化资源和积分
            var gameinfo = new GameInfo();
            Laya.stage.addChild(gameinfo);

            //初始化积分
            gameinfo.jifen(60000);
            gameinfo.jifen(56000,2);

            //初始化资源
            gameinfo.jinbi(3000);
            gameinfo.mucai(20);
            gameinfo.renkou(30);


            // var img2 = new Laya.Sprite();                  
            //     //加载显示图片，坐标位于100,50
            // img2.loadImage("pic/monkey2.png",100,50); 
            // this.mapBox.addChild(img2);


            //var player = new Sprite();
            // Laya.loader.load("../bin/res/atlas/pic.atlas",Laya.Handler.create(this,onLoaded));
            // function onLoaded(){
            //     //创建Image实例
            //     var img = new Laya.Image();
            //     //设置皮肤（取图集中小图的方式就是 原小图目录名/原小图资源名.png）
            //     img.skin = "pic/monkey2.png";
            //     //console.log(img);
            //     img.x = 300;
            //     img.y = 400;
            //     //添加到舞台上显示
            //     this.mapBox.addChild(img);
            //     //Laya.stage.addChild(img);
            // }
        });
        //地图回调
        
        //console.log(gameMap);
        
         
        
        
        

        
        

    })();
})();
