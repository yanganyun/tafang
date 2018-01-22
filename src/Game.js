var Browser = Laya.Browser;
var WebGL = Laya.WebGL;
var Event = Laya.Event;
var Stage = Laya.Stage;
var Sprite = Laya.Sprite;
var Stat =  Laya.Stat;

var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;    
//游戏入口
var Game = (function(){
    (function Game(){
        //初始化游戏
        Laya.init(750, 1250,WebGL);
        //Laya.init(Browser.width, Browser.height,WebGL);
        Stat.show();
        //设置适配模式
        //Laya.stage.scaleMode = "showall";
        //Laya.stage.scaleMode = 'fixedwidth';
        //设置横竖屏
        //Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
        //设置水平对齐
        Laya.stage.alignH = "top";
        //设置垂直对齐
        Laya.stage.alignV = "left";
        //Laya.setScreenSize
        //Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        //Laya.init(550, 400, WebGL);
        //Laya.stage.alignV = 'middle';
		// Laya.stage.alignH = Stage.ALIGN_CENTER;
        // Laya.stage.scaleMode = Stage.SCALE_FIXED_HEIGHT;

        //Laya.stage.scaleMode = 'full';
        
        //按宽度缩放
        Laya.stage.scaleMode = 'fixedwidth';
        

        //实例化一个容器
        var bgAll = new Laya.Image();
        Laya.stage.addChild(bgAll);


        //创建地图和默认信息
        var gameMap = new CreateMap(function(){
            var self = this;

            
            //添加建筑层
            self.MapBg = new Laya.Sprite();
            self.MapBg.pos(self.mX,self.mY);
            self.MapBg.name = 'MapBg';
            self.MapBg.size(self.tiledMap.width, self.tiledMap.height);
            Laya.stage.addChild(self.MapBg); 
            
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


            

            //加载图集英雄
            Laya.loader.load("../bin/res/atlas/pic.atlas",Laya.Handler.create(this,function(){
                //创建Image实例
                Laya.stage.on(Event.CLICK, this,function(e){


                    if(this.isclick){

                        var tiledMap = self.tiledMap;
                        var thisMapLayer = tiledMap.getLayerByIndex(0);
                        var p = new Laya.Point(0, 0);

                        //获取对应格子
                        thisMapLayer.getTilePositionByScreenPos(Laya.stage.mouseX, Laya.stage.mouseY, p);
                        var thisPoint = {x:Math.floor(p.x),y:Math.floor(p.y)};
                        if(thisMapLayer.getTileData(thisPoint.x,thisPoint.y)==1){
                            var hasBuild = false;
                            for(var i=0;i<self.buildArr.length;i++){
                                var thisArr = self.buildArr[i];
                                if(thisPoint.x+'_'+thisPoint.y == thisArr){
                                    hasBuild = true;
                                    return false;
                                }
                            }
                            //记录创建建筑得格子
                            self.buildArr.push(thisPoint.x+'_'+thisPoint.y);

                            //thisMapLayer.getScreenPositionByTilePos(thisPoint.x, thisPoint.y, p);
                            //格子宽高
                            var gridW = gridH = tiledMap.tileWidth;


                            //添加建筑
                            var build = new CreateBuild();
                            build.name = '夏侯惇';
                            build.init('player1','夏侯惇',100,500,200,1);
                            build.pos(thisPoint.x*gridW,thisPoint.y*gridH);
                            build.width = gridW;
                            build.height = gridH;

                            //添加到舞台上显示
                            self.MapBg.addChild(build);

                            
                            
                        }

                    }
                    

                });
            }),null,Laya.Loader.ATLAS);


        });
        //地图回调
        
        //console.log(gameMap);
        
         
        
        
        

        
        

    })();
})();
