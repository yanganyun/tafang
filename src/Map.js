
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
        this.tiledMap.createMap("pic/map.json", new _Rectangle(0, 0, 750, 1250), Laya.Handler.create(this, this.mapcallback));

        this.mX = this.mY = 0;
        this.mLastMouseX = this.mLastMouseY = 0;

        //地图视口
        this.tiledMap.changeViewPort(this.mX, this.mY, 750, 1250);

        //set
        self.setScale(0,0);

        //设置缩放
        stage.on(Event.RESIZE, this, this.resize);
        
        //拖拽地图
        stage.on(Event.MOUSE_DOWN, this, self.mouseDown);

        stage.on(Event.MOUSE_UP, this, self.mouseUp);

        //点击地图
        //stage.on(Event.CLICK, this, self.onClick);


    };

    _proto.mouseDown = function(event){
        var eName = event.target.name;
        var self = this;
        var stage = Laya.stage,
            mouseX = stage.mouseX,
            mouseY = stage.mouseY;
        
        if(eName=='' || eName == 'MapBg'){
            self.mLastMouseX = mouseX;
            self.mLastMouseY = mouseY;
            stage.on(Event.MOUSE_MOVE, this, self.mouseMove);
        }else{
            self.isclick = true;
        };
        
        this.mouseDownName = eName;
        self.clickX = mouseX;
        self.clickY = mouseY;
    }

    _proto.mouseUp = function(event){
        var eName = event.target.name;
        
        var self = this,
            stage = Laya.stage;
        var mouseX = stage.mouseX,
            mouseY = stage.mouseY;
        //检测是否点击
        if(Math.abs(self.clickX-mouseX) <= 10 && Math.abs(self.clickY-mouseY) <= 10 ){
            self.isclick = true;
        }else{
            
            self.isclick = false;
            if(eName=='MapBg' && this.mouseDownName!='MapBg' || eName!='' && eName!='MapBg' && this.mouseDownName!='MapBg'){
                return;
            }
            //设置鼠标抬起得坐标
            self.mX = self.mX - (mouseX - self.mLastMouseX);
            self.mY = self.mY - (mouseY - self.mLastMouseY);
        };
        //停止拖动
        stage.off(Event.MOUSE_MOVE, this, self.mouseMove);
    }


    //地图移动
    _proto.mouseMove = function(){
        var mX = this.mX,
            mY = this.mY,
            mLastMouseX = this.mLastMouseX,
            mLastMouseY = this.mLastMouseY;
        //移动地图视口
        var x = mX - (Laya.stage.mouseX - mLastMouseX),
            y = mY - (Laya.stage.mouseY - mLastMouseY),
            maxX = this.tiledMap.width - 750,
            maxY = this.tiledMap.height - 1250; //-90
        
        //设置地图边界
        if(x<0){x=this.mX=0;};
        if(y<0){y=this.mY=0;};
        if(x>maxX){x=this.mX=maxX;};
        if(y>maxY){y=this.mY=maxY;};
        //移动视口
        this.tiledMap.moveViewPort(x,y);
        this.MapBg.pos(-x,-y);
        tafang.guaiBox.pos(-x,-y);
        //隐藏列表
        tafang.gameinfo.change_build.visible = false;
        this.change_rect.graphics.clear();
        //隐藏信息
        dialog_box.style.display = 'none';
    };

    
    //初始化位置
    _proto.setPos = function(x,y){
        this.mX = x;
        this.mY = y;
        this.tiledMap.moveViewPort(x,y);
        this.MapBg.pos(-x,y);
        tafang.guaiBox.pos(-x,y);
    };
                

    //设置缩放中心点
    _proto.setScale = function(scaleX,scaleY){
        this.tiledMap.setViewPortPivotByScale(scaleX,scaleY);
    };

    //设置窗口自适应
    _proto.resize = function(){
        this.tiledMap.changeViewPort(this.mX, this.mY, 750, 1250);
    };
    

    return CreateMap;

})(Laya.TiledMap,Laya.Rectangle,Laya.Handler,Laya.Browser,Laya.MapLayer);





