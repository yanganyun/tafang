var Browser = Laya.Browser;
var WebGL = Laya.WebGL;
var Event = Laya.Event;
var Stage = Laya.Stage;
var Sprite = Laya.Sprite;
var Stat =  Laya.Stat;

var playNumber = 0;
//开始游戏
var tafang = (function(_Laya){

    function startGame(){
        //游戏属性
        this.jidiHp = 10;
        //开始游戏
        this.init();
    };
    
    var _proto = startGame.prototype;
    _proto.constructor = startGame;

    _proto.init = function(){
        
        //初始化游戏
        Laya.init(750, 1250,WebGL);
        //Stat.show();
        //设置水平对齐
        Laya.stage.alignH = "top";
        //设置垂直对齐
        Laya.stage.alignV = "left";
        //按宽度缩放
        Laya.stage.scaleMode = 'fixedwidth';



        //创建地图
        this.gameMapInit();

        //初始化资源和积分
        this.gameinfo = new GameInfo();

        //添加怪物容器
        this.guaiBox = new Laya.Sprite();

        

    };
    //播放动画
    _proto.gameMapInit = function(){
        var gameSelf = this;
        //创建地图和默认信息
        this.gameMap = new CreateMap(function(){
            var self = this;
            //加载图集英雄
            Laya.loader.load("../bin/res/atlas/pic.atlas",Laya.Handler.create(this,function(){
                //添加怪物容器
                gameSelf.guaiBox.pos(0,0);
                gameSelf.guaiBox.name = 'guaiBox';
                gameSelf.guaiBox.size(self.tiledMap.width, self.tiledMap.height);
                Laya.stage.addChild(gameSelf.guaiBox);
                //开始刷怪
                gameSelf.startGuai();

                //添加建筑层
                self.MapBg = new Laya.Sprite();
                self.MapBg.pos(0,0);
                self.MapBg.name = 'MapBg';
                self.MapBg.size(self.tiledMap.width, self.tiledMap.height);
                Laya.stage.addChild(self.MapBg);
                
                
                Laya.stage.addChild(gameSelf.gameinfo);

                //初始化积分
                gameSelf.gameinfo.jifen(60000);
                gameSelf.gameinfo.jifen(56000,2);

                //初始化资源
                gameSelf.gameinfo.jinbi(3000);
                gameSelf.gameinfo.mucai(20);
                gameSelf.gameinfo.renkou(30);
                


                //创建Image实例
                self.MapBg.on("click", this,gameSelf.onClick);
            }),null,Laya.Loader.ATLAS);


        });
    };

    _proto.onClick = function(e){
        var self = this;
        if(self.isclick){
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
                //console.log(thisPoint.y*gridW+20)
                
                
            }

        }
        

    };

    _proto.startGuai = function(){
        var gameSelf = this;
        //添加怪物
        var guai = new CreateGuai();
        Laya.timer.loop(500, this, function(){
            var thisGuai = Laya.Pool.getItemByClass('CreateGuai',CreateGuai);
            thisGuai.name = '夏侯惇';
            thisGuai.init('guaiwu_player1','guai1',3000,5); //阵营，名字，血量，移动速度
            thisGuai.pos(-50,500);
            //添加到舞台上显示
            gameSelf.guaiBox.addChild(thisGuai);
        });

        //移动地图上的怪物
        var self = this;
        Laya.timer.frameLoop(2,this,this.guaiRun);
    };

     _proto.guaiRun = function(){
        //循环建筑里的所有技能和子弹
        var guaiBox = this.guaiBox;
        for(var i=0;i<guaiBox.numChildren;i++){
            var guai = guaiBox.getChildAt(i);
            
            if(guai && guai.camp=='guaiwu_player1'){
                //移动玩家1的怪物
                if(guai.x>=3020){
                    guai.y += guai.run;
                }else{
                    guai.x += guai.run;
                };
                //怪物通过，游戏生命减少
                if(guai.y>=2000){
                    //移除
                    guai.removeSelf();
                    //隐藏
                    guai.visible = false;
                    //回收动画
                    Laya.Pool.recover('guai',guai);
                    //设置游戏生命
                    if(this.jidiHp<=0){
                        //关闭所有定时器
                        Laya.timer.clearAll(this);
                        //游戏结束
                        this.gameOver();
                        
                        
                    }else{
                        this.jidiHp--;
                        this.gameinfo.jidiHp(this.jidiHp);
                        console.log('出逃一个怪物，基地生命剩余'+this.jidiHp);
                    }
                    
                }
            
            }else if(guai && guai.camp=='guaiwu_player2'){
                //移动玩家2的怪物
                if(guai.x<=920){
                    guai.y -= guai.run;
                }else{
                    guai.x -= guai.run;
                }
            }
        }
     };


    _proto.gameOver = function(){
        var self = this;

        var txt = new Laya.Text();
        //给文本的text属性赋值
        txt.text = "游戏结束，继续努力吧！";
        //设置宽度，高度自动匹配
        txt.width = 600;
        //自动换行
        txt.wordWrap = true;

        txt.align = "center";
        txt.fontSize = 50;
        txt.font = "Microsoft YaHei";
        txt.color = "#ff0000";
        txt.bold = true;
        txt.leading = 5;
        //设置描边属性
        txt.stroke = 5;
        txt.strokeColor = "#ffffff";
        txt.x = (Laya.stage.width - txt.textWidth) / 2;
        txt.y = (Laya.stage.height - txt.textHeight) / 2;
        Laya.stage.addChild(txt);


        //移除所有事件
        Laya.stage.off(Event.MOUSE_UP, this.gameMap,this.gameMap.mouseUp);
        Laya.stage.off(Event.MOUSE_DOWN, this.gameMap, this.gameMap.mouseDown);
        this.gameMap.MapBg.on("click", this,this.onClick);
        
        txt.on("click", this,function(e){
            txt.removeSelf();
            
            //删除地图
            self.gameMap.tiledMap.destroy();
            
            //重新开始
            tafang = new startGame();
            //重玩次数
            playNumber++;
        });

        
        

        //清理怪物层
        this.guaiBox.removeSelf();
        //清理建筑层
        this.gameMap.MapBg.removeChildren();
        this.gameMap.MapBg.destroy(true);

        

    };

    return new startGame();
})(Laya);

















