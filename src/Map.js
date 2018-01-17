
var CreateMap = (function(_TiledMap,_Rectangle,_Handler,_Browser){
    function CreateMap(){
        CreateMap.super(this);
        this.init();
    };
    Laya.class(CreateMap,'CreateMap',_TiledMap);

    var _proto = CreateMap.prototype;

    _proto.init = function(){
        var self = this;
        //创建地图对象
        this.tiledMap = new Laya.TiledMap();

        //创建地图，适当的时候调用destory销毁地图
        this.tiledMap.createMap("pic/map.json", new _Rectangle(0, 0, Browser.width, Browser.height), new _Handler(this, Laya.Mapcallback));

        this.mX = this.mY = 0;
        this.mLastMouseX = this.mLastMouseY = 0;

        Laya.stage.on(Event.RESIZE, this, this.resize);
        
        //拖拽地图
        Laya.stage.on(Event.MOUSE_DOWN, this, function(){
            self.mLastMouseX = Laya.stage.mouseX;
            self.mLastMouseY = Laya.stage.mouseY;
            
            //拖动
            Laya.stage.on(Event.MOUSE_MOVE, this, self.mouseMove);
        });
        Laya.stage.on(Event.MOUSE_UP, this, function(){
            self.mX = self.mX - (Laya.stage.mouseX - self.mLastMouseX);
            self.mY = self.mY - (Laya.stage.mouseY - self.mLastMouseY);
            //停止拖动
            Laya.stage.off(Event.MOUSE_MOVE, this, self.mouseMove);
        });

        //地图视口
        this.tiledMap.changeViewPort(this.mX, this.mY, _Browser.width, _Browser.height);

        //set
        self.setScale(0.5,0.5);

    };


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
        if(y>maxY){y=this.mY=maxY;}
        //移动视口
        this.tiledMap.moveViewPort(x,y);
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

})(Laya.TiledMap,Laya.Rectangle,Laya.Handler,Laya.Browser);





