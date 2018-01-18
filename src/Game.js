var Browser = Laya.Browser;
var WebGL = Laya.WebGL;
var Event = Laya.Event;
var Stage = Laya.Stage;

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
        
        //地图回调
        Laya.Mapcallback = function(){

            var gameinfo = new GameInfo();
            Laya.stage.addChild(gameinfo);

            //初始化积分
            gameinfo.jifen(60000);
            gameinfo.jifen(56000,2);

            //初始化资源
            gameinfo.jinbi(3000);
            gameinfo.mucai(20);
            gameinfo.renkou(30);

            //
            
            
        };//地图回调

        //创建地图
        var gameMap = new CreateMap();
        
        

    })();
})();
