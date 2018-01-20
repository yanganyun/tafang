
(function(_Sprite){
    function CreateBuild(){
        CreateBuild.super(this);
        this.init();
    };

    Laya.class(CreateBuild,'CreateBuild',_Sprite);

    var _proto = CreateBuild.prototype;

    _proto.init = function(){
        this.name= '';
    }

    return CreateBuild;
})(Laya.Sprite);

















