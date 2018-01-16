var Sprite  = Laya.Sprite;
var Stage   = Laya.Stage;
var Event     = Laya.Event;
var TiledMap  = Laya.TiledMap;
var Rectangle = Laya.Rectangle;
var Stat      = Laya.Stat;

var Texture = Laya.Texture;
var Browser = Laya.Browser;
var Handler = Laya.Handler;
var WebGL   = Laya.WebGL;
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;

//触摸的位置
var mX = 0;
var mY = 0;
//最后触摸的位置
var mLastMouseX = 0;
var mLastMouseY = 0;

var fzTower = {
    init:function(){
        // 不支持WebGL时自动切换至Canvas
        Laya.init(winW, winH, WebGL);

        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;

        Laya.stage.scaleMode = "showall";
        //Laya.stage.bgColor = "#999";


        //地图操作
        this.mapAll();
    },
    mapAll:function(){
        //创建地图
        this.createMap();
        //拖拽地图
        Laya.stage.on(Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.on(Event.MOUSE_UP, this, this.mouseUp);
    },
    createMap:function(){
        
        //创建地图对象
        tiledMap = new TiledMap();
        mX = mY = 0;
        //创建地图，适当的时候调用destory销毁地图
        tiledMap.createMap("../bin/data/desert.json", new Rectangle(0, 0, winW, winH), new Handler(this, this.completeHandler));

    },

    /**
     * 地图加载完成的回调
     */
    completeHandler:function(){
        Laya.stage.on(Event.RESIZE, this, this.resize);
        this.resize();
        //地图加载完毕后，加载默认地图小精灵
        this.initFairy();
    },
    mouseDown:function(){
        mLastMouseX = Laya.stage.mouseX;
        mLastMouseY = Laya.stage.mouseY;
        Laya.stage.on(Event.MOUSE_MOVE, this, this.mouseMove);
    },
    mouseUp:function(){
        mX = mX - (Laya.stage.mouseX - mLastMouseX);
        mY = mY - (Laya.stage.mouseY - mLastMouseY);
        Laya.stage.off(Event.MOUSE_MOVE, this, this.mouseMove);
    },
    mouseMove:function(){
        //移动地图视口
        var x = mX - (Laya.stage.mouseX - mLastMouseX),
            y = mY - (Laya.stage.mouseY - mLastMouseY),
            maxX = tiledMap.width - winW,
            maxY = tiledMap.height - winH;
        //设置地图边界
        if(x<0){x=mX=0;};
        if(y<0){y=mY=0;};
        if(x>maxX){x=mX=maxX;};
        if(y>maxY){y=mY=maxY;}
        //移动视口
        tiledMap.moveViewPort(x,y);
    },
    resize:function(){
        //改变地图视口大小
        tiledMap.changeViewPort(mX, mY, Browser.width, Browser.height);
    },
    // 地图加载完毕后渲染小精灵
    initFairy:function(){
        function createApes(){
            // 每只猩猩距离中心点150像素
            var layoutRadius = 10;
            var radianUnit = Math.PI / 2;

            apesCtn = new Sprite();
            Laya.stage.addChild(apesCtn);

            // 添加4张猩猩图片
            for (var i = 0; i < 4; i++)
            {
                var ape = new Sprite();
                ape.loadImage("../bin/img/yingxiong/monkey" + i + ".png",0,0,40,45);

                ape.pivot(20, 22);

                // 以圆周排列猩猩
                ape.pos(
                    Math.cos(radianUnit * i) * layoutRadius,
                    Math.sin(radianUnit * i) * layoutRadius);

                apesCtn.addChild(ape);
            }

            apesCtn.pos(Laya.stage.width / 2, Laya.stage.height / 2);

            Laya.timer.frameLoop(1, this, animate);
        }

        function animate(e){
            apesCtn.rotation += 1;
        }

        createApes();
    }
};



fzTower.init();

// (function(){


    
    

//     //显示渲染参数
//     //Stat.show();

//     //创建地图
//     createMap();

//     //拖拽地图
//     Laya.stage.on(Event.MOUSE_DOWN, this, mouseDown);
//     Laya.stage.on(Event.MOUSE_UP, this, mouseUp);


    

//     function createApes(){
// 		// 每只猩猩距离中心点150像素
// 		var layoutRadius = 150;
// 		var radianUnit = Math.PI / 2;

// 		apesCtn = new Sprite();
// 		Laya.stage.addChild(apesCtn);

// 		// 添加4张猩猩图片
// 		for (var i = 0; i < 4; i++)
// 		{
// 			var ape = new Sprite();
// 			ape.loadImage("../bin/img/yingxiong/monkey" + i + ".png");

// 			ape.pivot(55, 72);

// 			// 以圆周排列猩猩
// 			ape.pos(
// 				Math.cos(radianUnit * i) * layoutRadius,
// 				Math.sin(radianUnit * i) * layoutRadius);

// 			apesCtn.addChild(ape);
// 		}

// 		apesCtn.pos(Laya.stage.width / 2, Laya.stage.height / 2);

// 		Laya.timer.frameLoop(1, this, animate);
// 	}

// 	function animate(e){
// 		apesCtn.rotation += 1;
// 	}

//     createApes();
// })();