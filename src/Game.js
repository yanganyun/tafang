var Browser = Laya.Browser;
var Event = Laya.Event;




var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;    
//游戏入口
var Game = (function(){
    (function Game(){
        //初始化游戏
        Laya.init(Browser.width, Browser.height, Laya.WebGL);

        //地图回调
        Laya.Mapcallback = function(){

            var gameinfo = new GameInfo();
            Laya.stage.addChild(gameinfo);
            gameinfo.jifen(60000);

            setTimeout(function(){gameinfo.jifen(222220000);},1000)


        };//地图回调

        //创建地图
        var gameMap = new CreateMap();
        
        
        
        



    })();
})();
