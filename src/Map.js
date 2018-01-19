
var CreateMap = (function(_TiledMap,_Rectangle,_Handler,_Browser,_MapLayer){
    function CreateMap(){
        CreateMap.super(this);
        this.init();
    };
    Laya.class(CreateMap,'CreateMap',_TiledMap);

    var _proto = CreateMap.prototype;

    _proto.init = function(){
        var self = this;
        //this.scaleSize = 0.5;
        //创建地图对象
        this.tiledMap = new Laya.TiledMap();
        //this.tiledMap.scale = 1;
        //创建地图，适当的时候调用destory销毁地图
        this.tiledMap.createMap("pic/map.json", new _Rectangle(0, 0, _Browser.width, _Browser.height), Laya.Handler.create(this, Laya.Mapcallback));
        
        this.mX = this.mY = 0;
        this.mLastMouseX = this.mLastMouseY = 0;

        //设置缩放
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

        //点击地图
        Laya.stage.on(Event.CLICK, this, self.onClick);

        //地图视口
        this.tiledMap.changeViewPort(this.mX, this.mY, _Browser.width, _Browser.height);

        //set
        self.setScale(0,0);
        

    };
    //点击地图
    _proto.onClick = function(e){
        
        var tiledMap = this.tiledMap;
        var thisMapLayer = tiledMap.getLayerByName('map_bg');

        var mapX = -tiledMap.x+e.stageX,
            mapY = -tiledMap.y+e.stageY;
        console.log(mapX)
        // var MapLayer = new Laya.MapLayer();
        //var aaa = thisMapLayer.getTilePositionByScreenPos(e.stageX,e.stageY);
        var tex = new Laya.TileTexSet();
        	
        tex.addAniSprite('test');
        console.log(tiledMap.getLayerByIndex(0).getTileData(e.stageX,e.stageY));
        //tiledMap.
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

})(Laya.TiledMap,Laya.Rectangle,Laya.Handler,Laya.Browser,Laya.MapLayer);





