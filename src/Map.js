
var CreateMap = (function(_TiledMap,_Rectangle,_Handler,_Browser,_MapLayer){
    function CreateMap(fn){
        CreateMap.super(this);
        this.mapcallback = fn;
        this.buildArr = [];
        this.init();
    };
    Laya.class(CreateMap,'CreateMap',_TiledMap);

    var _proto = CreateMap.prototype;

    _proto.init = function(){
        var self = this,
            stage = Laya.stage;
        
        //创建地图对象
        this.tiledMap = new Laya.TiledMap();
        //this.tiledMap.scale = 2;
        //创建地图，适当的时候调用destory销毁地图
        this.tiledMap.createMap("pic/map.json", new _Rectangle(0, 0, _Browser.width, _Browser.height), Laya.Handler.create(this, this.mapcallback));

        this.mX = this.mY = 0;
        this.mLastMouseX = this.mLastMouseY = 0;

        //地图视口
        this.tiledMap.changeViewPort(this.mX, this.mY, _Browser.width, _Browser.height);

        //this.mapBox = this.tiledMap.mapSprite();
        //this.mapBox.pos(this.mX,this.mY);
        //stage.addChild(this.mapBox);

        



        //set
        self.setScale(0,0);

        //设置缩放
        stage.on(Event.RESIZE, this, this.resize);
        
        //拖拽地图
        stage.on(Event.MOUSE_DOWN, this, function(event){
            self.mLastMouseX = stage.mouseX;
            self.mLastMouseY = stage.mouseY;
            //拖动
            stage.on(Event.MOUSE_MOVE, this, self.mouseMove);
        });

        stage.on(Event.MOUSE_UP, this, function(){
            var mouseX = stage.mouseX,
                mouseY = stage.mouseY;
            //检测是否点击
            if(self.mLastMouseX == mouseX && self.mLastMouseY == mouseY){
                self.isclick = true;
            }else{
                self.isclick = false;
            };
            
            //设置鼠标抬起得坐标
            self.mX = self.mX - (mouseX - self.mLastMouseX);
            self.mY = self.mY - (mouseY - self.mLastMouseY);
            //停止拖动
            stage.off(Event.MOUSE_MOVE, this, self.mouseMove);
        });

        //点击地图
        //stage.on(Event.CLICK, this, self.onClick);

        
        

    };

    //点击地图
    // _proto.onClick = function(e){
        
    //     console.log(e);
    //     //this.mX = this.mY = this.mLastMouseX = this.mLastMouseY = 0;
    //     var self = this;
    //     if(this.isclick){
    //         var tiledMap = this.tiledMap;
    //         var thisMapLayer = tiledMap.getLayerByIndex(0);
    //         var p = new Laya.Point(0, 0);

    //         thisMapLayer.getTilePositionByScreenPos(Laya.stage.mouseX, Laya.stage.mouseY, p);
    //         var thisPoint = {x:p.x,y:p.y};
    //         thisMapLayer.getScreenPositionByTilePos(Math.floor(p.x), Math.floor(p.y), p);

    //         //记载英雄
    //         Laya.loader.load("../bin/res/atlas/pic.atlas",Laya.Handler.create(this,function(){
    //             //创建Image实例
                
    //             var gridW = gridH = tiledMap.tileWidth;

    //             //var img = new Laya.Image();
    //             //设置皮肤（取图集中小图的方式就是 原小图目录名/原小图资源名.png）
    //             // img.skin = "pic/monkey2.png";
    //             // img.width = gridW;
    //             // img.height = gridH;
    //             // img.pos(Math.floor(thisPoint.x)*gridW,Math.floor(thisPoint.y)*gridH);// - (img.measureHeight-gridH)

    //             var build = new CreateBuild();
    //             build.pos(Math.floor(thisPoint.x)*gridW,Math.floor(thisPoint.y)*gridH);
    //             build.body.width = gridW;
    //             build.body.height = gridH;

    //             //console.log(build.body);
    //             //添加到舞台上显示
    //             self.MapBg.addChild(build);

    //             build.on("click", this, function(e){
    //                 e.stopPropagation();
                    
    //             });

                
    //             //self.mapBox.pos(22,222);
    //             //self.mapBox.addChild(img);
    //         }),null,Laya.Loader.ATLAS);


            
            
    //     };
        
   
    //};

    //地图移动
    _proto.mouseMove = function(){
        var mX = this.mX,
            mY = this.mY,
            mLastMouseX = this.mLastMouseX,
            mLastMouseY = this.mLastMouseY;
        //移动地图视口
        var x = mX - (Laya.stage.mouseX - mLastMouseX),
            y = mY - (Laya.stage.mouseY - mLastMouseY),
            maxX = this.tiledMap.width - _Browser.width,
            maxY = this.tiledMap.height - _Browser.height;
        //设置地图边界
        if(x<0){x=this.mX=0;};
        if(y<0){y=this.mY=0;};
        if(x>maxX){x=this.mX=maxX;};
        if(y>maxY){y=this.mY=maxY;};
        //移动视口
        this.tiledMap.moveViewPort(x,y);
        this.MapBg.pos(-x,-y);
    };

    

    //设置缩放中心点
    _proto.setScale = function(scaleX,scaleY){
        this.tiledMap.setViewPortPivotByScale(scaleX,scaleY);
    };

    //设置窗口自适应
    _proto.resize = function(){
        this.tiledMap.changeViewPort(this.mX, this.mY, _Browser.width, _Browser.height);
    };

    return CreateMap;

})(Laya.TiledMap,Laya.Rectangle,Laya.Handler,Laya.Browser,Laya.MapLayer);





