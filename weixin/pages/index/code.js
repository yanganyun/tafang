

//core.js
var common = require("laya.core.min.js");
var Laya = common.Laya;
//webgl.js
!function(t,e,i){i.un,i.uns;var r=i.static,s=i.class,n=i.getset,a=i.__newvec,h=laya.maths.Arith,l=laya.maths.Bezier,o=laya.resource.Bitmap,u=laya.utils.Browser,_=laya.utils.Byte,c=laya.utils.Color,f=(laya.filters.ColorFilter,i.Config),d=laya.resource.Context,m=(laya.events.Event,laya.filters.Filter),p=laya.display.Graphics,g=laya.resource.HTMLCanvas,v=(laya.utils.HTMLChar,laya.resource.HTMLImage),x=laya.resource.HTMLSubImage,b=(laya.utils.Handler,laya.net.Loader,laya.maths.Matrix),T=laya.maths.Point,y=laya.maths.Rectangle,A=laya.renders.Render,E=(laya.renders.RenderContext,laya.renders.RenderSprite),S=laya.resource.Resource,R=laya.resource.ResourceManager,w=laya.utils.RunDriver,I=laya.display.Sprite,M=laya.display.Stage,C=laya.utils.Stat,L=laya.utils.StringKey,P=(laya.display.css.Style,laya.system.System),F=laya.display.Text,D=laya.resource.Texture,B=(laya.display.css.TransformInfo,laya.net.URL,laya.utils.Utils),N=laya.utils.VectorGraphManager;laya.utils.WordText;i.interface("laya.webgl.shapes.IShape"),i.interface("laya.webgl.submit.ISubmit"),i.interface("laya.webgl.text.ICharSegment"),i.interface("laya.webgl.canvas.save.ISaveData"),i.interface("laya.webgl.resource.IMergeAtlasBitmap"),i.interface("laya.filters.IFilterActionGL","laya.filters.IFilterAction");var O=function(){function t(){}s(t,"laya.filters.webgl.FilterActionGL");var e=t.prototype;return i.imps(e,{"laya.filters.IFilterActionGL":!0}),e.setValue=function(t){},e.setValueMix=function(t){},e.apply3d=function(t,e,i,r,s){return null},e.apply=function(t){return null},n(0,e,"typeMix",function(){return 0}),t}(),V=function(){function t(){}return s(t,"laya.webgl.shader.ShaderValue"),t}(),U=function(){var t,e;function i(t,i,r){this._atlasID=0,this._width=0,this._height=0,this._texCount=0,this._rowInfo=null,this._cells=null,this._failSize=new e,void 0===t&&(t=0),void 0===i&&(i=0),void 0===r&&(r=0),this._cells=null,this._rowInfo=null,this._init(t,i),this._atlasID=r}s(i,"laya.webgl.atlas.AtlasGrid");var r=i.prototype;return r.getAltasID=function(){return this._atlasID},r.setAltasID=function(t){t>=0&&(this._atlasID=t)},r.addTex=function(t,e,i){var r=this._get(e,i);return 0==r.ret?r:(this._fill(r.x,r.y,e,i,t),this._texCount++,r)},r._release=function(){null!=this._cells&&(this._cells.length=0,this._cells=null),this._rowInfo&&(this._rowInfo.length=0,this._rowInfo=null)},r._init=function(e,i){if(this._width=e,this._height=i,this._release(),0==this._width)return!1;this._cells=new Uint8Array(this._width*this._height*3),this._rowInfo=a(this._height);for(var r=0;r<this._height;r++)this._rowInfo[r]=new t;return this._clear(),!0},r._get=function(t,e){var i=new H;if(t>=this._failSize.width&&e>=this._failSize.height)return i;for(var r=-1,s=-1,n=this._width,a=this._height,h=this._cells,l=0;l<a;l++)if(!(this._rowInfo[l].spaceCount<t))for(var o=0;o<n;){var u=3*(l*n+o);if(0!=h[u]||h[u+1]<t||h[u+2]<e)o+=h[u+1];else{r=o,s=l;for(var _=0;_<t;_++)if(h[3*_+u+2]<e){r=-1;break}if(!(r<0))return i.ret=!0,i.x=r,i.y=s,i;o+=h[u+1]}}return i},r._fill=function(t,e,i,r,s){var n=this._width,a=this._height;this._check(t+i<=n&&e+r<=a);for(var h=e;h<r+e;++h){this._check(this._rowInfo[h].spaceCount>=i),this._rowInfo[h].spaceCount-=i;for(var l=0;l<i;l++){var o=3*(t+h*n+l);this._check(0==this._cells[o]),this._cells[o]=s,this._cells[o+1]=i,this._cells[o+2]=r}}if(t>0)for(h=0;h<r;++h){var u=0;for(l=t-1;l>=0&&0==this._cells[3*((e+h)*n+l)];--l,++u);for(l=u;l>0;--l)this._cells[3*((e+h)*n+t-l)+1]=l,this._check(l>0)}if(e>0)for(l=t;l<t+i;++l){for(u=0,h=e-1;h>=0&&0==this._cells[3*(l+h*n)];--h,u++);for(h=u;h>0;--h)this._cells[3*(l+(e-h)*n)+2]=h,this._check(h>0)}},r._check=function(t){0==t&&console.log("xtexMerger 错误啦")},r._clear=function(){this._texCount=0;for(var t=0;t<this._height;t++)this._rowInfo[t].spaceCount=this._width;for(var e=0;e<this._height;e++)for(var i=0;i<this._width;i++){var r=3*(e*this._width+i);this._cells[r]=0,this._cells[r+1]=this._width-i,this._cells[r+2]=this._width-e}this._failSize.width=this._width+1,this._failSize.height=this._height+1},i.__init$=function(){t=function(){function t(){this.spaceCount=0}return s(t,""),t}(),e=function(){function t(){this.width=0,this.height=0}return s(t,""),t}()},i}(),k=function(){function t(t,e,i,r){this._currentAtlasCount=0,this._maxAtlaserCount=0,this._width=0,this._height=0,this._gridSize=0,this._gridNumX=0,this._gridNumY=0,this._init=!1,this._curAtlasIndex=0,this._setAtlasParam=!1,this._atlaserArray=null,this._needGC=!1,this._setAtlasParam=!0,this._width=t,this._height=e,this._gridSize=i,this._maxAtlaserCount=r,this._gridNumX=t/i,this._gridNumY=e/i,this._curAtlasIndex=0,this._atlaserArray=[]}s(t,"laya.webgl.atlas.AtlasResourceManager");var e=t.prototype;return e.setAtlasParam=function(e,i,r,s){if(1==this._setAtlasParam)return t._sid_=0,this._width=e,this._height=i,this._gridSize=r,this._maxAtlaserCount=s,this._gridNumX=e/r,this._gridNumY=i/r,this._curAtlasIndex=0,this.freeAll(),!0;throw console.log("设置大图合集参数错误，只能在开始页面设置各种参数"),-1},e.pushData=function(e){var i,r=e.bitmap,s=-1,n=null,a=0,h=0;for(a=0,i=this._atlaserArray.length;a<i&&(h=(this._curAtlasIndex+a)%i,-1==(s=(n=this._atlaserArray[h]).findBitmapIsExist(r)));a++);if(-1!=s){var l=n.InAtlasWebGLImagesOffsetValue[s];return m=l[0],p=l[1],n.addToAtlas(e,m,p),!0}this._setAtlasParam=!1;for(var o=Math.ceil((e.bitmap.width+2)/this._gridSize),u=Math.ceil((e.bitmap.height+2)/this._gridSize),_=!1,c=0;c<2;c++){var f=this._maxAtlaserCount;for(a=0;a<f;a++){h=(this._curAtlasIndex+a)%f,this._atlaserArray.length-1>=h||this._atlaserArray.push(new Rt(this._gridNumX,this._gridNumY,this._width,this._height,t._sid_++));var d=this._atlaserArray[h],m=0,p=0,g=d.addTex(1,o,u);if(g.ret){m=g.x*this._gridSize+1,p=g.y*this._gridSize+1,r.lock=!0,d.addToAtlasTexture(r,m,p),d.addToAtlas(e,m,p),_=!0,this._curAtlasIndex=h;break}}if(_)break;this._atlaserArray.push(new Rt(this._gridNumX,this._gridNumY,this._width,this._height,t._sid_++)),this._needGC=!0,this.garbageCollection(),this._curAtlasIndex=this._atlaserArray.length-1}return _||console.log(">>>AtlasManager pushData error"),_},e.addToAtlas=function(t){laya.webgl.atlas.AtlasResourceManager.instance.pushData(t)},e.garbageCollection=function(){if(!0===this._needGC){for(var t=this._atlaserArray.length-this._maxAtlaserCount,e=0;e<t;e++)this._atlaserArray[e].dispose(),console.log("AtlasResourceManager:Dispose the inner Atlas。");console.log(">>>>altas garbageCollection ="+t),this._atlaserArray.splice(0,t),this._needGC=!1}return!0},e.freeAll=function(){for(var t=0,e=this._atlaserArray.length;t<e;t++)this._atlaserArray[t].dispose();this._atlaserArray.length=0,this._curAtlasIndex=0},e.getAtlaserCount=function(){return this._atlaserArray.length},e.getAtlaserByIndex=function(t){return this._atlaserArray[t]},n(1,t,"instance",function(){return t._Instance||(t._Instance=new t(laya.webgl.atlas.AtlasResourceManager.atlasTextureWidth,laya.webgl.atlas.AtlasResourceManager.atlasTextureHeight,16,laya.webgl.atlas.AtlasResourceManager.maxTextureCount)),t._Instance}),n(1,t,"enabled",function(){return f.atlasEnable}),n(1,t,"atlasLimitWidth",function(){return t._atlasLimitWidth},function(e){t._atlasLimitWidth=e}),n(1,t,"atlasLimitHeight",function(){return t._atlasLimitHeight},function(e){t._atlasLimitHeight=e}),t._enable=function(){f.atlasEnable=!0},t._disable=function(){f.atlasEnable=!1},t.__init__=function(){t.atlasTextureWidth=2048,t.atlasTextureHeight=2048,t.maxTextureCount=6,t.atlasLimitWidth=512,t.atlasLimitHeight=512},t._atlasLimitWidth=0,t._atlasLimitHeight=0,t.gridSize=16,t.atlasTextureWidth=0,t.atlasTextureHeight=0,t.maxTextureCount=0,t._atlasRestore=0,t.BOARDER_TYPE_NO=0,t.BOARDER_TYPE_RIGHT=1,t.BOARDER_TYPE_LEFT=2,t.BOARDER_TYPE_BOTTOM=4,t.BOARDER_TYPE_TOP=8,t.BOARDER_TYPE_ALL=15,t._sid_=0,t._Instance=null,t}(),H=function(){function t(){this.x=0,this.y=0,this.ret=!1,this.ret=!1,this.x=0,this.y=0}return s(t,"laya.webgl.atlas.MergeFillInfo"),t}(),G=function(){function t(){}return s(t,"laya.webgl.canvas.BlendMode"),t._init_=function(e){t.fns=[t.BlendNormal,t.BlendAdd,t.BlendMultiply,t.BlendScreen,t.BlendOverlay,t.BlendLight,t.BlendMask,t.BlendDestinationOut],t.targetFns=[t.BlendNormalTarget,t.BlendAddTarget,t.BlendMultiplyTarget,t.BlendScreenTarget,t.BlendOverlayTarget,t.BlendLightTarget,t.BlendMask,t.BlendDestinationOut]},t.BlendNormal=function(t){t.blendFunc(1,771)},t.BlendAdd=function(t){t.blendFunc(1,772)},t.BlendMultiply=function(t){t.blendFunc(774,771)},t.BlendScreen=function(t){t.blendFunc(1,1)},t.BlendOverlay=function(t){t.blendFunc(1,769)},t.BlendLight=function(t){t.blendFunc(1,1)},t.BlendNormalTarget=function(t){t.blendFunc(1,771)},t.BlendAddTarget=function(t){t.blendFunc(1,772)},t.BlendMultiplyTarget=function(t){t.blendFunc(774,771)},t.BlendScreenTarget=function(t){t.blendFunc(1,1)},t.BlendOverlayTarget=function(t){t.blendFunc(1,769)},t.BlendLightTarget=function(t){t.blendFunc(1,1)},t.BlendMask=function(t){t.blendFunc(0,770)},t.BlendDestinationOut=function(t){t.blendFunc(0,0)},t.activeBlendFunction=null,t.NORMAL="normal",t.ADD="add",t.MULTIPLY="multiply",t.SCREEN="screen",t.LIGHT="light",t.OVERLAY="overlay",t.DESTINATIONOUT="destination-out",t.fns=[],t.targetFns=[],r(t,["NAMES",function(){return this.NAMES=["normal","add","multiply","screen","overlay","light","mask","destination-out"]},"TOINT",function(){return this.TOINT={normal:0,add:1,multiply:2,screen:3,lighter:1,overlay:4,light:5,mask:6,"destination-out":7}}]),t}(),z=function(){function t(t){this._color=c.create("black"),this.setValue(t)}s(t,"laya.webgl.canvas.DrawStyle");var e=t.prototype;return e.setValue=function(t){if(t){if("string"==typeof t)return void(this._color=c.create(t));if(t instanceof laya.utils.Color)return void(this._color=t)}},e.reset=function(){this._color=c.create("black")},e.equal=function(t){return"string"==typeof t?this._color.strColor===t:t instanceof laya.utils.Color&&this._color.numColor===t.numColor},e.toColorStr=function(){return this._color.strColor},t.create=function(e){var i;if(e&&("string"==typeof e?i=c.create(e):e instanceof laya.utils.Color&&(i=e),i))return i._drawStyle||(i._drawStyle=new t(e));return null},r(t,["DEFAULT",function(){return this.DEFAULT=new t("#000000")}]),t}(),W=function(){function t(){this._x=0,this._y=0,this.dirty=!1,this.offset=0,this.count=0,this.geoStart=0,this.tempArray=[],this.closePath=!1,this.geomatrys=[];xt.mainContext;this.ib=qt.create(35048),this.vb=jt.create(5)}s(t,"laya.webgl.canvas.Path");var e=t.prototype;return e.addPoint=function(t,e){this.tempArray.push(t,e)},e.getEndPointX=function(){return this.tempArray[this.tempArray.length-2]},e.getEndPointY=function(){return this.tempArray[this.tempArray.length-1]},e.polygon=function(t,e,i,r,s,n){var a;return this.geomatrys.push(this._curGeomatry=a=new Ct(t,e,i,r,s,n)),r||(a.fill=!1),void 0==n&&(a.borderWidth=0),a},e.setGeomtry=function(t){this.geomatrys.push(this._curGeomatry=t)},e.drawLine=function(t,e,i,r,s){var n;return this.closePath?this.geomatrys.push(this._curGeomatry=n=new Mt(t,e,i,r,s)):this.geomatrys.push(this._curGeomatry=n=new It(t,e,i,r,s)),n.fill=!1,n},e.update=function(){var t=this.ib._byteLength,e=this.geomatrys.length;this.offset=t;for(var i=this.geoStart;i<e;i++)this.geomatrys[i].getData(this.ib,this.vb,this.vb._byteLength/20);this.geoStart=e,this.count=(this.ib._byteLength-t)/mt.BYTES_PIDX},e.reset=function(){this.vb.clear(),this.ib.clear(),this.offset=this.count=this.geoStart=0,this.geomatrys.length=0},e.recover=function(){this._curGeomatry=null,this.vb.destory(),this.vb=null,this.ib.destory(),this.ib=null},t}(),Y=function(){function t(){}s(t,"laya.webgl.canvas.save.SaveBase");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){this._dataObj[this._valueName]=this._value,t._cache[t._cache._length++]=this,this._newSubmit&&(e._curSubmit=nt.RENDERBASE,e._renderKey=0)},t._createArray=function(){var t=[];return t._length=0,t},t._init=function(){var e=t._namemap={};return e[1]="ALPHA",e[2]="fillStyle",e[8]="font",e[256]="lineWidth",e[512]="strokeStyle",e[8192]="_mergeID",e[1024]=e[2048]=e[4096]=[],e[16384]="textBaseline",e[32768]="textAlign",e[65536]="_nBlendType",e[1048576]="shader",e[2097152]="filters",e},t.save=function(e,i,r,s){if((e._saveMark._saveuse&i)!==i){e._saveMark._saveuse|=i;var n=t._cache,a=n._length>0?n[--n._length]:new t;a._value=r[a._valueName=t._namemap[i]],a._dataObj=r,a._newSubmit=s;var h=e._save;h[h._length++]=a}},r(t,["_cache",function(){return this._cache=laya.webgl.canvas.save.SaveBase._createArray()},"_namemap",function(){return this._namemap=t._init()}]),t}(),X=function(){function t(){this._clipRect=new y}s(t,"laya.webgl.canvas.save.SaveClipRect");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){e._clipRect=this._clipSaveRect,t._cache[t._cache._length++]=this,this._submitScissor.submitLength=e._submits._length-this._submitScissor.submitIndex,e._curSubmit=nt.RENDERBASE,e._renderKey=0},t.save=function(e,i){if(131072!=(131072&e._saveMark._saveuse)){e._saveMark._saveuse|=131072;var r=t._cache,s=r._length>0?r[--r._length]:new t;s._clipSaveRect=e._clipRect,e._clipRect=s._clipRect.copyFrom(e._clipRect),s._submitScissor=i;var n=e._save;n[n._length++]=s}},r(t,["_cache",function(){return this._cache=Y._createArray()}]),t}(),K=function(){function t(){this._contextX=0,this._contextY=0,this._clipRect=new y,this._rect=new y,this._matrix=new b}s(t,"laya.webgl.canvas.save.SaveClipRectStencil");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){ut.restore(e,this._rect,this._saveMatrix,this._contextX,this._contextY),e._clipRect=this._clipSaveRect,e._curMat=this._saveMatrix,e._x=this._contextX,e._y=this._contextY,t._cache[t._cache._length++]=this,e._curSubmit=nt.RENDERBASE},t.save=function(e,i,r,s,n,a,h,l,o,u){if(262144!=(262144&e._saveMark._saveuse)){e._saveMark._saveuse|=262144;var _=t._cache,c=_._length>0?_[--_._length]:new t;c._clipSaveRect=e._clipRect,c._clipRect.setTo(h,l,o,u),e._clipRect=c._clipRect,c._rect.x=r,c._rect.y=s,c._rect.width=n,c._rect.height=a,c._contextX=e._x,c._contextY=e._y,c._saveMatrix=e._curMat,e._curMat.copyTo(c._matrix),e._curMat=c._matrix,c._submitStencil=i;var f=e._save;f[f._length++]=c}},r(t,["_cache",function(){return this._cache=Y._createArray()}]),t}(),Q=function(){function t(){this._saveuse=0}s(t,"laya.webgl.canvas.save.SaveMark");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!0},e.restore=function(e){e._saveMark=this._preSaveMark,t._no[t._no._length++]=this},t.Create=function(e){var i=t._no,r=i._length>0?i[--i._length]:new t;return r._saveuse=0,r._preSaveMark=e._saveMark,e._saveMark=r,r},r(t,["_no",function(){return this._no=Y._createArray()}]),t}(),Z=function(){function t(){this._matrix=new b}s(t,"laya.webgl.canvas.save.SaveTransform");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){e._curMat=this._savematrix,t._no[t._no._length++]=this},t.save=function(e){var i=e._saveMark;if(2048!=(2048&i._saveuse)){i._saveuse|=2048;var r=t._no,s=r._length>0?r[--r._length]:new t;s._savematrix=e._curMat,e._curMat=e._curMat.copyTo(s._matrix);var n=e._save;n[n._length++]=s}},r(t,["_no",function(){return this._no=Y._createArray()}]),t}(),q=function(){function t(){}s(t,"laya.webgl.canvas.save.SaveTranslate");var e=t.prototype;return i.imps(e,{"laya.webgl.canvas.save.ISaveData":!0}),e.isSaveMark=function(){return!1},e.restore=function(e){e._curMat;e._x=this._x,e._y=this._y,t._no[t._no._length++]=this},t.save=function(e){var i=t._no,r=i._length>0?i[--i._length]:new t;r._x=e._x,r._y=e._y;var s=e._save;s[s._length++]=r},r(t,["_no",function(){return this._no=Y._createArray()}]),t}(),j=function(){function t(){this.target=null,this.repaint=!1,this._width=NaN,this._height=NaN,this._sp=null,this._clipRect=new y}s(t,"laya.webgl.resource.RenderTargetMAX");var e=t.prototype;return e.setSP=function(t){this._sp=t},e.size=function(t,e){var r=this;this._width!==t||this._height!==e?(this.repaint=!0,this._width=t,this._height=e,this.target?this.target.size(t,e):this.target=Dt.create(t,e),this.target.hasListener("recovered")||this.target.on("recovered",this,function(t){i.timer.callLater(r._sp,r._sp.repaint)})):this.target.size(t,e)},e._flushToTarget=function(t,e){if(!e._destroy){var i=gt.worldScissorTest,r=gt.worldClipRect;gt.worldClipRect=this._clipRect,this._clipRect.x=this._clipRect.y=0,this._clipRect.width=this._width,this._clipRect.height=this._height,gt.worldScissorTest=!1,xt.mainContext.disable(3089);var s=gt.worldAlpha,n=gt.worldMatrix4,a=gt.worldMatrix,h=gt.worldFilters,l=gt.worldShaderDefines;if(gt.worldMatrix=b.EMPTY,gt.restoreTempArray(),gt.worldMatrix4=gt.TEMPMAT4_ARRAY,gt.worldAlpha=1,gt.worldFilters=null,gt.worldShaderDefines=null,Ft.activeShader=null,e.start(),f.showCanvasMark?e.clear(0,1,0,.3):e.clear(0,0,0,0),t.flush(),e.end(),Ft.activeShader=null,gt.worldAlpha=s,gt.worldMatrix4=n,gt.worldMatrix=a,gt.worldFilters=h,gt.worldShaderDefines=l,gt.worldScissorTest=i,i){var o=gt.height-r.y-r.height;xt.mainContext.scissor(r.x,o,r.width,r.height),xt.mainContext.enable(3089)}gt.worldClipRect=r}},e.flush=function(t){this.repaint&&(this._flushToTarget(t,this.target),this.repaint=!1)},e.drawTo=function(t,e,i,r,s){t.drawTexture(this.target.getTexture(),e,i,r,s,0,0)},e.destroy=function(){this.target&&(this.target.destroy(),this.target=null,this._sp=null)},t}(),$=function(){function t(){this.ALPHA=1,this.shaderType=0,this.defines=new wt}return s(t,"laya.webgl.shader.d2.Shader2D"),t.prototype.destroy=function(){this.defines=null,this.filters=null,this.glTexture=null,this.strokeStyle=null,this.fillStyle=null},t.__init__=function(){var t,e;Xt.addInclude("parts/ColorFilter_ps_uniform.glsl","uniform vec4 colorAlpha;\nuniform mat4 colorMat;"),Xt.addInclude("parts/ColorFilter_ps_logic.glsl","mat4 alphaMat =colorMat;\n\nalphaMat[0][3] *= gl_FragColor.a;\nalphaMat[1][3] *= gl_FragColor.a;\nalphaMat[2][3] *= gl_FragColor.a;\n\ngl_FragColor = gl_FragColor * alphaMat;\ngl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n"),Xt.addInclude("parts/GlowFilter_ps_uniform.glsl","uniform vec4 u_color;\nuniform float u_strength;\nuniform float u_blurX;\nuniform float u_blurY;\nuniform float u_offsetX;\nuniform float u_offsetY;\nuniform float u_textW;\nuniform float u_textH;"),Xt.addInclude("parts/GlowFilter_ps_logic.glsl","const float c_IterationTime = 10.0;\nfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\nvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\nvec2 vec2FilterDir = vec2(-(u_offsetX)/u_textW,-(u_offsetY)/u_textH);\nvec2 vec2FilterOff = vec2(u_blurX/u_textW/c_IterationTime * 2.0,u_blurY/u_textH/c_IterationTime * 2.0);\nfloat maxNum = u_blurX * u_blurY;\nvec2 vec2Off = vec2(0.0,0.0);\nfloat floatOff = c_IterationTime/2.0;\nfor(float i = 0.0;i<=c_IterationTime; ++i){\n\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\tvec4Color += texture2D(texture, v_texcoord + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t}\n}\ngl_FragColor = vec4(u_color.rgb,vec4Color.a * u_strength);\ngl_FragColor.rgb *= gl_FragColor.a;"),Xt.addInclude("parts/BlurFilter_ps_logic.glsl","gl_FragColor =   blur();\ngl_FragColor.w*=alpha;"),Xt.addInclude("parts/BlurFilter_ps_uniform.glsl","uniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\n//float sigma=strength/3.0;//3σ以外影响很小。即当σ=1的时候，半径为3\n//float sig2 = sigma*sigma;\n//float _2sig2 = 2.0*sig2;\n//return 1.0/(2*PI*sig2)*exp(-(x*x+y*y)/_2sig2)\n//float gauss1 = 1.0/(2.0*PI*sig2);\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoord-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}"),Xt.addInclude("parts/ColorAdd_ps_uniform.glsl","uniform vec4 colorAdd;\n"),Xt.addInclude("parts/ColorAdd_ps_logic.glsl","gl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\ngl_FragColor.xyz *= colorAdd.a;"),t="attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}",e='precision mediump float;\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec4 color= texture2D(texture, v_texcoord);\n   color.a*=alpha;\n   color.rgb*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}',Xt.preCompile2D(0,1,t,e,null),t="attribute vec4 position;\nuniform vec2 size;\nuniform mat4 mmat;\nvoid main() {\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n}",e='precision mediump float;\nuniform vec4 color;\nuniform float alpha;\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\nvoid main() {\n\tvec4 a = vec4(color.r, color.g, color.b, color.a);\n\ta.w = alpha;\n\ta.xyz *= alpha;\n\tgl_FragColor = a;\n\t#include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n}',Xt.preCompile2D(0,2,t,e,null),t="attribute vec4 position;\nattribute vec3 a_color;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nuniform vec2 u_pos;\nuniform vec2 size;\nvarying vec3 color;\nvoid main(){\n  vec4 tPos = vec4(position.x + u_pos.x,position.y + u_pos.y,position.z,position.w);\n  vec4 pos=mmat*u_mmat2*tPos;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  color=a_color;\n}",e="precision mediump float;\n//precision mediump float;\nvarying vec3 color;\nuniform float alpha;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor=vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=alpha;\n}",Xt.preCompile2D(0,4,t,e,null),t="attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}",e='#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\nuniform vec4 u_TexRange;\nuniform vec2 u_offset;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec2 newTexCoord;\n   newTexCoord.x = mod(u_offset.x + v_texcoord.x,u_TexRange.y) + u_TexRange.x;\n   newTexCoord.y = mod(u_offset.y + v_texcoord.y,u_TexRange.w) + u_TexRange.z;\n   vec4 color= texture2D(texture, newTexCoord);\n   color.a*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}',Xt.preCompile2D(0,256,t,e,null),t="attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}",e="precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}",Xt.preCompile2D(0,512,t,e,null)},t}(),J=function(){function t(t,e,i){this._value=0,this._name2int=t,this._int2name=e,this._int2nameMap=i}s(t,"laya.webgl.shader.ShaderDefines");var e=t.prototype;return e.add=function(t){return"string"==typeof t&&(t=this._name2int[t]),this._value|=t,this._value},e.addInt=function(t){return this._value|=t,this._value},e.remove=function(t){return"string"==typeof t&&(t=this._name2int[t]),this._value&=~t,this._value},e.isDefine=function(t){return(this._value&t)===t},e.getValue=function(){return this._value},e.setValue=function(t){this._value=t},e.toNameDic=function(){var e=this._int2nameMap[this._value];return e||t._toText(this._value,this._int2name,this._int2nameMap)},t._reg=function(t,e,i,r){i[t]=e,r[e]=t},t._toText=function(t,e,i){var r=i[t];if(r)return r;for(var s={},n=1,a=0;a<32&&!((n=1<<a)>t);a++)if(t&n){var h=e[n];h&&(s[h]="")}return i[t]=s,s},t._toInt=function(t,e){for(var i=t.split("."),r=0,s=0,n=i.length;s<n;s++){var a=e[i[s]];if(!a)throw new Error("Defines to int err:"+t+"/"+i[s]);r|=a}return r},t}(),tt=function(){function t(){this.mVBBuffer=null,this.mIBBuffer=null,this.mVBData=null,this.mIBData=null,this.mEleNum=0,this.mTexture=null,this.transform=null,this._vs=null,this._ps=null,this._indexStart=-1,this._verticles=null,this._uvs=null,this._tempMatrix=new b}s(t,"laya.webgl.shader.d2.skinAnishader.SkinMesh");var e=t.prototype;return e.init=function(e,i,r){if(i)this._vs=i;else{this._vs=[];var s=e.width,n=e.height;this._vs.push(0,0,0,0,1,1,1,1),this._vs.push(s,0,1,0,1,1,1,1),this._vs.push(s,n,1,1,1,1,1,1),this._vs.push(0,n,0,1,1,1,1,1)}r?this._ps=r:(t._defaultPS||(t._defaultPS=[],t._defaultPS.push(0,1,3,3,1,2)),this._ps=t._defaultPS),this.mVBData=new Float32Array(this._vs),this.mIBData=new Uint16Array(this._ps.length),this.mIBData.start=-1,this.mEleNum=this._ps.length,this.mTexture=e},e.init2=function(t,e,i,r,s){this.transform&&(this.transform=null),i?this._ps=i:(this._ps=[],this._ps.push(0,1,3,3,1,2)),this._verticles=r,this._uvs=s,this.mEleNum=this._ps.length,this.mTexture=t,(A.isConchNode||A.isConchApp)&&(this._initMyData(),this.mVBData=new Float32Array(this._vs))},e._initMyData=function(){var e=0,i=0,r=4*this._verticles.length;this._vs=t._tempVS;var s=!1;if(A.isConchNode||A.isConchApp?(this._vs.length=r,s=!0):this._vs.length<r&&(this._vs.length=r,s=!0),t._tVSLen=r,s)for(;e<r;)this._vs[e]=this._verticles[i],this._vs[e+1]=this._verticles[i+1],this._vs[e+2]=this._uvs[i],this._vs[e+3]=this._uvs[i+1],this._vs[e+4]=1,this._vs[e+5]=1,this._vs[e+6]=1,this._vs[e+7]=1,e+=8,i+=2;else for(;e<r;)this._vs[e]=this._verticles[i],this._vs[e+1]=this._verticles[i+1],this._vs[e+2]=this._uvs[i],this._vs[e+3]=this._uvs[i+1],e+=8,i+=2},e.getData2=function(e,i,r){var s;this.mVBBuffer=e,this.mIBBuffer=i,this._initMyData(),e.appendEx2(this._vs,Float32Array,t._tVSLen,4),this._indexStart=i._byteLength,(s=t._tempIB).length<this._ps.length&&(s.length=this._ps.length);for(var n=0,a=this._ps.length;n<a;n++)s[n]=this._ps[n]+r;i.appendEx2(s,Uint16Array,this._ps.length,2)},e.getData=function(t,e,i){if(this.mVBBuffer=t,this.mIBBuffer=e,t.append(this.mVBData),this._indexStart=e._byteLength,this.mIBData.start!=i){for(var r=0,s=this._ps.length;r<s;r++)this.mIBData[r]=this._ps[r]+i;this.mIBData.start=i}e.append(this.mIBData)},e.render=function(t,e,i){if(A.isWebGL&&this.mTexture){t._renderKey=0,t._shader2D.glTexture=null,et.getInstance().addSkinMesh(this);var r=nt.createShape(t,this.mIBBuffer,this.mVBBuffer,this.mEleNum,this._indexStart,At.create(512,0));this.transform||(this.transform=b.EMPTY),this.transform.translate(e,i),b.mul(this.transform,t._curMat,this._tempMatrix),this.transform.translate(-e,-i);var s=r.shaderValue,n=s.u_mmat2||gt.getMatrArray();gt.mat2MatArray(this._tempMatrix,n),s.textureHost=this.mTexture,s.offsetX=0,s.offsetY=0,s.u_mmat2=n,s.ALPHA=t._shader2D.ALPHA,t._submits[t._submits._length++]=r}else A.isConchApp&&this.mTexture&&(this.transform||(this.transform=b.EMPTY),t.setSkinMesh&&t.setSkinMesh(e,i,this._ps,this.mVBData,this.mEleNum,0,this.mTexture,this.transform))},t._tempVS=[],t._tempIB=[],t._defaultPS=null,t._tVSLen=0,t}(),et=function(){function t(){this.ib=null,this.vb=null;xt.mainContext;this.ib=qt.create(35048),this.vb=jt.create(8)}s(t,"laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");var e=t.prototype;return e.addSkinMesh=function(t){t.getData2(this.vb,this.ib,this.vb._byteLength/32)},e.reset=function(){this.vb.clear(),this.ib.clear()},t.getInstance=function(){return t.instance=t.instance||new t},t.instance=null,t}(),it=function(){function t(t,e,i,r,s,n,a,h,l){this.r0=0,this.fill=!0,this.r1=Math.PI/2,void 0===l&&(l=0),this.x=t,this.y=e,this.width=i,this.height=r,this.edges=s,this.color=n,this.borderWidth=a,this.borderColor=h}s(t,"laya.webgl.shapes.BasePoly");var e=t.prototype;return i.imps(e,{"laya.webgl.shapes.IShape":!0}),e.getData=function(t,e,i){},e.rebuild=function(t){},e.setMatrix=function(t){},e.needUpdate=function(t){return!0},e.sector=function(t,e,i){var r=this.x,s=this.y,n=this.edges,a=(this.r1-this.r0)/n,h=this.width,l=this.height,o=this.color,u=(o>>16&255)/255,_=(o>>8&255)/255,c=(255&o)/255;t.push(r,s,u,_,c);for(var f=0;f<n+1;f++)t.push(r+Math.sin(a*f+this.r0)*h,s+Math.cos(a*f+this.r0)*l),t.push(u,_,c);for(f=0;f<n;f++)e.push(i,i+f+1,i+f+2)},e.createLine2=function(t,e,i,r,s,n){var a,h,l,o,u,_,c,f,d,m,p,g,v,x,b,T,y,A,E,S,R=t.concat(),w=s,I=this.borderColor,M=(I>>16&255)/255,C=(I>>8&255)/255,L=(255&I)/255,P=R.length/2,F=r,D=i/2;l=R[0],o=R[1],m=l-(u=R[2]),d=(d=-(o-(_=R[3])))/(S=Math.sqrt(d*d+m*m))*D,m=m/S*D,w.push(l-d+this.x,o-m+this.y,M,C,L,l+d+this.x,o+m+this.y,M,C,L);for(var B=1;B<P-1;B++)l=R[2*(B-1)],o=R[2*(B-1)+1],u=R[2*B],_=R[2*B+1],c=R[2*(B+1)],f=R[2*(B+1)+1],m=l-u,g=u-c,b=(-(d=(d=-(o-_))/(S=Math.sqrt(d*d+m*m))*D)+l)*(-(m=m/S*D)+_)-(-d+u)*(-m+o),A=(-(p=(p=-(_-f))/(S=Math.sqrt(p*p+g*g))*D)+c)*(-(g=g/S*D)+_)-(-p+u)*(-g+f),E=(v=-m+o-(-m+_))*(y=-p+u-(-p+c))-(T=-g+f-(-g+_))*(x=-d+u-(-d+l)),Math.abs(E)<.1?(E+=10.1,w.push(u-d+this.x,_-m+this.y,M,C,L,u+d+this.x,_+m+this.y,M,C,L)):(((a=(x*A-y*b)/E)-u)*(a-u)+((h=(T*b-v*A)/E)-_)+(h-_),w.push(a+this.x,h+this.y,M,C,L,u-(a-u)+this.x,_-(h-_)+this.y,M,C,L));l=R[R.length-4],o=R[R.length-3],m=l-(u=R[R.length-2]),d=(d=-(o-(_=R[R.length-1])))/(S=Math.sqrt(d*d+m*m))*D,m=m/S*D,w.push(u-d+this.x,_-m+this.y,M,C,L,u+d+this.x,_+m+this.y,M,C,L);var N=n;for(B=1;B<N;B++)e.push(F+2*(B-1),F+2*(B-1)+1,F+2*B+1,F+2*B+1,F+2*B,F+2*(B-1));return w},e.createLine=function(t,e,i,r){var s=t.concat(),n=t,a=this.borderColor,h=(a>>16&255)/255,l=(a>>8&255)/255,o=(255&a)/255;s.splice(0,5);var u,_,c,f,d,m,p,g,v,x,b,T,y,A,E,S,R,w,I,M,C=s.length/5,L=r,P=i/2;c=s[0],f=s[1],x=c-(d=s[5]),v=(v=-(f-(m=s[6])))/(M=Math.sqrt(v*v+x*x))*P,x=x/M*P,n.push(c-v,f-x,h,l,o,c+v,f+x,h,l,o);for(var F=1;F<C-1;F++)c=s[5*(F-1)],f=s[5*(F-1)+1],d=s[5*F],m=s[5*F+1],p=s[5*(F+1)],g=s[5*(F+1)+1],x=c-d,T=d-p,E=(-(v=(v=-(f-m))/(M=Math.sqrt(v*v+x*x))*P)+c)*(-(x=x/M*P)+m)-(-v+d)*(-x+f),w=(-(b=(b=-(m-g))/(M=Math.sqrt(b*b+T*T))*P)+p)*(-(T=T/M*P)+m)-(-b+d)*(-T+g),I=(y=-x+f-(-x+m))*(R=-b+d-(-b+p))-(S=-T+g-(-T+m))*(A=-v+d-(-v+c)),Math.abs(I)<.1?(I+=10.1,n.push(d-v,m-x,h,l,o,d+v,m+x,h,l,o)):(((u=(A*w-R*E)/I)-d)*(u-d)+((_=(S*E-y*w)/I)-m)+(_-m),n.push(u,_,h,l,o,d-(u-d),m-(_-m),h,l,o));c=s[s.length-10],f=s[s.length-9],x=c-(d=s[s.length-5]),v=(v=-(f-(m=s[s.length-4])))/(M=Math.sqrt(v*v+x*x))*P,x=x/M*P,n.push(d-v,m-x,h,l,o,d+v,m+x,h,l,o);var D=this.edges+1;for(F=1;F<D;F++)e.push(L+2*(F-1),L+2*(F-1)+1,L+2*F+1,L+2*F+1,L+2*F,L+2*(F-1));return n},e.createLoopLine=function(t,e,i,r,s,n){var a=t.concat(),h=s||t,l=this.borderColor,o=(l>>16&255)/255,u=(l>>8&255)/255,_=(255&l)/255;a.splice(0,5);var c=[a[0],a[1]],f=[a[a.length-5],a[a.length-4]],d=f[0]+.5*(c[0]-f[0]),m=f[1]+.5*(c[1]-f[1]);a.unshift(d,m,0,0,0),a.push(d,m,0,0,0);var p,g,v,x,b,T,y,A,E,S,R,w,I,M,C,L,P,F,D,B,N=a.length/5,O=r,V=i/2;v=a[0],x=a[1],S=v-(b=a[5]),E=(E=-(x-(T=a[6])))/(B=Math.sqrt(E*E+S*S))*V,S=S/B*V,h.push(v-E,x-S,o,u,_,v+E,x+S,o,u,_);for(var U=1;U<N-1;U++)v=a[5*(U-1)],x=a[5*(U-1)+1],b=a[5*U],T=a[5*U+1],y=a[5*(U+1)],A=a[5*(U+1)+1],S=v-b,w=b-y,C=(-(E=(E=-(x-T))/(B=Math.sqrt(E*E+S*S))*V)+v)*(-(S=S/B*V)+T)-(-E+b)*(-S+x),F=(-(R=(R=-(T-A))/(B=Math.sqrt(R*R+w*w))*V)+y)*(-(w=w/B*V)+T)-(-R+b)*(-w+A),D=(I=-S+x-(-S+T))*(P=-R+b-(-R+y))-(L=-w+A-(-w+T))*(M=-E+b-(-E+v)),Math.abs(D)<.1?(D+=10.1,h.push(b-E,T-S,o,u,_,b+E,T+S,o,u,_)):(((p=(M*F-P*C)/D)-b)*(p-b)+((g=(L*C-I*F)/D)-T)+(g-T),h.push(p,g,o,u,_,b-(p-b),T-(g-T),o,u,_));n&&(e=n);var k=this.edges+1;for(U=1;U<k;U++)e.push(O+2*(U-1),O+2*(U-1)+1,O+2*U+1,O+2*U+1,O+2*U,O+2*(U-1));return e.push(O+2*(U-1),O+2*(U-1)+1,O+1,O+1,O,O+2*(U-1)),h},t}(),rt=function(){function t(){}return s(t,"laya.webgl.shapes.Earcut"),t.earcut=function(e,i,r){r=r||2;var s,n,a,h,l,o,u,_=i&&i.length,c=_?i[0]*r:e.length,f=t.linkedList(e,0,c,r,!0),d=[];if(!f)return d;if(_&&(f=t.eliminateHoles(e,i,f,r)),e.length>80*r){s=a=e[0],n=h=e[1];for(var m=r;m<c;m+=r)l=e[m],o=e[m+1],l<s&&(s=l),o<n&&(n=o),l>a&&(a=l),o>h&&(h=o);u=0!==(u=Math.max(a-s,h-n))?1/u:0}return t.earcutLinked(f,d,r,s,n,u),d},t.linkedList=function(e,i,r,s,n){var a,h;if(n===t.signedArea(e,i,r,s)>0)for(a=i;a<r;a+=s)h=t.insertNode(a,e[a],e[a+1],h);else for(a=r-s;a>=i;a-=s)h=t.insertNode(a,e[a],e[a+1],h);return h&&t.equals(h,h.next)&&(t.removeNode(h),h=h.next),h},t.filterPoints=function(e,i){if(!e)return e;i||(i=e);var r,s=e;do{if(r=!1,s.steiner||!t.equals(s,s.next)&&0!==t.area(s.prev,s,s.next))s=s.next;else{if(t.removeNode(s),(s=i=s.prev)===s.next)break;r=!0}}while(r||s!==i);return i},t.earcutLinked=function(e,i,r,s,n,a,h){if(e){!h&&a&&t.indexCurve(e,s,n,a);for(var l,o,u=e;e.prev!==e.next;)if(l=e.prev,o=e.next,a?t.isEarHashed(e,s,n,a):t.isEar(e))i.push(l.i/r),i.push(e.i/r),i.push(o.i/r),t.removeNode(e),e=o.next,u=o.next;else if((e=o)===u){h?1===h?(e=t.cureLocalIntersections(e,i,r),t.earcutLinked(e,i,r,s,n,a,2)):2===h&&t.splitEarcut(e,i,r,s,n,a):t.earcutLinked(t.filterPoints(e,null),i,r,s,n,a,1);break}}},t.isEar=function(e){var i=e.prev,r=e,s=e.next;if(t.area(i,r,s)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(t.pointInTriangle(i.x,i.y,r.x,r.y,s.x,s.y,n.x,n.y)&&t.area(n.prev,n,n.next)>=0)return!1;n=n.next}return!0},t.isEarHashed=function(e,i,r,s){var n=e.prev,a=e,h=e.next;if(t.area(n,a,h)>=0)return!1;for(var l=n.x<a.x?n.x<h.x?n.x:h.x:a.x<h.x?a.x:h.x,o=n.y<a.y?n.y<h.y?n.y:h.y:a.y<h.y?a.y:h.y,u=n.x>a.x?n.x>h.x?n.x:h.x:a.x>h.x?a.x:h.x,_=n.y>a.y?n.y>h.y?n.y:h.y:a.y>h.y?a.y:h.y,c=t.zOrder(l,o,i,r,s),f=t.zOrder(u,_,i,r,s),d=e.nextZ;d&&d.z<=f;){if(d!==e.prev&&d!==e.next&&t.pointInTriangle(n.x,n.y,a.x,a.y,h.x,h.y,d.x,d.y)&&t.area(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(d=e.prevZ;d&&d.z>=c;){if(d!==e.prev&&d!==e.next&&t.pointInTriangle(n.x,n.y,a.x,a.y,h.x,h.y,d.x,d.y)&&t.area(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0},t.cureLocalIntersections=function(e,i,r){var s=e;do{var n=s.prev,a=s.next.next;!t.equals(n,a)&&t.intersects(n,s,s.next,a)&&t.locallyInside(n,a)&&t.locallyInside(a,n)&&(i.push(n.i/r),i.push(s.i/r),i.push(a.i/r),t.removeNode(s),t.removeNode(s.next),s=e=a),s=s.next}while(s!==e);return s},t.splitEarcut=function(e,i,r,s,n,a){var h=e;do{for(var l=h.next.next;l!==h.prev;){if(h.i!==l.i&&t.isValidDiagonal(h,l)){var o=t.splitPolygon(h,l);return h=t.filterPoints(h,h.next),o=t.filterPoints(o,o.next),t.earcutLinked(h,i,r,s,n,a),void t.earcutLinked(o,i,r,s,n,a)}l=l.next}h=h.next}while(h!==e)},t.eliminateHoles=function(e,i,r,s){var n,a,h,l,o,u=[];for(n=0,a=i.length;n<a;n++)h=i[n]*s,l=n<a-1?i[n+1]*s:e.length,(o=t.linkedList(e,h,l,s,!1))===o.next&&(o.steiner=!0),u.push(t.getLeftmost(o));for(u.sort(t.compareX),n=0;n<u.length;n++)t.eliminateHole(u[n],r),r=t.filterPoints(r,r.next);return r},t.compareX=function(t,e){return t.x-e.x},t.eliminateHole=function(e,i){if(i=t.findHoleBridge(e,i)){var r=t.splitPolygon(i,e);t.filterPoints(r,r.next)}},t.findHoleBridge=function(e,i){var r,s=i,n=e.x,a=e.y,h=-1/0;do{if(a<=s.y&&a>=s.next.y&&s.next.y!==s.y){var l=s.x+(a-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(l<=n&&l>h){if(h=l,l===n){if(a===s.y)return s;if(a===s.next.y)return s.next}r=s.x<s.next.x?s:s.next}}s=s.next}while(s!==i);if(!r)return null;if(n===h)return r.prev;var o,u=r,_=r.x,c=r.y,f=1/0;for(s=r.next;s!==u;)n>=s.x&&s.x>=_&&n!==s.x&&t.pointInTriangle(a<c?n:h,a,_,c,a<c?h:n,a,s.x,s.y)&&((o=Math.abs(a-s.y)/(n-s.x))<f||o===f&&s.x>r.x)&&t.locallyInside(s,e)&&(r=s,f=o),s=s.next;return r},t.indexCurve=function(e,i,r,s){var n=e;do{null===n.z&&(n.z=t.zOrder(n.x,n.y,i,r,s)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,t.sortLinked(n)},t.sortLinked=function(t){var e,i,r,s,n,a,h,l,o=1;do{for(i=t,t=null,n=null,a=0;i;){for(a++,r=i,h=0,e=0;e<o&&(h++,r=r.nextZ);e++);for(l=o;h>0||l>0&&r;)0!==h&&(0===l||!r||i.z<=r.z)?(s=i,i=i.nextZ,h--):(s=r,r=r.nextZ,l--),n?n.nextZ=s:t=s,s.prevZ=n,n=s;i=r}n.nextZ=null,o*=2}while(a>1);return t},t.zOrder=function(t,e,i,r,s){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-i)*s)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*s)|e<<8))|e<<4))|e<<2))|e<<1))<<1},t.getLeftmost=function(t){var e=t,i=t;do{e.x<i.x&&(i=e),e=e.next}while(e!==t);return i},t.pointInTriangle=function(t,e,i,r,s,n,a,h){return(s-a)*(e-h)-(t-a)*(n-h)>=0&&(t-a)*(r-h)-(i-a)*(e-h)>=0&&(i-a)*(n-h)-(s-a)*(r-h)>=0},t.isValidDiagonal=function(e,i){return e.next.i!==i.i&&e.prev.i!==i.i&&!t.intersectsPolygon(e,i)&&t.locallyInside(e,i)&&t.locallyInside(i,e)&&t.middleInside(e,i)},t.area=function(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)},t.equals=function(t,e){return t.x===e.x&&t.y===e.y},t.intersects=function(e,i,r,s){return!!(t.equals(e,i)&&t.equals(r,s)||t.equals(e,s)&&t.equals(r,i))||t.area(e,i,r)>0!=t.area(e,i,s)>0&&t.area(r,s,e)>0!=t.area(r,s,i)>0},t.intersectsPolygon=function(e,i){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==i.i&&r.next.i!==i.i&&t.intersects(r,r.next,e,i))return!0;r=r.next}while(r!==e);return!1},t.locallyInside=function(e,i){return t.area(e.prev,e,e.next)<0?t.area(e,i,e.next)>=0&&t.area(e,e.prev,i)>=0:t.area(e,i,e.prev)<0||t.area(e,e.next,i)<0},t.middleInside=function(t,e){var i=t,r=!1,s=(t.x+e.x)/2,n=(t.y+e.y)/2;do{i.y>n!=i.next.y>n&&i.next.y!==i.y&&s<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next}while(i!==t);return r},t.splitPolygon=function(t,e){var i=new st(t.i,t.x,t.y),r=new st(e.i,e.x,e.y),s=t.next,n=e.prev;return t.next=e,e.prev=t,i.next=s,s.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r},t.insertNode=function(t,e,i,r){var s=new st(t,e,i);return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s},t.removeNode=function(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)},t.signedArea=function(t,e,i,r){for(var s=0,n=e,a=i-r;n<i;n+=r)s+=(t[a]-t[n])*(t[n+1]+t[a+1]),a=n;return s},t}(),st=function(){function t(t,e,i){this.i=null,this.x=null,this.y=null,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=null,this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}return s(t,"laya.webgl.shapes.EarcutNode"),t}(),nt=(function(){function t(t,e,i,r,s,n,a){this.lineWidth=t,this.lineColor=e,this.lineAlpha=i,this.fillColor=r,this.fillAlpha=s,this.shape=a,this.fill=n}s(t,"laya.webgl.shapes.GeometryData");var e=t.prototype;e.clone=function(){return new t(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)},e.getIndexData=function(){return null},e.getVertexData=function(){return null},e.destroy=function(){this.shape=null}}(),function(){function t(t){if(t instanceof Float32Array)this.points=t;else if(t instanceof Array){t.length;this.points=new Float32Array(t)}}s(t,"laya.webgl.shapes.Vertex");var e=t.prototype;i.imps(e,{"laya.webgl.shapes.IShape":!0}),e.getData=function(t,e,i){},e.needUpdate=function(t){return!1},e.rebuild=function(t){},e.setMatrix=function(t){}}(),function(){function t(t){void 0===t&&(t=1e4),this._renderType=t}s(t,"laya.webgl.submit.Submit");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.releaseRender=function(){var e=t._cache;e[e._length++]=this,this.shaderValue.release(),this._vb=null},e.getRenderType=function(){return this._renderType},e.renderSubmit=function(){if(0===this._numEle)return 1;var t=this.shaderValue.textureHost;if(t){var e=t.source;if(!t.bitmap||!e)return 1;this.shaderValue.texture=e}this._vb.bind_upload(this._ib);var i=xt.mainContext;return this.shaderValue.upload(),G.activeBlendFunction!==this._blendFn&&(i.enable(3042),this._blendFn(i),G.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,i.drawElements(4,this._numEle,5123,this._startIdx),1},t.__init__=function(){var e=t.RENDERBASE=new t(-1);e.shaderValue=new At(0,0),e.shaderValue.ALPHA=-1234},t.createSubmit=function(e,i,r,s,n){var a=t._cache._length?t._cache[--t._cache._length]:new t;null==r&&((r=a._selfVb||(a._selfVb=jt.create(-1))).clear(),s=0),a._ib=i,a._vb=r,a._startIdx=s*mt.BYTES_PIDX,a._numEle=0;var h=e._nBlendType;a._blendFn=e._targets?G.targetFns[h]:G.fns[h],a.shaderValue=n,a.shaderValue.setValue(e._shader2D);var l=e._shader2D.filters;return l&&a.shaderValue.setFilters(l),a},t.createShape=function(e,i,r,s,n,a){var h=t._cache._length?t._cache[--t._cache._length]:new t;h._ib=i,h._vb=r,h._numEle=s,h._startIdx=n,h.shaderValue=a,h.shaderValue.setValue(e._shader2D);var l=e._nBlendType;return h._blendFn=e._targets?G.targetFns[l]:G.fns[l],h},t.TYPE_2D=1e4,t.TYPE_CANVAS=10003,t.TYPE_CMDSETRT=10004,t.TYPE_CUSTOM=10005,t.TYPE_BLURRT=10006,t.TYPE_CMDDESTORYPRERT=10007,t.TYPE_DISABLESTENCIL=10008,t.TYPE_OTHERIBVB=10009,t.TYPE_PRIMITIVE=10010,t.TYPE_RT=10011,t.TYPE_BLUR_RT=10012,t.TYPE_TARGET=10013,t.TYPE_CHANGE_VALUE=10014,t.TYPE_SHAPE=10015,t.TYPE_TEXTURE=10016,t.TYPE_FILLTEXTURE=10017,t.RENDERBASE=null,r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)}]),t}()),at=function(){function t(){this.fun=null,this.args=null}s(t,"laya.webgl.submit.SubmitCMD");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.renderSubmit=function(){return this.fun.apply(null,this.args),1},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this},t.create=function(e,i){var r=t._cache._length?t._cache[--t._cache._length]:new t;return r.fun=i,r.args=e,r},r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)}]),t}(),ht=function(){function t(){this.variables={}}s(t,"laya.webgl.submit.SubmitCMDScope");var e=t.prototype;return e.getValue=function(t){return this.variables[t]},e.addValue=function(t,e){return this.variables[t]=e},e.setValue=function(t,e){return this.variables.hasOwnProperty(t)?this.variables[t]=e:null},e.clear=function(){for(var t in this.variables)delete this.variables[t]},e.recycle=function(){this.clear(),t.POOL.push(this)},t.create=function(){var e=t.POOL.pop();return e||(e=new t),e},t.POOL=[],t}(),lt=function(){function t(){this.offset=0,this.startIndex=0,this._mat=b.create()}s(t,"laya.webgl.submit.SubmitOtherIBVB");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.releaseRender=function(){var e=t._cache;e[e._length++]=this},e.getRenderType=function(){return 10009},e.renderSubmit=function(){var e=this._shaderValue.textureHost;if(e){var i=e.source;if(!e.bitmap||!i)return 1;this._shaderValue.texture=i}this._vb.bind_upload(this._ib);var r=gt.worldMatrix4,s=b.TEMP;b.mulPre(this._mat,r[0],r[1],r[4],r[5],r[12],r[13],s);var n=gt.worldMatrix4=t.tempMatrix4;n[0]=s.a,n[1]=s.b,n[4]=s.c,n[5]=s.d,n[12]=s.tx,n[13]=s.ty,this._shader._offset=this.offset,this._shaderValue.refresh(),this._shader.upload(this._shaderValue),this._shader._offset=0;var a=xt.mainContext;return G.activeBlendFunction!==this._blendFn&&(a.enable(3042),this._blendFn(a),G.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,a.drawElements(4,this._numEle,5123,this.startIndex),gt.worldMatrix4=r,Ft.activeShader=null,1},t.create=function(e,i,r,s,n,a,h,l,o){void 0===o&&(o=0);var u=t._cache._length?t._cache[--t._cache._length]:new t;u._ib=r,u._vb=i,u._numEle=s,u._shader=n,u._shaderValue=a;var _=e._nBlendType;switch(u._blendFn=e._targets?G.targetFns[_]:G.fns[_],o){case 0:u.offset=0,u.startIndex=l/(mt.BYTES_PE*i.vertexStride)*1.5,u.startIndex*=mt.BYTES_PIDX;break;case 1:u.startIndex=h,u.offset=l}return u},r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)},"tempMatrix4",function(){return this.tempMatrix4=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}]),t}(),ot=function(){function t(){this.submitIndex=0,this.submitLength=0,this.context=null,this.clipRect=new y,this.screenRect=new y}s(t,"laya.webgl.submit.SubmitScissor");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e._scissor=function(t,e,i,r){var s=gt.worldMatrix4,n=s[0],a=s[5];if(t=t*n+s[12],e=e*a+s[13],r*=a,(i*=n)<1||r<1)return!1;var h=t+i,l=e+r;t<0&&(i=h-(t=0)),e<0&&(r=l-(e=0));var o=gt.worldClipRect;if(t=Math.max(t,o.x),e=Math.max(e,o.y),i=Math.min(h,o.right)-t,r=Math.min(l,o.bottom)-e,i<1||r<1)return!1;var u=gt.worldScissorTest;return this.screenRect.copyFrom(o),o.x=t,o.y=e,o.width=i,o.height=r,gt.worldScissorTest=!0,e=gt.height-e-r,xt.mainContext.scissor(t,e,i,r),xt.mainContext.enable(3089),this.context.submitElement(this.submitIndex,this.submitIndex+this.submitLength),u?(e=gt.height-this.screenRect.y-this.screenRect.height,xt.mainContext.scissor(this.screenRect.x,e,this.screenRect.width,this.screenRect.height),xt.mainContext.enable(3089)):(xt.mainContext.disable(3089),gt.worldScissorTest=!1),o.copyFrom(this.screenRect),!0},e._scissorWithTagart=function(t,e,i,r){if(i<1||r<1)return!1;var s=t+i,n=e+r;t<0&&(i=s-(t=0)),e<0&&(r=n-(e=0));var a=gt.worldClipRect;if(t=Math.max(t,a.x),e=Math.max(e,a.y),i=Math.min(s,a.right)-t,r=Math.min(n,a.bottom)-e,i<1||r<1)return!1;var h=gt.worldScissorTest;return this.screenRect.copyFrom(a),gt.worldScissorTest=!0,a.x=t,a.y=e,a.width=i,a.height=r,e=gt.height-e-r,xt.mainContext.scissor(t,e,i,r),xt.mainContext.enable(3089),this.context.submitElement(this.submitIndex,this.submitIndex+this.submitLength),h?(e=gt.height-this.screenRect.y-this.screenRect.height,xt.mainContext.scissor(this.screenRect.x,e,this.screenRect.width,this.screenRect.height),xt.mainContext.enable(3089)):(xt.mainContext.disable(3089),gt.worldScissorTest=!1),a.copyFrom(this.screenRect),!0},e.renderSubmit=function(){return this.submitLength=Math.min(this.context._submits._length-1,this.submitLength),this.submitLength<1||this.clipRect.width<1||this.clipRect.height<1?this.submitLength+1:(this.context._targets?this._scissorWithTagart(this.clipRect.x,this.clipRect.y,this.clipRect.width,this.clipRect.height):this._scissor(this.clipRect.x,this.clipRect.y,this.clipRect.width,this.clipRect.height),this.submitLength+1)},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this,this.context=null},t.create=function(e){var i=t._cache._length?t._cache[--t._cache._length]:new t;return i.context=e,i},r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)}]),t}(),ut=function(){function t(){this.step=0,this.blendMode=null,this.level=0}s(t,"laya.webgl.submit.SubmitStencil");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.renderSubmit=function(){switch(this.step){case 1:this.do1();break;case 2:this.do2();break;case 3:this.do3();break;case 4:this.do4();break;case 5:this.do5();break;case 6:this.do6();break;case 7:this.do7();break;case 8:this.do8()}return 1},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this},e.do1=function(){var t=xt.mainContext;t.enable(2960),t.clear(1024),t.colorMask(!1,!1,!1,!1),t.stencilFunc(514,this.level,255),t.stencilOp(7680,7680,7682)},e.do2=function(){var t=xt.mainContext;t.stencilFunc(514,this.level+1,255),t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680)},e.do3=function(){var t=xt.mainContext;t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680),t.clear(1024),t.disable(2960)},e.do4=function(){var t=xt.mainContext;0==this.level&&(t.enable(2960),t.clear(1024)),t.colorMask(!1,!1,!1,!1),t.stencilFunc(519,0,255),t.stencilOp(7680,7680,7682)},e.do5=function(){var t=xt.mainContext;t.stencilFunc(514,this.level,255),t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680)},e.do6=function(){var t=xt.mainContext;G.targetFns[G.TOINT[this.blendMode]](t)},e.do7=function(){var t=xt.mainContext;t.colorMask(!1,!1,!1,!1),t.stencilOp(7680,7680,7683)},e.do8=function(){var t=xt.mainContext;t.colorMask(!0,!0,!0,!0),t.stencilFunc(514,this.level,255),t.stencilOp(7680,7680,7680)},t.restore=function(e,i,r,s,n){var a;if(e._renderKey=0,t._mask>0&&t._mask--,0==t._mask)a=laya.webgl.submit.SubmitStencil.create(3),e.addRenderObject(a),e._curSubmit=nt.RENDERBASE;else{a=laya.webgl.submit.SubmitStencil.create(7),e.addRenderObject(a);var h=e._vb;h._byteLength;if(pt.fillRectImgVb(h,null,i.x,i.y,i.width,i.height,D.DEF_UV,r,s,n,0,0)){e._shader2D.glTexture=null;var l=e._curSubmit=nt.createSubmit(e,e._ib,h,(h._byteLength-64)/32*3,At.create(2,0));l.shaderValue.ALPHA=1,e._submits[e._submits._length++]=l,e._curSubmit._numEle+=6,e._curSubmit=nt.RENDERBASE}else alert("clipRect calc stencil rect error");a=laya.webgl.submit.SubmitStencil.create(8),e.addRenderObject(a)}},t.restore2=function(e,i){var r;e._renderKey=0,t._mask>0&&t._mask--,0==t._mask?(r=laya.webgl.submit.SubmitStencil.create(3),e.addRenderObject(r),e._curSubmit=nt.RENDERBASE):(r=laya.webgl.submit.SubmitStencil.create(7),e.addRenderObject(r),e._submits[e._submits._length++]=i,r=laya.webgl.submit.SubmitStencil.create(8),e.addRenderObject(r))},t.create=function(e){var i=t._cache._length?t._cache[--t._cache._length]:new t;return i.step=e,5==e&&++t._mask,i.level=t._mask,i},t._mask=0,r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)}]),t}(),_t=function(){function t(){this._renderType=0,this._vb=null,this._ib=null,this._startIdx=0,this._numEle=0,this.shaderValue=null,this.blendType=0,this.proName=null,this.scope=null}s(t,"laya.webgl.submit.SubmitTarget");var e=t.prototype;return i.imps(e,{"laya.webgl.submit.ISubmit":!0}),e.renderSubmit=function(){this._vb.bind_upload(this._ib);var t=this.scope.getValue(this.proName);return t&&(this.shaderValue.texture=t.source,this.shaderValue.strength&&!this.shaderValue.blurInfo&&(this.shaderValue.blurInfo=[t.width,t.height]),this.shaderValue.upload(),this.blend(),C.drawCall++,C.trianglesFaces+=this._numEle/3,xt.mainContext.drawElements(4,this._numEle,5123,this._startIdx)),1},e.blend=function(){if(G.activeBlendFunction!==G.fns[this.blendType]){var t=xt.mainContext;t.enable(3042),G.fns[this.blendType](t),G.activeBlendFunction=G.fns[this.blendType]}},e.getRenderType=function(){return 0},e.releaseRender=function(){var e=t._cache;e[e._length++]=this},t.create=function(e,i,r,s,n,a){var h=t._cache._length?t._cache[--t._cache._length]:new t;return h._ib=i,h._vb=r,h.proName=a,h._startIdx=s*mt.BYTES_PIDX,h._numEle=0,h.blendType=e._nBlendType,h.shaderValue=n,h.shaderValue.setValue(e._shader2D),h},r(t,["_cache",function(){return this._cache=(t._cache=[],t._cache._length=0,t._cache)}]),t}(),ct=function(){function t(){this._sourceStr=null}s(t,"laya.webgl.text.CharSegment");var e=t.prototype;return i.imps(e,{"laya.webgl.text.ICharSegment":!0}),e.textToSpit=function(t){this._sourceStr=t},e.getChar=function(t){return this._sourceStr.charAt(t)},e.getCharCode=function(t){return this._sourceStr.charCodeAt(t)},e.length=function(){return this._sourceStr.length},t}(),ft=function(){var t;function e(){}return s(e,"laya.webgl.text.DrawText"),e.__init__=function(){e._charsTemp=new Array,e._drawValue=new t,e._charSeg=new ct},e.customCharSeg=function(t){e._charSeg=t},e.getChar=function(t,i,r){var s=zt.createOneChar(t,r);return-1!=i&&(e._charsCache[i]=s),s},e._drawSlow=function(t,i,r,s,n,a,h,l,o,u,_,c,f,d,m){var p,g,v=e._drawValue.value(a,l,o,u,f,d,m),x=0,b=0,T=e._charsTemp,y=0,A=NaN;if(s)for(T.length=s.length,x=0,b=s.length;x<b;x++)A=(g=s[x]).charNum+v.txtID,T[x]=p=e._charsCache[A]||e.getChar(g.char,A,v),p.active();else{var E=r instanceof laya.utils.WordText?r.toString():r;if(F.CharacterCache){e._charSeg.textToSpit(E);var S=e._charSeg.length();for(T.length=S,x=0,b=S;x<b;x++)A=e._charSeg.getCharCode(x)+v.txtID,T[x]=p=e._charsCache[A]||e.getChar(e._charSeg.getChar(x),A,v),p.active(),y+=p.cw}else T.length=0,(p=e.getChar(E,-1,v)).active(),y+=p.cw,T[0]=p}var R=0;null!==h&&"left"!==h&&(R=-("center"==h?y/2:y));var w,I,M=NaN,C=0;if(s)for(x=0,b=T.length;x<b;x++)(p=T[x]).isSpace||(g=s[x],M=p.borderSize,w=p.texture,i._drawText(w,_+R+g.x*f-M,c+g.y*d-M,w.width,w.height,n,0,0,0,0));else{for(x=0,b=T.length;x<b;x++)(p=T[x]).isSpace||(M=p.borderSize,w=p.texture,i._drawText(w,_+R-M,c-M,w.width,w.height,n,0,0,0,0),t&&((I=t[C++])||(I=t[C-1]=[]),I[0]=w,I[1]=R-M,I[2]=-M)),R+=p.cw;t&&(t.length=C)}},e._drawFast=function(t,e,i,r,s){for(var n,a,h=0,l=t.length;h<l;h++)(n=(a=t[h])[0]).active(),e._drawText(n,r+a[1],s+a[2],n.width,n.height,i,0,0,0,0)},e.drawText=function(t,r,s,n,a,h,l,o,u,_,c,d){if(void 0===d&&(d=0),!(r&&0===r.length||s&&0===s.length)){var m=n.a,p=n.d;(0!==n.b||0!==n.c)&&(m=p=1);var g=1!==m||1!==p;if(g&&i.stage.transform){var v=i.stage.transform;g=v.a===m&&v.d===p}else g=!1;if(g){var x=(n=n.copyTo(yt._tmpMatrix)).tx,b=n.ty;n.scale(1/m,1/p),n._checkTransform(),_*=m,c*=p,_+=x-n.tx,c+=b-n.ty}else m=p=1;if(s)e._drawSlow(null,t,r,s,n,a,h,l,o,u,_,c,m,p,d);else{if(null===r.toUpperCase){var T=m+1e5*p,y=r;return void(y.changed||y.id!==T?(y.id=T,y.changed=!1,e._drawSlow(y.save,t,r,s,n,a,h,l,o,u,_,c,m,p,d)):e._drawFast(y.save,t,n,_,c))}var A=r+a.toString()+l+o+u+m+p+h,E=e._textsCache[A];F.CharacterCache?E?e._drawFast(E,t,n,_,c):(e._textsCache.__length||(e._textsCache.__length=0),e._textsCache.__length>f.WebGLTextCacheCount&&(e._textsCache={},e._textsCache.__length=0,e._curPoolIndex=0),e._textCachesPool[e._curPoolIndex]?(E=e._textsCache[A]=e._textCachesPool[e._curPoolIndex]).length=0:e._textCachesPool[e._curPoolIndex]=E=e._textsCache[A]=[],e._textsCache.__length++,e._curPoolIndex++,e._drawSlow(E,t,r,s,n,a,h,l,o,u,_,c,m,p,d)):e._drawSlow(E,t,r,s,n,a,h,l,o,u,_,c,m,p,d)}}},e._charsTemp=null,e._textCachesPool=[],e._curPoolIndex=0,e._charsCache={},e._textsCache={},e._drawValue=null,e.d=[],e._charSeg=null,e.__init$=function(){t=function(){function t(){}return s(t,""),t.prototype.value=function(e,i,r,s,n,a,h){this.font=e,this.fillColor=i,this.borderColor=r,this.lineWidth=s,this.scaleX=n,this.scaleY=a,this.underLine=h;var l=e.toString()+n+a+s+i+r+h;return this.txtID=t._keymap[l],this.txtID||(this.txtID=1e-7*++t._keymapCount,t._keymap[l]=this.txtID),this},t.clear=function(){t._keymap={},t._keymapCount=1},t._keymap={},t._keymapCount=1,t}()},e}(),dt=function(){function t(e){this._index=0,this._size=14,this._italic=-2,t._cache2=t._cache2||[],this.setFont(e||"14px Arial")}s(t,"laya.webgl.text.FontInContext");var e=t.prototype;return e.setFont=function(e){var i=t._cache2[e];if(i)this._words=i[0],this._size=i[1];else{this._words=e.split(" ");for(var r=0,s=this._words.length;r<s;r++)if(this._words[r].indexOf("px")>0){this._index=r;break}this._size=parseInt(this._words[this._index]),t._cache2[e]=[this._words,this._size]}this._text=null,this._italic=-2},e.getItalic=function(){return-2===this._italic&&(this._italic=this.hasType("italic")),this._italic},e.hasType=function(t){for(var e=0,i=this._words.length;e<i;e++)if(this._words[e]===t)return e;return-1},e.removeType=function(t){for(var e=0,i=this._words.length;e<i;e++)if(this._words[e]===t){this._words.splice(e,1),this._index>e&&this._index--;break}this._text=null,this._italic=-2},e.copyTo=function(t){return t._text=this._text,t._size=this._size,t._index=this._index,t._words=this._words.slice(),t._italic=-2,t},e.toString=function(){return this._text?this._text:this._text=this._words.join(" ")},n(0,e,"size",function(){return this._size},function(t){this._size=t,this._words[this._index]=t+"px",this._text=null}),t.create=function(e){var i=t._cache[e];return i||(i=t._cache[e]=new t(e))},t._cache={},t._cache2=null,r(t,["EMPTY",function(){return this.EMPTY=new t}]),t}(),mt=function(){function t(){}return s(t,"laya.webgl.utils.CONST3D2D"),t._TMPARRAY=[],t._OFFSETX=0,t._OFFSETY=0,r(t,["BYTES_PE",function(){return this.BYTES_PE=Float32Array.BYTES_PER_ELEMENT},"BYTES_PIDX",function(){return this.BYTES_PIDX=Uint16Array.BYTES_PER_ELEMENT},"defaultMatrix4",function(){return this.defaultMatrix4=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},"defaultMinusYMatrix4",function(){return this.defaultMinusYMatrix4=[1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1]},"uniformMatrix3",function(){return this.uniformMatrix3=[1,0,0,0,0,1,0,0,0,0,1,0]}]),t}(),pt=function(){function t(){}return s(t,"laya.webgl.utils.GlUtils"),t.make2DProjection=function(t,e,i){return[2/t,0,0,0,0,-2/e,0,0,0,0,2/i,0,-1,1,0,1]},t.fillIBQuadrangle=function(t,e){if(e>65535/4)throw Error("IBQuadrangle count:"+e+" must<:"+Math.floor(65535/4));e=Math.floor(e),t._resizeBuffer(6*(e+1)*2,!1),t.byteLength=t.bufferLength;for(var i=t.getUint16Array(),r=0,s=0;s<e;s++)i[r++]=4*s,i[r++]=4*s+2,i[r++]=4*s+1,i[r++]=4*s,i[r++]=4*s+3,i[r++]=4*s+2;return t.setNeedUpload(),!0},t.expandIBQuadrangle=function(e,i){e.bufferLength>=6*i*2||t.fillIBQuadrangle(e,i)},t.mathCeilPowerOfTwo=function(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t},t.fillQuadrangleImgVb=function(t,e,i,r,s,n,a,h){"use strict";var l=16+(t._byteLength>>2);t.byteLength=l<<2;var o=t.getFloat32Array();o[(l-=16)+2]=s[0],o[l+3]=s[1],o[l+6]=s[2],o[l+7]=s[3],o[l+10]=s[4],o[l+11]=s[5],o[l+14]=s[6],o[l+15]=s[7];var u=n.a,_=n.b,c=n.c,f=n.d;if(1!==u||0!==_||0!==c||1!==f){n.bTransform=!0;var d=n.tx+a,m=n.ty+h;o[l]=(r[0]+e)*u+(r[1]+i)*c+d,o[l+1]=(r[0]+e)*_+(r[1]+i)*f+m,o[l+4]=(r[2]+e)*u+(r[3]+i)*c+d,o[l+5]=(r[2]+e)*_+(r[3]+i)*f+m,o[l+8]=(r[4]+e)*u+(r[5]+i)*c+d,o[l+9]=(r[4]+e)*_+(r[5]+i)*f+m,o[l+12]=(r[6]+e)*u+(r[7]+i)*c+d,o[l+13]=(r[6]+e)*_+(r[7]+i)*f+m}else n.bTransform=!1,e+=n.tx+a,i+=n.ty+h,o[l]=e+r[0],o[l+1]=i+r[1],o[l+4]=e+r[2],o[l+5]=i+r[3],o[l+8]=e+r[4],o[l+9]=i+r[5],o[l+12]=e+r[6],o[l+13]=i+r[7];return t._upload=!0,!0},t.fillTranglesVB=function(t,e,i,r,s,n,a){var h=(t._byteLength>>2)+r.length;t.byteLength=h<<2;var l=t.getFloat32Array();h-=r.length;for(var o=r.length,u=s.a,_=s.b,c=s.c,f=s.d,d=0;d<o;d+=4)if(l[h+d+2]=r[d+2],l[h+d+3]=r[d+3],1!==u||0!==_||0!==c||1!==f){s.bTransform=!0;var m=s.tx+n,p=s.ty+a;l[h+d]=(r[d]+e)*u+(r[d+1]+i)*c+m,l[h+d+1]=(r[d]+e)*_+(r[d+1]+i)*f+p}else s.bTransform=!1,e+=s.tx+n,i+=s.ty+a,l[h+d]=e+r[d],l[h+d+1]=i+r[d+1];return t._upload=!0,!0},t.copyPreImgVb=function(t,e,i){var r=t._byteLength>>2;t.byteLength=r+16<<2;for(var s=t.getFloat32Array(),n=0,a=r-16;n<4;n++)s[r]=s[a]+e,++a,s[++r]=s[a]+i,++a,s[++r]=s[a],++a,s[++r]=s[a],++r,++a;t._upload=!0},t.fillRectImgVb=function(t,e,i,r,s,n,a,h,l,o,u,_,c){void 0===c&&(c=!1);var f,d,m,p,g,v,x,b,T,y,A,E,S,R,w,I,M=1,C=h.a,L=h.b,P=h.c,F=h.d,D=e&&e.width<99999999;if(1!==C||0!==L||0!==P||1!==F?(h.bTransform=!0,0===L&&0===P&&(M=23,T=s+i,y=n+r,f=C*i+(A=h.tx+l),m=C*T+A,d=F*r+(E=h.ty+o),p=F*y+E)):(M=23,h.bTransform=!1,m=(f=i+h.tx+l)+s,p=(d=r+h.ty+o)+n),D&&(g=e.x,v=e.y,x=e.width+g,b=e.height+v),1!==M){if(Math.min(f,m)>=x)return!1;if(Math.min(d,p)>=b)return!1;if(Math.max(m,f)<=g)return!1;if(Math.max(p,d)<=v)return!1}var B=t._byteLength>>2;t.byteLength=B+16<<2;var N=t.getFloat32Array();switch(N[B+2]=a[0],N[B+3]=a[1],N[B+6]=a[2],N[B+7]=a[3],N[B+10]=a[4],N[B+11]=a[5],N[B+14]=a[6],N[B+15]=a[7],M){case 1:A=h.tx+l,E=h.ty+o;var O=C*i,V=P*r,U=F*r,k=L*i,H=C*(T=s+i),G=P*(y=n+r),z=F*y,W=L*T;c?(S=O+V+A,w=Math.round(S)-S,R=U+k+E,I=Math.round(R)-R,N[B]=S+w,N[B+1]=R+I,N[B+4]=H+V+A+w,N[B+5]=U+W+E+I,N[B+8]=H+G+A+w,N[B+9]=z+W+E+I,N[B+12]=O+G+A+w,N[B+13]=z+k+E+I):(N[B]=O+V+A,N[B+1]=U+k+E,N[B+4]=H+V+A,N[B+5]=U+W+E,N[B+8]=H+G+A,N[B+9]=z+W+E,N[B+12]=O+G+A,N[B+13]=z+k+E);break;case 23:c?(S=f+u,w=Math.round(S)-S,R=d,I=Math.round(R)-R,N[B]=S+w,N[B+1]=R+I,N[B+4]=m+u+w,N[B+5]=d+I,N[B+8]=m+w,N[B+9]=p+I,N[B+12]=f+w,N[B+13]=p+I):(N[B]=f+u,N[B+1]=d,N[B+4]=m+u,N[B+5]=d,N[B+8]=m,N[B+9]=p,N[B+12]=f,N[B+13]=p)}return t._upload=!0,!0},t.fillLineVb=function(e,i,r,s,n,a,h,l){"use strict";var o=.5*h,u=t._fillLineArray,_=-(s-a),c=r-n,f=Math.sqrt(_*_+c*c);_/=f,c/=f,_*=o,c*=o,u[0]=r-_,u[1]=s-c,u[4]=r+_,u[5]=s+c,u[8]=n+_,u[9]=a+c,u[12]=n-_,u[13]=a-c,l&&l.transformPointArray(u,u);var d=16+(e._byteLength>>2);return e.byteLength=d<<2,e.insertData(u,d-16),!0},r(t,["_fillLineArray",function(){return this._fillLineArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]),t}(),gt=(function(){function t(){}s(t,"laya.webgl.utils.MatirxArray"),t.ArrayMul=function(e,i,r){if(e)if(i)for(var s=NaN,n=NaN,a=NaN,h=NaN,l=0;l<4;l++)s=e[l],n=e[l+4],a=e[l+8],h=e[l+12],r[l]=s*i[0]+n*i[1]+a*i[2]+h*i[3],r[l+4]=s*i[4]+n*i[5]+a*i[6]+h*i[7],r[l+8]=s*i[8]+n*i[9]+a*i[10]+h*i[11],r[l+12]=s*i[12]+n*i[13]+a*i[14]+h*i[15];else t.copyArray(e,r);else t.copyArray(i,r)},t.copyArray=function(t,e){if(t&&e)for(var i=0;i<t.length;i++)e[i]=t[i]}}(),function(){function t(){}return s(t,"laya.webgl.utils.RenderState2D"),t.getMatrArray=function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},t.mat2MatArray=function(e,i){var r=e,s=i;return s[0]=r.a,s[1]=r.b,s[2]=t.EMPTYMAT4_ARRAY[2],s[3]=t.EMPTYMAT4_ARRAY[3],s[4]=r.c,s[5]=r.d,s[6]=t.EMPTYMAT4_ARRAY[6],s[7]=t.EMPTYMAT4_ARRAY[7],s[8]=t.EMPTYMAT4_ARRAY[8],s[9]=t.EMPTYMAT4_ARRAY[9],s[10]=t.EMPTYMAT4_ARRAY[10],s[11]=t.EMPTYMAT4_ARRAY[11],s[12]=r.tx,s[13]=r.ty,s[14]=t.EMPTYMAT4_ARRAY[14],s[15]=t.EMPTYMAT4_ARRAY[15],i},t.restoreTempArray=function(){t.TEMPMAT4_ARRAY[0]=1,t.TEMPMAT4_ARRAY[1]=0,t.TEMPMAT4_ARRAY[4]=0,t.TEMPMAT4_ARRAY[5]=1,t.TEMPMAT4_ARRAY[12]=0,t.TEMPMAT4_ARRAY[13]=0},t.clear=function(){t.worldScissorTest=!1,t.worldShaderDefines=null,t.worldFilters=null,t.worldAlpha=1,t.worldClipRect.x=t.worldClipRect.y=0,t.worldClipRect.width=t.width,t.worldClipRect.height=t.height,t.curRenderTarget=null},t._MAXSIZE=99999999,t.worldAlpha=1,t.worldScissorTest=!1,t.worldFilters=null,t.worldShaderDefines=null,t.curRenderTarget=null,t.width=0,t.height=0,r(t,["EMPTYMAT4_ARRAY",function(){return this.EMPTYMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},"TEMPMAT4_ARRAY",function(){return this.TEMPMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},"worldMatrix4",function(){return this.worldMatrix4=t.TEMPMAT4_ARRAY},"worldMatrix",function(){return this.worldMatrix=new b},"worldClipRect",function(){return this.worldClipRect=new y(0,0,99999999,99999999)}]),t}()),vt=function(){var t,e;function i(e,i,r,s,n){var a=this;function h(e){var i=[],r=new t(i);return a._compileToTree(r,e.split("\n"),0,i,n),r}var l=u.now();this._VS=h(i),this._PS=h(r),this._nameMap=s,u.now()-l>2&&console.log("ShaderCompile use time:"+(u.now()-l)+"  size:"+i.length+"/"+r.length)}s(i,"laya.webgl.utils.ShaderCompile");var n=i.prototype;return n._compileToTree=function(e,r,s,n,a){var h,l,o,u,_,c,f,d=0,m=0,p=0,g=0;for(m=s;m<r.length;m++)if(!((o=r[m]).length<1)&&0!==(d=o.indexOf("//"))){if(d>=0&&(o=o.substr(0,d)),h=f||new t(n),f=null,h.text=o,h.noCompile=!0,(d=o.indexOf("#"))>=0){for(u="#",g=d+1,p=o.length;g<p;g++){var v=o.charAt(g);if(" "===v||"\t"===v||"?"===v)break;u+=v}switch(h.name=u,u){case"#ifdef":case"#ifndef":if(h.src=o,h.noCompile=null!=o.match(/[!&|()=<>]/),h.noCompile?console.log("function():Boolean{return "+o.substr(d+h.name.length)+"}"):(c=o.replace(/^\s*/,"").split(/\s+/),h.setCondition(c[1],"#ifdef"===u?1:2),h.text="//"+h.text),h.setParent(e),e=h,a)for(c=o.substr(g).split(i._splitToWordExps3),g=0;g<c.length;g++)(o=c[g]).length&&(a[o]=!0);continue;case"#if":if(h.src=o,h.noCompile=!0,h.setParent(e),e=h,a)for(c=o.substr(g).split(i._splitToWordExps3),g=0;g<c.length;g++)(o=c[g]).length&&"defined"!=o&&(a[o]=!0);continue;case"#else":h.src=o,l=(e=e.parent).childs[e.childs.length-1],h.noCompile=l.noCompile,h.noCompile||(h.condition=l.condition,h.conditionType=1==l.conditionType?2:1,h.text="//"+h.text+" "+l.text+" "+h.conditionType),h.setParent(e),e=h;continue;case"#endif":l=(e=e.parent).childs[e.childs.length-1],h.noCompile=l.noCompile,h.noCompile||(h.text="//"+h.text),h.setParent(e);continue;case"#include":c=i.splitToWords(o,null);var x=i.includes[c[1]];if(!x)throw"ShaderCompile error no this include file:"+c[1];if((d=c[0].indexOf("?"))<0){h.setParent(e),o=x.getWith("with"==c[2]?c[3]:null),this._compileToTree(h,o.split("\n"),0,n,a),h.text="";continue}h.setCondition(c[0].substr(d+1),1),h.text=x.getWith("with"==c[2]?c[3]:null);break;case"#import":_=(c=i.splitToWords(o,null))[1],n.push({node:h,file:i.includes[_],ofs:h.text.length});continue}}else{if((l=e.childs[e.childs.length-1])&&!l.name){n.length>0&&i.splitToWords(o,l),f=h,l.text+="\n"+o;continue}n.length>0&&i.splitToWords(o,h)}h.setParent(e)}},n.createShader=function(t,e,i){var r={},s="";if(t)for(var n in t)s+="#define "+n+"\n",r[n]=!0;var a=this._VS.toscript(r,[]),h=this._PS.toscript(r,[]);return(i||Xt.create)(s+a.join("\n"),s+h.join("\n"),e,this._nameMap)},i._parseOne=function(t,e,r,s,n,a){var h={type:i.shaderParamsMap[r[s+1]],name:r[s+2],size:isNaN(parseInt(r[s+3]))?1:parseInt(r[s+3])};return a&&("attribute"==n?t.push(h):e.push(h)),":"==r[s+3]&&(h.type=r[s+4],s+=2),s+=2},i.addInclude=function(t,r){if(!r||0===r.length)throw new Error("add shader include file err:"+t);if(i.includes[t])throw new Error("add shader include file err, has add:"+t);i.includes[t]=new e(r)},i.preGetParams=function(t,e){var r=[t,e],s={},n=[],a=[],h={},l=[];s.attributes=n,s.uniforms=a,s.defines=h;for(var o=0,u=0,_=0;_<2;_++){r[_]=r[_].replace(i._removeAnnotation,"");var c,f=r[_].match(i._reg);for(o=0,u=f.length;o<u;o++){var d=f[o];if("attribute"==d||"uniform"==d)o=i._parseOne(n,a,f,o,d,!0);else{if("#define"==d){l[d=f[++o]]=1;continue}if("#ifdef"==d){h[c=f[++o]]=h[c]||[];for(o++;o<u;o++)if("attribute"==(d=f[o])||"uniform"==d)o=i._parseOne(n,a,f,o,d,l[c]);else if("#else"==d)for(o++;o<u;o++)if("attribute"==(d=f[o])||"uniform"==d)o=i._parseOne(n,a,f,o,d,!l[c]);else if("#endif"==d)break}}}}return s},i.splitToWords=function(t,e){for(var i,r,s=[],n=-1,a=0,h=t.length;a<h;a++)if(i=t.charAt(a)," \t=+-*/&%!<>()'\",;".indexOf(i)>=0){if(n>=0&&a-n>1&&(r=t.substr(n,a-n),s.push(r)),'"'==i||"'"==i){var l=t.indexOf(i,a+1);if(l<0)throw"Sharder err:"+t;s.push(t.substr(a+1,l-a-1)),a=l,n=-1;continue}"("==i&&e&&s.length>0&&(r=s[s.length-1]+";","vec4;main;".indexOf(r)<0&&(e.useFuns+=r)),n=-1}else n<0&&(n=a);return n<h&&h-n>1&&(r=t.substr(n,h-n),s.push(r)),s},i.IFDEF_NO=0,i.IFDEF_YES=1,i.IFDEF_ELSE=2,i.IFDEF_PARENT=3,i.includes={},r(i,["_removeAnnotation",function(){return this._removeAnnotation=new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)","g")},"_reg",function(){return this._reg=new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])","g")},"_splitToWordExps",function(){return this._splitToWordExps=new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])","g")},"shaderParamsMap",function(){return this.shaderParamsMap={float:5126,int:5124,bool:35670,vec2:35664,vec3:35665,vec4:35666,ivec2:35667,ivec3:35668,ivec4:35669,bvec2:35671,bvec3:35672,bvec4:35673,mat2:35674,mat3:35675,mat4:35676,sampler2D:35678,samplerCube:35680}},"_splitToWordExps3",function(){return this._splitToWordExps3=new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]","g")}]),i.__init$=function(){t=function(){function t(t){this.childs=[],this.text="",this.parent=null,this.name=null,this.noCompile=!1,this.includefiles=null,this.condition=null,this.conditionType=0,this.useFuns="",this.z=0,this.src=null,this.includefiles=t}s(t,"");var e=t.prototype;return e.setParent=function(t){t.childs.push(this),this.z=t.z+1,this.parent=t},e.setCondition=function(t,e){t&&(this.conditionType=e,t=t.replace(/(\s*$)/g,""),this.condition=function(){return this[t]},this.condition.__condition=t)},e.toscript=function(e,i){return this._toscript(e,i,++t.__id)},e._toscript=function(t,e,i){if(this.childs.length<1&&!this.text)return e;e.length;if(this.condition){var r=!!this.condition.call(t);if(2===this.conditionType&&(r=!r),!r)return e}if(this.text&&e.push(this.text),this.childs.length>0&&this.childs.forEach(function(r,s,n){r._toscript(t,e,i)}),this.includefiles.length>0&&this.useFuns.length>0)for(var s,n=0,a=this.includefiles.length;n<a;n++)this.includefiles[n].curUseID!=i&&(s=this.includefiles[n].file.getFunsScript(this.useFuns)).length>0&&(this.includefiles[n].curUseID=i,e[0]=s+e[0]);return e},t.__id=1,t}(),e=function(){function t(t){this.script=null,this.codes={},this.funs={},this.curUseID=-1,this.funnames="",this.script=t;for(var e=0,r=0,s=0;!((e=t.indexOf("#begin",e))<0);){for(s=e+5;!((s=t.indexOf("#end",s))<0)&&"i"===t.charAt(s+4);)s+=5;if(s<0)throw"add include err,no #end:"+t;r=t.indexOf("\n",e);var n=i.splitToWords(t.substr(e,r-e),null);"code"==n[1]?this.codes[n[2]]=t.substr(r+1,s-r-1):"function"==n[1]&&(r=t.indexOf("function",e),r+="function".length,this.funs[n[3]]=t.substr(r+1,s-r-1),this.funnames+=n[3]+";"),e=s+1}}s(t,"");var e=t.prototype;return e.getWith=function(t){var e=t?this.codes[t]:this.script;if(!e)throw"get with error:"+t;return e},e.getFunsScript=function(t){var e="";for(var i in this.funs)t.indexOf(i+";")>=0&&(e+=this.funs[i]);return e},t}()},i}(),xt=function(){function t(){}return s(t,"laya.webgl.WebGL"),t._uint8ArraySlice=function(){for(var t=this.length,e=new Uint8Array(this.length),i=0;i<t;i++)e[i]=this[i];return e},t._float32ArraySlice=function(){for(var t=this.length,e=new Float32Array(this.length),i=0;i<t;i++)e[i]=this[i];return e},t._uint16ArraySlice=function(t){var e,i=arguments,r=0,s=0;if(0===i.length)for(r=this.length,e=new Uint16Array(r),s=0;s<r;s++)e[s]=this[s];else if(2===i.length){var n=i[0],a=i[1];if(a>n)for(r=a-n,e=new Uint16Array(r),s=n;s<a;s++)e[s-n]=this[s];else e=new Uint16Array(0)}return e},t.expandContext=function(){var t=d.prototype,e=CanvasRenderingContext2D.prototype;e.fillTrangles=t.fillTrangles,Kt.__int__(null),e.setIBVB=function(t,e,i,r,s,n,a,h,l,o){void 0===l&&(l=0),void 0===o&&(o=0),null===i&&(this._ib=this._ib||qt.QuadrangleIB,i=this._ib,pt.expandIBQuadrangle(i,r._byteLength/64+8)),this._setIBVB(t,e,i,r,s,n,a,h,l,o)},e.fillTrangles=function(t,e,i,r,s){this._curMat=this._curMat||b.create(),this._vb=this._vb||jt.create(),this._ib||(this._ib=qt.create(),pt.fillIBQuadrangle(this._ib,a/4));var n=this._vb,a=r.length>>4;pt.fillTranglesVB(n,e,i,r,s||this._curMat,0,0),pt.expandIBQuadrangle(this._ib,n._byteLength/64+8);var h=new At(1,0);h.textureHost=t;var l=new Zt("attribute vec2 position; attribute vec2 texcoord; uniform vec2 size; uniform mat4 mmat; varying vec2 v_texcoord; void main() { vec4 p=vec4(position.xy,0.0,1.0);vec4 pos=mmat*p; gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0); v_texcoord = texcoord; }","precision mediump float; varying vec2 v_texcoord; uniform sampler2D texture; void main() {vec4 color= texture2D(texture, v_texcoord); color.a*=1.0; gl_FragColor= color;}");n._vertType=3,this._setIBVB(e,i,this._ib,n,6*a,s,l,h,0,0)}},t.enable=function(){if(u.__init__(),A.isConchApp&&!A.isConchWebGL)return w.skinAniSprite=function(){return new tt},t.expandContext(),!1;if(w.getWebGLContext=function(t){for(var e,i=["webgl","experimental-webgl","webkit-3d","moz-webgl"],r=0;r<i.length;r++){try{e=t.getContext(i[r],{stencil:f.isStencil,alpha:f.isAlpha,antialias:f.isAntialias,premultipliedAlpha:f.premultipliedAlpha,preserveDrawingBuffer:f.preserveDrawingBuffer})}catch(t){}if(e)return e}return null},t.mainContext=w.getWebGLContext(A._mainCanvas),null==t.mainContext)return!1;if(A.isWebGL)return!0;v.create=function(t,e){return new $t(t,e)},x.create=function(t,e,i,r,s,n,a){return new Yt(t,e,i,r,s,n,a)},A.WebGL=t,A.isWebGL=!0,ft.__init__(),w.createRenderSprite=function(t,e){return new Et(t,e)},w.createWebGLContext2D=function(t){return new yt(t)},w.changeWebGLSize=function(t,e){laya.webgl.WebGL.onStageResize(t,e)},w.createGraphics=function(){return new Tt};var e=w.createFilterAction;return w.createFilterAction=e||function(t){return new St},w.clear=function(t){gt.worldScissorTest&&laya.webgl.WebGL.mainContext.disable(3089);var e=A.context.ctx,i=0==e._submits._length||f.preserveDrawingBuffer?c.create(t)._color:M._wgColor;i&&e.clearBG(i[0],i[1],i[2],i[3]),gt.clear()},w.addToAtlas=function(t,e){void 0===e&&(e=!1);var r=t.bitmap;A.optimizeTextureMemory(t.url,t)?i.__typeof(r,"laya.webgl.resource.IMergeAtlasBitmap")&&r.allowMerageInAtlas&&r.on("recovered",t,t.addTextureToAtlas):r.enableMerageInAtlas=!1},w.isAtlas=function(t){return t instanceof laya.webgl.atlas.AtlasWebGLCanvas},k._enable(),w.beginFlush=function(){for(var t=k.instance,e=t.getAtlaserCount(),i=0;i<e;i++){var r=t.getAtlaserByIndex(i).texture;r._flashCacheImageNeedFlush&&w.flashFlushImage(r)}},w.drawToCanvas=function(t,e,i,r,s,n){s-=t.x,n-=t.y;var a=Dt.create(i,r,6408,5121,0,!1);a.start(),a.clear(0,0,0,0),A.context.clear(),E.renders[e]._fun(t,A.context,s,gt.height-r+n),A.context.flush(),a.end();var h=a.getData(0,0,a.width,a.height);a.recycle();var l=new Gt;l._canvas=u.createElement("canvas"),l.size(i,r);var o=l._canvas.getContext("2d");u.canvas.size(i,r);var _=u.context,c=_.createImageData(i,r);return c.data.set(new Uint8ClampedArray(h.buffer)),l._imgData=c,_.putImageData(c,0,0),o.save(),o.translate(0,r),o.scale(1,-1),o.drawImage(u.canvas.source,0,0),o.restore(),l},w.createFilterAction=function(t){var e;switch(t){case 32:e=new St}return e},w.addTextureToAtlas=function(t){t._uvID++,k._atlasRestore++,t.bitmap.enableMerageInAtlas&&k.instance.addToAtlas(t)},w.getTexturePixels=function(t,e,i,r,s){A.context.ctx.clear();var n=new I;n.graphics.drawTexture(t,-e,-i);var a=Dt.create(r,s);a.start(),a.clear(0,0,0,0),n.render(A.context,0,0),A.context.ctx.flush(),a.end();for(var h=a.getData(0,0,r,s),l=[],o=0,u=s-1;u>=0;u--)for(var _=0;_<r;_++)o=4*(u*r+_),l.push(h[o]),l.push(h[o+1]),l.push(h[o+2]),l.push(h[o+3]);return l},w.skinAniSprite=function(){return new tt},m._filterStart=function(t,e,i,r,s){var n=t.getValue("bounds"),a=Dt.create(n.width,n.height);if(a.start(),a.clear(0,0,0,0),t.addValue("src",a),t.addValue("ScissorTest",gt.worldScissorTest),gt.worldScissorTest){var h=new y;h.copyFrom(i.ctx._clipRect),t.addValue("clipRect",h),gt.worldScissorTest=!1,laya.webgl.WebGL.mainContext.disable(3089)}},m._filterEnd=function(t,e,i,r,s){var n=t.getValue("bounds");t.getValue("src").end();var a=Dt.create(n.width,n.height);a.start(),a.clear(0,0,0,0),t.addValue("out",a),e._set$P("_filterCache",a),e._set$P("_isHaveGlowFilter",t.getValue("_isHaveGlowFilter"))},m._EndTarget=function(t,e){if(t.getValue("src").recycle(),t.getValue("out").end(),t.getValue("ScissorTest")){gt.worldScissorTest=!0,laya.webgl.WebGL.mainContext.enable(3089),e.ctx.save();var i=t.getValue("clipRect");e.ctx.clipRect(i.x,i.y,i.width,i.height)}},m._useSrc=function(t){var e=t.getValue("out");e.end(),(e=t.getValue("src")).start(),e.clear(0,0,0,0)},m._endSrc=function(t){t.getValue("src").end()},m._useOut=function(t){var e=t.getValue("src");e.end(),(e=t.getValue("out")).start(),e.clear(0,0,0,0)},m._endOut=function(t){t.getValue("out").end()},m._recycleScope=function(t){t.recycle()},m._filter=function(t,e,i,r){var s=this._next;if(s){var n,a,h=t.filters,l=h.length;if(1==l&&32==h[0].type)return e.ctx.save(),e.ctx.setFilters([h[0]]),s._fun.call(s,t,e,i,r),void e.ctx.restore();var o=ht.create(),u=T.TEMP,_=e.ctx._getTransformMatrix(),c=b.create();_.copyTo(c);var f=0,d=0,p=!1,g=t._$P._filterCache?t._$P._filterCache:null;if(!g||t._repaint){p=t._isHaveGlowFilter(),o.addValue("_isHaveGlowFilter",p),p&&(f=50,d=25),(a=new y).copyFrom(t.getSelfBounds()),a.x+=t.x,a.y+=t.y,a.x-=t.pivotX+4,a.y-=t.pivotY+4;var v=a.x,x=a.y;if(a.width+=f+8,a.height+=f+8,u.x=a.x*c.a+a.y*c.c,u.y=a.y*c.d+a.x*c.b,a.x=u.x,a.y=u.y,u.x=a.width*c.a+a.height*c.c,u.y=a.height*c.d+a.width*c.b,a.width=u.x,a.height=u.y,a.width<=0||a.height<=0)return;g&&g.recycle(),o.addValue("bounds",a);var A=at.create([o,t,e,0,0],m._filterStart);e.addRenderObject(A),e.ctx._renderKey=0,e.ctx._shader2D.glTexture=null;var E=t.x-v+d,S=t.y-x+d;s._fun.call(s,t,e,E,S),A=at.create([o,t,e,0,0],m._filterEnd),e.addRenderObject(A);for(var R=0;R<l;R++){0!=R&&(A=at.create([o],m._useSrc),e.addRenderObject(A),n=At.create(1,0),b.TEMP.identity(),e.ctx.drawTarget(o,0,0,a.width,a.height,b.TEMP,"out",n,null,G.TOINT.overlay),A=at.create([o],m._useOut),e.addRenderObject(A)),h[R].action.apply3d(o,t,e,0,0)}A=at.create([o,e],m._EndTarget),e.addRenderObject(A)}else{if((p=!!t._$P._isHaveGlowFilter&&t._$P._isHaveGlowFilter)&&(f=50,d=25),(a=t.getBounds()).width<=0||a.height<=0)return;a.width+=f,a.height+=f,u.x=a.x*c.a+a.y*c.c,u.y=a.y*c.d+a.x*c.b,a.x=u.x,a.y=u.y,u.x=a.width*c.a+a.height*c.c,u.y=a.height*c.d+a.width*c.b,a.width=u.x,a.height=u.y,o.addValue("out",g)}i=i-d-t.x,r=r-d-t.y,u.setTo(i,r),c.transformPoint(u),i=u.x+a.x,r=u.y+a.y,n=At.create(1,0),b.TEMP.identity(),e.ctx.drawTarget(o,i,r,a.width,a.height,b.TEMP,"out",n,null,G.TOINT.overlay),A=at.create([o],m._recycleScope),e.addRenderObject(A),c.destroy()}},Float32Array.prototype.slice||(Float32Array.prototype.slice=t._float32ArraySlice),Uint16Array.prototype.slice||(Uint16Array.prototype.slice=t._uint16ArraySlice),Uint8Array.prototype.slice||(Uint8Array.prototype.slice=t._uint8ArraySlice),!0},t.onStageResize=function(e,i){null!=t.mainContext&&(t.mainContext.viewport(0,0,e,i),gt.width=e,gt.height=i)},t.onInvalidGLRes=function(){k.instance.freeAll(),R.releaseContentManagers(!0),t.doNodeRepaint(i.stage),t.mainContext.viewport(0,0,gt.width,gt.height),i.stage.event("devicelost")},t.doNodeRepaint=function(e){0==e.numChildren&&e.repaint();for(var i=0;i<e.numChildren;i++)t.doNodeRepaint(e.getChildAt(i))},t.init=function(e,i,r){t.mainCanvas=e,g._createContext=function(t){return new yt(t)};var s=laya.webgl.WebGL.mainContext;if(null!=s.getShaderPrecisionFormat){var n=s.getShaderPrecisionFormat(35633,36338),a=s.getShaderPrecisionFormat(35632,36338);t.shaderHighPrecision=!(!n.precision||!a.precision)}else t.shaderHighPrecision=!1;if(t.compressAstc=s.getExtension("WEBGL_compressed_texture_astc"),t.compressAtc=s.getExtension("WEBGL_compressed_texture_atc"),t.compressEtc=s.getExtension("WEBGL_compressed_texture_etc"),t.compressEtc1=s.getExtension("WEBGL_compressed_texture_etc1"),t.compressPvrtc=s.getExtension("WEBGL_compressed_texture_pvrtc"),t.compressS3tc=s.getExtension("WEBGL_compressed_texture_s3tc"),t.compressS3tc_srgb=s.getExtension("WEBGL_compressed_texture_s3tc_srgb"),s.deleteTexture1=s.deleteTexture,s.deleteTexture=function(t){t==bt.curBindTexValue&&(bt.curBindTexValue=null),s.deleteTexture1(t)},t.onStageResize(i,r),null==t.mainContext)throw new Error("webGL getContext err!");P.__init__(),k.__init__(),wt.__init__(),nt.__init__(),yt.__init__(),At.__init__(),$.__init__(),Kt.__int__(s),G._init_(s),A.isConchApp&&conch.setOnInvalidGLRes(t.onInvalidGLRes)},t.compressAstc=null,t.compressAtc=null,t.compressEtc=null,t.compressEtc1=null,t.compressPvrtc=null,t.compressS3tc=null,t.compressS3tc_srgb=null,t.mainCanvas=null,t.mainContext=null,t.antialias=!0,t.shaderHighPrecision=!1,r(t,["_bg_null",function(){return this._bg_null=[0,0,0,0]}]),t}(),bt=function(){function t(){}return s(t,"laya.webgl.WebGLContext"),t.UseProgram=function(e){return t._useProgram!==e&&(xt.mainContext.useProgram(e),t._useProgram=e,!0)},t.setDepthTest=function(e,i){i!==t._depthTest&&(t._depthTest=i,i?e.enable(2929):e.disable(2929))},t.setDepthMask=function(e,i){i!==t._depthMask&&(t._depthMask=i,e.depthMask(i))},t.setDepthFunc=function(e,i){i!==t._depthFunc&&(t._depthFunc=i,e.depthFunc(i))},t.setBlend=function(e,i){i!==t._blend&&(t._blend=i,i?e.enable(3042):e.disable(3042))},t.setBlendFunc=function(e,i,r){(i!==t._sFactor||r!==t._dFactor)&&(t._sFactor=i,t._dFactor=r,e.blendFunc(i,r))},t.setCullFace=function(e,i){i!==t._cullFace&&(t._cullFace=i,i?e.enable(2884):e.disable(2884))},t.setFrontFace=function(e,i){i!==t._frontFace&&(t._frontFace=i,e.frontFace(i))},t.bindTexture=function(e,i,r){e.bindTexture(i,r),t.curBindTexTarget=i,t.curBindTexValue=r},t.DEPTH_BUFFER_BIT=256,t.STENCIL_BUFFER_BIT=1024,t.COLOR_BUFFER_BIT=16384,t.POINTS=0,t.LINES=1,t.LINE_LOOP=2,t.LINE_STRIP=3,t.TRIANGLES=4,t.TRIANGLE_STRIP=5,t.TRIANGLE_FAN=6,t.ZERO=0,t.ONE=1,t.SRC_COLOR=768,t.ONE_MINUS_SRC_COLOR=769,t.SRC_ALPHA=770,t.ONE_MINUS_SRC_ALPHA=771,t.DST_ALPHA=772,t.ONE_MINUS_DST_ALPHA=773,t.DST_COLOR=774,t.ONE_MINUS_DST_COLOR=775,t.SRC_ALPHA_SATURATE=776,t.FUNC_ADD=32774,t.BLEND_EQUATION=32777,t.BLEND_EQUATION_RGB=32777,t.BLEND_EQUATION_ALPHA=34877,t.FUNC_SUBTRACT=32778,t.FUNC_REVERSE_SUBTRACT=32779,t.BLEND_DST_RGB=32968,t.BLEND_SRC_RGB=32969,t.BLEND_DST_ALPHA=32970,t.BLEND_SRC_ALPHA=32971,t.CONSTANT_COLOR=32769,t.ONE_MINUS_CONSTANT_COLOR=32770,t.CONSTANT_ALPHA=32771,t.ONE_MINUS_CONSTANT_ALPHA=32772,t.BLEND_COLOR=32773,t.ARRAY_BUFFER=34962,t.ELEMENT_ARRAY_BUFFER=34963,t.ARRAY_BUFFER_BINDING=34964,t.ELEMENT_ARRAY_BUFFER_BINDING=34965,t.STREAM_DRAW=35040,t.STATIC_DRAW=35044,t.DYNAMIC_DRAW=35048,t.BUFFER_SIZE=34660,t.BUFFER_USAGE=34661,t.CURRENT_VERTEX_ATTRIB=34342,t.FRONT=1028,t.BACK=1029,t.CULL_FACE=2884,t.FRONT_AND_BACK=1032,t.BLEND=3042,t.DITHER=3024,t.STENCIL_TEST=2960,t.DEPTH_TEST=2929,t.SCISSOR_TEST=3089,t.POLYGON_OFFSET_FILL=32823,t.SAMPLE_ALPHA_TO_COVERAGE=32926,t.SAMPLE_COVERAGE=32928,t.NO_ERROR=0,t.INVALID_ENUM=1280,t.INVALID_VALUE=1281,t.INVALID_OPERATION=1282,t.OUT_OF_MEMORY=1285,t.CW=2304,t.CCW=2305,t.LINE_WIDTH=2849,t.ALIASED_POINT_SIZE_RANGE=33901,t.ALIASED_LINE_WIDTH_RANGE=33902,t.CULL_FACE_MODE=2885,t.FRONT_FACE=2886,t.DEPTH_RANGE=2928,t.DEPTH_WRITEMASK=2930,t.DEPTH_CLEAR_VALUE=2931,t.DEPTH_FUNC=2932,t.STENCIL_CLEAR_VALUE=2961,t.STENCIL_FUNC=2962,t.STENCIL_FAIL=2964,t.STENCIL_PASS_DEPTH_FAIL=2965,t.STENCIL_PASS_DEPTH_PASS=2966,t.STENCIL_REF=2967,t.STENCIL_VALUE_MASK=2963,t.STENCIL_WRITEMASK=2968,t.STENCIL_BACK_FUNC=34816,t.STENCIL_BACK_FAIL=34817,t.STENCIL_BACK_PASS_DEPTH_FAIL=34818,t.STENCIL_BACK_PASS_DEPTH_PASS=34819,t.STENCIL_BACK_REF=36003,t.STENCIL_BACK_VALUE_MASK=36004,t.STENCIL_BACK_WRITEMASK=36005,t.VIEWPORT=2978,t.SCISSOR_BOX=3088,t.COLOR_CLEAR_VALUE=3106,t.COLOR_WRITEMASK=3107,t.UNPACK_ALIGNMENT=3317,t.PACK_ALIGNMENT=3333,t.MAX_TEXTURE_SIZE=3379,t.MAX_VIEWPORT_DIMS=3386,t.SUBPIXEL_BITS=3408,t.RED_BITS=3410,t.GREEN_BITS=3411,t.BLUE_BITS=3412,t.ALPHA_BITS=3413,t.DEPTH_BITS=3414,t.STENCIL_BITS=3415,t.POLYGON_OFFSET_UNITS=10752,t.POLYGON_OFFSET_FACTOR=32824,t.TEXTURE_BINDING_2D=32873,t.SAMPLE_BUFFERS=32936,t.SAMPLES=32937,t.SAMPLE_COVERAGE_VALUE=32938,t.SAMPLE_COVERAGE_INVERT=32939,t.NUM_COMPRESSED_TEXTURE_FORMATS=34466,t.COMPRESSED_TEXTURE_FORMATS=34467,t.DONT_CARE=4352,t.FASTEST=4353,t.NICEST=4354,t.GENERATE_MIPMAP_HINT=33170,t.BYTE=5120,t.UNSIGNED_BYTE=5121,t.SHORT=5122,t.UNSIGNED_SHORT=5123,t.INT=5124,t.UNSIGNED_INT=5125,t.FLOAT=5126,t.DEPTH_COMPONENT=6402,t.ALPHA=6406,t.RGB=6407,t.RGBA=6408,t.LUMINANCE=6409,t.LUMINANCE_ALPHA=6410,t.UNSIGNED_SHORT_4_4_4_4=32819,t.UNSIGNED_SHORT_5_5_5_1=32820,t.UNSIGNED_SHORT_5_6_5=33635,t.FRAGMENT_SHADER=35632,t.VERTEX_SHADER=35633,t.MAX_VERTEX_ATTRIBS=34921,t.MAX_VERTEX_UNIFORM_VECTORS=36347,t.MAX_VARYING_VECTORS=36348,t.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661,t.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660,t.MAX_TEXTURE_IMAGE_UNITS=34930,t.MAX_FRAGMENT_UNIFORM_VECTORS=36349,t.SHADER_TYPE=35663,t.DELETE_STATUS=35712,t.LINK_STATUS=35714,t.VALIDATE_STATUS=35715,t.ATTACHED_SHADERS=35717,t.ACTIVE_UNIFORMS=35718,t.ACTIVE_ATTRIBUTES=35721,t.SHADING_LANGUAGE_VERSION=35724,t.CURRENT_PROGRAM=35725,t.NEVER=512,t.LESS=513,t.EQUAL=514,t.LEQUAL=515,t.GREATER=516,t.NOTEQUAL=517,t.GEQUAL=518,t.ALWAYS=519,t.KEEP=7680,t.REPLACE=7681,t.INCR=7682,t.DECR=7683,t.INVERT=5386,t.INCR_WRAP=34055,t.DECR_WRAP=34056,t.VENDOR=7936,t.RENDERER=7937,t.VERSION=7938,t.NEAREST=9728,t.LINEAR=9729,t.NEAREST_MIPMAP_NEAREST=9984,t.LINEAR_MIPMAP_NEAREST=9985,t.NEAREST_MIPMAP_LINEAR=9986,t.LINEAR_MIPMAP_LINEAR=9987,t.TEXTURE_MAG_FILTER=10240,t.TEXTURE_MIN_FILTER=10241,t.TEXTURE_WRAP_S=10242,t.TEXTURE_WRAP_T=10243,t.TEXTURE_2D=3553,t.TEXTURE=5890,t.TEXTURE_CUBE_MAP=34067,t.TEXTURE_BINDING_CUBE_MAP=34068,t.TEXTURE_CUBE_MAP_POSITIVE_X=34069,t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070,t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071,t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072,t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073,t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074,t.MAX_CUBE_MAP_TEXTURE_SIZE=34076,t.TEXTURE0=33984,t.TEXTURE1=33985,t.TEXTURE2=33986,t.TEXTURE3=33987,t.TEXTURE4=33988,t.TEXTURE5=33989,t.TEXTURE6=33990,t.TEXTURE7=33991,t.TEXTURE8=33992,t.TEXTURE9=33993,t.TEXTURE10=33994,t.TEXTURE11=33995,t.TEXTURE12=33996,t.TEXTURE13=33997,t.TEXTURE14=33998,t.TEXTURE15=33999,t.TEXTURE16=34e3,t.TEXTURE17=34001,t.TEXTURE18=34002,t.TEXTURE19=34003,t.TEXTURE20=34004,t.TEXTURE21=34005,t.TEXTURE22=34006,t.TEXTURE23=34007,t.TEXTURE24=34008,t.TEXTURE25=34009,t.TEXTURE26=34010,t.TEXTURE27=34011,t.TEXTURE28=34012,t.TEXTURE29=34013,t.TEXTURE30=34014,t.TEXTURE31=34015,t.ACTIVE_TEXTURE=34016,t.REPEAT=10497,t.CLAMP_TO_EDGE=33071,t.MIRRORED_REPEAT=33648,t.FLOAT_VEC2=35664,t.FLOAT_VEC3=35665,t.FLOAT_VEC4=35666,t.INT_VEC2=35667,t.INT_VEC3=35668,t.INT_VEC4=35669,t.BOOL=35670,t.BOOL_VEC2=35671,t.BOOL_VEC3=35672,t.BOOL_VEC4=35673,t.FLOAT_MAT2=35674,t.FLOAT_MAT3=35675,t.FLOAT_MAT4=35676,t.SAMPLER_2D=35678,t.SAMPLER_CUBE=35680,t.VERTEX_ATTRIB_ARRAY_ENABLED=34338,t.VERTEX_ATTRIB_ARRAY_SIZE=34339,t.VERTEX_ATTRIB_ARRAY_STRIDE=34340,t.VERTEX_ATTRIB_ARRAY_TYPE=34341,t.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922,t.VERTEX_ATTRIB_ARRAY_POINTER=34373,t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975,t.COMPILE_STATUS=35713,t.LOW_FLOAT=36336,t.MEDIUM_FLOAT=36337,t.HIGH_FLOAT=36338,t.LOW_INT=36339,t.MEDIUM_INT=36340,t.HIGH_INT=36341,t.FRAMEBUFFER=36160,t.RENDERBUFFER=36161,t.RGBA4=32854,t.RGB5_A1=32855,t.RGB565=36194,t.DEPTH_COMPONENT16=33189,t.STENCIL_INDEX=6401,t.STENCIL_INDEX8=36168,t.DEPTH_STENCIL=34041,t.RENDERBUFFER_WIDTH=36162,t.RENDERBUFFER_HEIGHT=36163,t.RENDERBUFFER_INTERNAL_FORMAT=36164,t.RENDERBUFFER_RED_SIZE=36176,t.RENDERBUFFER_GREEN_SIZE=36177,t.RENDERBUFFER_BLUE_SIZE=36178,t.RENDERBUFFER_ALPHA_SIZE=36179,t.RENDERBUFFER_DEPTH_SIZE=36180,t.RENDERBUFFER_STENCIL_SIZE=36181,t.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048,t.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049,t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050,t.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051,t.COLOR_ATTACHMENT0=36064,t.DEPTH_ATTACHMENT=36096,t.STENCIL_ATTACHMENT=36128,t.DEPTH_STENCIL_ATTACHMENT=33306,t.NONE=0,t.FRAMEBUFFER_COMPLETE=36053,t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054,t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055,t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057,t.FRAMEBUFFER_UNSUPPORTED=36061,t.FRAMEBUFFER_BINDING=36006,t.RENDERBUFFER_BINDING=36007,t.MAX_RENDERBUFFER_SIZE=34024,t.INVALID_FRAMEBUFFER_OPERATION=1286,t.UNPACK_FLIP_Y_WEBGL=37440,t.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441,t.CONTEXT_LOST_WEBGL=37442,t.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443,t.BROWSER_DEFAULT_WEBGL=37444,t._useProgram=null,t._depthTest=!0,t._depthMask=!0,t._blend=!1,t._cullFace=!1,t.curBindTexTarget=null,t.curBindTexValue=null,r(t,["_depthFunc",function(){return this._depthFunc=513},"_sFactor",function(){return this._sFactor=1},"_dFactor",function(){return this._dFactor=0},"_frontFace",function(){return this._frontFace=2305}]),t}(),Tt=function(t){function e(){e.__super.call(this)}s(e,"laya.webgl.display.GraphicsGL",p);var i=e.prototype;return i.setShader=function(t){this._saveToCmd(A.context._setShader,[t])},i.setIBVB=function(t,e,i,r,s,n){this._saveToCmd(A.context._setIBVB,[t,e,i,r,s,n])},i.drawParticle=function(t,e,i){var r=w.createParticleTemplate2D(i);r.x=t,r.y=e,this._saveToCmd(A.context._drawParticle,[r])},e}(),yt=function(t){var e;function a(t){this._x=0,this._y=0,this._id=++a._COUNT,this._path=null,this._drawCount=1,this._maxNumEle=0,this._clear=!1,this._isMain=!1,this._atlasResourceChange=0,this._submits=null,this._curSubmit=null,this._ib=null,this._vb=null,this._nBlendType=0,this._saveMark=null,this._shader2D=null,this.mId=-1,this.mHaveKey=!1,this.mHaveLineKey=!1,this.mX=0,this.mY=0,a.__super.call(this),this._width=99999999,this._height=99999999,this._clipRect=a.MAXCLIPRECT,this.mOutPoint,this._canvas=t,a._contextcount++,A.isFlash?(this._ib=qt.create(35044),pt.fillIBQuadrangle(this._ib,16)):this._ib=qt.QuadrangleIB,this.clear()}s(a,"laya.webgl.canvas.WebGLContext2D",d);var h=a.prototype;return h.setIsMainContext=function(){this._isMain=!0},h.clearBG=function(t,e,i,r){var s=xt.mainContext;s.clearColor(t,e,i,r),s.clear(16384)},h._getSubmits=function(){return this._submits},h._releaseMem=function(){if(this._submits){this._curMat.destroy(),this._curMat=null,this._shader2D.destroy(),this._shader2D=null;for(var t=0,e=this._submits._length;t<e;t++)this._submits[t].releaseRender();this._submits.length=0,this._submits._length=0,this._submits=null,this._curSubmit=null,this._path&&this._path.recover(),this._path=null,this._other&&(this._other.font=null),this._save=null,this._vb&&(this._vb.releaseResource(),this._vb.destroy(),this._vb.destory(),this._vb=null)}},h.destroy=function(){--a._contextcount,this.sprite=null,this._releaseMem(),this._targets&&this._targets.destroy(),this._targets=null,this._canvas=null,this._ib&&this._ib!=qt.QuadrangleIB&&this._ib.releaseResource()},h.clear=function(){this._submits||(this._other=e.DEFAULT,this._curMat=b.create(),this._vb=jt.create(-1),this._submits=[],this._save=[Q.Create(this)],this._save.length=10,this._shader2D=new $),this._vb.clear(),this._targets&&(this._targets.repaint=!0),this._other=e.DEFAULT,this._clear=!0,this._repaint=!1,this._drawCount=1,this._renderKey=0,this._other.lineWidth=this._shader2D.ALPHA=1,this._nBlendType=0,this._clipRect=a.MAXCLIPRECT,this._curSubmit=nt.RENDERBASE,this._shader2D.glTexture=null,this._shader2D.fillStyle=this._shader2D.strokeStyle=z.DEFAULT;for(var t=0,i=this._submits._length;t<i;t++)this._submits[t].releaseRender();this._submits._length=0,this._curMat.identity(),this._other.clear(),this._saveMark=this._save[0],this._save._length=1},h.size=function(t,e){if(this._width!=t||this._height!=e)if(0==t||0==e){0!=this._vb._byteLength&&(this._width=t,this._height=e,this._vb.clear(),this._vb.upload());for(var i=0,r=this._submits._length;i<r;i++)this._submits[i].releaseRender();this._submits.length=0,this._submits._length=0,this._curSubmit=null,this._path&&this._path.recover(),this._path=null,this.sprite=null,this._targets&&this._targets.destroy(),this._targets=null}else this._width=t,this._height=e,this._targets&&this._targets.size(t,e),this._canvas.memorySize-=this._canvas.memorySize;0===t&&0===e&&this._releaseMem()},h._getTransformMatrix=function(){return this._curMat},h.translate=function(t,e){0===t&&0===e||(q.save(this),this._curMat.bTransform&&(Z.save(this),this._curMat.transformPointN(T.TEMP.setTo(t,e)),t=T.TEMP.x,e=T.TEMP.y),this._x+=t,this._y+=e)},h.save=function(){this._save[this._save._length++]=Q.Create(this)},h.restore=function(){var t=this._save._length;if(!(t<1))for(var e=t-1;e>=0;e--){var i=this._save[e];if(i.restore(this),i.isSaveMark())return void(this._save._length=e)}},h._fillText=function(t,e,i,r,s,n,a,h,l,o){void 0===o&&(o=0);var u=this._shader2D,_=this._curSubmit.shaderValue,f=s?dt.create(s):this._other.font;if(k.enabled)u.ALPHA!==_.ALPHA&&(u.glTexture=null),ft.drawText(this,t,e,this._curMat,f,l||this._other.textAlign,n,a,h,i,r,o);else{this._shader2D.defines.getValue();var d=n?c.create(n)._color:u.colorAdd;u.ALPHA===_.ALPHA&&d===u.colorAdd&&_.colorAdd===u.colorAdd||(u.glTexture=null,u.colorAdd=d),ft.drawText(this,t,e,this._curMat,f,l||this._other.textAlign,n,a,h,i,r,o)}},h.fillWords=function(t,e,i,r,s,n){this._fillText(null,t,e,i,r,s,null,-1,null,n)},h.fillBorderWords=function(t,e,i,r,s,n,a){this._fillBorderText(null,t,e,i,r,s,n,a,null)},h.fillText=function(t,e,i,r,s,n){this._fillText(t,null,e,i,r,s,null,-1,n)},h.strokeText=function(t,e,i,r,s,n,a){this._fillText(t,null,e,i,r,null,s,n||1,a)},h.fillBorderText=function(t,e,i,r,s,n,a,h){this._fillBorderText(t,null,e,i,r,s,n,a,h)},h._fillBorderText=function(t,e,i,r,s,n,h,l,o){if(!k.enabled)return this._fillText(t,e,i,r,s,null,h,l||1,o),void this._fillText(t,e,i,r,s,n,null,-1,o);var u=this._shader2D,_=this._curSubmit.shaderValue;u.ALPHA!==_.ALPHA&&(u.glTexture=null);var c=s?(a._fontTemp.setFont(s),a._fontTemp):this._other.font;ft.drawText(this,t,e,this._curMat,c,o||this._other.textAlign,n,h,l||1,i,r,0)},h.fillRect=function(t,e,i,r,s){var n=this._vb;if(pt.fillRectImgVb(n,this._clipRect,t,e,i,r,D.DEF_UV,this._curMat,this._x,this._y,0,0)){this._renderKey=0;var a=this._shader2D.fillStyle;s&&(this._shader2D.fillStyle=z.create(s));var h=this._shader2D,l=this._curSubmit.shaderValue;if(h.fillStyle!==l.fillStyle||h.ALPHA!==l.ALPHA){h.glTexture=null;var o=this._curSubmit=nt.createSubmit(this,this._ib,n,(n._byteLength-64)/32*3,At.create(2,0));o.shaderValue.color=h.fillStyle._color._color,o.shaderValue.ALPHA=h.ALPHA,this._submits[this._submits._length++]=o}this._curSubmit._numEle+=6,this._shader2D.fillStyle=a}},h.fillTexture=function(t,e,r,s,n,a,h,l){if(t.loaded&&t.bitmap&&t.source){var o=this._vb,u=t.bitmap.width,_=t.bitmap.height,c=t.uv,f=h.x%t.width,d=h.y%t.height;if(u!=l.w||_!=l.h){if(!l.w&&!l.h)switch(l.oy=l.ox=0,a){case"repeat":l.width=s,l.height=n;break;case"repeat-x":l.width=s,d<0?t.height+d>n?l.height=n:l.height=t.height+d:(l.oy=d,t.height+d>n?l.height=n-d:l.height=t.height);break;case"repeat-y":f<0?t.width+f>s?l.width=s:l.width=t.width+f:(l.ox=f,t.width+f>s?l.width=s-f:l.width=t.width),l.height=n;break;default:l.width=s,l.height=n}l.w=u,l.h=_,l.uv=[0,0,l.width/u,0,l.width/u,l.height/_,0,l.height/_]}if(e+=l.ox,r+=l.oy,f-=l.ox,d-=l.oy,pt.fillRectImgVb(o,this._clipRect,e,r,l.width,l.height,l.uv,this._curMat,this._x,this._y,0,0)){this._renderKey=0;var m=Pt.create(this,this._ib,o,(o._byteLength-64)/32*3,At.create(256,0));this._submits[this._submits._length++]=m;var p=m.shaderValue;p.textureHost=t;var g=c[0]*u,v=c[1]*_,x=(c[2]-c[0])*u,b=(c[5]-c[3])*_,T=-f/u,y=-d/_;p.u_TexRange[0]=g/u,p.u_TexRange[1]=x/u,p.u_TexRange[2]=v/_,p.u_TexRange[3]=b/_,p.u_offset[0]=T,p.u_offset[1]=y,k.enabled&&!this._isMain&&m.addTexture(t,(o._byteLength>>2)-16),this._curSubmit=m,m._renderType=10017,m._numEle+=6}}else this.sprite&&i.timer.callLater(this,this._repaintSprite)},h.setShader=function(t){Y.save(this,1048576,this._shader2D,!0),this._shader2D.shader=t},h.setFilters=function(t){Y.save(this,2097152,this._shader2D,!0),this._shader2D.filters=t,this._curSubmit=nt.RENDERBASE,this._renderKey=0,this._drawCount++},h.drawTexture=function(t,e,i,r,s,n,a){this._drawTextureM(t,e,i,r,s,n,a,null,1)},h.addTextureVb=function(t,e,i){var r=this._curSubmit._vb||this._vb,s=r._byteLength>>2;r.byteLength=s+16<<2;for(var n=r.getFloat32Array(),a=0;a<16;a+=4)n[s++]=t[a]+e,n[s++]=t[a+1]+i,n[s++]=t[a+2],n[s++]=t[a+3];this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle),r._upload=!0},h.willDrawTexture=function(t,e){if(!(t.loaded&&t.bitmap&&t.source))return this.sprite&&i.timer.callLater(this,this._repaintSprite),0;var r=t.bitmap,s=r.id+this._shader2D.ALPHA*e+10016;if(s==this._renderKey)return s;var n=this._shader2D,a=n.ALPHA,h=this._curSubmit.shaderValue;n.ALPHA*=e,this._renderKey=s,this._drawCount++,n.glTexture=r;var l=this._vb,o=null,u=l._byteLength/32*3;return o=Pt.create(this,this._ib,l,u,At.create(1,0)),this._submits[this._submits._length++]=o,o.shaderValue.textureHost=t,o._renderType=10016,o._preIsSameTextureShader=10016===this._curSubmit._renderType&&n.ALPHA===h.ALPHA,this._curSubmit=o,n.ALPHA=a,s},h.drawTextures=function(t,e,r,s){if(t.loaded&&t.bitmap&&t.source){var n=this._clipRect;if(this._clipRect=a.MAXCLIPRECT,this._drawTextureM(t,e[0],e[1],t.width,t.height,r,s,null,1)){if(this._clipRect=n,C.drawCall++,!(e.length<4)){for(var h=this._curSubmit._vb||this._vb,l=this._curMat.a,o=this._curMat.d,u=2,_=e.length;u<_;u+=2)pt.copyPreImgVb(h,(e[u]-e[u-2])*l,(e[u+1]-e[u-1])*o),this._curSubmit._numEle+=6;this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle)}}else alert("drawTextures err")}else this.sprite&&i.timer.callLater(this,this._repaintSprite)},h._drawTextureM=function(t,e,r,s,n,a,h,l,o){if(!t.loaded||!t.source)return this.sprite&&i.timer.callLater(this,this._repaintSprite),!1;var u=this._curSubmit._vb||this._vb,_=t.bitmap;e+=a,r+=h,this._drawCount++;var c=_.id+this._shader2D.ALPHA*o+10016;if(c!=this._renderKey){this._renderKey=c;var f=this._curSubmit.shaderValue,d=this._shader2D,m=d.ALPHA;d.ALPHA*=o,d.glTexture=_;var p=this._vb,g=null,v=p._byteLength/32*3;g=Pt.create(this,this._ib,p,v,At.create(1,0)),this._submits[this._submits._length++]=g,g.shaderValue.textureHost=t,g._renderType=10016,g._preIsSameTextureShader=10016===this._curSubmit._renderType&&d.ALPHA===f.ALPHA,this._curSubmit=g,u=this._curSubmit._vb||this._vb,d.ALPHA=m}return!!pt.fillRectImgVb(u,this._clipRect,e,r,s||t.width,n||t.height,t.uv,l||this._curMat,this._x,this._y,0,0)&&(k.enabled&&!this._isMain&&this._curSubmit.addTexture(t,(u._byteLength>>2)-16),this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle),!0)},h._repaintSprite=function(){this.sprite&&this.sprite.repaint()},h._drawText=function(t,e,i,r,s,n,a,h,l,o){var u=t.bitmap;this._drawCount++;var _=u.id+this._shader2D.ALPHA+10016;if(_!=this._renderKey){this._renderKey=_;var c=this._curSubmit.shaderValue,f=this._shader2D;f.glTexture=u;var d=this._vb,m=null,p=d._byteLength/32*3;(m=k.enabled?Pt.create(this,this._ib,d,p,At.create(1,0)):Pt.create(this,this._ib,d,p,Qt.create()))._preIsSameTextureShader=10016===this._curSubmit._renderType&&f.ALPHA===c.ALPHA,this._submits[this._submits._length++]=m,m.shaderValue.textureHost=t,m._renderType=10016,this._curSubmit=m}t.active();var g=this._curSubmit._vb||this._vb;pt.fillRectImgVb(g,this._clipRect,e+a,i+h,r||t.width,s||t.height,t.uv,n||this._curMat,this._x,this._y,l,o,!0)&&(k.enabled&&!this._isMain&&this._curSubmit.addTexture(t,(g._byteLength>>2)-16),this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle))},h.drawTextureWithTransform=function(t,e,i,r,s,n,h,l,o){if(n){var u=this._curMat,_=this._x,c=this._y;(0!==h||0!==l)&&(this._x=h*u.a+l*u.c,this._y=l*u.d+h*u.b),n&&u.bTransform?(b.mul(n,u,a._tmpMatrix),(n=a._tmpMatrix)._checkTransform()):(this._x+=u.tx,this._y+=u.ty),this._drawTextureM(t,e,i,r,s,0,0,n,o),this._x=_,this._y=c}else this._drawTextureM(t,e,i,r,s,h,l,null,o)},h.fillQuadrangle=function(t,e,i,r,s){var n=this._curSubmit,a=this._vb,h=this._shader2D,l=n.shaderValue;if(this._renderKey=0,t.bitmap){var o=t.bitmap;h.glTexture==o&&h.ALPHA===l.ALPHA||(h.glTexture=o,(n=this._curSubmit=nt.createSubmit(this,this._ib,a,a._byteLength/32*3,At.create(1,0))).shaderValue.glTexture=o,this._submits[this._submits._length++]=n),pt.fillQuadrangleImgVb(a,e,i,r,t.uv,s||this._curMat,this._x,this._y)}else n.shaderValue.fillStyle&&n.shaderValue.fillStyle.equal(t)&&h.ALPHA===l.ALPHA||(h.glTexture=null,(n=this._curSubmit=nt.createSubmit(this,this._ib,a,a._byteLength/32*3,At.create(2,0))).shaderValue.defines.add(2),n.shaderValue.fillStyle=z.create(t),this._submits[this._submits._length++]=n),pt.fillQuadrangleImgVb(a,e,i,r,D.DEF_UV,s||this._curMat,this._x,this._y);n._numEle+=6},h.drawTexture2=function(t,e,i,r,s,n,h,l){if(0!=n){var o=this._curMat;if(this._x=t*o.a+e*o.c,this._y=e*o.d+t*o.b,s&&(o.bTransform||s.bTransform?(b.mul(s,o,a._tmpMatrix),s=a._tmpMatrix):(this._x+=s.tx+o.tx,this._y+=s.ty+o.ty,s=b.EMPTY)),1!==n||h){var u=this._shader2D.ALPHA,_=this._nBlendType;this._shader2D.ALPHA=n,h&&(this._nBlendType=G.TOINT(h)),this._drawTextureM(l[0],l[1]-i,l[2]-r,l[3],l[4],0,0,s,1),this._shader2D.ALPHA=u,this._nBlendType=_}else this._drawTextureM(l[0],l[1]-i,l[2]-r,l[3],l[4],0,0,s,1);this._x=this._y=0}},h.drawCanvas=function(t,e,i,r,s){var n=t.context;if(this._renderKey=0,n._targets)this._submits[this._submits._length++]=Lt.create(n,0,null),this._curSubmit=nt.RENDERBASE,n._targets.drawTo(this,e,i,r,s);else{var a=this._submits[this._submits._length++]=Lt.create(n,this._shader2D.ALPHA,this._shader2D.filters),h=r/t.width,l=s/t.height,o=a._matrix;this._curMat.copyTo(o),1!=h&&1!=l&&o.scale(h,l);var u=o.tx,_=o.ty;o.tx=o.ty=0,o.transformPoint(T.TEMP.setTo(e,i)),o.translate(T.TEMP.x+u,T.TEMP.y+_),this._curSubmit=nt.RENDERBASE}f.showCanvasMark&&(this.save(),this.lineWidth=4,this.strokeStyle=n._targets?"yellow":"green",this.strokeRect(e-1,i-1,r+2,s+2,1),this.strokeRect(e,i,r,s,1),this.restore())},h.drawTarget=function(t,e,i,r,s,n,a,h,l,o){void 0===o&&(o=-1);var u=this._vb;if(pt.fillRectImgVb(u,this._clipRect,e,i,r,s,l||D.DEF_UV,n||this._curMat,this._x,this._y,0,0)){this._renderKey=0,this._shader2D.glTexture=null;this._curSubmit.shaderValue;var _=this._curSubmit=_t.create(this,this._ib,u,(u._byteLength-64)/32*3,h,a);_.blendType=-1==o?this._nBlendType:o,_.scope=t,this._submits[this._submits._length++]=_,this._curSubmit._numEle+=6}},h.transform=function(t,e,i,r,s,n){Z.save(this),b.mul(b.TEMP.setTo(t,e,i,r,s,n),this._curMat,this._curMat),this._curMat._checkTransform()},h.setTransformByMatrix=function(t){t.copyTo(this._curMat)},h.transformByMatrix=function(t){Z.save(this),b.mul(t,this._curMat,this._curMat),this._curMat._checkTransform()},h.rotate=function(t){Z.save(this),this._curMat.rotateEx(t)},h.scale=function(t,e){Z.save(this),this._curMat.scaleEx(t,e)},h.clipRect=function(t,e,i,r){if(0!=this._curMat.b||0!=this._curMat.c){this._renderKey=0;var s=ut.create(4);this.addRenderObject(s);var n=this._vb,a=n._byteLength>>2;if(pt.fillRectImgVb(n,null,t,e,i,r,D.DEF_UV,this._curMat,this._x,this._y,0,0)){this._shader2D.glTexture=null;var h=this._curSubmit=nt.createSubmit(this,this._ib,n,(n._byteLength-64)/32*3,At.create(2,0));h.shaderValue.ALPHA=1,this._submits[this._submits._length++]=h,this._curSubmit._numEle+=6}else alert("clipRect calc stencil rect error");var l=ut.create(5);this.addRenderObject(l);var o=n.getFloat32Array(),u=Math.min(Math.min(Math.min(o[a+0],o[a+4]),o[a+8]),o[a+12]),_=Math.max(Math.max(Math.max(o[a+0],o[a+4]),o[a+8]),o[a+12]),c=Math.min(Math.min(Math.min(o[a+1],o[a+5]),o[a+9]),o[a+13]),f=Math.max(Math.max(Math.max(o[a+1],o[a+5]),o[a+9]),o[a+13]);K.save(this,l,t,e,i,r,u,c,_-u,f-c),this._curSubmit=nt.RENDERBASE}else{i*=this._curMat.a,r*=this._curMat.d;var d=T.TEMP;this._curMat.transformPoint(d.setTo(t,e)),i<0&&(d.x=d.x+i,i=-i),r<0&&(d.y=d.y+r,r=-r),this._renderKey=0;var m=this._curSubmit=ot.create(this);this._submits[this._submits._length++]=m,m.submitIndex=this._submits._length,m.submitLength=9999999,X.save(this,m);var p=this._clipRect,g=p.x,v=p.y,x=d.x+i,b=d.y+r;g<d.x&&(p.x=d.x),v<d.y&&(p.y=d.y),p.width=Math.min(x,g+p.width)-p.x,p.height=Math.min(b,v+p.height)-p.y,this._shader2D.glTexture=null,m.clipRect.copyFrom(p),this._curSubmit=nt.RENDERBASE}},h.setIBVB=function(t,e,i,r,s,n,a,h,l,o,u){if(void 0===l&&(l=0),void 0===o&&(o=0),void 0===u&&(u=0),null===i){if(A.isFlash){var _=r;_._selfIB||(_._selfIB=qt.create(35044)),_._selfIB.clear(),i=_._selfIB}else i=this._ib;pt.expandIBQuadrangle(i,r._byteLength/(4*r.vertexStride*4))}if(!h||!a)throw Error("setIBVB must input:shader shaderValues");var c=lt.create(this,r,i,s,a,h,l,o,u);n||(n=b.EMPTY),n.translate(t,e),b.mul(n,this._curMat,c._mat),n.translate(-t,-e),this._submits[this._submits._length++]=c,this._curSubmit=nt.RENDERBASE,this._renderKey=0},h.addRenderObject=function(t){this._submits[this._submits._length++]=t},h.fillTrangles=function(t,e,i,r,s){var n=this._curSubmit,a=this._vb,h=this._shader2D,l=n.shaderValue,o=r.length>>4,u=t.bitmap;this._renderKey=0,h.glTexture==u&&h.ALPHA===l.ALPHA||((n=this._curSubmit=nt.createSubmit(this,this._ib,a,a._byteLength/32*3,At.create(1,0))).shaderValue.textureHost=t,this._submits[this._submits._length++]=n),pt.fillTranglesVB(a,e,i,r,s||this._curMat,this._x,this._y),n._numEle+=6*o},h.submitElement=function(t,e){var i=this._submits;for(e<0&&(e=i._length);t<e;)t+=i[t].renderSubmit()},h.finish=function(){xt.mainContext.finish()},h.flush=function(){var t=Math.max(this._vb._byteLength/64,this._maxNumEle/6)+8;if(t>this._ib.bufferLength/12&&pt.expandIBQuadrangle(this._ib,t),!this._isMain&&k.enabled&&k._atlasRestore>this._atlasResourceChange){this._atlasResourceChange=k._atlasRestore;for(var e=this._submits,i=0,r=e._length;i<r;i++){var s=e[i];10016===s.getRenderType()&&s.checkTexture()}}return this.submitElement(0,this._submits._length),this._path&&this._path.reset(),et.instance&&et.getInstance().reset(),this._curSubmit=nt.RENDERBASE,this._renderKey=0,this._submits._length},h.setPathId=function(t){if(this.mId=t,-1!=this.mId){this.mHaveKey=!1;var e=N.getInstance();e.shapeDic[this.mId]&&(this.mHaveKey=!0),this.mHaveLineKey=!1,e.shapeLineDic[this.mId]&&(this.mHaveLineKey=!0)}},h.movePath=function(t,e){var i=t,r=e;t=this._curMat.a*i+this._curMat.c*r+this._curMat.tx,e=this._curMat.b*i+this._curMat.d*r+this._curMat.ty,this.mX+=t,this.mY+=e},h.beginPath=function(){var t=this._getPath();t.tempArray.length=0,t.closePath=!1,this.mX=0,this.mY=0},h.closePath=function(){this._path.closePath=!0},h.fill=function(t){void 0===t&&(t=!1);var e=this._getPath();this.drawPoly(0,0,e.tempArray,this.fillStyle._color.numColor,0,0,t)},h.stroke=function(){var t=this._getPath();if(this.lineWidth>0){if(-1==this.mId)t.drawLine(0,0,t.tempArray,this.lineWidth,this.strokeStyle._color.numColor);else if(this.mHaveLineKey){var e=N.getInstance().shapeLineDic[this.mId];e.rebuild(t.tempArray),t.setGeomtry(e)}else N.getInstance().addLine(this.mId,t.drawLine(0,0,t.tempArray,this.lineWidth,this.strokeStyle._color.numColor));t.update();var i=[this.mX,this.mY],r=nt.createShape(this,t.ib,t.vb,t.count,t.offset,At.create(4,0));r.shaderValue.ALPHA=this._shader2D.ALPHA,r.shaderValue.u_pos=i,r.shaderValue.u_mmat2=gt.TEMPMAT4_ARRAY,this._submits[this._submits._length++]=r}},h.line=function(t,e,i,r,s,n){var a=this._curSubmit,h=this._vb;if(pt.fillLineVb(h,this._clipRect,t,e,i,r,s,n)){this._renderKey=0;var l=this._shader2D,o=a.shaderValue;l.strokeStyle===o.strokeStyle&&l.ALPHA===o.ALPHA||(l.glTexture=null,(a=this._curSubmit=nt.createSubmit(this,this._ib,h,(h._byteLength-64)/32*3,At.create(2,0))).shaderValue.strokeStyle=l.strokeStyle,a.shaderValue.mainID=2,a.shaderValue.ALPHA=l.ALPHA,this._submits[this._submits._length++]=a),a._numEle+=6}},h.moveTo=function(t,e,i){void 0===i&&(i=!0);var r=this._getPath();if(i){var s=t,n=e;t=this._curMat.a*s+this._curMat.c*n,e=this._curMat.b*s+this._curMat.d*n}r.addPoint(t,e)},h.lineTo=function(t,e,i){void 0===i&&(i=!0);var r=this._getPath();if(i){var s=t,n=e;t=this._curMat.a*s+this._curMat.c*n,e=this._curMat.b*s+this._curMat.d*n}r.addPoint(t,e)},h.drawCurves=function(t,e,i){this.setPathId(-1),this.beginPath(),this.strokeStyle=i[3],this.lineWidth=i[4];var r=i[2];t+=i[0],e+=i[1],this.movePath(t,e),this.moveTo(r[0],r[1]);for(var s=2,n=r.length;s<n;)this.quadraticCurveTo(r[s++],r[s++],r[s++],r[s++]);this.stroke()},h.arcTo=function(t,e,i,r,s){if(-1==this.mId||!this.mHaveKey){var n=0,h=0,l=0,o=this._getPath();this._curMat.copyTo(a._tmpMatrix),a._tmpMatrix.tx=a._tmpMatrix.ty=0,a._tempPoint.setTo(o.getEndPointX(),o.getEndPointY()),a._tmpMatrix.invertTransformPoint(a._tempPoint);var u=a._tempPoint.x-t,_=a._tempPoint.y-e,c=Math.sqrt(u*u+_*_);if(!(c<=1e-6)){var f=u/c,d=_/c,m=i-t,p=r-e,g=m*m+p*p,v=Math.sqrt(g);if(!(v<=1e-6)){var x=m/v,b=p/v,T=f+x,y=d+b,A=Math.sqrt(T*T+y*y);if(!(A<=1e-6)){var E=T/A,S=y/A,R=Math.acos(E*f+S*d),w=Math.PI/2-R,I=(c=s/Math.tan(w))*f+t,M=c*d+e,C=Math.sqrt(c*c+s*s),L=t+E*C,P=e+S*C,F=0,D=0;if(f*b-d*x>=0){var B=2*w/a.SEGNUM;F=Math.sin(B),D=Math.cos(B)}else B=2*-w/a.SEGNUM,F=Math.sin(B),D=Math.cos(B);h=this._curMat.a*I+this._curMat.c*M,l=this._curMat.b*I+this._curMat.d*M,h==this._path.getEndPointX()&&l==this._path.getEndPointY()||o.addPoint(h,l);var N=I-L,O=M-P;for(n=0;n<a.SEGNUM;n++){var V=N*D+O*F,U=-N*F+O*D;h=V+L,l=U+P,t=this._curMat.a*h+this._curMat.c*l,l=e=this._curMat.b*h+this._curMat.d*l,(h=t)==this._path.getEndPointX()&&l==this._path.getEndPointY()||o.addPoint(h,l),N=V,O=U}}}}}},h.arc=function(t,e,i,r,s,n,a){if(void 0===n&&(n=!1),void 0===a&&(a=!0),-1!=this.mId){var h=N.getInstance().shapeDic[this.mId];if(h&&this.mHaveKey&&!h.needUpdate(this._curMat))return;t=0,e=0}var l,o=0,u=0,_=0,c=0,f=0,d=0,m=0;if(u=s-r,n)if(Math.abs(u)>=2*Math.PI)u=2*-Math.PI;else for(;u>0;)u-=2*Math.PI;else if(Math.abs(u)>=2*Math.PI)u=2*Math.PI;else for(;u<0;)u+=2*Math.PI;l=u/(m=i<101?Math.max(10,u*i/5):i<201?Math.max(10,u*i/20):Math.max(10,u*i/40))/2,_=Math.abs(4/3*(1-Math.cos(l))/Math.sin(l)),n&&(_=-_);var p=this._getPath(),g=NaN,v=NaN;for(d=0;d<=m;d++)o=r+u*(d/m),c=t+Math.cos(o)*i,f=e+Math.sin(o)*i,a&&(g=c,v=f,c=this._curMat.a*g+this._curMat.c*v,f=this._curMat.b*g+this._curMat.d*v),c==this._path.getEndPointX()&&f==this._path.getEndPointY()||p.addPoint(c,f);c=t+Math.cos(s)*i,f=e+Math.sin(s)*i,a&&(g=c,v=f,c=this._curMat.a*g+this._curMat.c*v,f=this._curMat.b*g+this._curMat.d*v),c==this._path.getEndPointX()&&f==this._path.getEndPointY()||p.addPoint(c,f)},h.quadraticCurveTo=function(t,e,i,r){var s=l.I,n=i,a=r;i=this._curMat.a*n+this._curMat.c*a,r=this._curMat.b*n+this._curMat.d*a,n=t,a=e,t=this._curMat.a*n+this._curMat.c*a,e=this._curMat.b*n+this._curMat.d*a;for(var h=s.getBezierPoints([this._path.getEndPointX(),this._path.getEndPointY(),t,e,i,r],30,2),o=0,u=h.length/2;o<u;o++)this.lineTo(h[2*o],h[2*o+1],!1);this.lineTo(i,r,!1)},h.rect=function(t,e,i,r){this._other=this._other.make(),this._other.path||(this._other.path=new W),this._other.path.rect(t,e,i,r)},h.strokeRect=function(t,e,i,r,s){var n=.5*s;this.line(t-n,e,t+i+n,e,s,this._curMat),this.line(t+i,e,t+i,e+r,s,this._curMat),this.line(t,e,t,e+r,s,this._curMat),this.line(t-n,e+r,t+i+n,e+r,s,this._curMat)},h.clip=function(){},h.drawPoly=function(t,e,i,r,s,n,a){void 0===a&&(a=!1),this._renderKey=0,this._shader2D.glTexture=null;var h=this._getPath();if(-1==this.mId)h.polygon(t,e,i,r,s||1,n);else if(this.mHaveKey){var l=N.getInstance().shapeDic[this.mId];l.setMatrix(this._curMat),l.rebuild(h.tempArray),h.setGeomtry(l)}else{var o=h.polygon(t,e,i,r,s||1,n);N.getInstance().addShape(this.mId,o),o.setMatrix(this._curMat)}h.update();var u,_=[this.mX,this.mY];if((u=nt.createShape(this,h.ib,h.vb,h.count,h.offset,At.create(4,0))).shaderValue.ALPHA=this._shader2D.ALPHA,u.shaderValue.u_pos=_,u.shaderValue.u_mmat2=gt.EMPTYMAT4_ARRAY,this._submits[this._submits._length++]=u,s>0){if(this.mHaveLineKey){var c=N.getInstance().shapeLineDic[this.mId];c.rebuild(h.tempArray),h.setGeomtry(c)}else N.getInstance().addShape(this.mId,h.drawLine(t,e,i,s,n));h.update(),(u=nt.createShape(this,h.ib,h.vb,h.count,h.offset,At.create(4,0))).shaderValue.ALPHA=this._shader2D.ALPHA,u.shaderValue.u_mmat2=gt.EMPTYMAT4_ARRAY,this._submits[this._submits._length++]=u}},h.drawParticle=function(t,e,i){i.x=t,i.y=e,this._submits[this._submits._length++]=i},h._getPath=function(){return this._path||(this._path=new W)},n(0,h,"globalCompositeOperation",function(){return G.NAMES[this._nBlendType]},function(t){var e=G.TOINT[t];null==e||this._nBlendType===e||(Y.save(this,65536,this,!0),this._curSubmit=nt.RENDERBASE,this._renderKey=0,this._nBlendType=e)}),n(0,h,"strokeStyle",function(){return this._shader2D.strokeStyle},function(t){this._shader2D.strokeStyle.equal(t)||(Y.save(this,512,this._shader2D,!1),this._shader2D.strokeStyle=z.create(t))}),n(0,h,"globalAlpha",function(){return this._shader2D.ALPHA},function(t){(t=Math.floor(1e3*t)/1e3)!=this._shader2D.ALPHA&&(Y.save(this,1,this._shader2D,!0),this._shader2D.ALPHA=t)}),n(0,h,"asBitmap",null,function(t){if(t){if(this._targets||(this._targets=new j),this._targets.repaint=!0,!this._width||!this._height)throw Error("asBitmap no size!");this._targets.setSP(this.sprite),this._targets.size(this._width,this._height)}else this._targets=null}),n(0,h,"fillStyle",function(){return this._shader2D.fillStyle},function(t){this._shader2D.fillStyle.equal(t)||(Y.save(this,2,this._shader2D,!1),this._shader2D.fillStyle=z.create(t))}),n(0,h,"textAlign",function(){return this._other.textAlign},function(t){this._other.textAlign===t||(this._other=this._other.make(),Y.save(this,32768,this._other,!1),this._other.textAlign=t)}),n(0,h,"lineWidth",function(){return this._other.lineWidth},function(t){this._other.lineWidth===t||(this._other=this._other.make(),Y.save(this,256,this._other,!1),this._other.lineWidth=t)}),n(0,h,"textBaseline",function(){return this._other.textBaseline},function(t){this._other.textBaseline===t||(this._other=this._other.make(),Y.save(this,16384,this._other,!1),this._other.textBaseline=t)}),n(0,h,"font",null,function(t){t!=this._other.font.toString()&&(this._other=this._other.make(),Y.save(this,8,this._other,!1),this._other.font===dt.EMPTY?this._other.font=new dt(t):this._other.font.setFont(t))}),a.__init__=function(){e.DEFAULT=new e},a._SUBMITVBSIZE=32e3,a._MAXSIZE=99999999,a._RECTVBSIZE=16,a._COUNT=0,a.SEGNUM=32,a._contextcount=0,r(a,["_tempPoint",function(){return this._tempPoint=new T},"MAXCLIPRECT",function(){return this.MAXCLIPRECT=new y(0,0,99999999,99999999)},"_tmpMatrix",function(){return this._tmpMatrix=new b},"_fontTemp",function(){return this._fontTemp=new dt},"_drawStyleTemp",function(){return this._drawStyleTemp=new z(null)}]),a.__init$=function(){e=function(){function t(){this.lineWidth=1,this.path=null,this.textAlign=null,this.textBaseline=null,this.font=dt.EMPTY}s(t,"");var e=t.prototype;return e.clear=function(){this.lineWidth=1,this.path&&this.path.clear(),this.textAlign=this.textBaseline=null,this.font=dt.EMPTY},e.make=function(){return this===t.DEFAULT?new t:this},t.DEFAULT=null,t}()},a}(),At=function(t){function e(t,i){this.size=[0,0],this.alpha=1,this.ALPHA=1,this.subID=0,this._cacheID=0,e.__super.call(this),this.defines=new wt,this.position=e._POSITION,this.mainID=t,this.subID=i,this.textureHost=null,this.texture=null,this.fillStyle=null,this.color=null,this.strokeStyle=null,this.colorAdd=null,this.glTexture=null,this.u_mmat2=null,this._cacheID=t|i,this._inClassCache=e._cache[this._cacheID],t>0&&!this._inClassCache&&(this._inClassCache=e._cache[this._cacheID]=[],this._inClassCache._length=0),this.clear()}s(e,"laya.webgl.shader.d2.value.Value2D",V);var i=e.prototype;return i.setValue=function(t){},i.refresh=function(){var t=this.size;return t[0]=gt.width,t[1]=gt.height,this.alpha=this.ALPHA*gt.worldAlpha,this.mmat=gt.worldMatrix4,this},i._ShaderWithCompile=function(){return Xt.withCompile2D(0,this.mainID,this.defines.toNameDic(),this.mainID|this.defines._value,Zt.create)},i._withWorldShaderDefines=function(){var t=gt.worldShaderDefines,e=Xt.sharders[this.mainID|this.defines._value|t.getValue()];if(!e){var i,r={};for(i in this.defines.toNameDic())r[i]="";for(i in t.toNameDic())r[i]="";e=Xt.withCompile2D(0,this.mainID,r,this.mainID|this.defines._value|t.getValue(),Zt.create)}var s=gt.worldFilters;if(!s)return e;for(var n,a=s.length,h=0;h<a;h++)(n=s[h])&&n.action.setValue(this);return e},i.upload=function(){var t=gt;this.alpha=this.ALPHA*t.worldAlpha,gt.worldMatrix4!==gt.TEMPMAT4_ARRAY&&this.defines.add(128),xt.shaderHighPrecision&&this.defines.add(1024);var e,i=t.worldShaderDefines?this._withWorldShaderDefines():Xt.sharders[this.mainID|this.defines._value]||this._ShaderWithCompile();this.size[0]=t.width,this.size[1]=t.height,this.mmat=t.worldMatrix4,Ft.activeShader!==i?(i._shaderValueWidth!==t.width||i._shaderValueHeight!==t.height?(i._shaderValueWidth=t.width,i._shaderValueHeight=t.height):e=i._params2dQuick2||i._make2dQuick2(),i.upload(this,e)):(i._shaderValueWidth!==t.width||i._shaderValueHeight!==t.height?(i._shaderValueWidth=t.width,i._shaderValueHeight=t.height):e=i._params2dQuick1||i._make2dQuick1(),i.upload(this,e))},i.setFilters=function(t){if(this.filters=t,t)for(var e,i=t.length,r=0;r<i;r++)(e=t[r])&&(this.defines.add(e.type),e.action.setValue(this))},i.clear=function(){this.defines.setValue(this.subID)},i.release=function(){this._inClassCache[this._inClassCache._length++]=this,this.fillStyle=null,this.strokeStyle=null,this.clear()},e._initone=function(t,i){e._typeClass[t]=i,e._cache[t]=[],e._cache[t]._length=0},e.__init__=function(){e._POSITION=[2,5126,!1,4*mt.BYTES_PE,0],e._TEXCOORD=[2,5126,!1,4*mt.BYTES_PE,2*mt.BYTES_PE],e._initone(2,Ot),e._initone(4,kt),e._initone(256,Vt),e._initone(512,Nt),e._initone(1,Ut),e._initone(65,Qt),e._initone(9,Ut)},e.create=function(t,i){var r=e._cache[t|i];return r._length?r[--r._length]:new e._typeClass[t|i](i)},e._POSITION=null,e._TEXCOORD=null,e._cache=[],e._typeClass=[],r(e,["TEMPMAT4_ARRAY",function(){return this.TEMPMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}]),e}(),Et=function(t){function e(t,i){e.__super.call(this,t,i)}s(e,"laya.webgl.utils.RenderSprite3D",E);var i=e.prototype;return i.onCreate=function(t){switch(t){case 8:return void(this._fun=this._blend);case 4:return void(this._fun=this._transform)}},i._mask=function(t,i,r,s){var n,a,h=this._next,l=t.mask;if(l){i.ctx.save();var o=i.ctx.globalCompositeOperation,u=new y;if(u.copyFrom(l.getBounds()),u.width=Math.round(u.width),u.height=Math.round(u.height),u.x=Math.round(u.x),u.y=Math.round(u.y),u.width>0&&u.height>0){var _=t._style._tf,c=ht.create();c.addValue("bounds",u),n=at.create([c,i],laya.webgl.utils.RenderSprite3D.tmpTarget),i.addRenderObject(n),l.render(i,-u.x,-u.y),n=at.create([c],laya.webgl.utils.RenderSprite3D.endTmpTarget),i.addRenderObject(n),i.ctx.save(),i.clipRect(r-_.translateX+u.x,s-_.translateY+u.y,u.width,u.height),h._fun.call(h,t,i,r,s),i.ctx.restore(),a=ut.create(6),o=i.ctx.globalCompositeOperation,a.blendMode="mask",i.addRenderObject(a),b.TEMP.identity();var f=At.create(1,0),d=D.INV_UV,m=u.width,p=u.height;(u.width<32||u.height<32)&&((d=e.tempUV)[0]=0,d[1]=0,d[2]=u.width>=32?1:u.width/32,d[3]=0,d[4]=u.width>=32?1:u.width/32,d[5]=u.height>=32?1:u.height/32,d[6]=0,d[7]=u.height>=32?1:u.height/32,u.width=u.width>=32?u.width:32,u.height=u.height>=32?u.height:32,d[1]*=-1,d[3]*=-1,d[5]*=-1,d[7]*=-1,d[1]+=1,d[3]+=1,d[5]+=1,d[7]+=1),i.ctx.drawTarget(c,r+u.x-_.translateX,s+u.y-_.translateY,m,p,b.TEMP,"tmpTarget",f,d,6),n=at.create([c],laya.webgl.utils.RenderSprite3D.recycleTarget),i.addRenderObject(n),(a=ut.create(6)).blendMode=o,i.addRenderObject(a)}i.ctx.restore()}else h._fun.call(h,t,i,r,s)},i._blend=function(t,e,i,r){var s=t._style,n=this._next;s.blendMode?(e.ctx.save(),e.ctx.globalCompositeOperation=s.blendMode,n._fun.call(n,t,e,i,r),e.ctx.restore()):n._fun.call(n,t,e,i,r)},i._transform=function(t,e,i,r){"use strict";var s=t.transform,n=this._next;if(s&&n!=E.NORENDER){var a=e.ctx;t._style;s.tx=i,s.ty=r;var h=a._getTransformMatrix(),l=h.clone();b.mul(s,h,h),h._checkTransform(),s.tx=s.ty=0,n._fun.call(n,t,e,0,0),l.copyTo(h),l.destroy()}else n._fun.call(n,t,e,i,r)},e.tmpTarget=function(t,e){var i=t.getValue("bounds"),r=Dt.create(i.width,i.height);r.start(),r.clear(0,0,0,0),t.addValue("tmpTarget",r)},e.endTmpTarget=function(t){t.getValue("tmpTarget").end()},e.recycleTarget=function(t){t.getValue("tmpTarget").recycle(),t.recycle()},r(e,["tempUV",function(){return this.tempUV=new Array(8)}]),e}(),St=function(t){function e(){this.data=null,e.__super.call(this)}s(e,"laya.filters.webgl.ColorFilterActionGL",O);var r=e.prototype;return i.imps(r,{"laya.filters.IFilterActionGL":!0}),r.setValue=function(t){t.colorMat=this.data._mat,t.colorAlpha=this.data._alpha},r.apply3d=function(t,e,i,r,s){var n=t.getValue("bounds"),a=At.create(1,0);a.setFilters([this.data]);var h=b.TEMP;h.identity(),i.ctx.drawTarget(t,0,0,n.width,n.height,h,"src",a)},e}(),Rt=function(t){function e(t,i,r,s,n){this._atlasCanvas=null,this._inAtlasTextureKey=null,this._inAtlasTextureBitmapValue=null,this._inAtlasTextureOriUVValue=null,this._InAtlasWebGLImagesKey=null,this._InAtlasWebGLImagesOffsetValue=null,e.__super.call(this,t,i,n),this._inAtlasTextureKey=[],this._inAtlasTextureBitmapValue=[],this._inAtlasTextureOriUVValue=[],this._InAtlasWebGLImagesKey={},this._InAtlasWebGLImagesOffsetValue=[],this._atlasCanvas=new Ht,this._atlasCanvas._atlaser=this,this._atlasCanvas.width=r,this._atlasCanvas.height=s,this._atlasCanvas.activeResource(),this._atlasCanvas.lock=!0}s(e,"laya.webgl.atlas.Atlaser",U);var i=e.prototype;return i.computeUVinAtlasTexture=function(t,e,i,r){var s=k.atlasTextureWidth,n=k.atlasTextureHeight,a=i/s,h=r/n,l=(i+t.bitmap.width)/s,o=(r+t.bitmap.height)/n,u=t.bitmap.width/s,_=t.bitmap.height/n;t.uv=[a+e[0]*u,h+e[1]*_,l-(1-e[2])*u,h+e[3]*_,l-(1-e[4])*u,o-(1-e[5])*_,a+e[6]*u,o-(1-e[7])*_]},i.findBitmapIsExist=function(t){if(t instanceof laya.webgl.resource.WebGLImage){var e=t,i=e.url,r=this._InAtlasWebGLImagesKey[i||e.id];if(r)return r.offsetInfoID}return-1},i.addToAtlasTexture=function(t,e,i){if(t instanceof laya.webgl.resource.WebGLImage){var r=t,s=r.url;this._InAtlasWebGLImagesKey[s||r.id]={bitmap:t,offsetInfoID:this._InAtlasWebGLImagesOffsetValue.length},this._InAtlasWebGLImagesOffsetValue.push([e,i])}this._atlasCanvas.texSubImage2D(e,i,t.atlasSource),t.clearAtlasSource()},i.addToAtlas=function(t,e,i){t._atlasID=this._inAtlasTextureKey.length;var r=t.uv.slice(),s=t.bitmap;this._inAtlasTextureKey.push(t),this._inAtlasTextureOriUVValue.push(r),this._inAtlasTextureBitmapValue.push(s),this.computeUVinAtlasTexture(t,r,e,i),t.bitmap=this._atlasCanvas},i.clear=function(){for(var t=0,e=this._inAtlasTextureKey.length;t<e;t++)this._inAtlasTextureKey[t].bitmap=this._inAtlasTextureBitmapValue[t],this._inAtlasTextureKey[t].uv=this._inAtlasTextureOriUVValue[t],this._inAtlasTextureKey[t]._atlasID=-1,this._inAtlasTextureKey[t].bitmap.lock=!1,this._inAtlasTextureKey[t].bitmap.releaseResource();this._inAtlasTextureKey.length=0,this._inAtlasTextureBitmapValue.length=0,this._inAtlasTextureOriUVValue.length=0,this._InAtlasWebGLImagesKey=null,this._InAtlasWebGLImagesOffsetValue.length=0},i.dispose=function(){this.clear(),this._atlasCanvas.destroy()},n(0,i,"InAtlasWebGLImagesOffsetValue",function(){return this._InAtlasWebGLImagesOffsetValue}),n(0,i,"texture",function(){return this._atlasCanvas}),n(0,i,"inAtlasWebGLImagesKey",function(){return this._InAtlasWebGLImagesKey}),e}(),wt=function(t){function e(){e.__super.call(this,e.__name2int,e.__int2name,e.__int2nameMap)}return s(e,"laya.webgl.shader.d2.ShaderDefines2D",J),e.__init__=function(){e.reg("TEXTURE2D",1),e.reg("COLOR2D",2),e.reg("PRIMITIVE",4),e.reg("GLOW_FILTER",8),e.reg("BLUR_FILTER",16),e.reg("COLOR_FILTER",32),e.reg("COLOR_ADD",64),e.reg("WORLDMAT",128),e.reg("FILLTEXTURE",256),e.reg("FSHIGHPRECISION",1024)},e.reg=function(t,i){J._reg(t,i,e.__name2int,e.__int2name)},e.toText=function(t,e,i){return J._toText(t,e,i)},e.toInt=function(t){return J._toInt(t,e.__name2int)},e.TEXTURE2D=1,e.COLOR2D=2,e.PRIMITIVE=4,e.FILTERGLOW=8,e.FILTERBLUR=16,e.FILTERCOLOR=32,e.COLORADD=64,e.WORLDMAT=128,e.FILLTEXTURE=256,e.SKINMESH=512,e.SHADERDEFINE_FSHIGHPRECISION=1024,e.__name2int={},e.__int2name=[],e.__int2nameMap=[],e}(),It=(function(t){function e(t,i,r,s,n,a,h){e.__super.call(this,t,i,r,s,40,n,a,h)}s(e,"laya.webgl.shapes.Ellipse",it)}(),function(t){function e(t,i,r,s,n){this._points=[],this.rebuild(r),e.__super.call(this,t,i,0,0,0,n,s,n,0)}s(e,"laya.webgl.shapes.Line",it);var i=e.prototype;return i.rebuild=function(t){var e=t.length;e!=this._points.length&&(this.mUint16Array=new Uint16Array(6*(e/2-1)),this.mFloat32Array=new Float32Array(5*e)),this._points.length=0;for(var i=NaN,r=NaN,s=-1,n=-1,a=t.length/2,h=0;h<a;h++)i=t[2*h],r=t[2*h+1],(Math.abs(s-i)>.01||Math.abs(n-r)>.01)&&this._points.push(i,r),s=i,n=r},i.getData=function(t,e,i){var r=[],s=[];this.borderWidth>0&&this.createLine2(this._points,r,this.borderWidth,i,s,this._points.length/2),this.mUint16Array.set(r,0),this.mFloat32Array.set(s,0),t.append(this.mUint16Array),e.append(this.mFloat32Array)},e}()),Mt=function(t){function e(t,i,r,s,n){this._points=[];for(var a=NaN,h=NaN,l=-1,o=-1,u=r.length/2-1,_=0;_<u;_++)a=r[2*_],h=r[2*_+1],(Math.abs(l-a)>.01||Math.abs(o-h)>.01)&&this._points.push(a,h),l=a,o=h;a=r[2*u],h=r[2*u+1],l=this._points[0],o=this._points[1],(Math.abs(l-a)>.01||Math.abs(o-h)>.01)&&this._points.push(a,h),e.__super.call(this,t,i,0,0,this._points.length/2,0,s,n)}s(e,"laya.webgl.shapes.LoopLine",it);var i=e.prototype;return i.getData=function(t,e,i){if(this.borderWidth>0){for(var r=this.color,s=(r>>16&255)/255,n=(r>>8&255)/255,a=(255&r)/255,h=[],l=0,o=0,u=[],_=Math.floor(this._points.length/2),c=0;c<_;c++)l=this._points[2*c],o=this._points[2*c+1],h.push(this.x+l,this.y+o,s,n,a);this.createLoopLine(h,u,this.borderWidth,i+h.length/5),t.append(new Uint16Array(u)),e.append(new Float32Array(h))}},i.createLoopLine=function(t,e,i,r,s,n){t.length;var a=t.concat(),h=s||t,l=this.borderColor,o=(l>>16&255)/255,u=(l>>8&255)/255,_=(255&l)/255,c=[a[0],a[1]],f=[a[a.length-5],a[a.length-4]],d=f[0]+.5*(c[0]-f[0]),m=f[1]+.5*(c[1]-f[1]);a.unshift(d,m,0,0,0),a.push(d,m,0,0,0);var p,g,v,x,b,T,y,A,E,S,R,w,I,M,C,L,P,F,D,B,N=a.length/5,O=r,V=i/2;v=a[0],x=a[1],S=v-(b=a[5]),E=(E=-(x-(T=a[6])))/(B=Math.sqrt(E*E+S*S))*V,S=S/B*V,h.push(v-E,x-S,o,u,_,v+E,x+S,o,u,_);for(var U=1;U<N-1;U++)v=a[5*(U-1)],x=a[5*(U-1)+1],b=a[5*U],T=a[5*U+1],y=a[5*(U+1)],A=a[5*(U+1)+1],S=v-b,w=b-y,C=(-(E=(E=-(x-T))/(B=Math.sqrt(E*E+S*S))*V)+v)*(-(S=S/B*V)+T)-(-E+b)*(-S+x),F=(-(R=(R=-(T-A))/(B=Math.sqrt(R*R+w*w))*V)+y)*(-(w=w/B*V)+T)-(-R+b)*(-w+A),D=(I=-S+x-(-S+T))*(P=-R+b-(-R+y))-(L=-w+A-(-w+T))*(M=-E+b-(-E+v)),Math.abs(D)<.1?(D+=10.1,h.push(b-E,T-S,o,u,_,b+E,T+S,o,u,_)):(((p=(M*F-P*C)/D)-b)*(p-b)+((g=(L*C-I*F)/D)-T)+(g-T),h.push(p,g,o,u,_,b-(p-b),T-(g-T),o,u,_));n&&(e=n);var k=this.edges+1;for(U=1;U<k;U++)e.push(O+2*(U-1),O+2*(U-1)+1,O+2*U+1,O+2*U+1,O+2*U,O+2*(U-1));return e.push(O+2*(U-1),O+2*(U-1)+1,O+1,O+1,O,O+2*(U-1)),h},e}(),Ct=function(t){function e(t,i,r,s,n,a){this._points=null,this._start=-1,this._repaint=!1,this.earcutTriangles=null,this._mat=b.create(),this._points=r.slice(0,r.length),e.__super.call(this,t,i,0,0,this._points.length/2,s,n,a)}s(e,"laya.webgl.shapes.Polygon",it);var i=e.prototype;return i.rebuild=function(t){this._repaint||(this._points.length=0,this._points=this._points.concat(t))},i.setMatrix=function(t){t.copyTo(this._mat)},i.needUpdate=function(t){return this._repaint=this._mat.a==t.a&&this._mat.b==t.b&&this._mat.c==t.c&&this._mat.d==t.d&&this._mat.tx==t.tx&&this._mat.ty==t.ty,!this._repaint},i.getData=function(t,e,i){var r,s=0,n=this._points,a=0;if(this.mUint16Array&&this.mFloat32Array&&this._repaint){if(this._start!=i){for(this._start=i,r=[],a=this.earcutTriangles.length,s=0;s<a;s++)r.push(this.earcutTriangles[s]+i);this.mUint16Array=new Uint16Array(r)}}else{this._start=i,r=[];var h=[],l=[],o=this.color,u=(o>>16&255)/255,_=(o>>8&255)/255,c=(255&o)/255;for(a=Math.floor(n.length/2),s=0;s<a;s++)h.push(this.x+n[2*s],this.y+n[2*s+1],u,_,c),l.push(this.x+n[2*s],this.y+n[2*s+1]);for(this.earcutTriangles=rt.earcut(l,null,2),a=this.earcutTriangles.length,s=0;s<a;s++)r.push(this.earcutTriangles[s]+i);this.mUint16Array=new Uint16Array(r),this.mFloat32Array=new Float32Array(h)}t.append(this.mUint16Array),e.append(this.mFloat32Array)},e}(),Lt=function(t){function e(){this._matrix=new b,this._matrix4=mt.defaultMatrix4.concat(),e.__super.call(this,1e4),this.shaderValue=new At(0,0)}s(e,"laya.webgl.submit.SubmitCanvas",nt);var i=e.prototype;return i.renderSubmit=function(){if(this._ctx_src._targets)return this._ctx_src._targets.flush(this._ctx_src),1;var t=gt.worldAlpha,e=gt.worldMatrix4,i=gt.worldMatrix,r=gt.worldFilters,s=gt.worldShaderDefines,n=this.shaderValue,a=this._matrix,h=this._matrix4,l=b.TEMP;return b.mul(a,i,l),h[0]=l.a,h[1]=l.b,h[4]=l.c,h[5]=l.d,h[12]=l.tx,h[13]=l.ty,gt.worldMatrix=l.clone(),gt.worldMatrix4=h,gt.worldAlpha=gt.worldAlpha*n.alpha,n.filters&&n.filters.length&&(gt.worldFilters=n.filters,gt.worldShaderDefines=n.defines),this._ctx_src.flush(),gt.worldAlpha=t,gt.worldMatrix4=e,gt.worldMatrix.destroy(),gt.worldMatrix=i,gt.worldFilters=r,gt.worldShaderDefines=s,1},i.releaseRender=function(){var t=e._cache;this._ctx_src=null,t[t._length++]=this},i.getRenderType=function(){return 10003},e.create=function(t,i,r){var s=e._cache._length?e._cache[--e._cache._length]:new e;s._ctx_src=t;var n=s.shaderValue;return n.alpha=i,n.defines.setValue(0),r&&r.length&&n.setFilters(r),s},r(e,["_cache",function(){return this._cache=(e._cache=[],e._cache._length=0,e._cache)}]),e}(),Pt=function(t){function e(t){this._preIsSameTextureShader=!1,this._isSameTexture=!0,this._texs=new Array,this._texsID=new Array,this._vbPos=new Array,void 0===t&&(t=1e4),e.__super.call(this,t)}s(e,"laya.webgl.submit.SubmitTexture",nt);var i=e.prototype;return i.releaseRender=function(){var t=e._cache;t[t._length++]=this,this.shaderValue.release(),this._preIsSameTextureShader=!1,this._vb=null,this._texs.length=0,this._vbPos.length=0,this._isSameTexture=!0},i.addTexture=function(t,e){this._texsID[this._texs.length]=t._uvID,this._texs.push(t),this._vbPos.push(e)},i.checkTexture=function(){if(this._texs.length<1)this._isSameTexture=!0;else{var t=this.shaderValue.textureHost.bitmap;if(null!==t)for(var e=this._vb.getFloat32Array(),i=0,r=this._texs.length;i<r;i++){var s=this._texs[i];s.active();var n=s.uv;if(this._texsID[i]!==s._uvID){this._texsID[i]=s._uvID;var a=this._vbPos[i];e[a+2]=n[0],e[a+3]=n[1],e[a+6]=n[2],e[a+7]=n[3],e[a+10]=n[4],e[a+11]=n[5],e[a+14]=n[6],e[a+15]=n[7],this._vb.setNeedUpload()}s.bitmap!==t&&(this._isSameTexture=!1)}}},i.renderSubmit=function(){if(0===this._numEle)return e._shaderSet=!1,1;var t=this.shaderValue.textureHost;if(t){var i=t.source;if(!t.bitmap||!i)return e._shaderSet=!1,1;this.shaderValue.texture=i}this._vb.bind_upload(this._ib);var r=xt.mainContext;if(G.activeBlendFunction!==this._blendFn&&(r.enable(3042),this._blendFn(r),G.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,this._preIsSameTextureShader&&Ft.activeShader&&e._shaderSet?Ft.activeShader.uploadTexture2D(this.shaderValue.texture):this.shaderValue.upload(),e._shaderSet=!0,this._texs.length>1&&!this._isSameTexture)for(var s=t.bitmap,n=0,a=Ft.activeShader,h=0,l=this._texs.length;h<l;h++){var o=this._texs[h];o.bitmap===s&&h+1!==l||(a.uploadTexture2D(o.source),r.drawElements(4,6*(h-n+1),5123,this._startIdx+6*n*mt.BYTES_PIDX),s=o.bitmap,n=h)}else r.drawElements(4,this._numEle,5123,this._startIdx);return 1},e.create=function(t,i,r,s,n){var a=e._cache._length?e._cache[--e._cache._length]:new e;null==r&&((r=a._selfVb||(a._selfVb=jt.create(-1))).clear(),s=0),a._ib=i,a._vb=r,a._startIdx=s*mt.BYTES_PIDX,a._numEle=0;var h=t._nBlendType;a._blendFn=t._targets?G.targetFns[h]:G.fns[h],a.shaderValue=n,a.shaderValue.setValue(t._shader2D);var l=t._shader2D.filters;return l&&a.shaderValue.setFilters(l),a},e._shaderSet=!0,r(e,["_cache",function(){return this._cache=(e._cache=[],e._cache._length=0,e._cache)}]),e}(),Ft=function(t){function e(){e.__super.call(this),this.lock=!0}return s(e,"laya.webgl.shader.BaseShader",S),e.activeShader=null,e.bindShader=null,e}(),Dt=function(t){function e(t,i,r,s,n,a,h,l,o){this._type=0,this._svWidth=NaN,this._svHeight=NaN,this._preRenderTarget=null,this._alreadyResolved=!1,this._looked=!1,this._surfaceFormat=0,this._surfaceType=0,this._depthStencilFormat=0,this._mipMap=!1,this._repeat=!1,this._minFifter=0,this._magFifter=0,this._destroy=!1,void 0===r&&(r=6408),void 0===s&&(s=5121),void 0===n&&(n=34041),void 0===a&&(a=!1),void 0===h&&(h=!1),void 0===l&&(l=-1),void 0===o&&(o=-1),this._type=1,this._w=t,this._h=i,this._surfaceFormat=r,this._surfaceType=s,this._depthStencilFormat=n,this._mipMap=a,this._repeat=h,this._minFifter=l,this._magFifter=o,this._createWebGLRenderTarget(),this.bitmap.lock=!0,e.__super.call(this,this.bitmap,D.INV_UV)}s(e,"laya.webgl.resource.RenderTarget2D",t);var r=e.prototype;return i.imps(r,{"laya.resource.IDispose":!0}),r.getType=function(){return this._type},r.getTexture=function(){return this},r.size=function(t,e){this._w==t&&this._h==e||(this._w=t,this._h=e,this.release(),0!=this._w&&0!=this._h&&this._createWebGLRenderTarget())},r.release=function(){this.destroy()},r.recycle=function(){e.POOL.push(this)},r.start=function(){var t=xt.mainContext;return this._preRenderTarget=gt.curRenderTarget,gt.curRenderTarget=this,t.bindFramebuffer(36160,this.bitmap.frameBuffer),this._alreadyResolved=!1,1==this._type&&(t.viewport(0,0,this._w,this._h),this._svWidth=gt.width,this._svHeight=gt.height,gt.width=this._w,gt.height=this._h,Ft.activeShader=null),this},r.clear=function(t,e,i,r){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===r&&(r=1);var s=xt.mainContext;s.clearColor(t,e,i,r);var n=16384;switch(this._depthStencilFormat){case 33189:n|=256;break;case 36168:n|=1024;break;case 34041:n|=256,n|=1024}s.clear(n)},r.end=function(){var t=xt.mainContext;t.bindFramebuffer(36160,this._preRenderTarget?this._preRenderTarget.bitmap.frameBuffer:null),this._alreadyResolved=!0,gt.curRenderTarget=this._preRenderTarget,1==this._type?(t.viewport(0,0,this._svWidth,this._svHeight),gt.width=this._svWidth,gt.height=this._svHeight,Ft.activeShader=null):t.viewport(0,0,i.stage.width,i.stage.height)},r.getData=function(t,e,i,r){var s=xt.mainContext;if(s.bindFramebuffer(36160,this.bitmap.frameBuffer),!(36053===s.checkFramebufferStatus(36160)))return s.bindFramebuffer(36160,null),null;var n=new Uint8Array(this._w*this._h*4);return s.readPixels(t,e,i,r,this._surfaceFormat,this._surfaceType,n),s.bindFramebuffer(36160,null),n},r.destroy=function(e){void 0===e&&(e=!1),this._destroy||(this._loaded=!1,this.bitmap.offAll(),this.bitmap.disposeResource(),this.bitmap.dispose(),this.offAll(),this.bitmap=null,this._alreadyResolved=!1,this._destroy=!0,t.prototype.destroy.call(this))},r.dispose=function(){},r._createWebGLRenderTarget=function(){this.bitmap=new Wt(this.width,this.height,this._surfaceFormat,this._surfaceType,this._depthStencilFormat,this._mipMap,this._repeat,this._minFifter,this._magFifter),this.bitmap.activeResource(),this._alreadyResolved=!0,this._destroy=!1,this._loaded=!0,this.bitmap.on("recovered",this,function(t){this.event("recovered")})},n(0,r,"surfaceFormat",function(){return this._surfaceFormat}),n(0,r,"magFifter",function(){return this._magFifter}),n(0,r,"surfaceType",function(){return this._surfaceType}),n(0,r,"mipMap",function(){return this._mipMap}),n(0,r,"depthStencilFormat",function(){return this._depthStencilFormat}),n(0,r,"minFifter",function(){return this._minFifter}),n(0,r,"source",function(){return this._alreadyResolved?i.superGet(D,this,"source"):null}),e.create=function(t,i,r,s,n,a,h,l,o){void 0===r&&(r=6408),void 0===s&&(s=5121),void 0===n&&(n=34041),void 0===a&&(a=!1),void 0===h&&(h=!1),void 0===l&&(l=-1),void 0===o&&(o=-1);var u=e.POOL.pop();return u||(u=new e(t,i)),u.bitmap&&u._w==t&&u._h==i&&u._surfaceFormat==r&&u._surfaceType==s&&u._depthStencilFormat==n&&u._mipMap==a&&u._repeat==h&&u._minFifter==l&&u._magFifter==o||(u._w=t,u._h=i,u._surfaceFormat=r,u._surfaceType=s,u._depthStencilFormat=n,u._mipMap=a,u._repeat=h,u._minFifter=l,u._magFifter=o,u.release(),u._createWebGLRenderTarget()),u},e.TYPE2D=1,e.TYPE3D=2,e.POOL=[],e}(D),Bt=function(t){function e(){this._glBuffer=null,this._buffer=null,this._bufferType=0,this._bufferUsage=0,this._byteLength=0,e.__super.call(this),e._gl=xt.mainContext}s(e,"laya.webgl.utils.Buffer",S);var i=e.prototype;return i._bind=function(){this.activeResource(),e._bindActive[this._bufferType]!==this._glBuffer&&(34962===this._bufferType&&(e._bindVertexBuffer=this._glBuffer),e._gl.bindBuffer(this._bufferType,e._bindActive[this._bufferType]=this._glBuffer),Ft.activeShader=null)},i.recreateResource=function(){this._glBuffer||(this._glBuffer=e._gl.createBuffer()),this.completeCreate()},i.disposeResource=function(){this._glBuffer&&(xt.mainContext.deleteBuffer(this._glBuffer),this._glBuffer=null),this.memorySize=0},n(0,i,"bufferUsage",function(){return this._bufferUsage}),e._gl=null,e._bindActive={},e._bindVertexBuffer=null,e._enableAtributes=[],e}(),Nt=function(t){function e(t){this.texcoord=null,this.offsetX=300,this.offsetY=0,e.__super.call(this,512,0);var i=8*mt.BYTES_PE;this.position=[2,5126,!1,i,0],this.texcoord=[2,5126,!1,i,2*mt.BYTES_PE],this.color=[4,5126,!1,i,4*mt.BYTES_PE]}return s(e,"laya.webgl.shader.d2.skinAnishader.SkinSV",At),e}(),Ot=function(t){function e(t){e.__super.call(this,2,0),this.color=[]}return s(e,"laya.webgl.shader.d2.value.Color2dSV",At),e.prototype.setValue=function(t){t.fillStyle&&(this.color=t.fillStyle._color._color),t.strokeStyle&&(this.color=t.strokeStyle._color._color)},e}(),Vt=function(t){function e(t){this.u_colorMatrix=null,this.strength=0,this.colorMat=null,this.colorAlpha=null,this.u_TexRange=[0,1,0,1],this.u_offset=[0,0],this.texcoord=At._TEXCOORD,e.__super.call(this,256,0)}s(e,"laya.webgl.shader.d2.value.FillTextureSV",At);var i=e.prototype;return i.setValue=function(t){this.ALPHA=t.ALPHA,t.filters&&this.setFilters(t.filters)},i.clear=function(){this.texture=null,this.shader=null,this.defines.setValue(0)},e}(),Ut=function(t){function e(t){this.u_colorMatrix=null,this.strength=0,this.blurInfo=null,this.colorMat=null,this.colorAlpha=null,this.texcoord=At._TEXCOORD,void 0===t&&(t=0),e.__super.call(this,1,t)}s(e,"laya.webgl.shader.d2.value.TextureSV",At);var i=e.prototype;return i.setValue=function(t){this.ALPHA=t.ALPHA,t.filters&&this.setFilters(t.filters)},i.clear=function(){this.texture=null,this.shader=null,this.defines.setValue(0)},e}(),kt=function(t){function e(t){this.a_color=null,this.u_pos=[0,0],e.__super.call(this,4,0),this.position=[2,5126,!1,5*mt.BYTES_PE,0],this.a_color=[3,5126,!1,5*mt.BYTES_PE,2*mt.BYTES_PE]}return s(e,"laya.webgl.shader.d2.value.PrimitiveSV",At),e}(),Ht=function(t){function e(){this._atlaser=null,this._flashCacheImage=null,this._flashCacheImageNeedFlush=!1,e.__super.call(this)}s(e,"laya.webgl.atlas.AtlasWebGLCanvas",t);var i=e.prototype;return i.recreateResource=function(){var t=xt.mainContext,e=this._source=t.createTexture(),i=bt.curBindTexTarget,r=bt.curBindTexValue;bt.bindTexture(t,3553,e),t.texImage2D(3553,0,6408,this._w,this._h,0,6408,5121,null),t.texParameteri(3553,10241,9729),t.texParameteri(3553,10240,9729),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071),i&&r&&bt.bindTexture(t,i,r),this.memorySize=this._w*this._h*4,this.completeCreate()},i.disposeResource=function(){this._source&&(xt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},i.texSubImage2D=function(t,e,i){if(A.isFlash){this._flashCacheImage||(this._flashCacheImage=v.create(""),this._flashCacheImage._image.createCanvas(this._w,this._h));var r=i.bitmapdata;this._flashCacheImage._image.copyPixels(r,0,0,r.width,r.height,t,e),this._flashCacheImageNeedFlush||(this._flashCacheImageNeedFlush=!0)}else{var s=xt.mainContext,n=bt.curBindTexTarget,a=bt.curBindTexValue;bt.bindTexture(s,3553,this._source),s.pixelStorei(37441,!0),t-1>=0&&s.texSubImage2D(3553,0,t-1,e,6408,5121,i),t+1<=this._w&&s.texSubImage2D(3553,0,t+1,e,6408,5121,i),e-1>=0&&s.texSubImage2D(3553,0,t,e-1,6408,5121,i),e+1<=this._h&&s.texSubImage2D(3553,0,t,e+1,6408,5121,i),s.texSubImage2D(3553,0,t,e,6408,5121,i),s.pixelStorei(37441,!1),n&&a&&bt.bindTexture(s,n,a)}},i.texSubImage2DPixel=function(t,e,i,r,s){var n=xt.mainContext,a=bt.curBindTexTarget,h=bt.curBindTexValue;bt.bindTexture(n,3553,this._source);var l=new Uint8Array(s.data);n.pixelStorei(37441,!0),n.texSubImage2D(3553,0,t,e,i,r,6408,5121,l),n.pixelStorei(37441,!1),a&&h&&bt.bindTexture(n,a,h)},n(0,i,"width",t.prototype._$get_width,function(t){this._w=t}),n(0,i,"height",t.prototype._$get_height,function(t){this._h=t}),e}(o),Gt=function(t){function e(){e.__super.call(this)}s(e,"laya.webgl.resource.WebGLCanvas",o);var i=e.prototype;return i.getCanvas=function(){return this._canvas},i.clear=function(){this._ctx&&this._ctx.clear()},i.destroy=function(){this._ctx&&this._ctx.destroy(),this._ctx=null},i._setContext=function(t){this._ctx=t},i.getContext=function(t,i){return this._ctx?this._ctx:this._ctx=e._createContext(this)},i.size=function(t,e){this._w==t&&this._h==e||(this._w=t,this._h=e,this._ctx&&this._ctx.size(t,e),this._canvas&&(this._canvas.height=e,this._canvas.width=t))},i.recreateResource=function(){this.createWebGlTexture(),this.completeCreate()},i.disposeResource=function(){this._source&&!this.iscpuSource&&(xt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},i.createWebGlTexture=function(){var t=xt.mainContext;if(!this._canvas)throw"create GLTextur err:no data:"+this._canvas;var e=this._source=t.createTexture();this.iscpuSource=!1;var i=bt.curBindTexTarget,r=bt.curBindTexValue;bt.bindTexture(t,3553,e),t.pixelStorei(37440,1),t.texImage2D(3553,0,6408,6408,5121,this._imgData),t.texParameteri(3553,10240,9729),t.texParameteri(3553,10241,9729),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071),t.pixelStorei(37440,0),this.memorySize=this._w*this._h*4,i&&r&&bt.bindTexture(t,i,r)},i.texSubImage2D=function(t,e,i){var r=xt.mainContext,s=bt.curBindTexTarget,n=bt.curBindTexValue;bt.bindTexture(r,3553,this._source),r.pixelStorei(37441,!0),r.texSubImage2D(3553,0,e,i,6408,5121,t._source),r.pixelStorei(37441,!1),s&&n&&bt.bindTexture(r,s,n)},i.toBase64=function(t,e,i){var r=null;this._canvas&&(r=this._canvas.toDataURL(t,e)),i.call(this,r)},n(0,i,"context",function(){return this._ctx}),n(0,i,"asBitmap",null,function(t){this._ctx&&(this._ctx.asBitmap=t)}),e._createContext=null,e}(),zt=function(t){function e(t,i){this.CborderSize=12,e.__super.call(this),this.char=t,this.isSpace=" "===t,this.xs=i.scaleX,this.ys=i.scaleY,this.font=i.font.toString(),this.fontSize=i.font.size,this.fillColor=i.fillColor,this.borderColor=i.borderColor,this.lineWidth=i.lineWidth,this.underLine=i.underLine;var r,s=A.isConchApp;s?((r=ConchTextCanvas)._source=ConchTextCanvas,r._source.canvas=ConchTextCanvas):r=u.canvas.source,this.canvas=r,this._enableMerageInAtlas=!0,this._ctx=s?r:this.canvas.getContext("2d",void 0);var n=B.measureText(this.char,this.font);this.cw=n.width*this.xs,this.ch=(n.height||this.fontSize)*this.ys,this.onresize(this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this.texture=new D(this)}s(e,"laya.webgl.resource.WebGLCharImage",o);var r=e.prototype;return i.imps(r,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),r.active=function(){this.texture.active()},r.recreateResource=function(){var t=A.isConchApp;if(this.onresize(this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this.canvas&&(this.canvas.height=this._h,this.canvas.width=this._w),t){var e=this.fontSize;1==this.xs&&1==this.ys||(e=parseInt(e*(this.xs>this.ys?this.xs:this.ys)+""));var i="normal 100 "+e+"px Arial";this.borderColor&&(i+=" 1 "+this.borderColor),this._ctx.font=i,this._ctx.textBaseline="top",this._ctx.fillStyle=this.fillColor,this._ctx.fillText(this.char,this.CborderSize,this.CborderSize,null,null,null)}else{if(this._ctx.save(),this._ctx.clearRect(0,0,this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this._ctx.font=this.font,F.RightToLeft&&(this._ctx.textAlign="end"),this._ctx.textBaseline="top",this._ctx.translate(this.CborderSize,this.CborderSize),1==this.xs&&1==this.ys||this._ctx.scale(this.xs,this.ys),this.fillColor&&this.borderColor?(this._ctx.strokeStyle=this.borderColor,this._ctx.lineWidth=this.lineWidth,this._ctx.strokeText(this.char,0,0,null,null,0,null),this._ctx.fillStyle=this.fillColor,this._ctx.fillText(this.char,0,0,null,null,null)):-1===this.lineWidth?(this._ctx.fillStyle=this.fillColor?this.fillColor:"white",this._ctx.fillText(this.char,0,0,null,null,null)):(this._ctx.strokeStyle=this.borderColor?this.borderColor:"white",this._ctx.lineWidth=this.lineWidth,this._ctx.strokeText(this.char,0,0,null,null,0,null)),this.underLine){this._ctx.lineWidth=1,this._ctx.strokeStyle=this.fillColor,this._ctx.beginPath(),this._ctx.moveTo(0,this.fontSize+1);var r=this._ctx.measureText(this.char).width+1;this._ctx.lineTo(r,this.fontSize+1),this._ctx.stroke()}this._ctx.restore()}this.borderSize=this.CborderSize,this.completeCreate()},r.onresize=function(t,e){this._w=t,this._h=e,this._allowMerageInAtlas=!0},r.clearAtlasSource=function(){},n(0,r,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),n(0,r,"atlasSource",function(){return this.canvas}),n(0,r,"enableMerageInAtlas",function(){return this._enableMerageInAtlas},function(t){this._enableMerageInAtlas=t}),e.createOneChar=function(t,i){return new e(t,i)},e}(),Wt=function(t){function e(t,i,r,s,n,a,h,l,o){void 0===r&&(r=6408),void 0===s&&(s=5121),void 0===n&&(n=34041),void 0===a&&(a=!1),void 0===h&&(h=!1),void 0===l&&(l=-1),void 0===o&&(o=1),e.__super.call(this),this._w=t,this._h=i,this._surfaceFormat=r,this._surfaceType=s,this._depthStencilFormat=n,this._mipMap=a,this._repeat=h,this._minFifter=l,this._magFifter=o}s(e,"laya.webgl.resource.WebGLRenderTarget",o);var i=e.prototype;return i.recreateResource=function(){var t=xt.mainContext;this._frameBuffer||(this._frameBuffer=t.createFramebuffer()),this._source||(this._source=t.createTexture());var e=bt.curBindTexTarget,i=bt.curBindTexValue;bt.bindTexture(t,3553,this._source),t.texImage2D(3553,0,6408,this._w,this._h,0,this._surfaceFormat,this._surfaceType,null);var r=this._minFifter,s=this._magFifter,n=this._repeat?10497:33071;if(h.isPOT(this._w,this._h)?(this._mipMap?-1!==r||(r=9987):-1!==r||(r=9729),-1!==s||(s=9729),t.texParameteri(3553,10241,r),t.texParameteri(3553,10240,s),t.texParameteri(3553,10242,n),t.texParameteri(3553,10243,n),this._mipMap&&t.generateMipmap(3553)):(-1!==r||(r=9729),-1!==s||(s=9729),t.texParameteri(3553,10241,r),t.texParameteri(3553,10240,s),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),t.bindFramebuffer(36160,this._frameBuffer),t.framebufferTexture2D(36160,36064,3553,this._source,0),this._depthStencilFormat)switch(this._depthStencilBuffer||(this._depthStencilBuffer=t.createRenderbuffer()),t.bindRenderbuffer(36161,this._depthStencilBuffer),t.renderbufferStorage(36161,this._depthStencilFormat,this._w,this._h),this._depthStencilFormat){case 33189:t.framebufferRenderbuffer(36160,36096,36161,this._depthStencilBuffer);break;case 36168:t.framebufferRenderbuffer(36160,36128,36161,this._depthStencilBuffer);break;case 34041:t.framebufferRenderbuffer(36160,33306,36161,this._depthStencilBuffer)}t.bindFramebuffer(36160,null),e&&i&&bt.bindTexture(t,e,i),t.bindRenderbuffer(36161,null),this.memorySize=this._w*this._h*4,this.completeCreate()},i.disposeResource=function(){this._frameBuffer&&(xt.mainContext.deleteTexture(this._source),xt.mainContext.deleteFramebuffer(this._frameBuffer),xt.mainContext.deleteRenderbuffer(this._depthStencilBuffer),this._source=null,this._frameBuffer=null,this._depthStencilBuffer=null,this.memorySize=0)},n(0,i,"depthStencilBuffer",function(){return this._depthStencilBuffer}),n(0,i,"frameBuffer",function(){return this._frameBuffer}),e}(),Yt=function(t){function e(t,i,r,s,n,a,h){this.offsetX=0,this.offsetY=0,e.__super.call(this),this.repeat=!0,this.mipmap=!1,this.minFifter=-1,this.magFifter=-1,this.atlasImage=a,this.canvas=t,this._ctx=t.getContext("2d",void 0),this._w=s,this._h=n,this.offsetX=i,this.offsetY=r,this.src=h,this._enableMerageInAtlas=!0,k.enabled&&this._w<k.atlasLimitWidth&&this._h<k.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1}s(e,"laya.webgl.resource.WebGLSubImage",o);var r=e.prototype;return i.imps(r,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),r.size=function(t,e){this._w=t,this._h=e,this._ctx&&this._ctx.size(t,e),this.canvas&&(this.canvas.height=e,this.canvas.width=t)},r.recreateResource=function(){this.size(this._w,this._h),this._ctx.drawImage(this.atlasImage,this.offsetX,this.offsetY,this._w,this._h,0,0,this._w,this._h),this._allowMerageInAtlas&&this._enableMerageInAtlas?this.memorySize=0:this.createWebGlTexture(),this.completeCreate()},r.createWebGlTexture=function(){var t=xt.mainContext;if(!this.canvas)throw"create GLTextur err:no data:"+this.canvas;var e=this._source=t.createTexture(),i=bt.curBindTexTarget,r=bt.curBindTexValue;bt.bindTexture(t,3553,e),t.pixelStorei(37441,!0),t.texImage2D(3553,0,6408,6408,5121,this.canvas),t.pixelStorei(37441,!1);var s=this.minFifter,n=this.magFifter,a=this.repeat?10497:33071;h.isPOT(this.width,this.height)?(this.mipmap?-1!==s||(s=9987):-1!==s||(s=9729),-1!==n||(n=9729),t.texParameteri(3553,10240,n),t.texParameteri(3553,10241,s),t.texParameteri(3553,10242,a),t.texParameteri(3553,10243,a),this.mipmap&&t.generateMipmap(3553)):(-1!==s||(s=9729),-1!==n||(n=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,n),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),i&&r&&bt.bindTexture(t,i,r),this.canvas=null,this.memorySize=this._w*this._h*4},r.disposeResource=function(){k.enabled&&this._allowMerageInAtlas||!this._source||(xt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},r.clearAtlasSource=function(){},n(0,r,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),n(0,r,"atlasSource",function(){return this.canvas}),n(0,r,"enableMerageInAtlas",function(){return this._allowMerageInAtlas},function(t){this._allowMerageInAtlas=t}),e}(),Xt=function(t){function e(t,i,r,s){if(this.customCompile=!1,this._curActTexIndex=0,this.tag={},this._program=null,this._params=null,this._paramsMap={},this._offset=0,e.__super.call(this),!t||!i)throw"Shader Error";(A.isConchApp||A.isFlash)&&(this.customCompile=!0),this._id=++e._count,this._vs=t,this._ps=i,this._nameMap=s||{},null!=r&&(e.sharders[r]=this)}s(e,"laya.webgl.shader.Shader",Ft);var i=e.prototype;return i.recreateResource=function(){this._compile(),this.completeCreate(),this.memorySize=0},i.disposeResource=function(){xt.mainContext.deleteShader(this._vshader),xt.mainContext.deleteShader(this._pshader),xt.mainContext.deleteProgram(this._program),this._vshader=this._pshader=this._program=null,this._params=null,this._paramsMap={},this.memorySize=0,this._curActTexIndex=0},i._compile=function(){if(this._vs&&this._ps&&!this._params){this._reCompile=!0,this._params=[];var t,i=[this._vs,this._ps];this.customCompile&&(t=vt.preGetParams(this._vs,this._ps));var r=xt.mainContext;if(this._program=r.createProgram(),this._vshader=e._createShader(r,i[0],35633),this._pshader=e._createShader(r,i[1],35632),r.attachShader(this._program,this._vshader),r.attachShader(this._program,this._pshader),r.linkProgram(this._program),!this.customCompile&&!r.getProgramParameter(this._program,35714))throw r.getProgramInfoLog(this._program);var s,n,a=0,h=this.customCompile?t.attributes.length:r.getProgramParameter(this._program,35721);for(a=0;a<h;a++){var l=this.customCompile?t.attributes[a]:r.getActiveAttrib(this._program,a);s={vartype:"attribute",glfun:null,ivartype:0,attrib:l,location:r.getAttribLocation(this._program,l.name),name:l.name,type:l.type,isArray:!1,isSame:!1,preValue:null,indexOfParams:0},this._params.push(s)}var o=this.customCompile?t.uniforms.length:r.getProgramParameter(this._program,35718);for(a=0;a<o;a++){var u=this.customCompile?t.uniforms[a]:r.getActiveUniform(this._program,a);(s={vartype:"uniform",glfun:null,ivartype:1,attrib:l,location:r.getUniformLocation(this._program,u.name),name:u.name,type:u.type,isArray:!1,isSame:!1,preValue:null,indexOfParams:0}).name.indexOf("[0]")>0&&(s.name=s.name.substr(0,s.name.length-3),s.isArray=!0,s.location=r.getUniformLocation(this._program,s.name)),this._params.push(s)}for(a=0,n=this._params.length;a<n;a++)if((s=this._params[a]).indexOfParams=a,s.index=1,s.value=[s.location,null],s.codename=s.name,s.name=this._nameMap[s.codename]?this._nameMap[s.codename]:s.codename,this._paramsMap[s.name]=s,s._this=this,s.uploadedValue=[],"attribute"!==s.vartype)switch(s.type){case 5124:s.fun=s.isArray?this._uniform1iv:this._uniform1i;break;case 5126:s.fun=s.isArray?this._uniform1fv:this._uniform1f;break;case 35664:s.fun=s.isArray?this._uniform_vec2v:this._uniform_vec2;break;case 35665:s.fun=s.isArray?this._uniform_vec3v:this._uniform_vec3;break;case 35666:s.fun=s.isArray?this._uniform_vec4v:this._uniform_vec4;break;case 35678:s.fun=this._uniform_sampler2D;break;case 35680:s.fun=this._uniform_samplerCube;break;case 35676:s.glfun=r.uniformMatrix4fv,s.fun=this._uniformMatrix4fv;break;case 35670:s.fun=this._uniform1i;break;case 35674:case 35675:default:throw new Error("compile shader err!")}else s.fun=this._attribute}},i.getUniform=function(t){return this._paramsMap[t]},i._attribute=function(t,e){var i=xt.mainContext,r=Bt._enableAtributes,s=t.location;return r[s]||i.enableVertexAttribArray(s),i.vertexAttribPointer(s,e[0],e[1],e[2],e[3],e[4]+this._offset),r[s]=Bt._bindVertexBuffer,1},i._uniform1f=function(t,e){var i=t.uploadedValue;return i[0]!==e?(xt.mainContext.uniform1f(t.location,i[0]=e),1):0},i._uniform1fv=function(t,e){if(e.length<4){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(xt.mainContext.uniform1fv(t.location,e),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],1):0}return xt.mainContext.uniform1fv(t.location,e),1},i._uniform_vec2=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]?(xt.mainContext.uniform2f(t.location,i[0]=e[0],i[1]=e[1]),1):0},i._uniform_vec2v=function(t,e){if(e.length<2){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(xt.mainContext.uniform2fv(t.location,e),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],1):0}return xt.mainContext.uniform2fv(t.location,e),1},i._uniform_vec3=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]?(xt.mainContext.uniform3f(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2]),1):0},i._uniform_vec3v=function(t,e){return xt.mainContext.uniform3fv(t.location,e),1},i._uniform_vec4=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(xt.mainContext.uniform4f(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3]),1):0},i._uniform_vec4v=function(t,e){return xt.mainContext.uniform4fv(t.location,e),1},i._uniformMatrix2fv=function(t,e){return xt.mainContext.uniformMatrix2fv(t.location,!1,e),1},i._uniformMatrix3fv=function(t,e){return xt.mainContext.uniformMatrix3fv(t.location,!1,e),1},i._uniformMatrix4fv=function(t,e){return xt.mainContext.uniformMatrix4fv(t.location,!1,e),1},i._uniform1i=function(t,e){var i=t.uploadedValue;return i[0]!==e?(xt.mainContext.uniform1i(t.location,i[0]=e),1):0},i._uniform1iv=function(t,e){return xt.mainContext.uniform1iv(t.location,e),1},i._uniform_ivec2=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]?(xt.mainContext.uniform2i(t.location,i[0]=e[0],i[1]=e[1]),1):0},i._uniform_ivec2v=function(t,e){return xt.mainContext.uniform2iv(t.location,e),1},i._uniform_vec3i=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]?(xt.mainContext.uniform3i(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2]),1):0},i._uniform_vec3vi=function(t,e){return xt.mainContext.uniform3iv(t.location,e),1},i._uniform_vec4i=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(xt.mainContext.uniform4i(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3]),1):0},i._uniform_vec4vi=function(t,e){return xt.mainContext.uniform4iv(t.location,e),1},i._uniform_sampler2D=function(t,i){var r=xt.mainContext,s=t.uploadedValue;return null==s[0]?(s[0]=this._curActTexIndex,r.uniform1i(t.location,this._curActTexIndex),r.activeTexture(e._TEXTURES[this._curActTexIndex]),bt.bindTexture(r,3553,i),this._curActTexIndex++,1):(r.activeTexture(e._TEXTURES[s[0]]),bt.bindTexture(r,3553,i),0)},i._uniform_samplerCube=function(t,i){var r=xt.mainContext,s=t.uploadedValue;return null==s[0]?(s[0]=this._curActTexIndex,r.uniform1i(t.location,this._curActTexIndex),r.activeTexture(e._TEXTURES[this._curActTexIndex]),bt.bindTexture(r,34067,i),this._curActTexIndex++,1):(r.activeTexture(e._TEXTURES[s[0]]),bt.bindTexture(r,34067,i),0)},i._noSetValue=function(t){console.log("no....:"+t.name)},i.uploadOne=function(t,e){this.activeResource(),bt.UseProgram(this._program);var i=this._paramsMap[t];i.fun.call(this,i,e)},i.uploadTexture2D=function(t){C.shaderCall++;var e=xt.mainContext;e.activeTexture(33984),bt.bindTexture(e,3553,t)},i.upload=function(t,e){Ft.activeShader=Ft.bindShader=this,this._lastUseFrameCount===C.loopCount||this.activeResource(),bt.UseProgram(this._program),this._reCompile?(e=this._params,this._reCompile=!1):e=e||this._params;xt.mainContext;for(var i,r,s=e.length,n=0,a=0;a<s;a++)null!==(r=t[(i=e[a]).name])&&(n+=i.fun.call(this,i,r));C.shaderCall+=n},i.uploadArray=function(t,e,i){Ft.activeShader=this,Ft.bindShader=this,this.activeResource(),bt.UseProgram(this._program);this._params;for(var r,s,n=0,a=e-2;a>=0;a-=2)(s=this._paramsMap[t[a]])&&null!=(r=t[a+1])&&(i&&i[s.name]&&i[s.name].bind(),n+=s.fun.call(this,s,r));C.shaderCall+=n},i.getParams=function(){return this._params},e.getShader=function(t){return e.sharders[t]},e.create=function(t,i,r,s){return new e(t,i,r,s)},e.withCompile=function(t,i,r,s){if(r&&e.sharders[r])return e.sharders[r];var n=e._preCompileShader[2e-4*t];if(!n)throw new Error("withCompile shader err!"+t);return n.createShader(i,r,s)},e.withCompile2D=function(t,i,r,s,n){if(s&&e.sharders[s])return e.sharders[s];var a=e._preCompileShader[2e-4*t+i];if(!a)throw new Error("withCompile shader err!"+t+" "+i);return a.createShader(r,s,n)},e.addInclude=function(t,e){vt.addInclude(t,e)},e.preCompile=function(t,i,r,s){var n=2e-4*t;e._preCompileShader[n]=new vt(n,i,r,s)},e.preCompile2D=function(t,i,r,s,n){var a=2e-4*t+i;e._preCompileShader[a]=new vt(a,r,s,n)},e._createShader=function(t,e,i){var r=t.createShader(i);return t.shaderSource(r,e),t.compileShader(r),r},e._count=0,e._preCompileShader={},e.SHADERNAME2ID=2e-4,r(e,["_TEXTURES",function(){return this._TEXTURES=[33984,33985,33986,33987,33988,33989,33990,,33991,33992]},"nameKey",function(){return this.nameKey=new L},"sharders",function(){return this.sharders=(e.sharders=[],e.sharders.length=32,e.sharders)}]),e}(),Kt=function(t){function e(){this._maxsize=0,this._upload=!0,this._uploadSize=0,e.__super.call(this),this.lock=!0}s(e,"laya.webgl.utils.Buffer2D",t);var i=e.prototype;return i._bufferData=function(){this._maxsize=Math.max(this._maxsize,this._byteLength),C.loopCount%30==0&&(this._buffer.byteLength>this._maxsize+64&&(this.memorySize=this._buffer.byteLength,this._buffer=this._buffer.slice(0,this._maxsize+64),this._checkArrayUse()),this._maxsize=this._byteLength),this._uploadSize<this._buffer.byteLength&&(this._uploadSize=this._buffer.byteLength,Bt._gl.bufferData(this._bufferType,this._uploadSize,this._bufferUsage),this.memorySize=this._uploadSize),Bt._gl.bufferSubData(this._bufferType,0,this._buffer)},i._bufferSubData=function(t,e,i){if(void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),this._maxsize=Math.max(this._maxsize,this._byteLength),C.loopCount%30==0&&(this._buffer.byteLength>this._maxsize+64&&(this.memorySize=this._buffer.byteLength,this._buffer=this._buffer.slice(0,this._maxsize+64),this._checkArrayUse()),this._maxsize=this._byteLength),this._uploadSize<this._buffer.byteLength&&(this._uploadSize=this._buffer.byteLength,Bt._gl.bufferData(this._bufferType,this._uploadSize,this._bufferUsage),this.memorySize=this._uploadSize),e||i){var r=this._buffer.slice(e,i);Bt._gl.bufferSubData(this._bufferType,t,r)}else Bt._gl.bufferSubData(this._bufferType,t,this._buffer)},i._checkArrayUse=function(){},i._bind_upload=function(){return!!this._upload&&(this._upload=!1,this._bind(),this._bufferData(),!0)},i._bind_subUpload=function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),!!this._upload&&(this._upload=!1,this._bind(),this._bufferSubData(t,e,i),!0)},i._resizeBuffer=function(t,e){if(t<this._buffer.byteLength)return this;if(this.memorySize=t,e&&this._buffer&&this._buffer.byteLength>0){var i=new ArrayBuffer(t);new Uint8Array(i).set(new Uint8Array(this._buffer),0),this._buffer=i}else this._buffer=new ArrayBuffer(t);return this._checkArrayUse(),this._upload=!0,this},i.append=function(t){this._upload=!0;var e,i;e=t.byteLength,t instanceof Uint8Array?(this._resizeBuffer(this._byteLength+e,!0),i=new Uint8Array(this._buffer,this._byteLength)):t instanceof Uint16Array?(this._resizeBuffer(this._byteLength+e,!0),i=new Uint16Array(this._buffer,this._byteLength)):t instanceof Float32Array&&(this._resizeBuffer(this._byteLength+e,!0),i=new Float32Array(this._buffer,this._byteLength)),i.set(t,0),this._byteLength+=e,this._checkArrayUse()},i.appendEx=function(t,e){this._upload=!0;var i;i=t.byteLength,this._resizeBuffer(this._byteLength+i,!0),new e(this._buffer,this._byteLength).set(t,0),this._byteLength+=i,this._checkArrayUse()},i.appendEx2=function(t,e,i,r){void 0===r&&(r=1),this._upload=!0;var s,n;s=i*r,this._resizeBuffer(this._byteLength+s,!0),n=new e(this._buffer,this._byteLength);var a=0;for(a=0;a<i;a++)n[a]=t[a];this._byteLength+=s,this._checkArrayUse()},i.getBuffer=function(){return this._buffer},i.setNeedUpload=function(){this._upload=!0},i.getNeedUpload=function(){return this._upload},i.upload=function(){var t=this._bind_upload();return Bt._gl.bindBuffer(this._bufferType,null),Bt._bindActive[this._bufferType]=null,Ft.activeShader=null,t},i.subUpload=function(t,e,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0);var r=this._bind_subUpload();return Bt._gl.bindBuffer(this._bufferType,null),Bt._bindActive[this._bufferType]=null,Ft.activeShader=null,r},i.disposeResource=function(){t.prototype.disposeResource.call(this),this._upload=!0,this._uploadSize=0},i.clear=function(){this._byteLength=0,this._upload=!0},n(0,i,"bufferLength",function(){return this._buffer.byteLength}),n(0,i,"byteLength",null,function(t){this._byteLength!==t&&(t<=this._buffer.byteLength||this._resizeBuffer(2*t+256,!0),this._byteLength=t)}),e.__int__=function(t){qt.QuadrangleIB=qt.create(35044),pt.fillIBQuadrangle(qt.QuadrangleIB,16)},e.FLOAT32=4,e.SHORT=2,e}(Bt),Qt=(function(t){function e(t){this.u_blurX=!1,this.u_color=null,this.u_offset=null,this.u_strength=NaN,this.u_texW=0,this.u_texH=0,e.__super.call(this,9)}s(e,"laya.webgl.shader.d2.value.GlowSV",t);var i=e.prototype;i.setValue=function(e){t.prototype.setValue.call(this,e)},i.clear=function(){t.prototype.clear.call(this)}}(Ut),function(t){function e(t){e.__super.call(this,64),this.defines.add(64)}s(e,"laya.webgl.shader.d2.value.TextSV",t);var i=e.prototype;return i.release=function(){e.pool[e._length++]=this,this.clear()},i.clear=function(){t.prototype.clear.call(this)},e.create=function(){return e._length?e.pool[--e._length]:new e(null)},e.pool=[],e._length=0,e}(Ut)),Zt=function(t){function e(t,i,r,s){this._params2dQuick1=null,this._params2dQuick2=null,this._shaderValueWidth=NaN,this._shaderValueHeight=NaN,e.__super.call(this,t,i,r,s)}s(e,"laya.webgl.shader.d2.Shader2X",t);var i=e.prototype;return i.upload2dQuick1=function(t){this.upload(t,this._params2dQuick1||this._make2dQuick1())},i._make2dQuick1=function(){if(!this._params2dQuick1){this.activeResource(),this._params2dQuick1=[];for(var t,e=this._params,i=0,r=e.length;i<r;i++)t=e[i],(A.isFlash||"size"!==t.name&&"position"!==t.name&&"texcoord"!==t.name)&&this._params2dQuick1.push(t)}return this._params2dQuick1},i.disposeResource=function(){t.prototype.disposeResource.call(this),this._params2dQuick1=null,this._params2dQuick2=null},i.upload2dQuick2=function(t){this.upload(t,this._params2dQuick2||this._make2dQuick2())},i._make2dQuick2=function(){if(!this._params2dQuick2){this.activeResource(),this._params2dQuick2=[];for(var t,e=this._params,i=0,r=e.length;i<r;i++)t=e[i],(A.isFlash||"size"!==t.name)&&this._params2dQuick2.push(t)}return this._params2dQuick2},e.create=function(t,i,r,s){return new e(t,i,r,s)},e}(Xt),qt=function(t){function e(t){this._uint8Array=null,this._uint16Array=null,void 0===t&&(t=35044),e.__super.call(this),this._bufferUsage=t,this._bufferType=34963,A.isFlash||(this._buffer=new ArrayBuffer(8))}s(e,"laya.webgl.utils.IndexBuffer2D",Kt);var i=e.prototype;return i._checkArrayUse=function(){this._uint8Array&&(this._uint8Array=new Uint8Array(this._buffer)),this._uint16Array&&(this._uint16Array=new Uint16Array(this._buffer))},i.getUint8Array=function(){return this._uint8Array||(this._uint8Array=new Uint8Array(this._buffer))},i.getUint16Array=function(){return this._uint16Array||(this._uint16Array=new Uint16Array(this._buffer))},i.destory=function(){this._uint16Array=null,this._uint8Array=null,this._buffer=null},e.QuadrangleIB=null,e.create=function(t){return void 0===t&&(t=35044),new e(t)},e}(),jt=function(t){function e(t,i){this._floatArray32=null,this._vertexStride=0,e.__super.call(this),this._vertexStride=t,this._bufferUsage=i,this._bufferType=34962,A.isFlash||(this._buffer=new ArrayBuffer(8)),this.getFloat32Array()}s(e,"laya.webgl.utils.VertexBuffer2D",t);var i=e.prototype;return i.getFloat32Array=function(){return this._floatArray32||(this._floatArray32=new Float32Array(this._buffer))},i.bind=function(t){t&&t._bind(),this._bind()},i.insertData=function(t,e){this.getFloat32Array().set(t,e),this._upload=!0},i.bind_upload=function(t){t._bind_upload()||t._bind(),this._bind_upload()||this._bind()},i._checkArrayUse=function(){this._floatArray32&&(this._floatArray32=new Float32Array(this._buffer))},i.disposeResource=function(){t.prototype.disposeResource.call(this);for(var e=Bt._enableAtributes,i=0;i<10;i++)xt.mainContext.disableVertexAttribArray(i),e[i]=null},i.destory=function(){this._byteLength=0,this._upload=!0,this._buffer=null,this._floatArray32=null},n(0,i,"vertexStride",function(){return this._vertexStride}),e.create=function(t,i){return void 0===i&&(i=35048),new e(t,i)},e}(Kt),$t=function(t){function e(t,i,r,s){if(this._format=0,this._mipmap=!1,this._allowMerageInAtlas=!1,this._enableMerageInAtlas=!1,this.repeat=!1,this._image=null,this.minFifter=0,this.magFifter=0,void 0===r&&(r=6408),void 0===s&&(s=!0),e.__super.call(this,t,i),this._format=r,this._mipmap=s,this.repeat=!1,this.minFifter=-1,this.magFifter=-1,"string"==typeof t)this._url=t,this._src=t,this._image=new u.window.Image,i&&(i.onload&&(this.onload=i.onload),i.onerror&&(this.onerror=i.onerror),i.onCreate&&i.onCreate(this)),this._image.crossOrigin=t&&0==t.indexOf("data:")?null:"",t&&(this._image.src=t);else if(t instanceof ArrayBuffer){this._src=i,this._url=this._src;var n=new _(t);n.readUTFBytes(4),n.readUTFBytes(2),n.getInt16();n.endian="bigEndian",this._w=n.getInt16(),this._h=n.getInt16();n.getInt16(),n.getInt16();this._image=new Uint8Array(t,n.pos),this._format=xt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL,k.enabled&&this._w<k.atlasLimitWidth&&this._h<k.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1}else this._src=i,this._url=this._src,this._image=t.source||t,this.onresize();this._$5__enableMerageInAtlas=!0}s(e,"laya.webgl.resource.WebGLImage",v);var r=e.prototype;return i.imps(r,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),r._init_=function(t,e){},r._createWebGlTexture=function(){if(!this._image)throw"create GLTextur err:no data:"+this._image;var t=xt.mainContext,e=this._source=t.createTexture(),i=bt.curBindTexTarget,r=bt.curBindTexValue;switch(bt.bindTexture(t,3553,e),t.pixelStorei(37441,!0),this._format){case 6408:t.texImage2D(3553,0,this._format,6408,5121,this._image);break;case xt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL:t.compressedTexImage2D(3553,0,this._format,this._w,this._h,0,this._image)}t.pixelStorei(37441,!1);var s=this.minFifter,n=this.magFifter,a=this.repeat?10497:33071,l=h.isPOT(this._w,this._h);l?(this.mipmap?-1!==s||(s=9987):-1!==s||(s=9729),-1!==n||(n=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,n),t.texParameteri(3553,10242,a),t.texParameteri(3553,10243,a),this.mipmap&&t.generateMipmap(3553)):(-1!==s||(s=9729),-1!==n||(n=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,n),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),i&&r&&bt.bindTexture(t,i,r),this._image.onload=null,this._image=null,this.memorySize=l?this._w*this._h*4*(1+1/3):this._w*this._h*4,this._recreateLock=!1},r.recreateResource=function(){var t=this;if(null!=this._src&&""!==this._src)if(this._needReleaseAgain=!1,this._image){if(this._recreateLock)return;this._allowMerageInAtlas&&this._$5__enableMerageInAtlas?(this.memorySize=0,this._recreateLock=!1):this._createWebGlTexture(),this.completeCreate()}else{this._recreateLock=!0;var e=this;this._image=new u.window.Image,this._image.crossOrigin=0==this._src.indexOf("data:")?null:"",this._image.onload=function(){if(e._needReleaseAgain)return e._needReleaseAgain=!1,e._image.onload=null,void(e._image=null);e._allowMerageInAtlas&&e._enableMerageInAtlas?(t.memorySize=0,t._recreateLock=!1):e._createWebGlTexture(),e.completeCreate()},this._image.src=this._src}},r.disposeResource=function(){this._recreateLock&&(this._needReleaseAgain=!0),this._source&&(xt.mainContext.deleteTexture(this._source),this._source=null,this._image=null,this.memorySize=0)},r.onresize=function(){this._w=this._image.width,this._h=this._image.height,k.enabled&&this._w<k.atlasLimitWidth&&this._h<k.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1},r.clearAtlasSource=function(){this._image=null},n(0,r,"format",function(){return this._format}),n(0,r,"enableMerageInAtlas",function(){return this._$5__enableMerageInAtlas},function(t){this._$5__enableMerageInAtlas=t}),n(0,r,"mipmap",function(){return this._mipmap}),n(0,r,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),n(0,r,"atlasSource",function(){return this._image}),n(0,r,"onload",null,function(t){var e=this;this._onload=t,this._image&&(this._image.onload=null!=this._onload?function(){e.onresize(),e._onload()}:null)}),n(0,r,"onerror",null,function(t){var e=this;this._onerror=t,this._image&&(this._image.onerror=null!=this._onerror?function(){e._onerror()}:null)}),e}();i.__init([ft,U,yt,vt])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";for(var i in Object.defineProperty(e,"__esModule",{value:!0}),Laya){var r=Laya[i];r&&r.__isclass&&(e[i]=r)}});


//ani.js


//ui.js
!function(t,i,e){e.un,e.uns;var s=e.static,h=e.class,n=e.getset,o=(e.__newvec,laya.display.Animation),r=laya.utils.Browser,l=laya.utils.ClassUtils,a=laya.filters.ColorFilter,c=laya.utils.Ease,u=laya.events.Event,_=laya.display.css.Font,d=laya.display.FrameAnimation,f=laya.display.Graphics,p=laya.utils.Handler,g=laya.display.Input,m=laya.net.Loader,y=(laya.display.Node,laya.maths.Point),v=laya.maths.Rectangle,C=laya.renders.Render,b=laya.display.Sprite,S=laya.display.Text,w=laya.resource.Texture,x=laya.utils.Tween,B=laya.utils.Utils,k=laya.utils.WeakObject;e.interface("laya.ui.IItem"),e.interface("laya.ui.ISelect"),e.interface("laya.ui.IRender"),e.interface("laya.ui.IComponent"),e.interface("laya.ui.IBox","IComponent");var I=function(){function t(){this.enable=!1,this.top=NaN,this.bottom=NaN,this.left=NaN,this.right=NaN,this.centerX=NaN,this.centerY=NaN,this.anchorX=NaN,this.anchorY=NaN}return h(t,"laya.ui.LayoutStyle"),s(t,["EMPTY",function(){return this.EMPTY=new t}]),t}(),L=function(){function t(){}return h(t,"laya.ui.Styles"),t.labelColor="#000000",t.buttonStateNum=3,t.scrollBarMinNum=15,t.scrollBarDelayTime=500,s(t,["defaultSizeGrid",function(){return this.defaultSizeGrid=[4,4,4,4,0]},"labelPadding",function(){return this.labelPadding=[2,2,2,2]},"inputLabelPadding",function(){return this.inputLabelPadding=[1,1,1,3]},"buttonLabelColors",function(){return this.buttonLabelColors=["#32556b","#32cc6b","#ff0000","#C0C0C0"]},"comboBoxItemColors",function(){return this.comboBoxItemColors=["#5e95b6","#ffffff","#000000","#8fa4b1","#ffffff"]}]),t}(),M=function(){function t(){}return h(t,"laya.ui.UIUtils"),t.fillArray=function(t,i,e){var s=t.concat();if(i)for(var h=i.split(","),n=0,o=Math.min(s.length,h.length);n<o;n++){var r=h[n];s[n]="true"==r||"false"!=r&&r,null!=e&&(s[n]=e(r))}return s},t.toColor=function(t){return B.toHexColor(t)},t.gray=function(i,e){void 0===e&&(e=!0),e?t.addFilter(i,t.grayFilter):t.clearFilter(i,a)},t.addFilter=function(t,i){var e=t.filters||[];e.push(i),t.filters=e},t.clearFilter=function(t,i){var s=t.filters;if(null!=s&&s.length>0){for(var h=s.length-1;h>-1;h--){var n=s[h];e.__typeof(n,i)&&s.splice(h,1)}t.filters=s}},t._getReplaceStr=function(i){return t.escapeSequence[i]},t.adptString=function(i){return i.replace(/\\(\w)/g,t._getReplaceStr)},t.getBindFun=function(i){var e=t._funMap.get(i);if(null==e){var s='"'+i+'"',h="(function(data){if(data==null)return;with(data){try{\nreturn "+(s=s.replace(/^"\${|}"$/g,"").replace(/\${/g,'"+').replace(/}/g,'+"'))+"\n}catch(e){}}})";e=r.window.eval(h),t._funMap.set(i,e)}return e},s(t,["grayFilter",function(){return this.grayFilter=new a([.3086,.6094,.082,0,0,.3086,.6094,.082,0,0,.3086,.6094,.082,0,0,0,0,0,1,0])},"escapeSequence",function(){return this.escapeSequence={"\\n":"\n","\\t":"\t"}},"_funMap",function(){return this._funMap=new k}]),t}(),z=function(){function t(){}return h(t,"UIConfig"),t.touchScrollEnable=!0,t.mouseWheelEnable=!0,t.showButtons=!0,t.popupBgColor="#000000",t.popupBgAlpha=.5,t.closeDialogOnSide=!0,t}(),T=function(t){function i(){this.autoCacheCmd=!0,this._width=0,this._height=0,this._source=null,this._sizeGrid=null,this._isChanged=!1,this._offset=null,i.__super.call(this)}h(i,"laya.ui.AutoBitmap",t);var s=i.prototype;return s.destroy=function(){t.prototype.destroy.call(this),this._source=null,this._sizeGrid=null,this._offset=null},s._setChanged=function(){this._isChanged||(this._isChanged=!0,e.timer.callLater(this,this.changeSource))},s.changeSource=function(){this._isChanged=!1;var t=this._source;if(t&&t.bitmap){var e=this.width,s=this.height,h=this._sizeGrid,n=t.sourceWidth,o=t.sourceHeight;if(!h||n===e&&o===s)this.cleanByTexture(t,this._offset?this._offset[0]:0,this._offset?this._offset[1]:0,e,s);else{t.$_GID||(t.$_GID=B.getGID());var r=t.$_GID+"."+e+"."+s+"."+h.join(".");if(B.isOKCmdList(k.I.get(r)))return void(this.cmds=k.I.get(r));this.clear();var l=h[0],a=h[1],c=h[2],u=h[3],_=h[4],d=!1;if(e==n&&(u=a=0),s==o&&(l=c=0),u+a>e){var f=e;d=!0,e=u+a,this.save(),this.clipRect(0,0,f,s)}u&&l&&this.drawTexture(i.getTexture(t,0,0,u,l),0,0,u,l),a&&l&&this.drawTexture(i.getTexture(t,n-a,0,a,l),e-a,0,a,l),u&&c&&this.drawTexture(i.getTexture(t,0,o-c,u,c),0,s-c,u,c),a&&c&&this.drawTexture(i.getTexture(t,n-a,o-c,a,c),e-a,s-c,a,c),l&&this.drawBitmap(_,i.getTexture(t,u,0,n-u-a,l),u,0,e-u-a,l),c&&this.drawBitmap(_,i.getTexture(t,u,o-c,n-u-a,c),u,s-c,e-u-a,c),u&&this.drawBitmap(_,i.getTexture(t,0,l,u,o-l-c),0,l,u,s-l-c),a&&this.drawBitmap(_,i.getTexture(t,n-a,l,a,o-l-c),e-a,l,a,s-l-c),this.drawBitmap(_,i.getTexture(t,u,l,n-u-a,o-l-c),u,l,e-u-a,s-l-c),d&&this.restore(),this.autoCacheCmd&&!C.isConchApp&&k.I.set(r,this.cmds)}this._repaint()}},s.drawBitmap=function(t,i,e,s,h,n){void 0===h&&(h=0),void 0===n&&(n=0),h<.1||n<.1||(!t||i.width==h&&i.height==n?this.drawTexture(i,e,s,h,n):this.fillTexture(i,e,s,h,n))},s.clear=function(i){void 0===i&&(i=!0),t.prototype.clear.call(this,!1)},n(0,s,"sizeGrid",function(){return this._sizeGrid},function(t){this._sizeGrid=t,this._setChanged()}),n(0,s,"width",function(){return this._width?this._width:this._source?this._source.sourceWidth:0},function(t){this._width!=t&&(this._width=t,this._setChanged())}),n(0,s,"height",function(){return this._height?this._height:this._source?this._source.sourceHeight:0},function(t){this._height!=t&&(this._height=t,this._setChanged())}),n(0,s,"source",function(){return this._source},function(t){t?(this._source=t,this._setChanged()):(this._source=null,this.clear())}),i.getTexture=function(t,i,e,s,h){s<=0&&(s=1),h<=0&&(h=1),t.$_GID||(t.$_GID=B.getGID());var n=t.$_GID+"."+i+"."+e+"."+s+"."+h,o=k.I.get(n);return o&&o.source||(o=w.createFromTexture(t,i,e,s,h),k.I.set(n,o)),o},i}(f),P=(function(t){function i(){i.__super.call(this)}h(i,"laya.ui.UIEvent",u),i.SHOW_TIP="showtip",i.HIDE_TIP="hidetip"}(),function(t){function i(){this._comXml=null,this._dataSource=null,this._toolTip=null,this._tag=null,this._disabled=!1,this._gray=!1,this.layoutEnabled=!0,i.__super.call(this),this._layout=I.EMPTY,this.preinitialize(),this.createChildren(),this.initialize()}h(i,"laya.ui.Component",t);var s=i.prototype;return e.imps(s,{"laya.ui.IComponent":!0}),s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._dataSource=this._layout=null,this._tag=null,this._toolTip=null},s.preinitialize=function(){},s.createChildren=function(){},s.initialize=function(){},s.callLater=function(t,i){e.timer.callLater(this,t,i)},s.runCallLater=function(t){e.timer.runCallLater(this,t)},s.commitMeasure=function(){},s.changeSize=function(){this.event("resize")},s.getLayout=function(){return this._layout===I.EMPTY&&(this._layout=new I),this._layout},s._setLayoutEnabled=function(t){this._layout&&this._layout.enable!=t&&(this._layout.enable=t,this.on("added",this,this.onAdded),this.on("removed",this,this.onRemoved),this.parent&&this.onAdded())},s.onRemoved=function(){this.parent.off("resize",this,this.onCompResize)},s.onAdded=function(){this.parent.on("resize",this,this.onCompResize),this.resetLayoutX(),this.resetLayoutY()},s.onCompResize=function(){this._layout&&this._layout.enable&&(this.resetLayoutX(),this.resetLayoutY())},s.resetLayoutX=function(){var t=this._layout;if(isNaN(t.anchorX)||(this.pivotX=t.anchorX*this.width),this.layoutEnabled){var i=this.parent;i&&(isNaN(t.centerX)?isNaN(t.left)?isNaN(t.right)||(this.x=Math.round(i.width-this.displayWidth-t.right+this.pivotX*this.scaleX)):(this.x=Math.round(t.left+this.pivotX*this.scaleX),isNaN(t.right)||(this.width=(i._width-t.left-t.right)/(this.scaleX||.01))):this.x=Math.round(.5*(i.width-this.displayWidth)+t.centerX+this.pivotX*this.scaleX))}},s.resetLayoutY=function(){var t=this._layout;if(isNaN(t.anchorY)||(this.pivotY=t.anchorY*this.height),this.layoutEnabled){var i=this.parent;i&&(isNaN(t.centerY)?isNaN(t.top)?isNaN(t.bottom)||(this.y=Math.round(i.height-this.displayHeight-t.bottom+this.pivotY*this.scaleY)):(this.y=Math.round(t.top+this.pivotY*this.scaleY),isNaN(t.bottom)||(this.height=(i._height-t.top-t.bottom)/(this.scaleY||.01))):this.y=Math.round(.5*(i.height-this.displayHeight)+t.centerY+this.pivotY*this.scaleY))}},s.onMouseOver=function(t){e.stage.event("showtip",this._toolTip)},s.onMouseOut=function(t){e.stage.event("hidetip",this._toolTip)},n(0,s,"displayWidth",function(){return this.width*this.scaleX}),n(0,s,"width",function(){return this._width?this._width:this.measureWidth},function(t){this._width!=t&&(this._width=t,this.conchModel&&this.conchModel.size(this._width,this._height),this.callLater(this.changeSize),!this._layout.enable||isNaN(this._layout.centerX)&&isNaN(this._layout.right)&&isNaN(this._layout.anchorX)||this.resetLayoutX())}),n(0,s,"measureWidth",function(){var t=0;this.commitMeasure();for(var i=this.numChildren-1;i>-1;i--){var e=this.getChildAt(i);e.visible&&(t=Math.max(e.x+e.width*e.scaleX,t))}return t}),n(0,s,"displayHeight",function(){return this.height*this.scaleY}),n(0,s,"height",function(){return this._height?this._height:this.measureHeight},function(t){this._height!=t&&(this._height=t,this.conchModel&&this.conchModel.size(this._width,this._height),this.callLater(this.changeSize),!this._layout.enable||isNaN(this._layout.centerY)&&isNaN(this._layout.bottom)&&isNaN(this._layout.anchorY)||this.resetLayoutY())}),n(0,s,"dataSource",function(){return this._dataSource},function(t){for(var i in this._dataSource=t,this._dataSource)this.hasOwnProperty(i)&&"function"!=typeof this[i]&&(this[i]=this._dataSource[i])}),n(0,s,"scaleY",t.prototype._$get_scaleY,function(t){e.superGet(b,this,"scaleY")!=t&&(e.superSet(b,this,"scaleY",t),this.callLater(this.changeSize),this._layout.enable&&this.resetLayoutY())}),n(0,s,"measureHeight",function(){var t=0;this.commitMeasure();for(var i=this.numChildren-1;i>-1;i--){var e=this.getChildAt(i);e.visible&&(t=Math.max(e.y+e.height*e.scaleY,t))}return t}),n(0,s,"scaleX",t.prototype._$get_scaleX,function(t){e.superGet(b,this,"scaleX")!=t&&(e.superSet(b,this,"scaleX",t),this.callLater(this.changeSize),this._layout.enable&&this.resetLayoutX())}),n(0,s,"top",function(){return this._layout.top},function(t){t!=this._layout.top&&(this.getLayout().top=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"bottom",function(){return this._layout.bottom},function(t){t!=this._layout.bottom&&(this.getLayout().bottom=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"left",function(){return this._layout.left},function(t){t!=this._layout.left&&(this.getLayout().left=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"right",function(){return this._layout.right},function(t){t!=this._layout.right&&(this.getLayout().right=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"centerX",function(){return this._layout.centerX},function(t){t!=this._layout.centerX&&(this.getLayout().centerX=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"centerY",function(){return this._layout.centerY},function(t){t!=this._layout.centerY&&(this.getLayout().centerY=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"anchorX",function(){return this._layout.anchorX},function(t){t!=this._layout.anchorX&&(this.getLayout().anchorX=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),n(0,s,"anchorY",function(){return this._layout.anchorY},function(t){t!=this._layout.anchorY&&(this.getLayout().anchorY=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),n(0,s,"tag",function(){return this._tag},function(t){this._tag=t}),n(0,s,"toolTip",function(){return this._toolTip},function(t){this._toolTip!=t&&(this._toolTip=t,null!=t?(this.on("mouseover",this,this.onMouseOver),this.on("mouseout",this,this.onMouseOut)):(this.off("mouseover",this,this.onMouseOver),this.off("mouseout",this,this.onMouseOut)))}),n(0,s,"comXml",function(){return this._comXml},function(t){this._comXml=t}),n(0,s,"gray",function(){return this._gray},function(t){t!==this._gray&&(this._gray=t,M.gray(this,t))}),n(0,s,"disabled",function(){return this._disabled},function(t){t!==this._disabled&&(this.gray=this._disabled=t,this.mouseEnabled=!t)}),i}(b)),H=function(t){function i(){this.lockLayer=null,this.popupEffect=function(t){t.scale(1,1),x.from(t,{x:e.stage.width/2,y:e.stage.height/2,scaleX:0,scaleY:0},300,c.backOut,p.create(this,this.doOpen,[t]))},this.closeEffect=function(t,i){x.to(t,{x:e.stage.width/2,y:e.stage.height/2,scaleX:0,scaleY:0},300,c.strongOut,p.create(this,this.doClose,[t,i]))},i.__super.call(this),this.maskLayer=new b,this.popupEffectHandler=new p(this,this.popupEffect),this.closeEffectHandler=new p(this,this.closeEffect),this.mouseEnabled=this.maskLayer.mouseEnabled=!0,this.zOrder=1e3,e.stage.addChild(this),e.stage.on("resize",this,this._onResize),z.closeDialogOnSide&&this.maskLayer.on("click",this,this._closeOnSide),this._onResize(null)}h(i,"laya.ui.DialogManager",b);var s=i.prototype;return s._closeOnSide=function(){var t=this.getChildAt(this.numChildren-1);t instanceof laya.ui.Dialog&&t.close("side")},s.setLockView=function(t){this.lockLayer||(this.lockLayer=new N,this.lockLayer.mouseEnabled=!0,this.lockLayer.size(e.stage.width,e.stage.height)),this.lockLayer.removeChildren(),t&&(t.centerX=t.centerY=0,this.lockLayer.addChild(t))},s._onResize=function(t){var i=this.maskLayer.width=e.stage.width,s=this.maskLayer.height=e.stage.height;this.lockLayer&&this.lockLayer.size(i,s),this.maskLayer.graphics.clear(),this.maskLayer.graphics.drawRect(0,0,i,s,z.popupBgColor),this.maskLayer.alpha=z.popupBgAlpha;for(var h=this.numChildren-1;h>-1;h--){var n=this.getChildAt(h);n.popupCenter&&this._centerDialog(n)}},s._centerDialog=function(t){t.x=Math.round((e.stage.width-t.width>>1)+t.pivotX),t.y=Math.round((e.stage.height-t.height>>1)+t.pivotY)},s.open=function(t,i,e){void 0===i&&(i=!1),void 0===e&&(e=!1),i&&this._closeAll(),t.popupCenter&&this._centerDialog(t),this.addChild(t),(t.isModal||this._$P.hasZorder)&&this.timer.callLater(this,this._checkMask),e&&null!=t.popupEffect?t.popupEffect.runWith(t):this.doOpen(t),this.event("open")},s.doOpen=function(t){t.onOpened()},s.lock=function(t){this.lockLayer&&(t?this.addChild(this.lockLayer):this.lockLayer.removeSelf())},s.close=function(t,i,e){void 0===e&&(e=!1),e&&null!=t.closeEffect?t.closeEffect.runWith([t,i]):this.doClose(t,i),this.event("close")},s.doClose=function(t,i){t.removeSelf(),t.isModal&&this._checkMask(),t.closeHandler&&t.closeHandler.runWith(i),t.onClosed(i)},s.closeAll=function(){this._closeAll(),this.event("close")},s._closeAll=function(){for(var t=this.numChildren-1;t>-1;t--){var i=this.getChildAt(t);i&&null!=i.close&&this.doClose(i)}},s.getDialogsByGroup=function(t){for(var i=[],e=this.numChildren-1;e>-1;e--){var s=this.getChildAt(e);s&&s.group===t&&i.push(s)}return i},s.closeByGroup=function(t){for(var i=[],e=this.numChildren-1;e>-1;e--){var s=this.getChildAt(e);s&&s.group===t&&(s.close(),i.push(s))}return i},s._checkMask=function(){this.maskLayer.removeSelf();for(var t=this.numChildren-1;t>-1;t--){var i=this.getChildAt(t);if(i&&i.isModal)return void this.addChildAt(this.maskLayer,t)}},i}(),N=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.Box",t);var s=i.prototype;return e.imps(s,{"laya.ui.IBox":!0}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){for(var i in this._dataSource=t,t){var e=this.getChildByName(i);e?e.dataSource=t[i]:this.hasOwnProperty(i)&&"function"!=typeof this[i]&&(this[i]=t[i])}}),i}(P),O=function(t){function i(t,e){this.toggle=!1,this._bitmap=null,this._text=null,this._strokeColors=null,this._state=0,this._selected=!1,this._skin=null,this._autoSize=!0,this._sources=null,this._clickHandler=null,this._stateChanged=!1,i.__super.call(this),this._labelColors=L.buttonLabelColors,this._stateNum=L.buttonStateNum,void 0===e&&(e=""),this.skin=t,this.label=e}h(i,"laya.ui.Button",t);var o=i.prototype;return e.imps(o,{"laya.ui.ISelect":!0}),o.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bitmap&&this._bitmap.destroy(),this._text&&this._text.destroy(i),this._bitmap=null,this._text=null,this._clickHandler=null,this._labelColors=this._sources=this._strokeColors=null},o.createChildren=function(){this.graphics=this._bitmap=new T},o.createText=function(){this._text||(this._text=new S,this._text.overflow=S.HIDDEN,this._text.align="center",this._text.valign="middle",this._text.width=this._width,this._text.height=this._height)},o.initialize=function(){1!==this._mouseEnableState&&(this.mouseEnabled=!0,this._setBit(2,!0)),this._createListener("mouseover",this,this.onMouse,null,!1,!1),this._createListener("mouseout",this,this.onMouse,null,!1,!1),this._createListener("mousedown",this,this.onMouse,null,!1,!1),this._createListener("mouseup",this,this.onMouse,null,!1,!1),this._createListener("click",this,this.onMouse,null,!1,!1)},o.onMouse=function(t){if(!1!==this.toggle||!this._selected)return"click"===t.type?(this.toggle&&(this.selected=!this._selected),void(this._clickHandler&&this._clickHandler.run())):void(!this._selected&&(this.state=i.stateMap[t.type]))},o.changeClips=function(){var t=m.getRes(this._skin);if(t){var i=t.sourceWidth,e=t.sourceHeight/this._stateNum;t.$_GID||(t.$_GID=B.getGID());var s=t.$_GID+"-"+this._stateNum,h=k.I.get(s);if(B.isOkTextureList(h)||(h=null),h)this._sources=h;else{if(this._sources=[],1===this._stateNum)this._sources.push(t);else for(var n=0;n<this._stateNum;n++)this._sources.push(w.createFromTexture(t,0,e*n,i,e));k.I.set(s,this._sources)}this._autoSize?(this._bitmap.width=this._width||i,this._bitmap.height=this._height||e,this._text&&(this._text.width=this._bitmap.width,this._text.height=this._bitmap.height)):this._text&&(this._text.x=i)}else console.log("lose skin",this._skin)},o.changeState=function(){this._stateChanged=!1,this.runCallLater(this.changeClips);var t=this._state<this._stateNum?this._state:this._stateNum-1;this._sources&&(this._bitmap.source=this._sources[t]),this.label&&(this._text.color=this._labelColors[t],this._strokeColors&&(this._text.strokeColor=this._strokeColors[t]))},o._setStateChanged=function(){this._stateChanged||(this._stateChanged=!0,this.callLater(this.changeState))},n(0,o,"labelStrokeColor",function(){return this.createText(),this._text.strokeColor},function(t){this.createText(),this._text.strokeColor=t}),n(0,o,"measureHeight",function(){return this.runCallLater(this.changeClips),this._text?Math.max(this._bitmap.height,this._text.height):this._bitmap.height}),n(0,o,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this.callLater(this.changeClips),this._setStateChanged())}),n(0,o,"state",function(){return this._state},function(t){this._state!=t&&(this._state=t,this._setStateChanged())}),n(0,o,"text",function(){return this.createText(),this._text}),n(0,o,"stateNum",function(){return this._stateNum},function(t){"string"==typeof t&&(t=parseInt(t)),this._stateNum!=t&&(this._stateNum=t<1?1:t>3?3:t,this.callLater(this.changeClips))}),n(0,o,"strokeColors",function(){return this._strokeColors?this._strokeColors.join(","):""},function(t){this._strokeColors=M.fillArray(L.buttonLabelColors,t,String),this._setStateChanged()}),n(0,o,"labelColors",function(){return this._labelColors.join(",")},function(t){this._labelColors=M.fillArray(L.buttonLabelColors,t,String),this._setStateChanged()}),n(0,o,"measureWidth",function(){return this.runCallLater(this.changeClips),this._autoSize?this._bitmap.width:(this.runCallLater(this.changeState),this._bitmap.width+(this._text?this._text.width:0))}),n(0,o,"label",function(){return this._text?this._text.text:null},function(t){(this._text||t)&&(this.createText(),this._text.text!=t&&(t&&!this._text.parent&&this.addChild(this._text),this._text.text=(t+"").replace(/\\n/g,"\n"),this._setStateChanged()))}),n(0,o,"selected",function(){return this._selected},function(t){this._selected!=t&&(this._selected=t,this.state=this._selected?2:0,this.event("change"))}),n(0,o,"labelPadding",function(){return this.createText(),this._text.padding.join(",")},function(t){this.createText(),this._text.padding=M.fillArray(L.labelPadding,t,Number)}),n(0,o,"labelSize",function(){return this.createText(),this._text.fontSize},function(t){this.createText(),this._text.fontSize=t}),n(0,o,"labelStroke",function(){return this.createText(),this._text.stroke},function(t){this.createText(),this._text.stroke=t}),n(0,o,"labelBold",function(){return this.createText(),this._text.bold},function(t){this.createText(),this._text.bold=t}),n(0,o,"labelFont",function(){return this.createText(),this._text.font},function(t){this.createText(),this._text.font=t}),n(0,o,"labelAlign",function(){return this.createText(),this._text.align},function(t){this.createText(),this._text.align=t}),n(0,o,"clickHandler",function(){return this._clickHandler},function(t){this._clickHandler=t}),n(0,o,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=M.fillArray(L.defaultSizeGrid,t,Number)}),n(0,o,"width",t.prototype._$get_width,function(t){e.superSet(P,this,"width",t),this._autoSize&&(this._bitmap.width=t,this._text&&(this._text.width=t))}),n(0,o,"height",t.prototype._$get_height,function(t){e.superSet(P,this,"height",t),this._autoSize&&(this._bitmap.height=t,this._text&&(this._text.height=t))}),n(0,o,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.label=t+"":e.superSet(P,this,"dataSource",t)}),n(0,o,"iconOffset",function(){return this._bitmap._offset?this._bitmap._offset.join(","):null},function(t){this._bitmap._offset=t?M.fillArray([1,1],t,Number):[]}),s(i,["stateMap",function(){return this.stateMap={mouseup:0,mouseover:1,mousedown:2,mouseout:0}}]),i}(P),A=function(t){function i(t,e,s){this._sources=null,this._bitmap=null,this._skin=null,this._clipX=1,this._clipY=1,this._clipWidth=0,this._clipHeight=0,this._autoPlay=!1,this._interval=50,this._complete=null,this._isPlaying=!1,this._index=0,this._clipChanged=!1,this._group=null,this._toIndex=-1,i.__super.call(this),void 0===e&&(e=1),void 0===s&&(s=1),this._clipX=e,this._clipY=s,this.skin=t}h(i,"laya.ui.Clip",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,!0),this._bitmap&&this._bitmap.destroy(),this._bitmap=null,this._sources=null},s.dispose=function(){this.destroy(!0),e.loader.clearRes(this._skin)},s.createChildren=function(){this.graphics=this._bitmap=new T},s._onDisplay=function(t){this._isPlaying?this._displayedInStage?this.play():this.stop():this._autoPlay&&this.play()},s.changeClip=function(){if(this._clipChanged=!1,this._skin){var t=m.getRes(this._skin);t?this.loadComplete(this._skin,t):e.loader.load(this._skin,p.create(this,this.loadComplete,[this._skin]))}},s.loadComplete=function(t,i){if(t===this._skin&&i){var e=this._clipWidth||Math.ceil(i.sourceWidth/this._clipX),s=this._clipHeight||Math.ceil(i.sourceHeight/this._clipY),h=this._skin+e+s,n=k.I.get(h);if(B.isOkTextureList(n)||(n=null),n)this._sources=n;else{this._sources=[];for(var o=0;o<this._clipY;o++)for(var r=0;r<this._clipX;r++)this._sources.push(w.createFromTexture(i,e*r,s*o,e,s));k.I.set(h,this._sources)}this.index=this._index,this.event("loaded"),this.onCompResize()}},s.play=function(t,i){void 0===t&&(t=0),void 0===i&&(i=-1),this._isPlaying=!0,this.index=t,this._toIndex=i,this._index++,e.timer.loop(this.interval,this,this._loop),this.on("display",this,this._onDisplay),this.on("undisplay",this,this._onDisplay)},s._loop=function(){this._style.visible&&this._sources&&(this._index++,this._toIndex>-1&&this._index>=this._toIndex?this.stop():this._index>=this._sources.length&&(this._index=0),this.index=this._index)},s.stop=function(){this._isPlaying=!1,e.timer.clear(this,this._loop),this.event("complete")},s._setClipChanged=function(){this._clipChanged||(this._clipChanged=!0,this.callLater(this.changeClip))},n(0,s,"interval",function(){return this._interval},function(t){this._interval!=t&&(this._interval=t,this._isPlaying&&this.play())}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,t?this._setClipChanged():this._bitmap.source=null)}),n(0,s,"sources",function(){return this._sources},function(t){this._sources=t,this.index=this._index,this.event("loaded")}),n(0,s,"clipX",function(){return this._clipX},function(t){this._clipX=t||1,this._setClipChanged()}),n(0,s,"clipY",function(){return this._clipY},function(t){this._clipY=t||1,this._setClipChanged()}),n(0,s,"total",function(){return this.runCallLater(this.changeClip),this._sources?this._sources.length:0}),n(0,s,"clipWidth",function(){return this._clipWidth},function(t){this._clipWidth=t,this._setClipChanged()}),n(0,s,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=M.fillArray(L.defaultSizeGrid,t,Number)}),n(0,s,"group",function(){return this._group},function(t){t&&this._skin&&m.setGroup(this._skin,t),this._group=t}),n(0,s,"clipHeight",function(){return this._clipHeight},function(t){this._clipHeight=t,this._setClipChanged()}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(P,this,"width",t),this._bitmap.width=t}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(P,this,"height",t),this._bitmap.height=t}),n(0,s,"measureWidth",function(){return this.runCallLater(this.changeClip),this._bitmap.width}),n(0,s,"measureHeight",function(){return this.runCallLater(this.changeClip),this._bitmap.height}),n(0,s,"index",function(){return this._index},function(t){this._index=t,this._bitmap&&this._sources&&(this._bitmap.source=this._sources[t]),this.event("change")}),n(0,s,"autoPlay",function(){return this._autoPlay},function(t){this._autoPlay!=t&&(this._autoPlay=t,t?this.play():this.stop())}),n(0,s,"isPlaying",function(){return this._isPlaying},function(t){this._isPlaying=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.index=parseInt(t):e.superSet(P,this,"dataSource",t)}),n(0,s,"bitmap",function(){return this._bitmap}),i}(P),Y=function(t){function i(){this.changeHandler=null,this._gridSize=11,this._bgColor="#ffffff",this._borderColor="#000000",this._inputColor="#000000",this._inputBgColor="#efefef",this._colorPanel=null,this._colorTiles=null,this._colorBlock=null,this._colorInput=null,this._colorButton=null,this._colors=[],this._selectedColor="#000000",this._panelChanged=!1,i.__super.call(this)}h(i,"laya.ui.ColorPicker",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._colorPanel&&this._colorPanel.destroy(i),this._colorButton&&this._colorButton.destroy(i),this._colorPanel=null,this._colorTiles=null,this._colorBlock=null,this._colorInput=null,this._colorButton=null,this._colors=null,this.changeHandler=null},s.createChildren=function(){this.addChild(this._colorButton=new O),this._colorPanel=new N,this._colorPanel.size(230,166),this._colorPanel.addChild(this._colorTiles=new b),this._colorPanel.addChild(this._colorBlock=new b),this._colorPanel.addChild(this._colorInput=new g)},s.initialize=function(){this._colorButton.on("click",this,this.onColorButtonClick),this._colorBlock.pos(5,5),this._colorInput.pos(60,5),this._colorInput.size(60,20),this._colorInput.on("change",this,this.onColorInputChange),this._colorInput.on("keydown",this,this.onColorFieldKeyDown),this._colorTiles.pos(5,30),this._colorTiles.on("mousemove",this,this.onColorTilesMouseMove),this._colorTiles.on("click",this,this.onColorTilesClick),this._colorTiles.size(20*this._gridSize,12*this._gridSize),this._colorPanel.on("mousedown",this,this.onPanelMouseDown),this.bgColor=this._bgColor},s.onPanelMouseDown=function(t){t.stopPropagation()},s.changePanel=function(){this._panelChanged=!1;var t=this._colorPanel.graphics;t.clear(),t.drawRect(0,0,230,166,this._bgColor,this._borderColor),this.drawBlock(this._selectedColor),this._colorInput.borderColor=this._borderColor,this._colorInput.bgColor=this._inputBgColor,this._colorInput.color=this._inputColor,(t=this._colorTiles.graphics).clear();for(var i=[0,3355443,6710886,10066329,13421772,16777215,16711680,65280,255,16776960,65535,16711935],e=0;e<12;e++)for(var s=0;s<20;s++){var h=0;h=0===s?i[e]:1===s?0:51*(((3*e+s/6)%3<<0)+3*(e/6<<0))<<16|s%6*51<<8|(e<<0)%6*51;var n=M.toColor(h);this._colors.push(n);var o=s*this._gridSize,r=e*this._gridSize;t.drawRect(o,r,this._gridSize,this._gridSize,n,"#000000")}},s.onColorButtonClick=function(t){this._colorPanel.parent?this.close():this.open()},s.open=function(){var t=this.localToGlobal(new y),i=t.x+this._colorPanel.width<=e.stage.width?t.x:e.stage.width-this._colorPanel.width,s=t.y+this._colorButton.height;s=s+this._colorPanel.height<=e.stage.height?s:t.y-this._colorPanel.height,this._colorPanel.pos(i,s),this._colorPanel.zOrder=1001,e._currentStage.addChild(this._colorPanel),e.stage.on("mousedown",this,this.removeColorBox)},s.close=function(){e.stage.off("mousedown",this,this.removeColorBox),this._colorPanel.removeSelf()},s.removeColorBox=function(t){this.close()},s.onColorFieldKeyDown=function(t){13==t.keyCode&&(this._colorInput.text?this.selectedColor=this._colorInput.text:this.selectedColor=null,this.close(),t.stopPropagation())},s.onColorInputChange=function(t){this._colorInput.text?this.drawBlock(this._colorInput.text):this.drawBlock("#FFFFFF")},s.onColorTilesClick=function(t){this.selectedColor=this.getColorByMouse(),this.close()},s.onColorTilesMouseMove=function(t){this._colorInput.focus=!1;var i=this.getColorByMouse();this._colorInput.text=i,this.drawBlock(i)},s.getColorByMouse=function(){var t=this._colorTiles.getMousePoint(),i=Math.floor(t.x/this._gridSize),e=Math.floor(t.y/this._gridSize);return this._colors[20*e+i]},s.drawBlock=function(t){var i=this._colorBlock.graphics;i.clear();var e=t||"#ffffff";i.drawRect(0,0,50,20,e,this._borderColor),t||i.drawLine(0,0,50,20,"#ff0000")},s.changeColor=function(){var t=this.graphics;t.clear();var i=this._selectedColor||"#000000";t.drawRect(0,0,this._colorButton.width,this._colorButton.height,i)},s._setPanelChanged=function(){this._panelChanged||(this._panelChanged=!0,this.callLater(this.changePanel))},n(0,s,"inputBgColor",function(){return this._inputBgColor},function(t){this._inputBgColor=t,this._setPanelChanged()}),n(0,s,"selectedColor",function(){return this._selectedColor},function(t){this._selectedColor!=t&&(this._selectedColor=this._colorInput.text=t,this.drawBlock(t),this.changeColor(),this.changeHandler&&this.changeHandler.runWith(this._selectedColor),this.event("change",u.EMPTY.setTo("change",this,this)))}),n(0,s,"skin",function(){return this._colorButton.skin},function(t){this._colorButton.skin=t,this.changeColor()}),n(0,s,"bgColor",function(){return this._bgColor},function(t){this._bgColor=t,this._setPanelChanged()}),n(0,s,"borderColor",function(){return this._borderColor},function(t){this._borderColor=t,this._setPanelChanged()}),n(0,s,"inputColor",function(){return this._inputColor},function(t){this._inputColor=t,this._setPanelChanged()}),i}(P),X=function(t){function i(t,e){this._visibleNum=6,this._button=null,this._list=null,this._isOpen=!1,this._itemSize=12,this._labels=[],this._selectedIndex=-1,this._selectHandler=null,this._itemHeight=NaN,this._listHeight=NaN,this._listChanged=!1,this._itemChanged=!1,this._scrollBarSkin=null,this._isCustomList=!1,this.itemRender=null,i.__super.call(this),this._itemColors=L.comboBoxItemColors,this.skin=t,this.labels=e}h(i,"laya.ui.ComboBox",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._button&&this._button.destroy(i),this._list&&this._list.destroy(i),this._button=null,this._list=null,this._itemColors=null,this._labels=null,this._selectHandler=null},s.createChildren=function(){this.addChild(this._button=new O),this._button.text.align="left",this._button.labelPadding="0,0,0,5",this._button.on("mousedown",this,this.onButtonMouseDown)},s._createList=function(){this._list=new j,this._scrollBarSkin&&(this._list.vScrollBarSkin=this._scrollBarSkin),this._setListEvent(this._list)},s._setListEvent=function(t){this._list.selectEnable=!0,this._list.on("mousedown",this,this.onListDown),this._list.mouseHandler=p.create(this,this.onlistItemMouse,null,!1),this._list.scrollBar&&this._list.scrollBar.on("mousedown",this,this.onScrollBarDown)},s.onListDown=function(t){t.stopPropagation()},s.onScrollBarDown=function(t){t.stopPropagation()},s.onButtonMouseDown=function(t){this.callLater(this.switchTo,[!this._isOpen])},s.changeList=function(){this._listChanged=!1;var t=this.width-2,i=this._itemColors[2];this._itemHeight=this._itemSize+6,this._list.itemRender=this.itemRender||{type:"Box",child:[{type:"Label",props:{name:"label",x:1,padding:"3,3,3,3",width:t,height:this._itemHeight,fontSize:this._itemSize,color:i}}]},this._list.repeatY=this._visibleNum,this._list.refresh()},s.onlistItemMouse=function(t,i){var e=t.type;if("mouseover"===e||"mouseout"===e){if(this._isCustomList)return;var s=this._list.getCell(i);if(!s)return;var h=s.getChildByName("label");h&&("mouseover"===e?(h.bgColor=this._itemColors[0],h.color=this._itemColors[1]):(h.bgColor=null,h.color=this._itemColors[2]))}else"click"===e&&(this.selectedIndex=i,this.isOpen=!1)},s.switchTo=function(t){this.isOpen=t},s.changeOpen=function(){this.isOpen=!this._isOpen},s.changeItem=function(){if(this._itemChanged=!1,this._listHeight=this._labels.length>0?Math.min(this._visibleNum,this._labels.length)*this._itemHeight:this._itemHeight,!this._isCustomList){var t=this._list.graphics;t.clear(),t.drawRect(0,0,this.width-1,this._listHeight,this._itemColors[4],this._itemColors[3])}var i=this._list.array||[];i.length=0;for(var e=0,s=this._labels.length;e<s;e++)i.push({label:this._labels[e]});this._list.height=this._listHeight,this._list.array=i},s.changeSelected=function(){this._button.label=this.selectedLabel},s._onStageMouseWheel=function(t){this._list&&!this._list.contains(t.target)&&this.removeList(null)},s.removeList=function(t){e.stage.off("mousedown",this,this.removeList),e.stage.off("mousewheel",this,this._onStageMouseWheel),this.isOpen=!1},n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this._selectedIndex=t,this._labels.length>0?this.changeSelected():this.callLater(this.changeSelected),this.event("change",[u.EMPTY.setTo("change",this,this)]),this._selectHandler&&this._selectHandler.runWith(this._selectedIndex))}),n(0,s,"measureHeight",function(){return this._button.height}),n(0,s,"skin",function(){return this._button.skin},function(t){this._button.skin!=t&&(this._button.skin=t,this._listChanged=!0)}),n(0,s,"measureWidth",function(){return this._button.width}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(P,this,"width",t),this._button.width=this._width,this._itemChanged=!0,this._listChanged=!0}),n(0,s,"selectedLabel",function(){return this._selectedIndex>-1&&this._selectedIndex<this._labels.length?this._labels[this._selectedIndex]:null},function(t){this.selectedIndex=this._labels.indexOf(t)}),n(0,s,"labels",function(){return this._labels.join(",")},function(t){this._labels.length>0&&(this.selectedIndex=-1),t?this._labels=t.split(","):this._labels.length=0,this._itemChanged=!0}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(P,this,"height",t),this._button.height=this._height}),n(0,s,"selectHandler",function(){return this._selectHandler},function(t){this._selectHandler=t}),n(0,s,"visibleNum",function(){return this._visibleNum},function(t){this._visibleNum=t,this._listChanged=!0}),n(0,s,"labelBold",function(){return this._button.text.bold},function(t){this._button.text.bold=t}),n(0,s,"itemColors",function(){return String(this._itemColors)},function(t){this._itemColors=M.fillArray(this._itemColors,t,String),this._listChanged=!0}),n(0,s,"itemSize",function(){return this._itemSize},function(t){this._itemSize=t,this._listChanged=!0}),n(0,s,"scrollBar",function(){return this.list.scrollBar}),n(0,s,"isOpen",function(){return this._isOpen},function(t){if(this._isOpen!=t)if(this._isOpen=t,this._button.selected=this._isOpen,this._isOpen){this._list||this._createList(),this._listChanged&&!this._isCustomList&&this.changeList(),this._itemChanged&&this.changeItem();var i=this.localToGlobal(y.TEMP.setTo(0,0)),s=i.y+this._button.height;s=s+this._listHeight<=e.stage.height?s:i.y-this._listHeight,this._list.pos(i.x,s),this._list.zOrder=1001,e._currentStage.addChild(this._list),e.stage.once("mousedown",this,this.removeList),e.stage.on("mousewheel",this,this._onStageMouseWheel),this._list.selectedIndex=this._selectedIndex}else this._list&&this._list.removeSelf()}),n(0,s,"scrollBarSkin",function(){return this._scrollBarSkin},function(t){this._scrollBarSkin=t}),n(0,s,"sizeGrid",function(){return this._button.sizeGrid},function(t){this._button.sizeGrid=t}),n(0,s,"button",function(){return this._button}),n(0,s,"list",function(){return this._list||this._createList(),this._list},function(t){t&&(t.removeSelf(),this._isCustomList=!0,this._list=t,this._setListEvent(t),this._itemHeight=t.getCell(0).height+t.spaceY)}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.labels=t.join(","):e.superSet(P,this,"dataSource",t)}),n(0,s,"labelColors",function(){return this._button.labelColors},function(t){this._button.labelColors!=t&&(this._button.labelColors=t)}),n(0,s,"labelPadding",function(){return this._button.text.padding.join(",")},function(t){this._button.text.padding=M.fillArray(L.labelPadding,t,Number)}),n(0,s,"labelSize",function(){return this._button.text.fontSize},function(t){this._button.text.fontSize=t}),n(0,s,"labelFont",function(){return this._button.text.font},function(t){this._button.text.font=t}),n(0,s,"stateNum",function(){return this._button.stateNum},function(t){this._button.stateNum=t}),i}(P),E=function(t){function i(t){this.rollRatio=.95,this.changeHandler=null,this.scaleBar=!0,this.autoHide=!1,this.elasticDistance=0,this.elasticBackTime=500,this.upButton=null,this.downButton=null,this.slider=null,this._scrollSize=1,this._skin=null,this._thumbPercent=1,this._target=null,this._lastPoint=null,this._lastOffset=0,this._checkElastic=!1,this._isElastic=!1,this._value=NaN,this._hide=!1,this._clickOnly=!0,this._offsets=null,i.__super.call(this),this._showButtons=z.showButtons,this._touchScrollEnable=z.touchScrollEnable,this._mouseWheelEnable=z.mouseWheelEnable,this.skin=t,this.max=1}h(i,"laya.ui.ScrollBar",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),this.stopScroll(),this.target=null,t.prototype.destroy.call(this,i),this.upButton&&this.upButton.destroy(i),this.downButton&&this.downButton.destroy(i),this.slider&&this.slider.destroy(i),this.upButton=this.downButton=null,this.slider=null,this.changeHandler=null,this._offsets=null},s.createChildren=function(){this.addChild(this.slider=new V),this.addChild(this.upButton=new O),this.addChild(this.downButton=new O)},s.initialize=function(){this.slider.showLabel=!1,this.slider.on("change",this,this.onSliderChange),this.slider.setSlider(0,0,0),this.upButton.on("mousedown",this,this.onButtonMouseDown),this.downButton.on("mousedown",this,this.onButtonMouseDown)},s.onSliderChange=function(){this.value=this.slider.value},s.onButtonMouseDown=function(t){var i=t.currentTarget===this.upButton;this.slide(i),e.timer.once(L.scrollBarDelayTime,this,this.startLoop,[i]),e.stage.once("mouseup",this,this.onStageMouseUp)},s.startLoop=function(t){e.timer.frameLoop(1,this,this.slide,[t])},s.slide=function(t){t?this.value-=this._scrollSize:this.value+=this._scrollSize},s.onStageMouseUp=function(t){e.timer.clear(this,this.startLoop),e.timer.clear(this,this.slide)},s.changeScrollBar=function(){this.upButton.visible=this._showButtons,this.downButton.visible=this._showButtons,this._showButtons&&(this.upButton.skin=this._skin.replace(".png","$up.png"),this.downButton.skin=this._skin.replace(".png","$down.png")),this.slider.isVertical?this.slider.y=this._showButtons?this.upButton.height:0:this.slider.x=this._showButtons?this.upButton.width:0,this.resetPositions(),this.repaint()},s.changeSize=function(){t.prototype.changeSize.call(this),this.repaint(),this.resetPositions(),this.event("change"),this.changeHandler&&this.changeHandler.runWith(this.value)},s.resetPositions=function(){this.slider.isVertical?this.slider.height=this.height-(this._showButtons?this.upButton.height+this.downButton.height:0):this.slider.width=this.width-(this._showButtons?this.upButton.width+this.downButton.width:0),this.resetButtonPosition()},s.resetButtonPosition=function(){this.slider.isVertical?this.downButton.y=this.slider.y+this.slider.height:this.downButton.x=this.slider.x+this.slider.width},s.setScroll=function(t,i,e){this.runCallLater(this.changeSize),this.slider.setSlider(t,i,e),this.slider.bar.visible=i>0,!this._hide&&this.autoHide&&(this.visible=!1)},s.onTargetMouseWheel=function(t){this.value-=t.delta*this._scrollSize,this.target=this._target},s.onTargetMouseDown=function(t){this._clickOnly=!0,this._lastOffset=0,this._checkElastic=!1,this._lastPoint||(this._lastPoint=new y),this._lastPoint.setTo(e.stage.mouseX,e.stage.mouseY),e.timer.clear(this,this.tweenMove),x.clearTween(this),e.stage.once("mouseup",this,this.onStageMouseUp2),e.stage.once("mouseout",this,this.onStageMouseUp2),e.timer.frameLoop(1,this,this.loop)},s.loop=function(){var t=e.stage.mouseY,i=e.stage.mouseX;if(this._lastOffset=this.isVertical?t-this._lastPoint.y:i-this._lastPoint.x,this._clickOnly){if(!(Math.abs(this._lastOffset*(this.isVertical?e.stage._canvasTransform.getScaleY():e.stage._canvasTransform.getScaleX()))>1))return;this._clickOnly=!1,this._offsets||(this._offsets=[]),this._offsets.length=0,this._target.mouseEnabled=!1,!this.hide&&this.autoHide&&(this.alpha=1,this.visible=!0),this.event("start")}this._offsets.push(this._lastOffset),this._lastPoint.x=i,this._lastPoint.y=t,0!==this._lastOffset&&(this._checkElastic||(this.elasticDistance>0?this._checkElastic||0==this._lastOffset||(this._lastOffset>0&&this._value<=this.min||this._lastOffset<0&&this._value>=this.max?(this._isElastic=!0,this._checkElastic=!0):this._isElastic=!1):this._checkElastic=!0),this._isElastic?this._value<=this.min?this.value-=this._lastOffset*Math.max(0,1-(this.min-this._value)/this.elasticDistance):this._value>=this.max&&(this.value-=this._lastOffset*Math.max(0,1-(this._value-this.max)/this.elasticDistance)):this.value-=this._lastOffset)},s.onStageMouseUp2=function(t){if(e.stage.off("mouseup",this,this.onStageMouseUp2),e.stage.off("mouseout",this,this.onStageMouseUp2),e.timer.clear(this,this.loop),!this._clickOnly)if(this._target.mouseEnabled=!0,this._isElastic)this._value<this.min?x.to(this,{value:this.min},this.elasticBackTime,c.sineOut,p.create(this,this.elasticOver)):this._value>this.max&&x.to(this,{value:this.max},this.elasticBackTime,c.sineOut,p.create(this,this.elasticOver));else{if(!this._offsets)return;this._offsets.length<1&&(this._offsets[0]=this.isVertical?e.stage.mouseY-this._lastPoint.y:e.stage.mouseX-this._lastPoint.x);for(var i=0,s=Math.min(this._offsets.length,3),h=0;h<s;h++)i+=this._offsets[this._offsets.length-1-h];if(this._lastOffset=i/s,(i=Math.abs(this._lastOffset))<2)return void this.event("end");i>60&&(this._lastOffset=this._lastOffset>0?60:-60);var n=Math.round(Math.abs(this.elasticDistance*(this._lastOffset/240)));e.timer.frameLoop(1,this,this.tweenMove,[n])}},s.elasticOver=function(){this._isElastic=!1,!this.hide&&this.autoHide&&x.to(this,{alpha:0},500),this.event("end")},s.tweenMove=function(t){this._lastOffset*=this.rollRatio;var i=NaN;if(t>0&&(this._lastOffset>0&&this.value<=this.min?(this._isElastic=!0,i=.5*-(this.min-t-this.value),this._lastOffset>i&&(this._lastOffset=i)):this._lastOffset<0&&this.value>=this.max&&(this._isElastic=!0,i=.5*-(this.max+t-this.value),this._lastOffset<i&&(this._lastOffset=i))),this.value-=this._lastOffset,Math.abs(this._lastOffset)<1){if(e.timer.clear(this,this.tweenMove),this._isElastic)return void(this._value<this.min?x.to(this,{value:this.min},this.elasticBackTime,c.sineOut,p.create(this,this.elasticOver)):this._value>this.max?x.to(this,{value:this.max},this.elasticBackTime,c.sineOut,p.create(this,this.elasticOver)):this.elasticOver());this.event("end"),!this.hide&&this.autoHide&&x.to(this,{alpha:0},500)}},s.stopScroll=function(){this.onStageMouseUp2(null),e.timer.clear(this,this.tweenMove),x.clearTween(this)},n(0,s,"measureHeight",function(){return this.slider.isVertical?100:this.slider.height}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this.slider.skin=this._skin,this.callLater(this.changeScrollBar))}),n(0,s,"max",function(){return this.slider.max},function(t){this.slider.max=t}),n(0,s,"showButtons",function(){return this._showButtons},function(t){this._showButtons=t,this.callLater(this.changeScrollBar)}),n(0,s,"measureWidth",function(){return this.slider.isVertical?this.slider.width:100}),n(0,s,"min",function(){return this.slider.min},function(t){this.slider.min=t}),n(0,s,"value",function(){return this._value},function(t){t!==this._value&&(this._isElastic?this._value=t:(this.slider.value=t,this._value=this.slider.value),this.event("change"),this.changeHandler&&this.changeHandler.runWith(this.value))}),n(0,s,"isVertical",function(){return this.slider.isVertical},function(t){this.slider.isVertical=t}),n(0,s,"sizeGrid",function(){return this.slider.sizeGrid},function(t){this.slider.sizeGrid=t}),n(0,s,"scrollSize",function(){return this._scrollSize},function(t){this._scrollSize=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.value=Number(t):e.superSet(P,this,"dataSource",t)}),n(0,s,"thumbPercent",function(){return this._thumbPercent},function(t){this.runCallLater(this.changeScrollBar),this.runCallLater(this.changeSize),t=t>=1?.99:t,this._thumbPercent=t,this.scaleBar&&(this.slider.isVertical?this.slider.bar.height=Math.max(this.slider.height*t,L.scrollBarMinNum):this.slider.bar.width=Math.max(this.slider.width*t,L.scrollBarMinNum))}),n(0,s,"target",function(){return this._target},function(t){this._target&&(this._target.off("mousewheel",this,this.onTargetMouseWheel),this._target.off("mousedown",this,this.onTargetMouseDown)),this._target=t,t&&(this._mouseWheelEnable&&this._target.on("mousewheel",this,this.onTargetMouseWheel),this._touchScrollEnable&&this._target.on("mousedown",this,this.onTargetMouseDown))}),n(0,s,"hide",function(){return this._hide},function(t){this._hide=t,this.visible=!t}),n(0,s,"touchScrollEnable",function(){return this._touchScrollEnable},function(t){this._touchScrollEnable=t,this.target=this._target}),n(0,s,"mouseWheelEnable",function(){return this._mouseWheelEnable},function(t){this._mouseWheelEnable=t}),n(0,s,"tick",function(){return this.slider.tick},function(t){this.slider.tick=t}),i}(P),V=function(t){function i(t){this.changeHandler=null,this.isVertical=!0,this.showLabel=!0,this._allowClickBack=!1,this._max=100,this._min=0,this._tick=1,this._value=0,this._skin=null,this._bg=null,this._progress=null,this._bar=null,this._tx=NaN,this._ty=NaN,this._maxMove=NaN,this._globalSacle=null,i.__super.call(this),this.skin=t}h(i,"laya.ui.Slider",t);var o=i.prototype;return o.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bg&&this._bg.destroy(i),this._bar&&this._bar.destroy(i),this._progress&&this._progress.destroy(i),this._bg=null,this._bar=null,this._progress=null,this.changeHandler=null},o.createChildren=function(){this.addChild(this._bg=new D),this.addChild(this._bar=new O)},o.initialize=function(){this._bar.on("mousedown",this,this.onBarMouseDown),this._bg.sizeGrid=this._bar.sizeGrid="4,4,4,4,0",this._progress&&(this._progress.sizeGrid=this._bar.sizeGrid),this.allowClickBack=!0},o.onBarMouseDown=function(t){this._globalSacle||(this._globalSacle=new y),this._globalSacle.setTo(this.globalScaleX||.01,this.globalScaleY||.01),this._maxMove=this.isVertical?this.height-this._bar.height:this.width-this._bar.width,this._tx=e.stage.mouseX,this._ty=e.stage.mouseY,e.stage.on("mousemove",this,this.mouseMove),e.stage.once("mouseup",this,this.mouseUp),e.stage.once("mouseout",this,this.mouseUp),this.showValueText()},o.showValueText=function(){if(this.showLabel){var t=laya.ui.Slider.label;this.addChild(t),t.textField.changeText(this._value+""),this.isVertical?(t.x=this._bar.x+20,t.y=.5*(this._bar.height-t.height)+this._bar.y):(t.y=this._bar.y-20,t.x=.5*(this._bar.width-t.width)+this._bar.x)}},o.hideValueText=function(){laya.ui.Slider.label&&laya.ui.Slider.label.removeSelf()},o.mouseUp=function(t){e.stage.off("mousemove",this,this.mouseMove),e.stage.off("mouseup",this,this.mouseUp),e.stage.off("mouseout",this,this.mouseUp),this.sendChangeEvent("changed"),this.hideValueText()},o.mouseMove=function(t){var i=this._value;this.isVertical?(this._bar.y+=(e.stage.mouseY-this._ty)/this._globalSacle.y,this._bar.y>this._maxMove?this._bar.y=this._maxMove:this._bar.y<0&&(this._bar.y=0),this._value=this._bar.y/this._maxMove*(this._max-this._min)+this._min,this._progress&&(this._progress.height=this._bar.y+.5*this._bar.height)):(this._bar.x+=(e.stage.mouseX-this._tx)/this._globalSacle.x,this._bar.x>this._maxMove?this._bar.x=this._maxMove:this._bar.x<0&&(this._bar.x=0),this._value=this._bar.x/this._maxMove*(this._max-this._min)+this._min,this._progress&&(this._progress.width=this._bar.x+.5*this._bar.width)),this._tx=e.stage.mouseX,this._ty=e.stage.mouseY;var s=Math.pow(10,(this._tick+"").length-1);this._value=Math.round(Math.round(this._value/this._tick)*this._tick*s)/s,this._value!=i&&this.sendChangeEvent(),this.showValueText()},o.sendChangeEvent=function(t){void 0===t&&(t="change"),this.event(t),this.changeHandler&&this.changeHandler.runWith(this._value)},o.setBarPoint=function(){this.isVertical?this._bar.x=Math.round(.5*(this._bg.width-this._bar.width)):this._bar.y=Math.round(.5*(this._bg.height-this._bar.height))},o.changeSize=function(){t.prototype.changeSize.call(this),this.isVertical?this._bg.height=this.height:this._bg.width=this.width,this.setBarPoint(),this.changeValue()},o.setSlider=function(t,i,e){this._value=-1,this._min=t,this._max=i>t?i:t,this.value=e<t?t:e>i?i:e},o.changeValue=function(){var t=Math.pow(10,(this._tick+"").length-1);this._value=Math.round(Math.round(this._value/this._tick)*this._tick*t)/t,this._value=this._value>this._max?this._max:this._value<this._min?this._min:this._value;var i=this._max-this._min;0===i&&(i=1),this.isVertical?(this._bar.y=(this._value-this._min)/i*(this.height-this._bar.height),this._progress&&(this._progress.height=this._bar.y+.5*this._bar.height)):(this._bar.x=(this._value-this._min)/i*(this.width-this._bar.width),this._progress&&(this._progress.width=this._bar.x+.5*this._bar.width))},o.onBgMouseDown=function(t){var i=this._bg.getMousePoint();this.isVertical?this.value=i.y/(this.height-this._bar.height)*(this._max-this._min)+this._min:this.value=i.x/(this.width-this._bar.width)*(this._max-this._min)+this._min},n(0,o,"measureHeight",function(){return Math.max(this._bg.height,this._bar.height)}),n(0,o,"skin",function(){return this._skin},function(t){if(this._skin!=t){this._skin=t,this._bg.skin=this._skin,this._bar.skin=this._skin.replace(".png","$bar.png");var i=this._skin.replace(".png","$progress.png");m.getRes(i)&&(this._progress||(this.addChild(this._progress=new D),this._progress.sizeGrid=this._bar.sizeGrid,this.setChildIndex(this._progress,1)),this._progress.skin=i),this.setBarPoint(),this.callLater(this.changeValue)}}),n(0,o,"allowClickBack",function(){return this._allowClickBack},function(t){this._allowClickBack!=t&&(this._allowClickBack=t,t?this._bg.on("mousedown",this,this.onBgMouseDown):this._bg.off("mousedown",this,this.onBgMouseDown))}),n(0,o,"max",function(){return this._max},function(t){this._max!=t&&(this._max=t,this.callLater(this.changeValue))}),n(0,o,"measureWidth",function(){return Math.max(this._bg.width,this._bar.width)}),n(0,o,"tick",function(){return this._tick},function(t){this._tick!=t&&(this._tick=t,this.callLater(this.changeValue))}),n(0,o,"sizeGrid",function(){return this._bg.sizeGrid},function(t){this._bg.sizeGrid=t,this._bar.sizeGrid=t,this._progress&&(this._progress.sizeGrid=this._bar.sizeGrid)}),n(0,o,"min",function(){return this._min},function(t){this._min!=t&&(this._min=t,this.callLater(this.changeValue))}),n(0,o,"value",function(){return this._value},function(t){if(this._value!=t){var i=this._value;this._value=t,this.changeValue(),this._value!=i&&this.sendChangeEvent()}}),n(0,o,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.value=Number(t):e.superSet(P,this,"dataSource",t)}),n(0,o,"bar",function(){return this._bar}),s(i,["label",function(){return this.label=new G}]),i}(P),D=function(t){function i(t){this._bitmap=null,this._skin=null,this._group=null,i.__super.call(this),this.skin=t}h(i,"laya.ui.Image",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,!0),this._bitmap&&this._bitmap.destroy(),this._bitmap=null},s.dispose=function(){this.destroy(!0),e.loader.clearRes(this._skin)},s.createChildren=function(){this.graphics=this._bitmap=new T,this._bitmap.autoCacheCmd=!1},s.setSource=function(t,i){t===this._skin&&i&&(this.source=i,this.onCompResize())},n(0,s,"source",function(){return this._bitmap.source},function(t){this._bitmap&&(this._bitmap.source=t,this.event("loaded"),this.repaint())}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"string"==typeof t?this.skin=t:e.superSet(P,this,"dataSource",t)}),n(0,s,"measureHeight",function(){return this._bitmap.height}),n(0,s,"skin",function(){return this._skin},function(t){if(this._skin!=t)if(this._skin=t,t){var i=m.getRes(t);i?(this.source=i,this.onCompResize()):e.loader.load(this._skin,p.create(this,this.setSource,[this._skin]),null,"image",1,!0,this._group)}else this.source=null}),n(0,s,"group",function(){return this._group},function(t){t&&this._skin&&m.setGroup(this._skin,t),this._group=t}),n(0,s,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=M.fillArray(L.defaultSizeGrid,t,Number)}),n(0,s,"measureWidth",function(){return this._bitmap.width}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(P,this,"width",t),this._bitmap.width=0==t?1e-7:t}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(P,this,"height",t),this._bitmap.height=0==t?1e-7:t}),i}(P),G=function(t){function i(t){this._tf=null,i.__super.call(this),void 0===t&&(t=""),_.defaultColor=L.labelColor,this.text=t}h(i,"laya.ui.Label",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._tf=null},s.createChildren=function(){this.addChild(this._tf=new S)},s.changeText=function(t){this._tf.changeText(t)},n(0,s,"padding",function(){return this._tf.padding.join(",")},function(t){this._tf.padding=M.fillArray(L.labelPadding,t,Number)}),n(0,s,"bold",function(){return this._tf.bold},function(t){this._tf.bold=t}),n(0,s,"align",function(){return this._tf.align},function(t){this._tf.align=t}),n(0,s,"text",function(){return this._tf.text},function(t){this._tf.text!=t&&(t&&(t=M.adptString(t+"")),this._tf.text=t,this.event("change"),this._width&&this._height||this.onCompResize())}),n(0,s,"italic",function(){return this._tf.italic},function(t){this._tf.italic=t}),n(0,s,"wordWrap",function(){return this._tf.wordWrap},function(t){this._tf.wordWrap=t}),n(0,s,"font",function(){return this._tf.font},function(t){this._tf.font=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.text=t+"":e.superSet(P,this,"dataSource",t)}),n(0,s,"color",function(){return this._tf.color},function(t){this._tf.color=t}),n(0,s,"valign",function(){return this._tf.valign},function(t){this._tf.valign=t}),n(0,s,"leading",function(){return this._tf.leading},function(t){this._tf.leading=t}),n(0,s,"fontSize",function(){return this._tf.fontSize},function(t){this._tf.fontSize=t}),n(0,s,"bgColor",function(){return this._tf.bgColor},function(t){this._tf.bgColor=t}),n(0,s,"borderColor",function(){return this._tf.borderColor},function(t){this._tf.borderColor=t}),n(0,s,"stroke",function(){return this._tf.stroke},function(t){this._tf.stroke=t}),n(0,s,"strokeColor",function(){return this._tf.strokeColor},function(t){this._tf.strokeColor=t}),n(0,s,"textField",function(){return this._tf}),n(0,s,"measureWidth",function(){return this._tf.width}),n(0,s,"measureHeight",function(){return this._tf.height}),n(0,s,"width",function(){return this._width||this._tf.text?e.superGet(P,this,"width"):0},function(t){e.superSet(P,this,"width",t),this._tf.width=t}),n(0,s,"height",function(){return this._height||this._tf.text?e.superGet(P,this,"height"):0},function(t){e.superSet(P,this,"height",t),this._tf.height=t}),n(0,s,"overflow",function(){return this._tf.overflow},function(t){this._tf.overflow=t}),n(0,s,"underline",function(){return this._tf.underline},function(t){this._tf.underline=t}),n(0,s,"underlineColor",function(){return this._tf.underlineColor},function(t){this._tf.underlineColor=t}),i}(P),R=function(t){function i(t){this.changeHandler=null,this._bg=null,this._bar=null,this._skin=null,this._value=.5,i.__super.call(this),this.skin=t}h(i,"laya.ui.ProgressBar",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bg&&this._bg.destroy(i),this._bar&&this._bar.destroy(i),this._bg=this._bar=null,this.changeHandler=null},s.createChildren=function(){this.addChild(this._bg=new D),this.addChild(this._bar=new D),this._bar._bitmap.autoCacheCmd=!1},s.changeValue=function(){if(this.sizeGrid){var t=this.sizeGrid.split(","),i=Number(t[3]),e=Number(t[1]),s=(this.width-i-e)*this._value;this._bar.width=i+e+s,this._bar.visible=this._bar.width>i+e}else this._bar.width=this.width*this._value},n(0,s,"measureHeight",function(){return this._bg.height}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._bg.skin=this._skin,this._bar.skin=this._skin.replace(".png","$bar.png"),this.callLater(this.changeValue))}),n(0,s,"measureWidth",function(){return this._bg.width}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(P,this,"height",t),this._bg.height=this._height,this._bar.height=this._height}),n(0,s,"bar",function(){return this._bar}),n(0,s,"value",function(){return this._value},function(t){this._value!=t&&(t=t>1?1:t<0?0:t,this._value=t,this.callLater(this.changeValue),this.event("change"),this.changeHandler&&this.changeHandler.runWith(t))}),n(0,s,"bg",function(){return this._bg}),n(0,s,"sizeGrid",function(){return this._bg.sizeGrid},function(t){this._bg.sizeGrid=this._bar.sizeGrid=t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(P,this,"width",t),this._bg.width=this._width,this.callLater(this.changeValue)}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t||"string"==typeof t?this.value=Number(t):e.superSet(P,this,"dataSource",t)}),i}(P),W=(function(t){function i(){this._tipBox=null,this._tipText=null,this._defaultTipHandler=null,i.__super.call(this),this._tipBox=new P,this._tipBox.addChild(this._tipText=new S),this._tipText.x=this._tipText.y=5,this._tipText.color=i.tipTextColor,this._defaultTipHandler=this._showDefaultTip,e.stage.on("showtip",this,this._onStageShowTip),e.stage.on("hidetip",this,this._onStageHideTip),this.zOrder=1100}h(i,"laya.ui.TipManager",P);var s=i.prototype;s._onStageHideTip=function(t){e.timer.clear(this,this._showTip),this.closeAll(),this.removeSelf()},s._onStageShowTip=function(t){e.timer.once(i.tipDelay,this,this._showTip,[t],!0)},s._showTip=function(t){if("string"==typeof t){var i=String(t);Boolean(i)&&this._defaultTipHandler(i)}else t instanceof laya.utils.Handler?t.run():"function"==typeof t&&t.apply();e.stage.on("mousemove",this,this._onStageMouseMove),e.stage.on("mousedown",this,this._onStageMouseDown),this._onStageMouseMove(null)},s._onStageMouseDown=function(t){this.closeAll()},s._onStageMouseMove=function(t){this._showToStage(this,i.offsetX,i.offsetY)},s._showToStage=function(t,i,s){void 0===i&&(i=0),void 0===s&&(s=0);var h=t.getBounds();t.x=e.stage.mouseX+i,t.y=e.stage.mouseY+s,t.x+h.width>e.stage.width&&(t.x-=h.width+i),t.y+h.height>e.stage.height&&(t.y-=h.height+s)},s.closeAll=function(){e.timer.clear(this,this._showTip),e.stage.off("mousemove",this,this._onStageMouseMove),e.stage.off("mousedown",this,this._onStageMouseDown),this.removeChildren()},s.showDislayTip=function(t){this.addChild(t),this._showToStage(this),e._currentStage.addChild(this)},s._showDefaultTip=function(t){this._tipText.text=t;var s=this._tipBox.graphics;s.clear(),s.drawRect(0,0,this._tipText.width+10,this._tipText.height+10,i.tipBackColor),this.addChild(this._tipBox),this._showToStage(this),e._currentStage.addChild(this)},n(0,s,"defaultTipHandler",function(){return this._defaultTipHandler},function(t){this._defaultTipHandler=t}),i.offsetX=10,i.offsetY=15,i.tipTextColor="#ffffff",i.tipBackColor="#111111",i.tipDelay=200}(),function(t){var i;function n(){this._idMap=null,this._aniList=null,this._watchMap={},n.__super.call(this)}h(n,"laya.ui.View",N);var a=n.prototype;return a.createView=function(t){if(t.animations&&!this._idMap&&(this._idMap={}),n.createComp(t,this,this),t.animations){var i,e,s=[],h=t.animations,o=0,r=h.length;for(o=0;o<r;o++){switch(i=new d,e=h[o],i._setUp(this._idMap,e),this[e.name]=i,i._setControlNode(this),e.action){case 1:i.play(0,!1);break;case 2:i.play(0,!0)}s.push(i)}this._aniList=s}this._width>0&&null==t.props.hitTestPrior&&!this.mouseThrough&&(this.hitTestPrior=!0)},a.loadUI=function(t){var i=n.uiMap[t];i&&this.createView(i)},a.destroy=function(t){void 0===t&&(t=!0),this._aniList&&(this._aniList.length=0),this._idMap=null,this._aniList=null,this._watchMap=null,laya.ui.Component.prototype.destroy.call(this,t)},a.changeData=function(t){var i=this._watchMap[t];if(i){console.log("change",t);for(var e=0,s=i.length;e<s;e++){i[e].exe(this)}}},n._regs=function(){for(var t in n.uiClassMap)l.regClass(t,n.uiClassMap[t])},n.createComp=function(t,i,s,h){if(!(i=i||n.getCompInstance(t)))return console.warn("can not create:"+t.type),null;var o=t.child;if(o)for(var r=i instanceof laya.ui.List,a=0,c=o.length;a<c;a++){var u=o[a];if(!i.hasOwnProperty("itemRender")||"render"!=u.props.name&&"render"!==u.props.renderType)if("Graphic"==u.type)l.addGraphicsToSprite(u,i);else if(l.isDrawType(u.type))l.addGraphicToSprite(u,i,!0);else{if(r){var _=[],d=n.createComp(u,null,s,_);_.length&&(d._$bindData=_)}else d=n.createComp(u,null,s,h);"Script"==u.type?"owner"in d?d.owner=i:"target"in d&&(d.target=i):"mask"==u.props.renderType||"mask"==u.props.name?i.mask=d:d instanceof laya.display.Sprite&&i.addChild(d)}else i.itemRender=u}var f=t.props;for(var p in f){var g=f[p];n.setCompValue(i,p,g,s,h)}return e.__typeof(i,"laya.ui.IItem")&&i.initItems(),t.compId&&s&&s._idMap&&(s._idMap[t.compId]=i),i},n.setCompValue=function(t,e,s,h,o){if("string"==typeof s&&s.indexOf("${")>-1){if(n._sheet||(n._sheet=l.getClass("laya.data.Table")),!n._sheet)return void console.warn("Can not find class Sheet");if(o)o.push(t,e,s);else if(h){-1==s.indexOf("].")&&(s=s.replace(".","[0]."));var a,c,u=new i(t,e,s);u.exe(h);for(var _=s.replace(/\[.*?\]\./g,".");null!=(a=n._parseWatchData.exec(_));){for(var d=a[1];null!=(c=n._parseKeyWord.exec(d));){var f=c[0],p=h._watchMap[f]||(h._watchMap[f]=[]);p.push(u),n._sheet.I.notifer.on(f,h,h.changeData,[f])}(p=h._watchMap[d]||(h._watchMap[d]=[])).push(u),n._sheet.I.notifer.on(d,h,h.changeData,[d])}}}else if("var"===e&&h)h[s]=t;else if("onClick"==e){var g=r.window.eval("(function(){"+s+"})");t.on("click",h,g)}else t[e]="true"===s||"false"!==s&&s},n.getCompInstance=function(t){var i,s=t.props?t.props.runtime:null;return i=s?n.viewClassMap[s]||n.uiClassMap[s]||e.__classmap[s]:n.uiClassMap[t.type],t.props&&t.props.hasOwnProperty("renderType")&&"instance"==t.props.renderType?i.instance:i?new i:null},n.regComponent=function(t,i){n.uiClassMap[t]=i,l.regClass(t,i)},n.regViewRuntime=function(t,i){n.viewClassMap[t]=i},n.uiMap={},n.viewClassMap={},n._sheet=null,s(n,["uiClassMap",function(){return this.uiClassMap={ViewStack:it,LinkButton:O,TextArea:ct,ColorPicker:Y,Box:N,Button:O,CheckBox:$,Clip:A,ComboBox:X,Component:P,HScrollBar:K,HSlider:q,Image:D,Label:G,List:j,Panel:Z,ProgressBar:R,Radio:Q,RadioGroup:lt,ScrollBar:E,Slider:V,Tab:at,TextInput:st,View:n,VScrollBar:et,VSlider:ht,Tree:tt,HBox:ot,VBox:rt,Sprite:b,Animation:o,Text:S,FontClip:U}},"_parseWatchData",function(){return this._parseWatchData=/\${(.*?)}/g},"_parseKeyWord",function(){return this._parseKeyWord=/[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g}]),n.__init$=function(){n._regs(),i=function(){function t(t,i,e){this.comp=null,this.prop=null,this.value=null,this.comp=t,this.prop=i,this.value=e}return h(t,""),t.prototype.exe=function(t){var i=M.getBindFun(this.value);this.comp[this.prop]=i.call(this,t)},t}()},n}()),$=function(t){function i(t,e){void 0===e&&(e=""),i.__super.call(this,t,e)}h(i,"laya.ui.CheckBox",t);var s=i.prototype;return s.preinitialize=function(){laya.ui.Component.prototype.preinitialize.call(this),this.toggle=!0,this._autoSize=!1},s.initialize=function(){t.prototype.initialize.call(this),this.createText(),this._text.align="left",this._text.valign="top",this._text.width=0},n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"boolean"==typeof t?this.selected=t:"string"==typeof t?this.selected="true"===t:e.superSet(O,this,"dataSource",t)}),i}(O),F=function(t){function i(){this._space=0,this._align="none",this._itemChanged=!1,i.__super.call(this)}h(i,"laya.ui.LayoutBox",N);var e=i.prototype;return e.addChild=function(t){return t.on("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.addChild.call(this,t)},e.onResize=function(t){this._setItemChanged()},e.addChildAt=function(t,i){return t.on("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.addChildAt.call(this,t,i)},e.removeChild=function(t){return t.off("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.removeChild.call(this,t)},e.removeChildAt=function(t){return this.getChildAt(t).off("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.removeChildAt.call(this,t)},e.refresh=function(){this._setItemChanged()},e.changeItems=function(){this._itemChanged=!1},e.sortItem=function(t){t&&t.sort(function(t,i){return t.y-i.y})},e._setItemChanged=function(){this._itemChanged||(this._itemChanged=!0,this.callLater(this.changeItems))},n(0,e,"space",function(){return this._space},function(t){this._space=t,this._setItemChanged()}),n(0,e,"align",function(){return this._align},function(t){this._align=t,this._setItemChanged()}),i}(),U=function(t){function i(t,e){this._valueArr=null,this._indexMap=null,this._sheet=null,this._direction="horizontal",this._spaceX=0,this._spaceY=0,this._align="left",this._wordsW=0,this._wordsH=0,i.__super.call(this),t&&(this.skin=t),e&&(this.sheet=e)}h(i,"laya.ui.FontClip",t);var s=i.prototype;return s.createChildren=function(){this._bitmap=new T,this.on("loaded",this,this._onClipLoaded)},s._onClipLoaded=function(){this.callLater(this.changeValue)},s.changeValue=function(){var t;if(this._sources&&(this._valueArr&&(this.graphics.clear(!0),t=this._sources[0]))){var i="horizontal"===this._direction;i?(this._wordsW=this._valueArr.length*(t.sourceWidth+this.spaceX),this._wordsH=t.sourceHeight):(this._wordsW=t.sourceWidth,this._wordsH=(t.sourceHeight+this.spaceY)*this._valueArr.length);var e=0;if(this._width)switch(this._align){case"center":e=.5*(this._width-this._wordsW);break;case"right":e=this._width-this._wordsW;break;default:e=0}for(var s=0,h=this._valueArr.length;s<h;s++){var n=this._indexMap[this._valueArr.charAt(s)];this.sources[n]&&(t=this.sources[n],i?this.graphics.drawTexture(t,e+s*(t.sourceWidth+this.spaceX),0,t.sourceWidth,t.sourceHeight):this.graphics.drawTexture(t,0+e,s*(t.sourceHeight+this.spaceY),t.sourceWidth,t.sourceHeight))}this._width||(this.resetLayoutX(),this.callLater(this.changeSize)),this._height||(this.resetLayoutY(),this.callLater(this.changeSize))}},s.destroy=function(i){void 0===i&&(i=!0),this._valueArr=null,this._indexMap=null,this.graphics.clear(!0),this.removeSelf(),this.off("loaded",this,this._onClipLoaded),t.prototype.destroy.call(this,i)},n(0,s,"sheet",function(){return this._sheet},function(t){t+="",this._sheet=t;var i=t.split(" ");this._clipX=String(i[0]).length,this.clipY=i.length,this._indexMap={};for(var e=0;e<this._clipY;e++)for(var s=i[e].split(""),h=0,n=s.length;h<n;h++)this._indexMap[s[h]]=e*this._clipX+h}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(A,this,"height",t),this.callLater(this.changeValue)}),n(0,s,"direction",function(){return this._direction},function(t){this._direction=t,this.callLater(this.changeValue)}),n(0,s,"value",function(){return this._valueArr?this._valueArr:""},function(t){t+="",this._valueArr=t,this.callLater(this.changeValue)}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(A,this,"width",t),this.callLater(this.changeValue)}),n(0,s,"spaceX",function(){return this._spaceX},function(t){this._spaceX=t,"horizontal"===this._direction&&this.callLater(this.changeValue)}),n(0,s,"spaceY",function(){return this._spaceY},function(t){this._spaceY=t,"horizontal"!==this._direction&&this.callLater(this.changeValue)}),n(0,s,"align",function(){return this._align},function(t){this._align=t,this.callLater(this.changeValue)}),n(0,s,"measureWidth",function(){return this._wordsW}),n(0,s,"measureHeight",function(){return this._wordsH}),i}(A),j=function(t){function i(){this.selectHandler=null,this.renderHandler=null,this.mouseHandler=null,this.selectEnable=!1,this.totalPage=0,this._content=null,this._scrollBar=null,this._itemRender=null,this._repeatX=0,this._repeatY=0,this._repeatX2=0,this._repeatY2=0,this._spaceX=0,this._spaceY=0,this._array=null,this._startIndex=0,this._selectedIndex=-1,this._page=0,this._isVertical=!0,this._cellSize=20,this._cellOffset=0,this._isMoved=!1,this.cacheContent=!1,this._createdLine=0,this._cellChanged=!1,i.__super.call(this),this._cells=[],this._offset=new y}h(i,"laya.ui.List",t);var s=i.prototype;return e.imps(s,{"laya.ui.IRender":!0,"laya.ui.IItem":!0}),s.destroy=function(t){void 0===t&&(t=!0),this._content&&this._content.destroy(t),this._scrollBar&&this._scrollBar.destroy(t),laya.ui.Component.prototype.destroy.call(this,t),this._content=null,this._scrollBar=null,this._itemRender=null,this._cells=null,this._array=null,this.selectHandler=this.renderHandler=this.mouseHandler=null},s.createChildren=function(){this.addChild(this._content=new N)},s.onScrollStart=function(){this._$P.cacheAs||(this._$P.cacheAs=e.superGet(N,this,"cacheAs")),e.superSet(N,this,"cacheAs","none"),this._scrollBar.once("end",this,this.onScrollEnd)},s.onScrollEnd=function(){e.superSet(N,this,"cacheAs",this._$P.cacheAs)},s._removePreScrollBar=function(){var t=this.removeChildByName("scrollBar");t&&t.destroy(!0)},s.changeCells=function(){if(this._cellChanged=!1,this._itemRender){this.scrollBar=this.getChildByName("scrollBar");var t=this._getOneCell(),i=t.width+this._spaceX||1,e=t.height+this._spaceY||1;this._width>0&&(this._repeatX2=this._isVertical?Math.round(this._width/i):Math.ceil(this._width/i)),this._height>0&&(this._repeatY2=this._isVertical?Math.ceil(this._height/e):Math.round(this._height/e));var s=this._width?this._width:i*this.repeatX-this._spaceX,h=this._height?this._height:e*this.repeatY-this._spaceY;this._cellSize=this._isVertical?e:i,this._cellOffset=this._isVertical?e*Math.max(this._repeatY2,this._repeatY)-h-this._spaceY:i*Math.max(this._repeatX2,this._repeatX)-s-this._spaceX,this._isVertical&&this._scrollBar?this._scrollBar.height=h:!this._isVertical&&this._scrollBar&&(this._scrollBar.width=s),this.setContentSize(s,h);var n=this._isVertical?this.repeatX:this.repeatY,o=(this._isVertical?this.repeatY:this.repeatX)+(this._scrollBar?1:0);this._createItems(0,n,o),this._createdLine=o,this._array&&(this.array=this._array,this.runCallLater(this.renderItems))}},s._getOneCell=function(){if(0===this._cells.length){var t=this.createItem();if(this._offset.setTo(t.x,t.y),this.cacheContent)return t;this._cells.push(t)}return this._cells[0]},s._createItems=function(t,i,e){var s=this._content,h=this._getOneCell(),n=h.width+this._spaceX,o=h.height+this._spaceY;if(this.cacheContent){var r=new N;r.cacheAsBitmap=!0,r.pos((this._isVertical?0:t)*n,(this._isVertical?t:0)*o),this._content.addChild(r),this._content.optimizeScrollRect=!0,s=r}else{for(var l=[],a=this._cells.length-1;a>-1;a--){var c=this._cells[a];c.removeSelf(),l.push(c)}this._cells.length=0}for(var u=t;u<e;u++)for(var _=0;_<i;_++)(h=l&&l.length?l.pop():this.createItem()).x=(this._isVertical?_:u)*n-s.x,h.y=(this._isVertical?u:_)*o-s.y,h.name="item"+(u*i+_),s.addChild(h),this.addCell(h)},s.createItem=function(){var t=[];if("function"==typeof this._itemRender)var i=new this._itemRender;else i=W.createComp(this._itemRender,null,null,t);if(0==t.length&&i._watchMap){var e=i._watchMap;for(var s in e)for(var h=e[s],n=0;n<h.length;n++){var o=h[n];t.push(o.comp,o.prop,o.value)}}return t.length&&(i._$bindData=t),i},s.addCell=function(t){t.on("click",this,this.onCellMouse),t.on("rightclick",this,this.onCellMouse),t.on("mouseover",this,this.onCellMouse),t.on("mouseout",this,this.onCellMouse),t.on("mousedown",this,this.onCellMouse),t.on("mouseup",this,this.onCellMouse),this._cells.push(t)},s.initItems=function(){if(!this._itemRender&&null!=this.getChildByName("item0")){this.repeatX=1;var t=0;t=0;for(var i=0;i<1e4;i++){var e=this.getChildByName("item"+i);if(!e)break;this.addCell(e),t++}this.repeatY=t}},s.setContentSize=function(t,i){this._content.width=t,this._content.height=i,(this._scrollBar||0!=this._offset.x||0!=this._offset.y)&&(this._content.scrollRect||(this._content.scrollRect=new v),this._content.scrollRect.setTo(-this._offset.x,-this._offset.y,t,i),this._content.scrollRect=this._content.scrollRect),this.event("resize")},s.onCellMouse=function(t){"mousedown"===t.type&&(this._isMoved=!1);var i=t.currentTarget,e=this._startIndex+this._cells.indexOf(i);e<0||("click"===t.type||"rightclick"===t.type?this.selectEnable&&!this._isMoved?this.selectedIndex=e:this.changeCellState(i,!0,0):"mouseover"!==t.type&&"mouseout"!==t.type||this._selectedIndex===e||this.changeCellState(i,"mouseover"===t.type,0),this.mouseHandler&&this.mouseHandler.runWith([t,e]))},s.changeCellState=function(t,i,e){var s=t.getChildByName("selectBox");s&&(this.selectEnable=!0,s.visible=i,s.index=e)},s.changeSize=function(){laya.ui.Component.prototype.changeSize.call(this),this.setContentSize(this.width,this.height),this._scrollBar&&this.callLater(this.onScrollBarChange)},s.onScrollBarChange=function(t){this.runCallLater(this.changeCells);var i=this._scrollBar.value,e=this._isVertical?this.repeatX:this.repeatY,s=this._isVertical?this.repeatY:this.repeatX,h=Math.floor(i/this._cellSize);if(this.cacheContent)o=s+1,this._createdLine-h<o&&(this._createItems(this._createdLine,e,this._createdLine+o),this.renderItems(this._createdLine*e,0),this._createdLine+=o);else{var n=h*e,o=0;if(n>this._startIndex){o=n-this._startIndex;var r=!0,l=this._startIndex+e*(s+1);this._isMoved=!0}else n<this._startIndex&&(o=this._startIndex-n,r=!1,l=this._startIndex-1,this._isMoved=!0);for(var a=0;a<o;a++){if(r){var c=this._cells.shift();this._cells[this._cells.length]=c;var u=l+a}else c=this._cells.pop(),this._cells.unshift(c),u=l-a;var _=Math.floor(u/e)*this._cellSize;this._isVertical?c.y=_:c.x=_,this.renderItem(c,u)}this._startIndex=n,this.changeSelectStatus()}var d=this._content.scrollRect;this._isVertical?(d.y=i-this._offset.y,d.x=-this._offset.x):(d.y=-this._offset.y,d.x=i-this._offset.x),this._content.scrollRect=d},s.posCell=function(t,i){if(this._scrollBar){var e=this._isVertical?this.repeatX:this.repeatY,s=(this._isVertical?this.repeatY:this.repeatX,Math.floor(i/e)*this._cellSize);this._isVertical?t.y=s:t.x=s}},s.changeSelectStatus=function(){for(var t=0,i=this._cells.length;t<i;t++)this.changeCellState(this._cells[t],this._selectedIndex===this._startIndex+t,1)},s.renderItems=function(t,i){void 0===t&&(t=0),void 0===i&&(i=0);for(var e=t,s=i||this._cells.length;e<s;e++)this.renderItem(this._cells[e],this._startIndex+e);this.changeSelectStatus()},s.renderItem=function(t,i){this._array&&i>=0&&i<this._array.length?(t.visible=!0,t._$bindData?(t._dataSource=this._array[i],this._bindData(t,this._array[i])):t.dataSource=this._array[i],this.cacheContent||this.posCell(t,i),this.hasListener("render")&&this.event("render",[t,i]),this.renderHandler&&this.renderHandler.runWith([t,i])):(t.visible=!1,t.dataSource=null)},s._bindData=function(t,i){for(var e=t._$bindData,s=0,h=e.length;s<h;s++){var n=e[s++],o=e[s++],r=e[s],l=M.getBindFun(r);n[o]=l.call(this,i)}},s.refresh=function(){this.array=this._array},s.getItem=function(t){return t>-1&&t<this._array.length?this._array[t]:null},s.changeItem=function(t,i){t>-1&&t<this._array.length&&(this._array[t]=i,t>=this._startIndex&&t<this._startIndex+this._cells.length&&this.renderItem(this.getCell(t),t))},s.setItem=function(t,i){this.changeItem(t,i)},s.addItem=function(t){this._array.push(t),this.array=this._array},s.addItemAt=function(t,i){this._array.splice(i,0,t),this.array=this._array},s.deleteItem=function(t){this._array.splice(t,1),this.array=this._array},s.getCell=function(t){return this.runCallLater(this.changeCells),t>-1&&this._cells?this._cells[(t-this._startIndex)%this._cells.length]:null},s.scrollTo=function(t){if(this._scrollBar){var i=this._isVertical?this.repeatX:this.repeatY;this._scrollBar.value=Math.floor(t/i)*this._cellSize}else this.startIndex=t},s.tweenTo=function(t,i,e){if(void 0===i&&(i=200),this._scrollBar){var s=this._isVertical?this.repeatX:this.repeatY;x.to(this._scrollBar,{value:Math.floor(t/s)*this._cellSize},i,null,e,0,!0)}else this.startIndex=t,e&&e.run()},s._setCellChanged=function(){this._cellChanged||(this._cellChanged=!0,this.callLater(this.changeCells))},s.commitMeasure=function(){this.runCallLater(this.changeCells)},n(0,s,"cacheAs",t.prototype._$get_cacheAs,function(t){e.superSet(N,this,"cacheAs",t),this._scrollBar&&(this._$P.cacheAs=null,"none"!==t?this._scrollBar.on("start",this,this.onScrollStart):this._scrollBar.off("start",this,this.onScrollStart))}),n(0,s,"content",function(){return this._content}),n(0,s,"height",t.prototype._$get_height,function(t){t!=this._height&&(e.superSet(N,this,"height",t),this._setCellChanged())}),n(0,s,"itemRender",function(){return this._itemRender},function(t){if(this._itemRender!=t){this._itemRender=t;for(var i=this._cells.length-1;i>-1;i--)this._cells[i].destroy();this._cells.length=0,this._setCellChanged()}}),n(0,s,"vScrollBarSkin",function(){return this._scrollBar?this._scrollBar.skin:null},function(t){this._removePreScrollBar();var i=new et;i.name="scrollBar",i.right=0,t&&" "!=t&&(i.skin=t),this.scrollBar=i,this.addChild(i),this._setCellChanged()}),n(0,s,"page",function(){return this._page},function(t){this._page=t,this._array&&(this._page=t>0?t:0,this._page=this._page<this.totalPage?this._page:this.totalPage-1,this.startIndex=this._page*this.repeatX*this.repeatY)}),n(0,s,"hScrollBarSkin",function(){return this._scrollBar?this._scrollBar.skin:null},function(t){this._removePreScrollBar();var i=new K;i.name="scrollBar",i.bottom=0,t&&" "!=t&&(i.skin=t),this.scrollBar=i,this.addChild(i),this._setCellChanged()}),n(0,s,"repeatX",function(){return this._repeatX>0?this._repeatX:this._repeatX2>0?this._repeatX2:1},function(t){this._repeatX=t,this._setCellChanged()}),n(0,s,"scrollBar",function(){return this._scrollBar},function(t){this._scrollBar!=t&&(this._scrollBar=t,t&&(this._isVertical=this._scrollBar.isVertical,this.addChild(this._scrollBar),this._scrollBar.on("change",this,this.onScrollBarChange)))}),n(0,s,"width",t.prototype._$get_width,function(t){t!=this._width&&(e.superSet(N,this,"width",t),this._setCellChanged())}),n(0,s,"repeatY",function(){return this._repeatY>0?this._repeatY:this._repeatY2>0?this._repeatY2:1},function(t){this._repeatY=t,this._setCellChanged()}),n(0,s,"spaceX",function(){return this._spaceX},function(t){this._spaceX=t,this._setCellChanged()}),n(0,s,"spaceY",function(){return this._spaceY},function(t){this._spaceY=t,this._setCellChanged()}),n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this._selectedIndex=t,this.changeSelectStatus(),this.event("change"),this.selectHandler&&this.selectHandler.runWith(t),this.startIndex=this._startIndex)}),n(0,s,"selectedItem",function(){return-1!=this._selectedIndex?this._array[this._selectedIndex]:null},function(t){this.selectedIndex=this._array.indexOf(t)}),n(0,s,"length",function(){return this._array?this._array.length:0}),n(0,s,"selection",function(){return this.getCell(this._selectedIndex)},function(t){this.selectedIndex=this._startIndex+this._cells.indexOf(t)}),n(0,s,"startIndex",function(){return this._startIndex},function(t){this._startIndex=t>0?t:0,this.callLater(this.renderItems)}),n(0,s,"array",function(){return this._array},function(t){this.runCallLater(this.changeCells),this._array=t||[];var i=this._array.length;if(this.totalPage=Math.ceil(i/(this.repeatX*this.repeatY)),this._selectedIndex=this._selectedIndex<i?this._selectedIndex:i-1,this.startIndex=this._startIndex,this._scrollBar){this._scrollBar.stopScroll();var e=this._isVertical?this.repeatX:this.repeatY,s=this._isVertical?this.repeatY:this.repeatX,h=Math.ceil(i/e);(this._cellOffset>0?this.totalPage+1:this.totalPage)>1?(this._scrollBar.scrollSize=this._cellSize,this._scrollBar.thumbPercent=s/h,this._scrollBar.setScroll(0,(h-s)*this._cellSize+this._cellOffset,this._scrollBar.value),this._scrollBar.target=this._content):(this._scrollBar.setScroll(0,0,0),this._scrollBar.target=this._content)}}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.array=t:e.superSet(N,this,"dataSource",t)}),n(0,s,"cells",function(){return this.runCallLater(this.changeCells),this._cells}),i}(N),K=function(t){function i(){i.__super.call(this)}return h(i,"laya.ui.HScrollBar",t),i.prototype.initialize=function(){t.prototype.initialize.call(this),this.slider.isVertical=!1},i}(E),Z=function(t){function i(){this._content=null,this._vScrollBar=null,this._hScrollBar=null,this._scrollChanged=!1,i.__super.call(this),this.width=this.height=100}h(i,"laya.ui.Panel",t);var s=i.prototype;return s.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._content&&this._content.destroy(t),this._vScrollBar&&this._vScrollBar.destroy(t),this._hScrollBar&&this._hScrollBar.destroy(t),this._vScrollBar=null,this._hScrollBar=null,this._content=null},s.destroyChildren=function(){this._content.destroyChildren()},s.createChildren=function(){laya.display.Node.prototype.addChild.call(this,this._content=new N)},s.addChild=function(t){return t.on("resize",this,this.onResize),this._setScrollChanged(),this._content.addChild(t)},s.onResize=function(){this._setScrollChanged()},s.addChildAt=function(t,i){return t.on("resize",this,this.onResize),this._setScrollChanged(),this._content.addChildAt(t,i)},s.removeChild=function(t){return t.off("resize",this,this.onResize),this._setScrollChanged(),this._content.removeChild(t)},s.removeChildAt=function(t){return this.getChildAt(t).off("resize",this,this.onResize),this._setScrollChanged(),this._content.removeChildAt(t)},s.removeChildren=function(t,i){void 0===t&&(t=0),void 0===i&&(i=2147483647);for(var e=this._content.numChildren-1;e>-1;e--)this._content.removeChildAt(e);return this._setScrollChanged(),this},s.getChildAt=function(t){return this._content.getChildAt(t)},s.getChildByName=function(t){return this._content.getChildByName(t)},s.getChildIndex=function(t){return this._content.getChildIndex(t)},s.changeScroll=function(){this._scrollChanged=!1;var t=this.contentWidth||1,i=this.contentHeight||1,e=this._vScrollBar,s=this._hScrollBar,h=e&&i>this._height,n=s&&t>this._width,o=h?this._width-e.width:this._width,r=n?this._height-s.height:this._height;e&&(e.x=this._width-e.width,e.y=0,e.height=this._height-(n?s.height:0),e.scrollSize=Math.max(.033*this._height,1),e.thumbPercent=r/i,e.setScroll(0,i-r,e.value)),s&&(s.x=0,s.y=this._height-s.height,s.width=this._width-(h?e.width:0),s.scrollSize=Math.max(.033*this._width,1),s.thumbPercent=o/t,s.setScroll(0,t-o,s.value))},s.changeSize=function(){laya.ui.Component.prototype.changeSize.call(this),this.setContentSize(this._width,this._height)},s.setContentSize=function(t,i){var e=this._content;e.width=t,e.height=i,e.scrollRect||(e.scrollRect=new v),e.scrollRect.setTo(0,0,t,i),e.scrollRect=e.scrollRect},s.onScrollBarChange=function(t){var i=this._content.scrollRect;if(i){var e=Math.round(t.value);t.isVertical?i.y=e:i.x=e,this._content.scrollRect=i}},s.scrollTo=function(t,i){void 0===t&&(t=0),void 0===i&&(i=0),this.vScrollBar&&(this.vScrollBar.value=i),this.hScrollBar&&(this.hScrollBar.value=t)},s.refresh=function(){this.changeScroll()},s.onScrollStart=function(){this._$P.cacheAs||(this._$P.cacheAs=e.superGet(N,this,"cacheAs")),e.superSet(N,this,"cacheAs","none"),this._hScrollBar&&this._hScrollBar.once("end",this,this.onScrollEnd),this._vScrollBar&&this._vScrollBar.once("end",this,this.onScrollEnd)},s.onScrollEnd=function(){e.superSet(N,this,"cacheAs",this._$P.cacheAs)},s._setScrollChanged=function(){this._scrollChanged||(this._scrollChanged=!0,this.callLater(this.changeScroll))},n(0,s,"numChildren",function(){return this._content.numChildren}),n(0,s,"hScrollBarSkin",function(){return this._hScrollBar?this._hScrollBar.skin:null},function(t){null==this._hScrollBar&&(laya.display.Node.prototype.addChild.call(this,this._hScrollBar=new K),this._hScrollBar.on("change",this,this.onScrollBarChange,[this._hScrollBar]),this._hScrollBar.target=this._content,this._setScrollChanged()),this._hScrollBar.skin=t}),n(0,s,"contentWidth",function(){for(var t=0,i=this._content.numChildren-1;i>-1;i--){var e=this._content.getChildAt(i);t=Math.max(e.x+e.width*e.scaleX,t)}return t}),n(0,s,"contentHeight",function(){for(var t=0,i=this._content.numChildren-1;i>-1;i--){var e=this._content.getChildAt(i);t=Math.max(e.y+e.height*e.scaleY,t)}return t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(N,this,"width",t),this._setScrollChanged()}),n(0,s,"hScrollBar",function(){return this._hScrollBar}),n(0,s,"content",function(){return this._content}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(N,this,"height",t),this._setScrollChanged()}),n(0,s,"vScrollBarSkin",function(){return this._vScrollBar?this._vScrollBar.skin:null},function(t){null==this._vScrollBar&&(laya.display.Node.prototype.addChild.call(this,this._vScrollBar=new et),this._vScrollBar.on("change",this,this.onScrollBarChange,[this._vScrollBar]),this._vScrollBar.target=this._content,this._setScrollChanged()),this._vScrollBar.skin=t}),n(0,s,"vScrollBar",function(){return this._vScrollBar}),n(0,s,"cacheAs",t.prototype._$get_cacheAs,function(t){e.superSet(N,this,"cacheAs",t),this._$P.cacheAs=null,"none"!==t?(this._hScrollBar&&this._hScrollBar.on("start",this,this.onScrollStart),this._vScrollBar&&this._vScrollBar.on("start",this,this.onScrollStart)):(this._hScrollBar&&this._hScrollBar.off("start",this,this.onScrollStart),this._vScrollBar&&this._vScrollBar.off("start",this,this.onScrollStart))}),i}(N),q=function(t){function i(t){i.__super.call(this,t),this.isVertical=!1}return h(i,"laya.ui.HSlider",V),i}(),J=function(t){function i(t,e){this.selectHandler=null,this._items=null,this._selectedIndex=-1,this._skin=null,this._direction="horizontal",this._space=0,this._labels=null,this._labelColors=null,this._labelFont=null,this._labelStrokeColor=null,this._strokeColors=null,this._labelStroke=NaN,this._labelSize=0,this._labelBold=!1,this._labelPadding=null,this._labelAlign=null,this._stateNum=0,this._labelChanged=!1,i.__super.call(this),this.skin=e,this.labels=t}h(i,"laya.ui.UIGroup",t);var s=i.prototype;return e.imps(s,{"laya.ui.IItem":!0}),s.preinitialize=function(){this.mouseEnabled=!0},s.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._items&&(this._items.length=0),this._items=null,this.selectHandler=null},s.addItem=function(t,i){void 0===i&&(i=!0);var e=t,s=this._items.length;if(e.name="item"+s,this.addChild(e),this.initItems(),i&&s>0){var h=this._items[s-1];"horizontal"==this._direction?e.x=h.x+h.width+this._space:e.y=h.y+h.height+this._space}else i&&(e.x=0,e.y=0);return s},s.delItem=function(t,i){void 0===i&&(i=!0);var e=this._items.indexOf(t);if(-1!=e){var s=t;this.removeChild(s);for(var h=e+1,n=this._items.length;h<n;h++){var o=this._items[h];o.name="item"+(h-1),i&&("horizontal"==this._direction?o.x-=s.width+this._space:o.y-=s.height+this._space)}if(this.initItems(),this._selectedIndex>-1){var r;r=this._selectedIndex<this._items.length?this._selectedIndex:this._selectedIndex-1,this._selectedIndex=-1,this.selectedIndex=r}}},s.initItems=function(){this._items||(this._items=[]),this._items.length=0;for(var t=0;t<1e4;t++){var i=this.getChildByName("item"+t);if(null==i)break;this._items.push(i),i.selected=t===this._selectedIndex,i.clickHandler=p.create(this,this.itemClick,[t],!1)}},s.itemClick=function(t){this.selectedIndex=t},s.setSelect=function(t,i){this._items&&t>-1&&t<this._items.length&&(this._items[t].selected=i)},s.createItem=function(t,i){return null},s.changeLabels=function(){if(this._labelChanged=!1,this._items)for(var t=0,i=0,e=this._items.length;i<e;i++){var s=this._items[i];this._skin&&(s.skin=this._skin),this._labelColors&&(s.labelColors=this._labelColors),this._labelSize&&(s.labelSize=this._labelSize),this._labelStroke&&(s.labelStroke=this._labelStroke),this._labelStrokeColor&&(s.labelStrokeColor=this._labelStrokeColor),this._strokeColors&&(s.strokeColors=this._strokeColors),this._labelBold&&(s.labelBold=this._labelBold),this._labelPadding&&(s.labelPadding=this._labelPadding),this._labelAlign&&(s.labelAlign=this._labelAlign),this._stateNum&&(s.stateNum=this._stateNum),this._labelFont&&(s.labelFont=this._labelFont),"horizontal"===this._direction?(s.y=0,s.x=t,t+=s.width+this._space):(s.x=0,s.y=t,t+=s.height+this._space)}this.changeSize()},s.commitMeasure=function(){this.runCallLater(this.changeLabels)},s._setLabelChanged=function(){this._labelChanged||(this._labelChanged=!0,this.callLater(this.changeLabels))},n(0,s,"labelStrokeColor",function(){return this._labelStrokeColor},function(t){this._labelStrokeColor!=t&&(this._labelStrokeColor=t,this._setLabelChanged())}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._setLabelChanged())}),n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this.setSelect(this._selectedIndex,!1),this._selectedIndex=t,this.setSelect(t,!0),this.event("change"),this.selectHandler&&this.selectHandler.runWith(this._selectedIndex))}),n(0,s,"labels",function(){return this._labels},function(t){if(this._labels!=t){if(this._labels=t,this.removeChildren(),this._setLabelChanged(),this._labels)for(var i=this._labels.split(","),e=0,s=i.length;e<s;e++){var h=this.createItem(this._skin,i[e]);h.name="item"+e,this.addChild(h)}this.initItems()}}),n(0,s,"strokeColors",function(){return this._strokeColors},function(t){this._strokeColors!=t&&(this._strokeColors=t,this._setLabelChanged())}),n(0,s,"labelColors",function(){return this._labelColors},function(t){this._labelColors!=t&&(this._labelColors=t,this._setLabelChanged())}),n(0,s,"labelStroke",function(){return this._labelStroke},function(t){this._labelStroke!=t&&(this._labelStroke=t,this._setLabelChanged())}),n(0,s,"labelSize",function(){return this._labelSize},function(t){this._labelSize!=t&&(this._labelSize=t,this._setLabelChanged())}),n(0,s,"stateNum",function(){return this._stateNum},function(t){this._stateNum!=t&&(this._stateNum=t,this._setLabelChanged())}),n(0,s,"labelBold",function(){return this._labelBold},function(t){this._labelBold!=t&&(this._labelBold=t,this._setLabelChanged())}),n(0,s,"labelFont",function(){return this._labelFont},function(t){this._labelFont!=t&&(this._labelFont=t,this._setLabelChanged())}),n(0,s,"labelPadding",function(){return this._labelPadding},function(t){this._labelPadding!=t&&(this._labelPadding=t,this._setLabelChanged())}),n(0,s,"direction",function(){return this._direction},function(t){this._direction=t,this._setLabelChanged()}),n(0,s,"space",function(){return this._space},function(t){this._space=t,this._setLabelChanged()}),n(0,s,"items",function(){return this._items}),n(0,s,"selection",function(){return this._selectedIndex>-1&&this._selectedIndex<this._items.length?this._items[this._selectedIndex]:null},function(t){this.selectedIndex=this._items.indexOf(t)}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.labels=t.join(","):e.superSet(N,this,"dataSource",t)}),i}(N),Q=function(t){function i(t,e){this._value=null,void 0===e&&(e=""),i.__super.call(this,t,e)}h(i,"laya.ui.Radio",t);var e=i.prototype;return e.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._value=null},e.preinitialize=function(){laya.ui.Component.prototype.preinitialize.call(this),this.toggle=!1,this._autoSize=!1},e.initialize=function(){t.prototype.initialize.call(this),this.createText(),this._text.align="left",this._text.valign="top",this._text.width=0,this.on("click",this,this.onClick)},e.onClick=function(t){this.selected=!0},n(0,e,"value",function(){return null!=this._value?this._value:this.label},function(t){this._value=t}),i}(O),tt=function(t){function i(){this._list=null,this._source=null,this._renderHandler=null,this._spaceLeft=10,this._spaceBottom=0,this._keepStatus=!0,i.__super.call(this),this.width=this.height=200}h(i,"laya.ui.Tree",t);var s=i.prototype;return e.imps(s,{"laya.ui.IRender":!0}),s.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._list&&this._list.destroy(t),this._list=null,this._source=null,this._renderHandler=null},s.createChildren=function(){this.addChild(this._list=new j),this._list.renderHandler=p.create(this,this.renderItem,null,!1),this._list.repeatX=1,this._list.on("change",this,this.onListChange)},s.onListChange=function(t){this.event("change")},s.getArray=function(){var t,i=[];for(var e in this._source)t=this._source[e],this.getParentOpenStatus(t)&&(t.x=this._spaceLeft*this.getDepth(t),i.push(t));return i},s.getDepth=function(t,i){return void 0===i&&(i=0),null==t.nodeParent?i:this.getDepth(t.nodeParent,i+1)},s.getParentOpenStatus=function(t){var i=t.nodeParent;return null==i||!!i.isOpen&&(null==i.nodeParent||this.getParentOpenStatus(i))},s.renderItem=function(t,i){var e=t.dataSource;if(e){t.left=e.x;var s=t.getChildByName("arrow");s&&(e.hasChild?(s.visible=!0,s.index=e.isOpen?1:0,s.tag=i,s.off("click",this,this.onArrowClick),s.on("click",this,this.onArrowClick)):s.visible=!1);var h=t.getChildByName("folder");h&&(2==h.clipY?h.index=e.isDirectory?0:1:h.index=e.isDirectory?e.isOpen?1:0:2),this._renderHandler&&this._renderHandler.runWith([t,i])}},s.onArrowClick=function(t){var i=t.currentTarget.tag;this._list.array[i].isOpen=!this._list.array[i].isOpen,this.event("open"),this._list.array=this.getArray()},s.setItemState=function(t,i){this._list.array[t]&&(this._list.array[t].isOpen=i,this._list.array=this.getArray())},s.fresh=function(){this._list.array=this.getArray(),this.repaint()},s.parseXml=function(t,i,e,s){var h,n=t.childNodes,o=n.length;if(!s){h={};var r,l=t.attributes;for(var a in l){var c=(r=l[a]).nodeName,u=r.nodeValue;h[c]="true"==u||"false"!=u&&u}h.nodeParent=e,o>0&&(h.isDirectory=!0),h.hasChild=o>0,i.push(h)}for(var _=0;_<o;_++){var d=n[_];this.parseXml(d,i,h,!1)}},s.parseOpenStatus=function(t,i){for(var e=0,s=i.length;e<s;e++){var h=i[e];if(h.isDirectory)for(var n=0,o=t.length;n<o;n++){var r=t[n];if(r.isDirectory&&this.isSameParent(r,h)&&h.label==r.label){h.isOpen=r.isOpen;break}}}},s.isSameParent=function(t,i){return null==t.nodeParent&&null==i.nodeParent||null!=t.nodeParent&&null!=i.nodeParent&&(t.nodeParent.label==i.nodeParent.label&&this.isSameParent(t.nodeParent,i.nodeParent))},s.filter=function(t){if(Boolean(t)){var i=[];this.getFilterSource(this._source,i,t),this._list.array=i}else this._list.array=this.getArray()},s.getFilterSource=function(t,i,e){var s;for(var h in e=e.toLocaleLowerCase(),t)!(s=t[h]).isDirectory&&String(s.label).toLowerCase().indexOf(e)>-1&&(s.x=0,i.push(s)),s.child&&s.child.length>0&&this.getFilterSource(s.child,i,e)},n(0,s,"spaceBottom",function(){return this._list.spaceY},function(t){this._list.spaceY=t}),n(0,s,"keepStatus",function(){return this._keepStatus},function(t){this._keepStatus=t}),n(0,s,"itemRender",function(){return this._list.itemRender},function(t){this._list.itemRender=t}),n(0,s,"array",function(){return this._list.array},function(t){this._keepStatus&&this._list.array&&t&&this.parseOpenStatus(this._list.array,t),this._source=t,this._list.array=this.getArray()}),n(0,s,"mouseHandler",function(){return this._list.mouseHandler},function(t){this._list.mouseHandler=t}),n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,e.superSet(N,this,"dataSource",t)}),n(0,s,"source",function(){return this._source}),n(0,s,"scrollBar",function(){return this._list.scrollBar}),n(0,s,"list",function(){return this._list}),n(0,s,"scrollBarSkin",function(){return this._list.vScrollBarSkin},function(t){this._list.vScrollBarSkin=t}),n(0,s,"renderHandler",function(){return this._renderHandler},function(t){this._renderHandler=t}),n(0,s,"selectedIndex",function(){return this._list.selectedIndex},function(t){this._list.selectedIndex=t}),n(0,s,"spaceLeft",function(){return this._spaceLeft},function(t){this._spaceLeft=t}),n(0,s,"selectedItem",function(){return this._list.selectedItem},function(t){this._list.selectedItem=t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(N,this,"width",t),this._list.width=t}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(N,this,"height",t),this._list.height=t}),n(0,s,"xml",null,function(t){var i=[];this.parseXml(t.childNodes[0],i,null,!0),this.array=i}),n(0,s,"selectedPath",function(){return this._list.selectedItem?this._list.selectedItem.path:null}),i}(N),it=function(t){function i(){this._items=null,this._selectedIndex=0,i.__super.call(this),this._setIndexHandler=p.create(this,this.setIndex,null,!1)}h(i,"laya.ui.ViewStack",t);var s=i.prototype;return e.imps(s,{"laya.ui.IItem":!0}),s.setItems=function(t){this.removeChildren();for(var i=0,e=0,s=t.length;e<s;e++){var h=t[e];h&&(h.name="item"+i,this.addChild(h),i++)}this.initItems()},s.addItem=function(t){t.name="item"+this._items.length,this.addChild(t),this.initItems()},s.initItems=function(){this._items=[];for(var t=0;t<1e4;t++){var i=this.getChildByName("item"+t);if(null==i)break;this._items.push(i),i.visible=t==this._selectedIndex}},s.setSelect=function(t,i){this._items&&t>-1&&t<this._items.length&&(this._items[t].visible=i)},s.setIndex=function(t){this.selectedIndex=t},n(0,s,"dataSource",t.prototype._$get_dataSource,function(t){if(this._dataSource=t,"number"==typeof t&&Math.floor(t)==t||"string"==typeof t)this.selectedIndex=parseInt(t);else for(var i in this._dataSource)this.hasOwnProperty(i)&&(this[i]=this._dataSource[i])}),n(0,s,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this.setSelect(this._selectedIndex,!1),this._selectedIndex=t,this.setSelect(this._selectedIndex,!0))}),n(0,s,"selection",function(){return this._selectedIndex>-1&&this._selectedIndex<this._items.length?this._items[this._selectedIndex]:null},function(t){this.selectedIndex=this._items.indexOf(t)}),n(0,s,"items",function(){return this._items}),n(0,s,"setIndexHandler",function(){return this._setIndexHandler},function(t){this._setIndexHandler=t}),i}(N),et=function(t){function i(){i.__super.call(this)}return h(i,"laya.ui.VScrollBar",E),i}(),st=function(t){function i(t){this._bg=null,this._skin=null,i.__super.call(this),void 0===t&&(t=""),this.text=t,this.skin=this.skin}h(i,"laya.ui.TextInput",t);var s=i.prototype;return s.preinitialize=function(){this.mouseEnabled=!0},s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._bg&&this._bg.destroy(),this._bg=null},s.createChildren=function(){this.addChild(this._tf=new g),this._tf.padding=L.inputLabelPadding,this._tf.on("input",this,this._onInput),this._tf.on("enter",this,this._onEnter),this._tf.on("blur",this,this._onBlur),this._tf.on("focus",this,this._onFocus)},s._onFocus=function(){this.event("focus",this)},s._onBlur=function(){this.event("blur",this)},s._onInput=function(){this.event("input",this)},s._onEnter=function(){this.event("enter",this)},s.initialize=function(){this.width=128,this.height=22},s.select=function(){this._tf.select()},s.setSelection=function(t,i){this._tf.setSelection(t,i)},n(0,s,"text",t.prototype._$get_text,function(t){this._tf.text!=t&&(t+="",this._tf.text=t,this.event("change"))}),n(0,s,"bg",function(){return this._bg},function(t){this.graphics=this._bg=t}),n(0,s,"inputElementYAdjuster",function(){return this._tf.inputElementYAdjuster},function(t){this._tf.inputElementYAdjuster=t}),n(0,s,"multiline",function(){return this._tf.multiline},function(t){this._tf.multiline=t}),n(0,s,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._bg||(this.graphics=this._bg=new T),this._bg.source=m.getRes(this._skin),this._width&&(this._bg.width=this._width),this._height&&(this._bg.height=this._height))}),n(0,s,"sizeGrid",function(){return this._bg&&this._bg.sizeGrid?this._bg.sizeGrid.join(","):null},function(t){this._bg||(this.graphics=this._bg=new T),this._bg.sizeGrid=M.fillArray(L.defaultSizeGrid,t,Number)}),n(0,s,"inputElementXAdjuster",function(){return this._tf.inputElementXAdjuster},function(t){this._tf.inputElementXAdjuster=t}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(G,this,"width",t),this._bg&&(this._bg.width=t)}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(G,this,"height",t),this._bg&&(this._bg.height=t)}),n(0,s,"editable",function(){return this._tf.editable},function(t){this._tf.editable=t}),n(0,s,"restrict",function(){return this._tf.restrict},function(t){this._tf.restrict=t}),n(0,s,"prompt",function(){return this._tf.prompt},function(t){this._tf.prompt=t}),n(0,s,"promptColor",function(){return this._tf.promptColor},function(t){this._tf.promptColor=t}),n(0,s,"maxChars",function(){return this._tf.maxChars},function(t){this._tf.maxChars=t}),n(0,s,"focus",function(){return this._tf.focus},function(t){this._tf.focus=t}),n(0,s,"type",function(){return this._tf.type},function(t){this._tf.type=t}),n(0,s,"asPassword",function(){return this._tf.asPassword},function(t){this._tf.asPassword=t}),i}(G),ht=function(t){function i(){i.__super.call(this)}return h(i,"laya.ui.VSlider",V),i}(),nt=function(t){function i(){this.popupCenter=!0,this.closeHandler=null,this.popupEffect=null,this.closeEffect=null,this.group=null,this.isModal=!1,this._dragArea=null,i.__super.call(this)}h(i,"laya.ui.Dialog",t);var s=i.prototype;return s.initialize=function(){this.popupEffect=i.manager.popupEffectHandler,this.closeEffect=i.manager.closeEffectHandler,this._dealDragArea(),this.on("click",this,this._onClick)},s._dealDragArea=function(){var t=this.getChildByName("drag");t&&(this.dragArea=t.x+","+t.y+","+t.width+","+t.height,t.removeSelf())},s._onClick=function(t){var i=t.target;if(i)switch(i.name){case"close":case"cancel":case"sure":case"no":case"ok":case"yes":this.close(i.name)}},s.show=function(t,i){void 0===t&&(t=!1),void 0===i&&(i=!0),this._open(!1,t,i)},s.popup=function(t,i){void 0===t&&(t=!1),void 0===i&&(i=!0),this._open(!0,t,i)},s._open=function(t,e,s){i.manager.lock(!1),this.isModal=t,i.manager.open(this,e,s)},s.onOpened=function(){},s.close=function(t,e){void 0===e&&(e=!0),i.manager.close(this,t,e)},s.onClosed=function(t){},s._onMouseDown=function(t){var i=this.getMousePoint();this._dragArea.contains(i.x,i.y)?this.startDrag():this.stopDrag()},n(0,s,"dragArea",function(){return this._dragArea?this._dragArea.toString():null},function(t){if(t){var i=M.fillArray([0,0,0,0],t,Number);this._dragArea=new v(i[0],i[1],i[2],i[3]),this.on("mousedown",this,this._onMouseDown)}else this._dragArea=null,this.off("mousedown",this,this._onMouseDown)}),n(0,s,"isPopup",function(){return null!=this.parent}),n(0,s,"zOrder",t.prototype._$get_zOrder,function(t){e.superSet(W,this,"zOrder",t),i.manager._checkMask()}),n(1,i,"manager",function(){return i._manager=i._manager||new H},function(t){i._manager=t}),i.setLockView=function(t){i.manager.setLockView(t)},i.lock=function(t){i.manager.lock(t)},i.closeAll=function(){i.manager.closeAll()},i.getDialogsByGroup=function(t){return i.manager.getDialogsByGroup(t)},i.closeByGroup=function(t){return i.manager.closeByGroup(t)},i.CLOSE="close",i.CANCEL="cancel",i.SURE="sure",i.NO="no",i.OK="ok",i.YES="yes",i._manager=null,i}(W),ot=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.HBox",t);var s=i.prototype;return s.sortItem=function(t){t&&t.sort(function(t,i){return t.x-i.x})},s.changeItems=function(){this._itemChanged=!1;for(var t=[],i=0,e=0,s=this.numChildren;e<s;e++){var h=this.getChildAt(e);h&&h.layoutEnabled&&(t.push(h),i=this._height?this._height:Math.max(i,h.height*h.scaleY))}this.sortItem(t);var n=0;for(e=0,s=t.length;e<s;e++)(h=t[e]).x=n,n+=h.width*h.scaleX+this._space,"top"==this._align?h.y=0:"middle"==this._align?h.y=.5*(i-h.height*h.scaleY):"bottom"==this._align&&(h.y=i-h.height*h.scaleY);this.changeSize()},n(0,s,"height",t.prototype._$get_height,function(t){this._height!=t&&(e.superSet(F,this,"height",t),this.callLater(this.changeItems))}),i.NONE="none",i.TOP="top",i.MIDDLE="middle",i.BOTTOM="bottom",i}(F),rt=function(t){function i(){i.__super.call(this)}h(i,"laya.ui.VBox",t);var s=i.prototype;return s.changeItems=function(){this._itemChanged=!1;for(var t=[],i=0,e=0,s=this.numChildren;e<s;e++){var h=this.getChildAt(e);h&&h.layoutEnabled&&(t.push(h),i=this._width?this._width:Math.max(i,h.width*h.scaleX))}this.sortItem(t);var n=0;for(e=0,s=t.length;e<s;e++)(h=t[e]).y=n,n+=h.height*h.scaleY+this._space,"left"==this._align?h.x=0:"center"==this._align?h.x=.5*(i-h.width*h.scaleX):"right"==this._align&&(h.x=i-h.width*h.scaleX);this.changeSize()},n(0,s,"width",t.prototype._$get_width,function(t){this._width!=t&&(e.superSet(F,this,"width",t),this.callLater(this.changeItems))}),i.NONE="none",i.LEFT="left",i.CENTER="center",i.RIGHT="right",i}(F),lt=function(t){function i(){i.__super.call(this)}return h(i,"laya.ui.RadioGroup",J),i.prototype.createItem=function(t,i){return new Q(t,i)},i}(),at=function(t){function i(){i.__super.call(this)}return h(i,"laya.ui.Tab",J),i.prototype.createItem=function(t,i){return new O(t,i)},i}(),ct=function(t){function i(t){this._vScrollBar=null,this._hScrollBar=null,void 0===t&&(t=""),i.__super.call(this,t)}h(i,"laya.ui.TextArea",t);var s=i.prototype;return s.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this._vScrollBar&&this._vScrollBar.destroy(),this._hScrollBar&&this._hScrollBar.destroy(),this._vScrollBar=null,this._hScrollBar=null},s.initialize=function(){this.width=180,this.height=150,this._tf.wordWrap=!0,this.multiline=!0},s.onVBarChanged=function(t){this._tf.scrollY!=this._vScrollBar.value&&(this._tf.scrollY=this._vScrollBar.value)},s.onHBarChanged=function(t){this._tf.scrollX!=this._hScrollBar.value&&(this._tf.scrollX=this._hScrollBar.value)},s.changeScroll=function(){var t=this._vScrollBar&&this._tf.maxScrollY>0,i=this._hScrollBar&&this._tf.maxScrollX>0,e=t?this._width-this._vScrollBar.width:this._width,s=i?this._height-this._hScrollBar.height:this._height,h=this._tf.padding||L.labelPadding;this._tf.width=e,this._tf.height=s,this._vScrollBar&&(this._vScrollBar.x=this._width-this._vScrollBar.width-h[2],this._vScrollBar.y=h[1],this._vScrollBar.height=this._height-(i?this._hScrollBar.height:0)-h[1]-h[3],this._vScrollBar.scrollSize=1,this._vScrollBar.thumbPercent=s/Math.max(this._tf.textHeight,s),this._vScrollBar.setScroll(1,this._tf.maxScrollY,this._tf.scrollY),this._vScrollBar.visible=t),this._hScrollBar&&(this._hScrollBar.x=h[0],this._hScrollBar.y=this._height-this._hScrollBar.height-h[3],this._hScrollBar.width=this._width-(t?this._vScrollBar.width:0)-h[0]-h[2],this._hScrollBar.scrollSize=Math.max(.033*e,1),this._hScrollBar.thumbPercent=e/Math.max(this._tf.textWidth,e),this._hScrollBar.setScroll(0,this.maxScrollX,this.scrollX),this._hScrollBar.visible=i)},s.scrollTo=function(t){this.commitMeasure(),this._tf.scrollY=t},n(0,s,"scrollY",function(){return this._tf.scrollY}),n(0,s,"width",t.prototype._$get_width,function(t){e.superSet(st,this,"width",t),this.callLater(this.changeScroll)}),n(0,s,"hScrollBar",function(){return this._hScrollBar}),n(0,s,"height",t.prototype._$get_height,function(t){e.superSet(st,this,"height",t),this.callLater(this.changeScroll)}),n(0,s,"maxScrollX",function(){return this._tf.maxScrollX}),n(0,s,"vScrollBarSkin",function(){return this._vScrollBar?this._vScrollBar.skin:null},function(t){null==this._vScrollBar&&(this.addChild(this._vScrollBar=new et),this._vScrollBar.on("change",this,this.onVBarChanged),this._vScrollBar.target=this._tf,this.callLater(this.changeScroll)),this._vScrollBar.skin=t}),n(0,s,"hScrollBarSkin",function(){return this._hScrollBar?this._hScrollBar.skin:null},function(t){null==this._hScrollBar&&(this.addChild(this._hScrollBar=new K),this._hScrollBar.on("change",this,this.onHBarChanged),this._hScrollBar.mouseWheelEnable=!1,this._hScrollBar.target=this._tf,this.callLater(this.changeScroll)),this._hScrollBar.skin=t}),n(0,s,"vScrollBar",function(){return this._vScrollBar}),n(0,s,"maxScrollY",function(){return this._tf.maxScrollY}),n(0,s,"scrollX",function(){return this._tf.scrollX}),i}(st);!function(t){function i(){this._uiView=null,this.isCloseOther=!1,i.__super.call(this)}h(i,"laya.ui.AsynDialog",nt);var e=i.prototype;e.createView=function(t){this._uiView=t},e._open=function(t,i,e){this.isModal=t,this.isCloseOther=i,nt.manager.lock(!0),this._uiView?this.onCreated():this.onOpen()},e.onCreated=function(){this.createUI(),this.onOpen()},e.createUI=function(){laya.ui.View.prototype.createView.call(this,this._uiView),this._uiView=null,this._dealDragArea()},e.onOpen=function(){nt.manager.open(this,this.isCloseOther),nt.manager.lock(!1)},e.close=function(t,i){void 0===i&&(i=!0),nt.manager.close(this),this.onClose()},e.onClose=function(){},e.destroy=function(t){void 0===t&&(t=!0),laya.ui.View.prototype.destroy.call(this,t),this._uiView=null,this.onDestroy()},e.onDestroy=function(){}}();e.__init([W])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,i){"use strict";for(var e in Object.defineProperty(i,"__esModule",{value:!0}),Laya){var s=Laya[e];s&&s.__isclass&&(i[e]=s)}});

//tiledMap.js
!function(t,i,e){e.un,e.uns,e.static;var r=e.class,h=e.getset,s=(e.__newvec,laya.utils.Browser),a=laya.resource.HTMLCanvas,o=(laya.utils.Handler,laya.net.Loader),n=laya.maths.Point,l=laya.maths.Rectangle,_=laya.renders.Render,p=laya.renders.RenderContext,c=laya.display.Sprite,m=laya.resource.Texture,d=function(){var t,i,s;function n(){this._jsonData=null,this._tileTexSetArr=[],this._texArray=[],this._x=0,this._y=0,this._width=0,this._height=0,this._mapW=0,this._mapH=0,this._mapTileW=0,this._mapTileH=0,this._mapSprite=null,this._layerArray=[],this._renderLayerArray=[],this._gridArray=[],this._showGridKey=!1,this._totalGridNum=0,this._gridW=0,this._gridH=0,this._gridWidth=450,this._gridHeight=450,this._jsonLoader=null,this._loader=null,this._tileSetArray=[],this._currTileSet=null,this._completeHandler=null,this._index=0,this._animationDic={},this._properties=null,this._tileProperties={},this._tileProperties2={},this._orientation="orthogonal",this._renderOrder="right-down",this._colorArray=["FF","00","33","66"],this._scale=1,this._pivotScaleX=.5,this._pivotScaleY=.5,this._centerX=0,this._centerY=0,this._viewPortX=0,this._viewPortY=0,this._viewPortWidth=0,this._viewPortHeight=0,this._enableLinear=!0,this._resPath=null,this._pathArray=null,this._limitRange=!1,this._fastDirty=!0,this.autoCache=!0,this.autoCacheType="normal",this.enableMergeLayer=!1,this.removeCoveredTile=!1,this.showGridTextureCount=!1,this.antiCrack=!0,this.cacheAllAfterInit=!1,this._rect=new l,this._paddingRect=new l,this._mapRect=new t,this._mapLogicRect=new t,this._mapLastRect=new t,this._mapSprite=new c}r(n,"laya.map.TiledMap");var d=n.prototype;return d.createMap=function(t,i,e,r,h,s,a){void 0===s&&(s=!0),void 0===a&&(a=!1),this._enableLinear=s,this._limitRange=a,this._rect.x=i.x,this._rect.y=i.y,this._rect.width=i.width,this._rect.height=i.height,this._viewPortWidth=i.width/this._scale,this._viewPortHeight=i.height/this._scale,this._completeHandler=e,r?this._paddingRect.copyFrom(r):this._paddingRect.setTo(0,0,0,0),h&&(this._gridWidth=h.x,this._gridHeight=h.y);var n=t.lastIndexOf("/");n>-1?(this._resPath=t.substr(0,n),this._pathArray=this._resPath.split("/")):(this._resPath="",this._pathArray=[]),this._jsonLoader=new o,this._jsonLoader.once("complete",this,this.onJsonComplete),this._jsonLoader.load(t,"json",!1)},d.onJsonComplete=function(t){var e=this._jsonData=t;this._properties=e.properties,this._orientation=e.orientation,this._renderOrder=e.renderorder,this._mapW=e.width,this._mapH=e.height,this._mapTileW=e.tilewidth,this._mapTileH=e.tileheight,this._width=this._mapTileW*this._mapW,this._height=this._mapTileH*this._mapH,"staggered"==this._orientation&&(this._height=(.5+.5*this._mapH)*this._mapTileH),this._mapLastRect.top=this._mapLastRect.bottom=this._mapLastRect.left=this._mapLastRect.right=-1;var r,h,a=e.tilesets,n=0;for(n=0;n<a.length;n++)if(r=a[n],(h=new s).init(r),!h.properties||!h.properties.ignore){this._tileProperties[n]=h.tileproperties,this.addTileProperties(h.tileproperties),this._tileSetArray.push(h);var l=r.tiles;if(l)for(var _ in l){var p=l[_].animation;if(p){var c=new i;this._animationDic[_]=c;for(var m=0;m<p.length;m++){var d=p[m];c.mAniIdArray.push(d.tileid),c.mDurationTimeArray.push(d.duration)}}}}if(this._tileTexSetArr.push(null),this._tileSetArray.length>0){h=this._currTileSet=this._tileSetArray.shift(),this._loader=new o,this._loader.once("complete",this,this.onTextureComplete);var u=this.mergePath(this._resPath,h.image);this._loader.load(u,"image",!1)}},d.mergePath=function(t,i){var e="",r=i.split("/"),h=0,s=0;for(s=r.length-1;s>=0;s--)".."==r[s]&&h++;if(0==h)return e=this._pathArray.length>0?t+"/"+i:i;var a=this._pathArray.length-h;for(a<0&&console.log("[error]path does not exist",this._pathArray,r,t,i),s=0;s<a;s++)0==s?e+=this._pathArray[s]:e=e+"/"+this._pathArray[s];for(s=h;s<r.length;s++)e=e+"/"+r[s];return e},d.onTextureComplete=function(t){this._jsonData;var i=t;_.isWebGL&&!this._enableLinear&&(i.bitmap.minFifter=9728,i.bitmap.magFifter=9728,i.bitmap.enableMerageInAtlas=!1),this._texArray.push(i);for(var e=this._currTileSet,r=e.tilewidth,h=e.tileheight,s=e.imagewidth,a=e.imageheight,o=(e.firstgid,Math.floor((s-e.margin-r)/(r+e.spacing))+1),n=Math.floor((a-e.margin-h)/(h+e.spacing))+1,l=null,p=0;p<n;p++)for(var c=0;c<o;c++)(l=new u).offX=e.titleoffsetX,l.offY=e.titleoffsetY-(h-this._mapTileH),l.texture=m.createFromTexture(i,e.margin+(r+e.spacing)*c,e.margin+(h+e.spacing)*p,r,h),this.antiCrack&&this.adptTexture(l.texture),this._tileTexSetArr.push(l),l.gid=this._tileTexSetArr.length;if(this._tileSetArray.length>0){e=this._currTileSet=this._tileSetArray.shift(),this._loader.once("complete",this,this.onTextureComplete);var d=this.mergePath(this._resPath,e.image);this._loader.load(d,"image",!1)}else this._currTileSet=null,this.initMap()},d.adptTexture=function(t){if(t){var i=t.uv[0],e=t.uv[2],r=t.uv[1],h=t.uv[7],s=1/t.bitmap.width,a=1/t.bitmap.height;t.uv[0]=t.uv[6]=i+s,t.uv[2]=t.uv[4]=e-s,t.uv[1]=t.uv[3]=r+a,t.uv[5]=t.uv[7]=h-a}},d.initMap=function(){var t=0,i=0;for(var r in this._animationDic){var h=this.getTexture(parseInt(r)+1),s=this._animationDic[r];if(s.mAniIdArray.length>0){for(h.textureArray=[],h.durationTimeArray=s.mDurationTimeArray,h.isAnimation=!0,h.animationTotalTime=0,t=0,i=h.durationTimeArray.length;t<i;t++)h.animationTotalTime+=h.durationTimeArray[t];for(t=0,i=s.mAniIdArray.length;t<i;t++){var a=this.getTexture(s.mAniIdArray[t]+1);h.textureArray.push(a)}}}for(this._gridWidth=Math.floor(this._gridWidth/this._mapTileW)*this._mapTileW,this._gridHeight=Math.floor(this._gridHeight/this._mapTileH)*this._mapTileH,this._gridWidth<this._mapTileW&&(this._gridWidth=this._mapTileW),this._gridHeight<this._mapTileH&&(this._gridHeight=this._mapTileH),this._gridW=Math.ceil(this._width/this._gridWidth),this._gridH=Math.ceil(this._height/this._gridHeight),this._totalGridNum=this._gridW*this._gridH,t=0;t<this._gridH;t++){var o=[];this._gridArray.push(o);for(var n=0;n<this._gridW;n++)o.push(null)}for(var l,_,p,c=this._jsonData.layers,m=!0,d=0;d<c.length;d++){var u=c[d];if(1==u.visible){var g=new f;g.init(u,this),this.enableMergeLayer?(l=g.getLayerProperties("layer"),(m=m||!p||l!=_)?(m=!1,g.tarLayer=g,p=g,this._mapSprite.addChild(g),this._renderLayerArray.push(g)):g.tarLayer=p,_=l):(this._mapSprite.addChild(g),this._renderLayerArray.push(g)),this._layerArray.push(g)}}this.removeCoveredTile&&this.adptTiledMapData(),this.cacheAllAfterInit&&this.cacheAllGrid(),this.moveViewPort(this._rect.x,this._rect.y),e.stage.addChild(this.mapSprite()),null!=this._completeHandler&&this._completeHandler.run()},d.addTileProperties=function(t){var i;for(i in t)this._tileProperties2[i]=t[i]},d.getTileUserData=function(t,i,e){return this._tileProperties2&&this._tileProperties2[t]&&i in this._tileProperties2[t]?this._tileProperties2[t][i]:e},d.adptTiledMapData=function(){var t,i=0,e={};for(i=this._layerArray.length-1;i>=0;i--)(t=this._layerArray[i]._mapData)&&(this.removeCoverd(t,e),this.collectCovers(t,e,i))},d.removeCoverd=function(t,i){var e,r=0;for(e=t.length,r=0;r<e;r++)i[r]&&(t[r]=0)},d.collectCovers=function(t,i,e){var r,h=0;r=t.length;var s=0;for(h=0;h<r;h++)(s=t[h])>0&&this.getTileUserData(s-1,"type",0)>0&&(i[h]=s)},d.getTexture=function(t){return t<this._tileTexSetArr.length?this._tileTexSetArr[t]:null},d.getMapProperties=function(t){return this._properties?this._properties[t]:null},d.getTileProperties=function(t,i,e){return this._tileProperties[t]&&this._tileProperties[t][i]?this._tileProperties[t][i][e]:null},d.getSprite=function(t,i,e){if(0<this._tileTexSetArr.length){var r=new g;r.initData(this,!0),r.size(i,e);var h=this._tileTexSetArr[t];if(null!=h&&null!=h.texture){if(h.isAnimation){var s=new y;this._index++,s.setTileTextureSet(this._index.toString(),h),r.addAniSprite(s),r.addChild(s)}else r.graphics.drawTexture(h.texture,0,0,i,e);r.drawImageNum++}return r}return null},d.setViewPortPivotByScale=function(t,i){this._pivotScaleX=t,this._pivotScaleY=i,this._fastDirty=!0},d.moveViewPort=function(t,i){if(this._x=-t,this._y=-i,this._fastDirty)this._rect.x=t,this._rect.y=i,this.updateViewPort();else{var e,r;e=t-this._rect.x,r=i-this._rect.y,this._rect.x=t,this._rect.y=i,this.updateViewPortFast(e,r)}},d.changeViewPort=function(t,i,e,r){t==this._rect.x&&i==this._rect.y&&e==this._rect.width&&r==this._rect.height||(e!=this._rect.width||r!=this._rect.height?(this._fastDirty=!0,this._x=-t,this._y=-i,this._rect.x=t,this._rect.y=i,this._rect.width=e,this._rect.height=r,this._viewPortWidth=e/this._scale,this._viewPortHeight=r/this._scale,this.updateViewPort()):this.moveViewPort(t,i))},d.changeViewPortBySize=function(t,i,e){return null==e&&(e=new l),this._centerX=this._rect.x+this._rect.width*this._pivotScaleX,this._centerY=this._rect.y+this._rect.height*this._pivotScaleY,e.x=this._centerX-t*this._pivotScaleX,e.y=this._centerY-i*this._pivotScaleY,e.width=t,e.height=i,this.changeViewPort(e.x,e.y,e.width,e.height),e},d.updateViewPortFast=function(t,i){this._centerX+=t,this._centerY+=i,this._viewPortX+=t,this._viewPortY+=i;var e=!1,r=i/this._gridHeight,h=t/this._gridWidth;this._mapLogicRect.top+=r,this._mapLogicRect.bottom+=r,this._mapLogicRect.left+=h,this._mapLogicRect.right+=h,this._mapRect.top=0|this._mapLogicRect.top,this._mapRect.bottom=0|this._mapLogicRect.bottom,this._mapRect.left=0|this._mapLogicRect.left,this._mapRect.right=0|this._mapLogicRect.right,this._mapRect.top==this._mapLastRect.top&&this._mapRect.bottom==this._mapLastRect.bottom&&this._mapRect.left==this._mapLastRect.left&&this._mapRect.right==this._mapLastRect.right||(this.clipViewPort(),this._mapLastRect.top=this._mapRect.top,this._mapLastRect.bottom=this._mapRect.bottom,this._mapLastRect.left=this._mapRect.left,this._mapLastRect.right=this._mapRect.right,e=!0),(e=e||0!=t||0!=i)&&this.updateMapLayersPos()},d.updateMapLayersPos=function(){for(var t,i=this._renderLayerArray.length,e=0;e<i;e++)(t=this._renderLayerArray[e])._gridSpriteArray.length>0&&(t.updateAloneObject(),t.pos(-this._viewPortX,-this._viewPortY))},d.updateViewPort=function(){this._fastDirty=!1;var t=this._rect.width*this._pivotScaleX,i=this._rect.height*this._pivotScaleY;this._centerX=this._rect.x+t,this._centerY=this._rect.y+i;var e=!1,r=this._viewPortX;(this._viewPortX=this._centerX-t/this._scale,r!=this._viewPortX?e=!0:r=this._viewPortY,this._viewPortY=this._centerY-i/this._scale,e||r==this._viewPortY||(e=!0),this._limitRange)&&(this._viewPortX+this._viewPortWidth>this._width&&(this._viewPortX=this._width-this._viewPortWidth),this._viewPortY+this._viewPortHeight>this._height&&(this._viewPortY=this._height-this._viewPortHeight),this._viewPortX<0&&(this._viewPortX=0),this._viewPortY<0&&(this._viewPortY=0));var h=this._paddingRect;this._mapLogicRect.top=(this._viewPortY-h.y)/this._gridHeight,this._mapLogicRect.bottom=(this._viewPortY+this._viewPortHeight+h.height+h.y)/this._gridHeight,this._mapLogicRect.left=(this._viewPortX-h.x)/this._gridWidth,this._mapLogicRect.right=(this._viewPortX+this._viewPortWidth+h.width+h.x)/this._gridWidth,this._mapRect.top=0|this._mapLogicRect.top,this._mapRect.bottom=0|this._mapLogicRect.bottom,this._mapRect.left=0|this._mapLogicRect.left,this._mapRect.right=0|this._mapLogicRect.right,this._mapRect.top==this._mapLastRect.top&&this._mapRect.bottom==this._mapLastRect.bottom&&this._mapRect.left==this._mapLastRect.left&&this._mapRect.right==this._mapLastRect.right||(this.clipViewPort(),this._mapLastRect.top=this._mapRect.top,this._mapLastRect.bottom=this._mapRect.bottom,this._mapLastRect.left=this._mapRect.left,this._mapLastRect.right=this._mapRect.right,e=!0),e&&this.updateMapLayersPos()},d.clipViewPort=function(){var t=0,i=0,e=0,r=0;if(this._mapRect.left>this._mapLastRect.left){if((t=this._mapRect.left-this._mapLastRect.left)>0)for(r=this._mapLastRect.left;r<this._mapLastRect.left+t;r++)for(e=this._mapLastRect.top;e<=this._mapLastRect.bottom;e++)this.hideGrid(r,e)}else if((i=Math.min(this._mapLastRect.left,this._mapRect.right+1)-this._mapRect.left)>0)for(r=this._mapRect.left;r<this._mapRect.left+i;r++)for(e=this._mapRect.top;e<=this._mapRect.bottom;e++)this.showGrid(r,e);if(this._mapRect.right>this._mapLastRect.right){if((i=this._mapRect.right-this._mapLastRect.right)>0)for(r=Math.max(this._mapLastRect.right+1,this._mapRect.left);r<=this._mapLastRect.right+i;r++)for(e=this._mapRect.top;e<=this._mapRect.bottom;e++)this.showGrid(r,e)}else if((t=this._mapLastRect.right-this._mapRect.right)>0)for(r=this._mapRect.right+1;r<=this._mapRect.right+t;r++)for(e=this._mapLastRect.top;e<=this._mapLastRect.bottom;e++)this.hideGrid(r,e);if(this._mapRect.top>this._mapLastRect.top){if((t=this._mapRect.top-this._mapLastRect.top)>0)for(e=this._mapLastRect.top;e<this._mapLastRect.top+t;e++)for(r=this._mapLastRect.left;r<=this._mapLastRect.right;r++)this.hideGrid(r,e)}else if((i=Math.min(this._mapLastRect.top,this._mapRect.bottom+1)-this._mapRect.top)>0)for(e=this._mapRect.top;e<this._mapRect.top+i;e++)for(r=this._mapRect.left;r<=this._mapRect.right;r++)this.showGrid(r,e);if(this._mapRect.bottom>this._mapLastRect.bottom){if((i=this._mapRect.bottom-this._mapLastRect.bottom)>0)for(e=Math.max(this._mapLastRect.bottom+1,this._mapRect.top);e<=this._mapLastRect.bottom+i;e++)for(r=this._mapRect.left;r<=this._mapRect.right;r++)this.showGrid(r,e)}else if((t=this._mapLastRect.bottom-this._mapRect.bottom)>0)for(e=this._mapRect.bottom+1;e<=this._mapRect.bottom+t;e++)for(r=this._mapLastRect.left;r<=this._mapLastRect.right;r++)this.hideGrid(r,e)},d.showGrid=function(t,i){if(!(t<0||t>=this._gridW||i<0||i>=this._gridH)){var e,r=0,h=this._gridArray[i][t];if(null==h)h=this.getGridArray(t,i);else for(r=0;r<h.length&&r<this._layerArray.length;r++){this._layerArray[r]&&h[r]&&0==(e=h[r]).visible&&e.drawImageNum>0&&e.show()}}},d.cacheAllGrid=function(){var t,i=0,e=0;for(i=0;i<this._gridW;i++)for(e=0;e<this._gridH;e++)t=this.getGridArray(i,e),this.cacheGridsArray(t)},d.cacheGridsArray=function(t){var i;n._tempContext||(n._tempContext=new p(1,1,a.create("AUTO"))),(i=n._tempContext.canvas).context.asBitmap=!1;var e,r,h=0;for(e=t.length,h=0;h<e;h++)r=t[h],i.clear(),i.size(1,1),r.render(n._tempContext,0,0),r.hide();i.clear(),i.size(1,1)},d.getGridArray=function(t,i){var e,r=0,h=0,s=this._gridArray[i][t];if(null==s){s=this._gridArray[i][t]=[];var a=0,o=0,n=0,l=0,_=this._gridWidth,p=this._gridHeight;switch(this.orientation){case"isometric":a=Math.floor(t*_),o=Math.floor(t*_+_),n=Math.floor(i*p),l=Math.floor(i*p+p);var c=0,m=0,d=0,u=0;break;case"staggered":a=Math.floor(t*_/this._mapTileW),o=Math.floor((t*_+_)/this._mapTileW),n=Math.floor(i*p/(this._mapTileH/2)),l=Math.floor((i*p+p)/(this._mapTileH/2));break;case"orthogonal":a=Math.floor(t*_/this._mapTileW),o=Math.floor((t*_+_)/this._mapTileW),n=Math.floor(i*p/this._mapTileH),l=Math.floor((i*p+p)/this._mapTileH);break;case"hexagonal":var g=2*this._mapTileH/3;a=Math.floor(t*_/this._mapTileW),o=Math.ceil((t*_+_)/this._mapTileW),n=Math.floor(i*p/g),l=Math.ceil((i*p+p)/g)}for(var f,y,v=null,w=0;w<this._layerArray.length;w++){var A;switch(v=this._layerArray[w],this.enableMergeLayer?(v.tarLayer!=y&&(f=null,y=v.tarLayer),f||(f=y.getDrawSprite(t,i),s.push(f)),e=f):(e=v.getDrawSprite(t,i),s.push(e)),this._showGridKey&&(A="#",A+=this._colorArray[Math.floor(Math.random()*this._colorArray.length)],A+=this._colorArray[Math.floor(Math.random()*this._colorArray.length)],A+=this._colorArray[Math.floor(Math.random()*this._colorArray.length)]),this.orientation){case"isometric":var T=this.tileHeight/2,R=this.tileWidth/2,x=this._width/2;d=Math.floor(n/T),u=Math.floor(l/T),c=this._mapW+Math.floor((a-x)/R),m=this._mapW+Math.floor((o-x)/R);this._mapW;var P=2*this._mapH;for(d<0&&(d=0),d>=P&&(d=P-1),u<0&&(l=0),u>=P&&(u=P-1),e.zOrder=this._totalGridNum*w+i*this._gridW+t,r=d;r<u;r++)for(h=0;h<=r;h++){var H=r-h,L=h,b=H-L+this._mapW;b>c&&b<=m&&v.drawTileTexture(e,H,L)&&e.drawImageNum++}break;case"staggered":for(e.zOrder=w*this._totalGridNum+i*this._gridW+t,r=n;r<l;r++)for(h=a;h<o;h++)v.drawTileTexture(e,h,r)&&e.drawImageNum++;break;case"orthogonal":case"hexagonal":switch(this._renderOrder){case"right-down":for(e.zOrder=w*this._totalGridNum+i*this._gridW+t,r=n;r<l;r++)for(h=a;h<o;h++)v.drawTileTexture(e,h,r)&&e.drawImageNum++;break;case"right-up":for(e.zOrder=w*this._totalGridNum+(this._gridH-1-i)*this._gridW+t,r=l-1;r>=n;r--)for(h=a;h<o;h++)v.drawTileTexture(e,h,r)&&e.drawImageNum++;break;case"left-down":for(e.zOrder=w*this._totalGridNum+i*this._gridW+(this._gridW-1-t),r=n;r<l;r++)for(h=o-1;h>=a;h--)v.drawTileTexture(e,h,r)&&e.drawImageNum++;break;case"left-up":for(e.zOrder=w*this._totalGridNum+(this._gridH-1-i)*this._gridW+(this._gridW-1-t),r=l-1;r>=n;r--)for(h=o-1;h>=a;h--)v.drawTileTexture(e,h,r)&&e.drawImageNum++}}e.isHaveAnimation||(e.autoSize=!0,this.autoCache&&(e.cacheAs=this.autoCacheType),e.autoSize=!1),this.enableMergeLayer?f&&f.drawImageNum>0&&y&&(y.addChild(f),f.visible=!1,f.show()):(e.drawImageNum>0&&(v.addChild(e),e.visible=!1,e.show()),this._showGridKey&&e.graphics.drawRect(0,0,_,p,null,A))}this.enableMergeLayer&&this.showGridTextureCount&&f&&f.graphics.fillText(f.drawImageNum+"",20,20,null,"#ff0000","left")}return s},d.hideGrid=function(t,i){if(!(t<0||t>=this._gridW||i<0||i>=this._gridH)){var e=this._gridArray[i][t];if(e)for(var r,h=0;h<e.length;h++)(r=e[h]).drawImageNum>0&&null!=r&&r.hide()}},d.getLayerObject=function(t,i){for(var e=null,r=0;r<this._layerArray.length&&(e=this._layerArray[r]).layerName!=t;r++);return e?e.getObjectByName(i):null},d.destroy=function(){this._orientation="orthogonal",this._jsonData=null;var t,i=0;for(this._gridArray=[],i=0;i<this._tileTexSetArr.length;i++)(t=this._tileTexSetArr[i])&&t.clearAll();for(this._tileTexSetArr=[],i=0;i<this._texArray.length;i++)this._texArray[i].destroy();for(this._texArray=[],this._width=0,this._height=0,this._mapW=0,this._mapH=0,this._mapTileW=0,this._mapTileH=0,this._rect.setTo(0,0,0,0),i=0;i<this._layerArray.length;i++)this._layerArray[i].clearAll();this._layerArray=[],this._renderLayerArray=[],this._mapSprite&&(this._mapSprite.destroy(),this._mapSprite=null),this._jsonLoader=null,this._loader=null;var e=this._animationDic;for(var r in e)delete e[r];for(r in this._properties=null,e=this._tileProperties)delete e[r];this._currTileSet=null,this._completeHandler=null,this._mapRect.clearAll(),this._mapLastRect.clearAll(),this._tileSetArray=[],this._gridWidth=450,this._gridHeight=450,this._gridW=0,this._gridH=0,this._x=0,this._y=0,this._index=0,this._enableLinear=!0,this._resPath=null,this._pathArray=null},d.mapSprite=function(){return this._mapSprite},d.getLayerByName=function(t){for(var i,e=0;e<this._layerArray.length;e++)if(t==(i=this._layerArray[e]).layerName)return i;return null},d.getLayerByIndex=function(t){return t<this._layerArray.length?this._layerArray[t]:null},h(0,d,"orientation",function(){return this._orientation}),h(0,d,"viewPortX",function(){return-this._viewPortX}),h(0,d,"scale",function(){return this._scale},function(t){t<=0||(this._scale=t,this._viewPortWidth=this._rect.width/t,this._viewPortHeight=this._rect.height/t,this._mapSprite.scale(this._scale,this._scale),this.updateViewPort())}),h(0,d,"tileWidth",function(){return this._mapTileW}),h(0,d,"viewPortY",function(){return-this._viewPortY}),h(0,d,"tileHeight",function(){return this._mapTileH}),h(0,d,"width",function(){return this._width}),h(0,d,"numRowsTile",function(){return this._mapH}),h(0,d,"numColumnsTile",function(){return this._mapW}),h(0,d,"height",function(){return this._height}),h(0,d,"viewPortWidth",function(){return this._viewPortWidth}),h(0,d,"viewPortHeight",function(){return this._viewPortHeight}),h(0,d,"x",function(){return this._x}),h(0,d,"y",function(){return this._y}),h(0,d,"gridWidth",function(){return this._gridWidth}),h(0,d,"gridHeight",function(){return this._gridHeight}),h(0,d,"numColumnsGrid",function(){return this._gridW}),h(0,d,"numRowsGrid",function(){return this._gridH}),h(0,d,"renderOrder",function(){return this._renderOrder}),n.ORIENTATION_ORTHOGONAL="orthogonal",n.ORIENTATION_ISOMETRIC="isometric",n.ORIENTATION_STAGGERED="staggered",n.ORIENTATION_HEXAGONAL="hexagonal",n.RENDERORDER_RIGHTDOWN="right-down",n.RENDERORDER_RIGHTUP="right-up",n.RENDERORDER_LEFTDOWN="left-down",n.RENDERORDER_LEFTUP="left-up",n._tempContext=null,n.__init$=function(){t=function(){function t(){this.left=0,this.top=0,this.right=0,this.bottom=0}return r(t,""),t.prototype.clearAll=function(){this.left=this.top=this.right=this.bottom=0},t}(),i=function(){function t(){this.mAniIdArray=[],this.mDurationTimeArray=[],this.mTileTexSetArr=[]}return r(t,""),t}(),s=function(){function t(){this.firstgid=0,this.image="",this.imageheight=0,this.imagewidth=0,this.margin=0,this.name=0,this.properties=null,this.spacing=0,this.tileheight=0,this.tilewidth=0,this.titleoffsetX=0,this.titleoffsetY=0,this.tileproperties=null}return r(t,""),t.prototype.init=function(t){this.firstgid=t.firstgid,this.image=t.image,this.imageheight=t.imageheight,this.imagewidth=t.imagewidth,this.margin=t.margin,this.name=t.name,this.properties=t.properties,this.spacing=t.spacing,this.tileheight=t.tileheight,this.tilewidth=t.tilewidth,this.tileproperties=t.tileproperties;var i=t.tileoffset;i&&(this.titleoffsetX=i.x,this.titleoffsetY=i.y)},t}()},n}(),u=function(){function t(){this.gid=-1,this.texture=null,this.offX=0,this.offY=0,this.textureArray=null,this.durationTimeArray=null,this.animationTotalTime=0,this.isAnimation=!1,this._spriteNum=0,this._aniDic=null,this._frameIndex=0,this._time=0,this._interval=0,this._preFrameTime=0}r(t,"laya.map.TileTexSet");var i=t.prototype;return i.addAniSprite=function(t,i){if(0!=this.animationTotalTime&&(null==this._aniDic&&(this._aniDic={}),0==this._spriteNum&&(e.timer.frameLoop(3,this,this.animate),this._preFrameTime=s.now(),this._frameIndex=0,this._time=0,this._interval=0),this._spriteNum++,this._aniDic[t]=i,this.textureArray&&this._frameIndex<this.textureArray.length)){var r=this.textureArray[this._frameIndex];this.drawTexture(i,r)}},i.animate=function(){if(this.textureArray&&this.textureArray.length>0&&this.durationTimeArray&&this.durationTimeArray.length>0){var t=s.now();this._interval=t-this._preFrameTime,this._preFrameTime=t,this._interval>this.animationTotalTime&&(this._interval=this._interval%this.animationTotalTime),this._time+=this._interval;for(var i=this.durationTimeArray[this._frameIndex];this._time>i;){this._time-=i,this._frameIndex++,(this._frameIndex>=this.durationTimeArray.length||this._frameIndex>=this.textureArray.length)&&(this._frameIndex=0);var e,r=this.textureArray[this._frameIndex];for(var h in this._aniDic)e=this._aniDic[h],this.drawTexture(e,r);i=this.durationTimeArray[this._frameIndex]}}},i.drawTexture=function(t,i){t.graphics.clear(),t.graphics.drawTexture(i.texture,i.offX,i.offY)},i.removeAniSprite=function(t){this._aniDic&&this._aniDic[t]&&(delete this._aniDic[t],this._spriteNum--,0==this._spriteNum&&e.timer.clear(this,this.animate))},i.showDebugInfo=function(){var t=null;return this._spriteNum>0&&(t="TileTextureSet::gid:"+this.gid.toString()+" 动画数:"+this._spriteNum.toString()),t},i.clearAll=function(){this.gid=-1,this.texture&&(this.texture.destroy(),this.texture=null),this.offX=0,this.offY=0,this.textureArray=null,this.durationTimeArray=null,this.isAnimation=!1,this._spriteNum=0,this._aniDic=null,this._frameIndex=0,this._preFrameTime=0,this._time=0,this._interval=0},t}(),g=function(t){function i(){this.relativeX=0,this.relativeY=0,this.isAloneObject=!1,this.isHaveAnimation=!1,this.aniSpriteArray=null,this.drawImageNum=0,this._map=null,i.__super.call(this)}r(i,"laya.map.GridSprite",t);var e=i.prototype;return e.initData=function(t,i){void 0===i&&(i=!1),this._map=t,this.isAloneObject=i},e._setDisplay=function(i){if(!i){var e=this._$P.cacheCanvas;e&&e.ctx&&(e.ctx.canvas.destroy(),e.ctx=null);var r=this._$P._filterCache;r&&(r.destroy(),r.recycle(),this._set$P("_filterCache",null)),this._$P._isHaveGlowFilter&&this._set$P("_isHaveGlowFilter",!1)}t.prototype._setDisplay.call(this,i)},e.addAniSprite=function(t){null==this.aniSpriteArray&&(this.aniSpriteArray=[]),this.aniSpriteArray.push(t)},e.show=function(){if(!this.visible){var t;if(this.visible=!0,!this.isAloneObject)(t=this.parent)&&t.showGridSprite(this);if(!_.isWebGL&&this._map.autoCache&&(this.cacheAs=this._map.autoCacheType),null==this.aniSpriteArray)return;for(var i=0;i<this.aniSpriteArray.length;i++)this.aniSpriteArray[i].show()}},e.hide=function(){if(this.visible){var t;if(this.visible=!1,!this.isAloneObject)(t=this.parent)&&t.hideGridSprite(this);if(!_.isWebGL&&this._map.autoCache&&(this.cacheAs="none"),null==this.aniSpriteArray)return;for(var i=0;i<this.aniSpriteArray.length;i++)this.aniSpriteArray[i].hide()}},e.updatePos=function(){this.isAloneObject?(this._map&&(this.x=this.relativeX,this.y=this.relativeY),this.x<0||this.x>this._map.viewPortWidth||this.y<0||this.y>this._map.viewPortHeight?this.hide():this.show()):this._map&&(this.x=this.relativeX,this.y=this.relativeY)},e.clearAll=function(){if(this._map&&(this._map=null),this.visible=!1,null!=this.aniSpriteArray){for(var t=0;t<this.aniSpriteArray.length;t++)this.aniSpriteArray[t].clearAll();this.destroy(),this.relativeX=0,this.relativeY=0,this.isHaveAnimation=!1,this.aniSpriteArray=null,this.drawImageNum=0}},i}(c),f=function(t){function i(){this._map=null,this._mapData=null,this._tileWidthHalf=0,this._tileHeightHalf=0,this._mapWidthHalf=0,this._mapHeightHalf=0,this._gridSpriteArray=[],this._objDic=null,this._dataDic=null,this._properties=null,this.tarLayer=null,this.layerName=null,this._showGridList=[],this._aloneObjs=[],i.__super.call(this),this._tempMapPos=new n}r(i,"laya.map.MapLayer",t);var e=i.prototype;return e.init=function(t,i){this._map=i,this._mapData=t.data;t.height,t.width;var e=i.tileWidth,r=i.tileHeight;switch(this.layerName=t.name,this._properties=t.properties,this.alpha=t.opacity,this._tileWidthHalf=e/2,this._tileHeightHalf=r/2,this._mapWidthHalf=this._map.width/2-this._tileWidthHalf,this._mapHeightHalf=this._map.height/2,t.type){case"tilelayer":break;case"objectgroup":var h,s=t.objects;s.length>0&&(this._objDic={},this._dataDic={});for(var a=NaN,o=NaN,l=0;l<s.length;l++)if(h=s[l],this._dataDic[h.name]=h,1==h.visible){a=h.width,o=h.height;var _=i.getSprite(h.gid,a,o);if(null!=_){switch(this._map.orientation){case"isometric":this.getScreenPositionByTilePos(h.x/r,h.y/r,n.TEMP),_.pivot(a/2,o/2),_.rotation=h.rotation,_.x=_.relativeX=n.TEMP.x+this._map.viewPortX,_.y=_.relativeY=n.TEMP.y+this._map.viewPortY-o/2;break;case"staggered":case"orthogonal":_.pivot(a/2,o/2),_.rotation=h.rotation,_.x=_.relativeX=h.x+a/2,_.y=_.relativeY=h.y-o/2;break;case"hexagonal":_.x=_.relativeX=h.x,_.y=_.relativeY=h.y}this.addChild(_),this._gridSpriteArray.push(_),_.isAloneObject&&(this._showGridList.push(_),this._aloneObjs.push(_)),this._objDic[h.name]=_}}}},e.getObjectByName=function(t){return this._objDic?this._objDic[t]:null},e.getObjectDataByName=function(t){return this._dataDic?this._dataDic[t]:null},e.getLayerProperties=function(t){return this._properties?this._properties[t]:null},e.getTileData=function(t,i){if(i>=0&&i<this._map.numRowsTile&&t>=0&&t<this._map.numColumnsTile){var e=i*this._map.numColumnsTile+t,r=this._mapData;if(null!=r&&e<r.length)return r[e]}return 0},e.getScreenPositionByTilePos=function(t,i,e){if(e){switch(this._map.orientation){case"isometric":e.x=this._map.width/2-(i-t)*this._tileWidthHalf,e.y=(i+t)*this._tileHeightHalf;break;case"staggered":t=Math.floor(t),i=Math.floor(i),e.x=t*this._map.tileWidth+(1&i)*this._tileWidthHalf,e.y=i*this._tileHeightHalf;break;case"orthogonal":e.x=t*this._map.tileWidth,e.y=i*this._map.tileHeight;break;case"hexagonal":t=Math.floor(t),i=Math.floor(i);var r=2*this._map.tileHeight/3;e.x=(t*this._map.tileWidth+i%2*this._tileWidthHalf)%this._map.gridWidth,e.y=i*r%this._map.gridHeight}e.x=(e.x+this._map.viewPortX)*this._map.scale,e.y=(e.y+this._map.viewPortY)*this._map.scale}},e.getTileDataByScreenPos=function(t,i){var e=0;return this.getTilePositionByScreenPos(t,i,this._tempMapPos)&&(e=this.getTileData(Math.floor(this._tempMapPos.x),Math.floor(this._tempMapPos.y))),e},e.getTilePositionByScreenPos=function(t,i,e){t=t/this._map.scale-this._map.viewPortX,i=i/this._map.scale-this._map.viewPortY;var r=this._map.tileWidth,h=this._map.tileHeight,s=0,a=0;switch(this._map.orientation){case"isometric":var o=t-this._map.width/2;return s=-(o/r-i/h),a=o/r+i/h,e&&(e.x=a,e.y=s),!0;case"staggered":if(e){var n,l;n=(t-(Math.floor(t/r)*r+r/2))*h/2,l=(i-(Math.floor(i/h)*h+h/2))*r/2,Math.abs(n)+Math.abs(l)<=r*h/4?(a=Math.floor(t/r),s=2*Math.floor(i/h)):(t-=r/2,a=Math.floor(t/r)+1,i-=h/2,s=2*Math.floor(i/h)+1),e.x=a-(1&s),e.y=s}return!0;case"orthogonal":return a=t/r,s=i/h,e&&(e.x=a,e.y=s),!0;case"hexagonal":a=(t-(s=i/(2*h/3))%2*this._tileWidthHalf)/r,e&&(e.x=a,e.y=s)}return!1},e.getDrawSprite=function(t,i){var e=new g;return e.relativeX=t*this._map.gridWidth,e.relativeY=i*this._map.gridHeight,e.initData(this._map),e.updatePos(),this._gridSpriteArray.push(e),e},e.showGridSprite=function(t){var i,e=this._showGridList,r=0;i=e.length;var h,s=-1;for(r=0;r<i;r++){if((h=e[r])==t)return;h.isAloneObject||h.visible||(s=r)}s>=0?e[s]=t:e.push(t)},e.hideGridSprite=function(t){t.visible=!1},e.updateGridPos=function(){var t,i,e;e=(i=this._showGridList).length;for(var r=0;r<e;r++)((t=i[r])._style.visible||t.isAloneObject)&&t.drawImageNum>0&&t.updatePos()},e.updateAloneObject=function(){var t,i,e;e=(i=this._aloneObjs).length;for(var r=0;r<e;r++)(t=i[r]).drawImageNum>0&&t.updatePos()},e.render=function(i,e,r){var h=this._childs;this._childs=this._showGridList,t.prototype.render.call(this,i,e,r),this._childs=h},e.drawTileTexture=function(t,i,e){if(e>=0&&e<this._map.numRowsTile&&i>=0&&i<this._map.numColumnsTile){var r=e*this._map.numColumnsTile+i,h=this._mapData;if(null!=h&&r<h.length&&0!=h[r]){var s=this._map.getTexture(h[r]);if(s){var a=0,o=0;s.texture;switch(this._map.orientation){case"staggered":a=i*this._map.tileWidth%this._map.gridWidth+(1&e)*this._tileWidthHalf,o=e*this._tileHeightHalf%this._map.gridHeight;break;case"orthogonal":a=i*this._map.tileWidth%this._map.gridWidth,o=e*this._map.tileHeight%this._map.gridHeight;break;case"isometric":a=(this._mapWidthHalf+(i-e)*this._tileWidthHalf)%this._map.gridWidth,o=(i+e)*this._tileHeightHalf%this._map.gridHeight;break;case"hexagonal":var n=2*this._map.tileHeight/3;a=(i*this._map.tileWidth+e%2*this._tileWidthHalf)%this._map.gridWidth,o=e*n%this._map.gridHeight}if(s.isAnimation){var l=new y;l.x=a,l.y=o,l.setTileTextureSet(r.toString(),s),t.addAniSprite(l),t.addChild(l),t.isHaveAnimation=!0}else t.graphics.drawTexture(s.texture,a+s.offX,o+s.offY);return!0}}}return!1},e.clearAll=function(){this._map=null,this._mapData=null,this._tileWidthHalf=0,this._tileHeightHalf=0,this._mapWidthHalf=0,this._mapHeightHalf=0,this.layerName=null;var t=0;if(this._objDic){for(var i in this._objDic)delete this._objDic[i];this._objDic=null}if(this._dataDic){for(i in this._dataDic)delete this._dataDic[i];this._dataDic=null}for(t=0;t<this._gridSpriteArray.length;t++)this._gridSpriteArray[t].clearAll();this._properties=null,this._tempMapPos=null,this.tarLayer=null},i}(c),y=function(t){function i(){this._tileTextureSet=null,this._aniName=null,i.__super.call(this)}r(i,"laya.map.TileAniSprite",c);var e=i.prototype;return e.setTileTextureSet=function(t,i){this._aniName=t,this._tileTextureSet=i,i.addAniSprite(this._aniName,this)},e.show=function(){this._tileTextureSet.addAniSprite(this._aniName,this)},e.hide=function(){this._tileTextureSet.removeAniSprite(this._aniName)},e.clearAll=function(){this._tileTextureSet.removeAniSprite(this._aniName),this.destroy(),this._tileTextureSet=null,this._aniName=null},i}();e.__init([d])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,i){"use strict";for(var e in Object.defineProperty(i,"__esModule",{value:!0}),Laya){var r=Laya[e];r&&r.__isclass&&(i[e]=r)}});



//filter.js
!function(t,e,i){i.un,i.uns,i.static;var a=i.class,r=i.getset,n=(i.__newvec,laya.utils.Browser,laya.utils.Color),s=laya.filters.ColorFilterAction,l=laya.filters.webgl.ColorFilterActionGL,o=laya.filters.Filter,u=laya.filters.webgl.FilterActionGL,c=laya.maths.Matrix,h=(laya.maths.Rectangle,laya.renders.Render),f=(laya.renders.RenderContext,laya.webgl.resource.RenderTarget2D),_=laya.utils.RunDriver,d=(laya.webgl.shader.d2.ShaderDefines2D,laya.display.Sprite,laya.resource.Texture,laya.webgl.shader.d2.value.Value2D),g=function(){function t(){this.data=null}a(t,"laya.filters.FilterAction");var e=t.prototype;return i.imps(e,{"laya.filters.IFilterAction":!0}),e.apply=function(t){return null},t}(),y=function(){function t(){}return a(t,"laya.filters.WebGLFilter"),t.enable=function(){t.isInit||(t.isInit=!0,h.isWebGL&&(_.createFilterAction=function(t){var e;switch(t){case 32:e=new l;break;case 16:e=new p;break;case 8:e=new w}return e}))},t.isInit=!1,t.__init$=function(){_.createFilterAction=function(t){var e;switch(t){case 16:case 8:e=new g;break;case 32:e=new s}return e}},t}(),p=(function(t){function e(t){this.strength=NaN,this.strength_sig2_2sig2_gauss1=[],e.__super.call(this),void 0===t&&(t=4),h.isWebGL&&y.enable(),this.strength=t,this._action=_.createFilterAction(16),this._action.data=this}a(e,"laya.filters.BlurFilter",o);var i=e.prototype;i.callNative=function(t){t.conchModel&&t.conchModel.blurFilter&&t.conchModel.blurFilter(this.strength)},r(0,i,"action",function(){return this._action}),r(0,i,"type",function(){return 16})}(),function(t){function e(t,i,a,r){this._color=null,e.__super.call(this),this._elements=new Float32Array(9),void 0===i&&(i=4),void 0===a&&(a=6),void 0===r&&(r=6),h.isWebGL&&y.enable(),this._color=new n(t),this.blur=Math.min(i,20),this.offX=a,this.offY=r,this._action=_.createFilterAction(8),this._action.data=this}a(e,"laya.filters.GlowFilter",o);var i=e.prototype;i.getColor=function(){return this._color._color},i.callNative=function(t){t.conchModel&&t.conchModel.glowFilter&&t.conchModel.glowFilter(this._color.strColor,this._elements[4],this._elements[5],this._elements[6])},r(0,i,"type",function(){return 8}),r(0,i,"action",function(){return this._action}),r(0,i,"offY",function(){return this._elements[6]},function(t){this._elements[6]=t}),r(0,i,"offX",function(){return this._elements[5]},function(t){this._elements[5]=t}),r(0,i,"blur",function(){return this._elements[4]},function(t){this._elements[4]=t})}(),function(t){function e(){this.data=null,e.__super.call(this)}a(e,"laya.filters.webgl.BlurFilterActionGL",u);var i=e.prototype;return i.setValueMix=function(t){t.defines.add(this.data.type)},i.apply3d=function(t,e,i,a,r){var n=t.getValue("bounds"),s=d.create(1,0);s.setFilters([this.data]),c.EMPTY.identity(),i.ctx.drawTarget(t,0,0,n.width,n.height,c.EMPTY,"src",s),s.setFilters(null)},i.setValue=function(t){t.strength=this.data.strength;var e=this.data.strength/3,i=e*e;this.data.strength_sig2_2sig2_gauss1[0]=this.data.strength,this.data.strength_sig2_2sig2_gauss1[1]=i,this.data.strength_sig2_2sig2_gauss1[2]=2*i,this.data.strength_sig2_2sig2_gauss1[3]=1/(2*Math.PI*i),t.strength_sig2_2sig2_gauss1=this.data.strength_sig2_2sig2_gauss1},r(0,i,"typeMix",function(){return 16}),e}()),w=function(t){function e(){this.data=null,this._initKey=!1,this._textureWidth=0,this._textureHeight=0,e.__super.call(this)}a(e,"laya.filters.webgl.GlowFilterActionGL",u);var n=e.prototype;return i.imps(n,{"laya.filters.IFilterActionGL":!0}),n.setValueMix=function(t){},n.apply3d=function(t,e,i,a,r){var n=t.getValue("bounds");t.addValue("color",this.data.getColor());var s,l=n.width,o=n.height;this._textureWidth=l,this._textureHeight=o;var u=c.TEMP;return u.identity(),(s=d.create(1,0)).setFilters([this.data]),i.ctx.drawTarget(t,0,0,this._textureWidth,this._textureHeight,u,"src",s,null),s=d.create(1,0),i.ctx.drawTarget(t,0,0,this._textureWidth,this._textureHeight,u,"src",s),null},n.setSpriteWH=function(t){this._textureWidth=t.width,this._textureHeight=t.height},n.setValue=function(t){t.u_offsetX=this.data.offX,t.u_offsetY=-this.data.offY,t.u_strength=1,t.u_blurX=this.data.blur,t.u_blurY=this.data.blur,t.u_textW=this._textureWidth,t.u_textH=this._textureHeight,t.u_color=this.data.getColor()},r(0,n,"typeMix",function(){return 8}),e.tmpTarget=function(t,e,i,a,r){var n=t.getValue("bounds");t.getValue("out").end();var s=f.create(n.width,n.height);s.start();var l=t.getValue("color");l&&s.clear(l[0],l[1],l[2],0),t.addValue("tmpTarget",s)},e.startOut=function(t,e,i,a,r){t.getValue("tmpTarget").end();var n=t.getValue("out");n.start();var s=t.getValue("color");s&&n.clear(s[0],s[1],s[2],0)},e.recycleTarget=function(t,e,i,a,r){t.getValue("src");t.getValue("tmpTarget").recycle()},e}();i.__init([y])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";for(var i in Object.defineProperty(e,"__esModule",{value:!0}),Laya){var a=Laya[i];a&&a.__isclass&&(e[i]=a)}});




var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var tafangUI=(function(_super){
		function tafangUI(){
			
		    this.play1_score=null;
		    this.play2_score=null;
		    this.top_bg=null;
		    this.jinbi_text=null;
		    this.mucai_text=null;
		    this.renkou_text=null;
		    this.game_time=null;
		    this.jidi=null;
		    this.xitong_send=null;
		    this.send_box=null;
		    this.change_build=null;
		    this.build_1=null;
		    this.build_2=null;
		    this.build_3=null;
		    this.build_4=null;
		    this.build_5=null;
		    this.build_6=null;
		    this.build_name=null;
		    this.build_attack=null;
		    this.build_range=null;
		    this.build_jiange=null;
		    this.build_big_detail=null;
		    this.build_consume=null;
		    this.btn_jianzao=null;
		    this.btn_shengli=null;
		    this.btn_shibai=null;
		    this.btn_tuichu=null;

			tafangUI.__super.call(this);
		}

		CLASS$(tafangUI,'ui.tafangUI',_super);
		var __proto__=tafangUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tafangUI.uiView);

		}

		tafangUI.uiView={"type":"View","props":{"width":750,"height":1250},"child":[{"type":"Image","props":{"y":75,"x":10,"width":330,"skin":"pic/bai_bg.png","height":161}},{"type":"Text","props":{"y":130,"x":25,"width":193,"var":"play1_score","text":"玩家1杀敌：","height":34,"fontSize":32,"color":"#cd1915"}},{"type":"Text","props":{"y":175,"x":25,"width":193,"var":"play2_score","text":"玩家2杀敌：","height":32,"fontSize":32,"color":"#192cb9"}},{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"top_bg","skin":"pic/top_bg.png","sizeGrid":"1","height":65,"alpha":1}},{"type":"Text","props":{"y":14,"x":84,"width":123,"var":"jinbi_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":14,"x":310,"width":123,"var":"mucai_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":13,"x":495,"width":123,"var":"renkou_text","text":"0","height":34,"fontSize":32,"color":"#ffffff"}},{"type":"Text","props":{"y":13,"x":623,"width":105,"var":"game_time","name":"game_time","height":34,"fontSize":28,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":85,"x":25,"width":193,"var":"jidi","text":"基地生命：30","height":34,"fontSize":32,"color":"#b514b5"}},{"type":"Label","props":{"y":553,"x":20,"wordWrap":true,"width":500,"var":"xitong_send","text":"系统提示：","strokeColor":"#de810a","stroke":1,"leading":10,"height":107,"fontSize":26,"color":"#f9ab04"}},{"type":"Label","props":{"x":20,"wordWrap":true,"width":500,"var":"send_box","top":245,"overflow":"scroll","name":"send_box","leading":10,"height":300,"fontSize":26,"color":"#ffffff"}},{"type":"Image","props":{"x":0,"width":750,"visible":false,"var":"change_build","skin":"pic/bottom.png","name":"change_build","mouseThrough":false,"mouseEnabled":true,"layoutEnabled":true,"height":390,"bottom":3},"child":[{"type":"Label","props":{"y":59,"x":36,"width":107,"var":"build_1","text":"张飞","name":"build_1","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":152,"width":107,"var":"build_2","text":"夏侯惇","name":"build_2","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":268,"width":107,"var":"build_3","text":"诸葛亮","name":"build_3","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":383,"width":105,"var":"build_4","text":"关羽","name":"build_4","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":498,"width":107,"var":"build_5","text":"赵云","name":"build_5","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":59,"x":612,"width":107,"var":"build_6","text":"刘备","name":"build_6","mouseEnabled":true,"layoutEnabled":true,"height":101,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":175,"x":50,"width":63,"var":"build_name","text":"张飞","layoutEnabled":true,"height":28,"fontSize":28,"color":"#f4730e","bold":true}},{"type":"Label","props":{"y":220,"x":50,"width":134,"var":"build_attack","text":"攻击：","layoutEnabled":true,"height":27,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":216,"width":139,"var":"build_range","text":"范围：","layoutEnabled":true,"height":25,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":386,"width":136,"var":"build_jiange","text":"速度：","layoutEnabled":true,"height":27,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":220,"x":554,"width":145,"layoutEnabled":true,"height":26,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":260,"x":50,"width":57,"text":"大招：","layoutEnabled":true,"height":23,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":260,"x":120,"wordWrap":true,"width":465,"var":"build_big_detail","text":"致命一击，每攻击5次触发一次大招。","rotation":0,"leading":10,"layoutEnabled":true,"height":116,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":178,"x":180,"width":249,"var":"build_consume","text":"消耗：500黄金、2人口","layoutEnabled":true,"height":27,"fontSize":24,"color":"#f8ee08"}},{"type":"Image","props":{"y":245,"x":590,"width":130,"var":"btn_jianzao","skin":"pic/jianzao.png","name":"btn_jianzao","mouseThrough":true,"mouseEnabled":true,"height":130}}]},{"type":"Image","props":{"y":474,"x":196,"width":356,"visible":false,"var":"btn_shengli","skin":"pic/shengli.png","mouseThrough":true,"mouseEnabled":true,"height":144}},{"type":"Image","props":{"y":475,"x":197,"width":353,"visible":false,"var":"btn_shibai","skin":"pic/shibai.png","mouseThrough":true,"mouseEnabled":true,"height":143}},{"type":"Image","props":{"y":75,"x":641,"width":100,"visible":false,"var":"btn_tuichu","skin":"pic/tuichu.png","name":"btn_tuichu","mouseThrough":false,"mouseEnabled":true,"height":100}}]};
		return tafangUI;
	})(View);




(function(_Sprite){
    function CreateGuai(){
        CreateGuai.super(this);
        
        //this.init();
    };

    Laya.class(CreateGuai,'CreateGuai',_Sprite);
    var isCache = false;
    var _proto = CreateGuai.prototype;
    _proto.init = function(camp,name,hp,run,gold,isBoss){

        //建筑阵营归属
        this.camp = camp;
        //怪物的名字
        this.name = name;
        //血量
        this.maxHp = hp;
        this.hp = hp;
        //初始化移动速度
        this.defrun = run;
        //移动间隔
        this.run = run;
        //攻击归属
        this.locking = '';
        //携带金币
        this.gold = gold;
        //是不是boss
        this.isBoss = isBoss?isBoss:false;
        //当前的buff
        this.buff = {
            'yun':null,
            'jiansu':null,
            'suo':null
        }

        //缓存所有动画
        if(!isCache){
            Laya.Animation.createFrames(['pic/guai1_1.png','pic/guai1_2.png','pic/guai1_3.png'],'guai1');
            Laya.Animation.createFrames(['pic/guai2_1.png','pic/guai2_2.png'],'guai2');
            Laya.Animation.createFrames(['pic/guai3_1.png','pic/guai3_2.png'],'guai3');
            Laya.Animation.createFrames(['pic/guai4_1.png','pic/guai4_2.png'],'guai4');
            Laya.Animation.createFrames(['pic/guai5_1.png','pic/guai5_2.png'],'guai5');
            Laya.Animation.createFrames(['pic/guai6_1.png','pic/guai6_2.png'],'guai6');
            Laya.Animation.createFrames(['pic/guai7_1.png','pic/guai7_2.png'],'guai7');
            Laya.Animation.createFrames(['pic/guai8_1.png','pic/guai8_2.png'],'guai8');
            Laya.Animation.createFrames(['pic/guai9_1.png','pic/guai9_2.png'],'guai9');
            Laya.Animation.createFrames(['pic/guai10_1.png','pic/guai10_2.png'],'guai10');
            Laya.Animation.createFrames(['pic/boss1_1.png','pic/boss1_2.png'],'boss1');
            Laya.Animation.createFrames(['pic/boss2_1.png','pic/boss2_2.png'],'boss2');
            Laya.Animation.createFrames(['pic/boss3_1.png','pic/boss3_2.png'],'boss3');
            Laya.Animation.createFrames(['pic/boss4_1.png','pic/boss4_2.png'],'boss4');
        }
        
        //添加怪物
        this.body = new Laya.Animation();
        this.body.size(100,100);
        this.width = 100;
        this.height = 100;
        this.radius = 30;
        this.body.interval = 300;

        this.addChild(this.body);
        this.playAction(this.name);

        //初始化血条
        this.hpBox = new Laya.Sprite();
        this.addChild(this.hpBox);
        this.setHp(0);
        
        


    };
    //播放动画
    _proto.playAction = function(action){
        this.body.play(0,true,action);
    }


    //播放动画
    _proto.addBuff = function(name,data){
        var self = this;
        //添加减速
        if(name=='jiansu' && !this.buff.jiansu && !this.buff.yun){
            this.run *= data.value;
            //移除减速
            setTimeout(function(){
                if(!self.buff.yun){
                    self.run = self.defrun;
                    self.buff[name] = null;
                }
            },data.time);
        }else if(name=='yun' && !this.buff.yun){
            this.run *= data.value;
            //移除减速
            setTimeout(function(){
                self.run = self.defrun;
                self.buff.yun = null;
                self.buff.jiansu = null;
            },data.time);
        };
        //添加buff状态
        this.buff[name] = data;
    }

    

    //设置血条
    _proto.setHp = function(hp,build){
        this.hp -= hp;
        var gameinfo = tafang.gameinfo;
        
        if(this.hp<=0){
            // if(nowAttack && nowAttack == this){
            //     console.log(111);
            // }
            
            //给当前阵营的选手加金币
            if(this.locking==playerCamp){
                gameinfo.addJinbi(this.gold);
            };

            //给建筑增加经验
            if(build){
                build.addExp();
            }
            

            //每达到200个杀敌，发放奖励
            var rewardLength = 200;

            if(this.locking=='player1'){
                var newJifen = gameinfo.addJifen(1);
                //积分奖励
                if(newJifen%rewardLength==0){
                    tafang.send('玩家1，杀敌200，奖励1个人口');
                    gameinfo.addRenkou(1);
                };
                if(this.isBoss){
                    tafang.send('玩家1，杀死了BOSS，奖励3个人口、1木材');
                    gameinfo.addRenkou(3);
                    gameinfo.addMucai(1);
                }
            }else{
                var newJifen = gameinfo.addJifen(1,2);
                //积分奖励
                if(newJifen%rewardLength==0){
                    tafang.send('玩家2，杀敌200，奖励1个人口');
                    gameinfo.addRenkou(1);
                };
                if(this.isBoss){
                    tafang.send('玩家2，杀死了BOSS，奖励3个人口、1木材');
                    gameinfo.addRenkou(3);
                    gameinfo.addMucai(1);
                }
            };
            

            this.removeSelf();
            this.destroy(true);

            //是否是最后一个大BOSS
            if(this.name=="boss4"){
                tafang.bigBossDie++;
                if(tafang.bigBossDie>=2 || isDanji){
                    clearInterval(gameChange.getDataTimer);
                    //关闭所有定时器
                    tafang.clearGame();

                    var btn_shengli = gameinfo.btn_shengli;
                    btn_shengli.visible = true;
                    btn_shengli.on('click',this,function(){
                        btn_shengli.removeSelf();
                        tafang.restart();
                    });
                }
                
                
            }

        }else{
            var hpLong = 50 * (this.hp/this.maxHp);
            var graphics = this.hpBox.graphics;
            graphics.clear();
            graphics.drawLine(20,-10,20+hpLong , -10, "#f00",4);
            
        }
        
    };





    return CreateGuai;
})(Laya.Sprite);




(function(_Sprite){
    function CreateJineng(){
        CreateJineng.super(this);
        
        //this.init();
    };

    Laya.class(CreateJineng,'CreateJineng',_Sprite);

    var _proto = CreateJineng.prototype;
    var isCache = false;
    _proto.init = function(name,speed,attack,time){
        var self = this;
        this.name = name; //名
        this.speed = speed; //速度
        this.attack = attack; //攻击力
        

        if(!isCache){
            //张飞
            Laya.Animation.createFrames(['pic/zidan5.png'],'张飞_jineng1');
            //夏侯惇
            Laya.Animation.createFrames(['pic/zidan.png'],'夏侯惇_jineng1');
            Laya.Animation.createFrames(['pic/feng1.png','pic/feng2.png','pic/feng3.png'],'夏侯惇_jineng2');
            //诸葛亮
            Laya.Animation.createFrames(['pic/zidan2.png'],'诸葛亮_jineng1');
            Laya.Animation.createFrames(['pic/bing1.png'],'诸葛亮_jineng2');
            //关羽
            Laya.Animation.createFrames(['pic/zidan3.png'],'关羽_jineng1');
            //Laya.Animation.createFrames(['pic/bing1_1.png','pic/bing1_3.png'],'关羽_jineng2');

            //赵云
            Laya.Animation.createFrames(['pic/zidan6.png'],'赵云_jineng1');
            Laya.Animation.createFrames(['pic/longjuan.png'],'赵云_jineng2');

            //刘备
            Laya.Animation.createFrames(['pic/zidan4.png'],'刘备_jineng1');
            //Laya.Animation.createFrames(['pic/bing1_1.png','pic/bing1_3.png'],'刘备_jineng2');
            

            
        }
        //初始化技能动画
        this.body = new Laya.Animation();
        //技能的宽高范围
        if(/张飞/.test(this.name)){
            this.body.size(20,20);
            this.radius = 10;
            this.width = 20;
            this.height = 20;
        }else if(/夏侯惇/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(110,124);
                this.radius = 70;
                this.width = 110;
                this.height = 124;
            }
        }else if(/诸葛亮/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(80,72);
                this.radius = 40;
                this.width = 80;
                this.height = 72;
            }
        }else if(/关羽/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(110,124);
                this.radius = 20;
                this.width = 40;
                this.height = 80;
            }
        }else if(/赵云/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(110,124);
                this.radius = 350;
                this.width = 600;
                this.height = 600;
            }
        }else if(/刘备/.test(this.name)){
            if(/jineng1/.test(this.name)){
                this.body.size(20,20);
                this.radius = 10;
                this.width = 20;
                this.height = 20;
            }else{
                this.body.size(110,124);
                this.radius = 20;
                this.width = 40;
                this.height = 80;
            }
        }
        
        
        //多少毫秒播放一帧
        this.body.interval = 200;
        this.addChild(this.body);
        this.playAction(this.name);

        if(time){
            setTimeout(function(){
                self.removeSelf();
                self.visible = false;
                self.destroy(true);
            },time);
        }
    };

    _proto.playAction = function(action){
        this.body.play(0,true,action);
    }



    return CreateJineng;
})(Laya.Sprite);






(function(_Sprite){
    function CreateBuild(){
        CreateBuild.super(this);
        
        //this.init();
    };

    Laya.class(CreateBuild,'CreateBuild',_Sprite);

    var _proto = CreateBuild.prototype;
    var isCache = false;
    _proto.init = function(data){
//camp,name,attack,range,bigRange,bigType,bigDetail,miji,jiange,maxLen,lv
        //建筑阵营归属
        this.camp = data.camp;
        //建筑的名字
        this.name = data.name;
        //初始化攻击力
        this.defattack = data.attack;
        //攻击力
        this.attack = data.attack;
        //攻击范围
        this.range = data.range;
        //大招范围
        this.bigRange = data.bigRange;
        //大招类型
        this.bigType = data.bigType;
        //大招介绍
        this.bigDetail = data.bigDetail;
        //秘技
        this.miji = data.miji;
        //攻击间隔
        this.jiange = data.jiange;
        //初始攻击间隔
        this.defjiange = data.jiange;
        //建筑等级
        this.lv = data.lv;
        //建筑经验
        this.exp = 0;
        //建筑价格
        this.price = {"jinbi":data.jinbi,"mucai":data.mucai,"renkou":data.renkou};
        //攻击多少次触发技能
        this.maxLen = data.maxLen;
        //当前攻击次数
        this.alength = 0;
        //下一次攻击时间
        this.nextTime = Laya.Browser.now()+this.jiange;
        //当前锁定的目标
        this.nowAttack = null;
        //是否正在释放大招
        this.biging = false;
        //buff
        this.buff = null;
        //缓存所有动画
        if(!isCache){
            var animation = Laya.Animation;

            animation.createFrames(['pic/zf1_1.png'],'张飞');
            animation.createFrames(['pic/zf2_1.png','pic/zf2_2.png'],'张飞_gongji');
            animation.createFrames(['pic/baoji.png'],'baoji');

            animation.createFrames(['pic/xhd1_1.png'],'夏侯惇');
            animation.createFrames(['pic/xhd2_1.png','pic/xhd2_2.png','pic/xhd1_1.png'],'夏侯惇_gongji');

            animation.createFrames(['pic/zgl1_1.png'],'诸葛亮');
            animation.createFrames(['pic/zgl2_1.png','pic/zgl2_2.png','pic/zgl1_1.png','pic/zgl1_1.png'],'诸葛亮_gongji');

            animation.createFrames(['pic/gy1_1.png'],'关羽');
            animation.createFrames(['pic/gy2_1.png','pic/gy2_2.png','pic/gy1_1.png'],'关羽_gongji');

            animation.createFrames(['pic/zy1_1.png'],'赵云');
            animation.createFrames(['pic/zy1_1.png','pic/zy2_1.png','pic/zy1_1.png','pic/zy1_1.png'],'赵云_gongji');
            animation.createFrames(['pic/zy2_2.png','pic/zy2_3.png'],'赵云_gongji2');

            animation.createFrames(['pic/lb1_1.png'],'刘备');
            animation.createFrames(['pic/lb2_1.png','pic/lb2_2.png','pic/lb1_1.png'],'刘备_gongji');


            animation.createFrames(['pic/buff1.png','pic/buff2.png','pic/buff3.png'],'build_buff');

            
            
            //animation.createFrames(['pic/zidan.png'],this.name+'jineng1');
            isCache = true;
        }
        
        //添加建筑动画
        this.body = new Laya.Animation();
        this.body.size(100,100);
        this.body.interval = 200;
        this.addChild(this.body);
        this.playAction(this.name);

        this.baoji = new Laya.Animation();
        this.baoji.size(58,36);
        //this.body.interval = 200;
        this.baoji.x = 20;
        this.baoji.y = -10;
        this.addChild(this.baoji);

        //buff状态
        this.buffRun = new Laya.Animation();
        this.buffRun.size(100,100);
        //this.body.interval = 200;
        this.buffRun.x = 0;
        this.buffRun.y = 0;
        this.buffRun.interval = 300;
        this.addChild(this.buffRun);
        
        //给建筑添加自动攻击技能
        this.gongji();

        //建筑绑定事件
        this.on(Event.CLICK, this);

        

    };
    //播放动画
    _proto.playAction = function(action){
        this.body.play(0,true,action);
    };

    //播放动画
    _proto.action = function(name){
        var self = this;
        this.baoji.play(0,true,name);

        setTimeout(function(){
            self.baoji.clear();
        },600);
    };

    //buff动画
    _proto.actionBuff = function(name){
        var self = this;
        this.buffRun.play(0,true,name);
        setTimeout(function(){
            self.buffRun.clear();
        },600);
    };

    //建筑升级
    _proto.addExp = function(){
        if(this.lv>=3){
            return false;
        }
        this.exp++;
        //建筑升级策略
        if(this.lv<3 && this.exp>=this.lv*tafang.lvExp){
            //建筑等级
            this.lv++;
            //console.log(this.attack);
            //攻击力
            this.attack *= 1.5; //this.defattack*this.lv
            //攻击范围
            this.range *= 1.1;
            //大招范围
            this.bigRange *= 1.1;
            //攻击间隔
            this.jiange *= 0.8;     
            //重置经验
            this.exp = 0;
            //提示信息
            var lvTip = this.lv>=3?'3(Max)':this.lv;

            if(this.camp=='player1'){
                tafang.send(playerName1+'的'+this.name+'升级到 LV'+lvTip+' 实力大增！');
            }else{
                tafang.send(playerName2+'的'+this.name+'升级到 LV'+lvTip+' 实力大增！');
            }
            

            this.defattack = this.attack;
            this.defjiange = this.jiange;

            if(this.lv==3){

                //检测玩家是否存在秘技
                var thisPlayerHasMiji = false,
                    mijiData = tafang.mijiData;
                for(var i=0;i<mijiData.length;i++){
                    if(mijiData[i].camp == playerCamp){
                        thisPlayerHasMiji = true;
                    }
                };

                if(!thisPlayerHasMiji){
                    var MapBg = tafang.gameMap.MapBg;
                    //检测是否满足开启秘技的条件
                    var maxData = {'zf':{'xy':null,'value':0},'lb':{'xy':null,'value':0},'gy':{'xy':null,'value':0}};
                    for(var i=0;i<MapBg.numChildren;i++){
                        var thisBuild = MapBg.getChildAt(i);
                        if(thisBuild.lv==3){
                            if(thisBuild.name=='张飞' && !maxData.zf.value){
                                maxData.zf.value = 1;
                                maxData.zf.xy = [thisBuild.x+thisBuild.width/2,thisBuild.y+thisBuild.height/2];
                            }else if(thisBuild.name=='关羽' && !maxData.gy.value){
                                maxData.gy.value = 1;
                                maxData.gy.xy = [thisBuild.x+thisBuild.width/2,thisBuild.y+thisBuild.height/2];
                            }else if(thisBuild.name=='刘备' && !maxData.lb.value){
                                maxData.lb.value = 1;
                                maxData.lb.xy = [thisBuild.x+thisBuild.width/2,thisBuild.y+thisBuild.height/2];
                            }
                        }
                    };

                    
                    //检测秘技条件
                    if(maxData.zf.value+maxData.lb.value+maxData.gy.value == 3){
                        var arrAll = (maxData.zf.xy +','+ maxData.gy.xy + ',' + maxData.lb.xy).split(',');
                        for(var i=0;i<arrAll.length;i++){
                            arrAll[i] = parseInt(arrAll[i]);
                        };

                        //检测两个坐标点的差
                        var xdiff1 = arrAll[0] - arrAll[2];            // 计算两个点的横坐标之差
                        var ydiff1 = arrAll[1] - arrAll[3];           // 计算两个点的纵坐标之差
                        var xdiff2 = arrAll[0] - arrAll[4];            // 计算两个点的横坐标之差
                        var ydiff2 = arrAll[1] - arrAll[5];           // 计算两个点的纵坐标之差
                        var xdiff3 = arrAll[2] - arrAll[4];            // 计算两个点的横坐标之差
                        var ydiff3 = arrAll[3] - arrAll[5];           // 计算两个点的纵坐标之差

                        //碰撞距离
                        var juli1 =  parseInt(Math.pow((xdiff1 * xdiff1 + ydiff1 * ydiff1), 0.5));
                        var juli2 =  parseInt(Math.pow((xdiff2 * xdiff2 + ydiff2 * ydiff2), 0.5));
                        var juli3 =  parseInt(Math.pow((xdiff3 * xdiff3 + ydiff3 * ydiff3), 0.5));
                        if(juli1<600 && juli2<600 && juli3<600){
                            //激活秘技
                            mijiData.push({'camp':playerCamp,'attack':30000,'lineColor':'#ffc706','filterColor':'#ff0000','xyArr':arrAll});
                            if(playerCamp=='player1'){
                                tafang.send(playerName1+' 激活了秘技-死亡锁链，在锁链范围内的敌人将必将化为灰烬...');
                            }else{
                                tafang.send(playerName2+' 激活了秘技-死亡锁链，在锁链范围内的敌人将必将化为灰烬...');
                            }
                            
                        }else{
                            //提示
                            tafang.send('刘、关、张，距离太远无法触发秘技，触发位置以最先升到3级的英雄为准！');
                        }
                        
                    }
                }
            };


            //同步数据库建筑等级
            if(!isDanji && this.camp == playerCamp){
                var buildArr = tafang.gameMap.buildArr;
                for(var i=0;i<buildArr.length;i++){
                    var thisArr = buildArr[i];
                    var thisData = thisArr.split('|');
                    if(thisData[0] == this.x/100+'_'+this.y/100){
                        buildArr[i] = thisData[0]+'|'+thisData[1]+'|'+this.lv;
                    };
                };
                //向服务器更新数据
                gameChange.upDataBuild();
            }
            
        }
    };


    //自动攻击
    _proto.gongji = function(){
        var self = this;
        var jineng =  new CreateJineng();
        jineng.camp = this.camp;

        //每一帧监听技能
        Laya.timer.frameLoop(1,this,function(){
            
            //是否有锁定目标
            if(!this.nowAttack){
                //发现周围的怪物
                var hasGuai = this.hasGuai();
                //有怪物则锁定目标
                if(hasGuai.length){
                    this.nowAttack = hasGuai[0];
                }
            };

            
            //锁定目标是否在攻击范围
            var nowAttack = this.nowAttack;

            if(nowAttack){
                var xdiff1 = (this.x+this.width/2) - (nowAttack.x+nowAttack.width/2);            // 计算两个点的横坐标之差
                var ydiff1 = (this.y+this.height/2) - (nowAttack.y+nowAttack.height/2);            // 计算两个点的纵坐标之差
                var nowAttackJuli =  parseInt(Math.pow((xdiff1 * xdiff1 + ydiff1 * ydiff1), 0.5));
                //锁定的目标是否在攻击范围里
                if(nowAttackJuli>this.range || nowAttack.hp<=0){
                    //检测怪物是否在攻击范围内
                    this.nowAttack = null;
                    //是否正在释放大招
                    if(!this.biging){
                        this.playAction(this.name);
                    }
                    
                }

                //现在的时间
                var nowTime = Laya.Browser.now();
                //时间大于下次攻击时间，开始下次攻击
                if(nowTime>this.nextTime && !this.biging){ ////是否正在释放大招
                    
                    //读取技能缓存
                    var zidan = Laya.Pool.getItemByClass('CreateJineng',CreateJineng);
                    zidan.nowAttack = nowAttack;

                    if(this.alength>=this.maxLen){
                        //大招
                        this.alength = 0;
                        //夏侯惇大招
                        if(this.bigType==1){
                            zidan.init(this.name+'_'+'jineng2',5,parseInt(this.attack/5)); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(-3,-20);
                            this.addChild(zidan);
                        }else if(this.bigType==2){
                            //寒冰大招
                            var rangeGuaiArr = this.hasGuai();
                            for(var i=0;i<rangeGuaiArr.length;i++){
                                var thisGuai = rangeGuaiArr[i];
                                var bigs = Laya.Pool.getItemByClass('CreateJineng',CreateJineng);
                                bigs.buff = {'name':'jiansu','value':0.5};
                                bigs.init(this.name+'_'+'jineng2',6,parseInt(this.attack/8),this.lv*1500); //技能名称，技能移动速度，技能攻击力，多长时间摧毁技能
                                bigs.pos(-(this.x-thisGuai.x-thisGuai.radius),-(this.y-thisGuai.y-thisGuai.radius/2));
                                this.addChild(bigs);
                            }
                        }else if(this.bigType==3){
                            //张飞大招
                            zidan.init(this.name+'_'+'jineng1',10,this.attack*5); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(45,45);
                            this.addChild(zidan);
                            this.action('baoji');
                        }else if(this.bigType==4){
                            //关羽大招
                            zidan.buff = {'name':'yun','value':this.lv*1000};
                            zidan.init(this.name+'_'+'jineng1',10,this.attack*8); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(45,45);
                            this.addChild(zidan);
                            this.action('baoji');
                        }else if(this.bigType == 5){
                            //赵云大招
                            zidan.init(this.name+'_'+'jineng2',10,this.attack/7,this.lv*1500); //技能名称，技能移动速度，技能攻击力
                            zidan.pos(-240,-260);
                            this.addChild(zidan);
                            //添加释放大招的状态
                            this.biging = true;
                            //播放大招动作
                            this.playAction('赵云_gongji2');
                            setTimeout(function(){
                                self.biging = false;
                            },this.lv*1500)
                            
                        }else if(this.bigType == 6){
                            //刘备大招
                            var aroundFriend = this.aroundFriend(this.bigRange);
                            for(var i=0;i<aroundFriend.length;i++){
                                if(!aroundFriend[i].buff){
                                    var buffData = {'attack':1.2,'jiange':0.8,'time':this.lv*2000};
                                    aroundFriend[i].addBuff(buffData);
                                    aroundFriend[i].actionBuff('build_buff');
                                }
                                
                            };
                        };

                        
                        
                    }else{ 
                        //重置下次攻击时间
                        this.nextTime = nowTime+this.jiange;
                        //添加一个子弹，增加一次发射次数
                        this.alength +=1;
                        //普通攻击
                        zidan.init(this.name+'_'+'jineng1',12,this.attack); //技能名称，技能移动速度，技能攻击力
                        zidan.pos(45,45);
                        this.addChild(zidan);
                        this.playAction(this.name+'_gongji');
                    };
                    
                };
            
            }
            

            //怪物层
            var guaiBox = tafang.guaiBox;
            //子弹和技能移动
            for(var i=0;i<this.numChildren;i++){
                var buildFind = this.getChildAt(i);
                //是否存在技能
                if(buildFind && buildFind.speed){
                    var thisJiNengX = this.x + buildFind.x + buildFind.width/2,
                        thisJiNengY = this.y + buildFind.y + buildFind.height/2;
                    
                    

                    var thisJiNengR = buildFind.radius;
                    var isJineng1 = /jineng1/.test(buildFind.name);

                    //赵云旋转技能
                    if(!isJineng1 && this.bigType == 5){
                        thisJiNengX-=300;
                        thisJiNengY-=300;
                    };
                    

                    //释放技能的方式
                    if(isJineng1){
                        
                        if(nowAttack){
                            //子弹跟踪
                            var xdiff2 = (thisJiNengX+buildFind.width/2) - (nowAttack.x+nowAttack.width/2);  // 计算两个点的横坐标之差
                            var ydiff2 = (thisJiNengY+buildFind.height/2) - (nowAttack.y+nowAttack.height/2);  // 计算两个点的纵坐标之差
                            buildFind.angle = Math.atan2(ydiff2,xdiff2);
                            if(!buildFind.nowAttack){
                                buildFind.nowAttack = nowAttack;
                            }else if(buildFind.nowAttack != nowAttack && !buildFind.nowAttack.length){
                                
                            };
                            
                            //子弹跟踪
                            buildFind.x -= Math.cos(buildFind.angle) * buildFind.speed;
                            buildFind.y -= Math.sin(buildFind.angle) * buildFind.speed;
                        }else{
                            //移除技能
                            buildFind.removeSelf();
                            buildFind.visible = false;
                            buildFind.destroy(true);
                            break;
                        }
                        
                    }else{

                        if(this.bigType==1){
                            //大招只首次跟踪,之后直行轨迹
                            if(typeof buildFind.angle == 'undefined'){
                                var xdiff2 = (this.x+this.width/2) - (nowAttack.x+nowAttack.width/2);  // 计算两个点的横坐标之差
                                var ydiff2 = (this.y+this.height/2) - (nowAttack.y+nowAttack.height/2);  // 计算两个点的纵坐标之差
                                buildFind.angle = Math.atan2(ydiff2,xdiff2);
                            };
                            //大招移动
                            buildFind.x -= Math.cos(buildFind.angle) * buildFind.speed;
                            buildFind.y -= Math.sin(buildFind.angle) * buildFind.speed;

                            //大招的移动范围
                            var xdiff3 = thisJiNengX - (this.x+this.width/2);            // 计算两个点的横坐标之差
                            var ydiff3 = thisJiNengY - (this.y+this.height/2);            // 计算两个点的纵坐标之差
                            //碰撞距离
                            var jinengJuli =  parseInt(Math.pow((xdiff3 * xdiff3 + ydiff3 * ydiff3), 0.5));
                            if(jinengJuli>this.bigRange){
                                //移除技能
                                buildFind.removeSelf();
                                buildFind.visible = false;
                                buildFind.destroy(true);
                            }
                        }else if(this.bigType==5){
                            buildFind.pivot(300,300);
                            buildFind.x = 50;
                            buildFind.y = 50;
                            buildFind.rotation += 20;
                        }
                        
                        
                    };//技能类型检测

                    

                    

                    //碰撞检测
                    for(var j=0;j<guaiBox.numChildren;j++){
                        var thisGuai = guaiBox.getChildAt(j);
                        var guaiR = thisGuai.radius,
                            guaiX = thisGuai.x + thisGuai.width/2,
                            guaiY = thisGuai.y + thisGuai.height/2;

                        
                        var xdiff = thisJiNengX - guaiX;            // 计算两个点的横坐标之差
                        var ydiff = thisJiNengY - guaiY;            // 计算两个点的纵坐标之差
                        //碰撞距离
                        var pongJuli =  parseInt(Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5));

                        //碰撞
                        if(pongJuli <= thisJiNengR + guaiR ){

                            var thisBuff = buildFind.buff;
                            if(thisBuff && thisBuff.name == 'yun'){
                                //眩晕buff
                                thisGuai.addBuff('yun',{'time':thisBuff.value,'value':0});
                                //Laya.Pool.recover('buildFind',buildFind);
                            }else if(thisBuff && thisBuff.name == 'jiansu'){
                                //减速buff
                                thisGuai.addBuff('jiansu',{'time':2000,'value':0.5});
                                
                            };
                            
                            

                            var attack = buildFind.attack;
                            //怪物归属
                            thisGuai.locking = jineng.camp;
                            //设置血量
                            thisGuai.setHp(attack,this);

                            if(isJineng1 || this.bigType==3 || this.bigType==4){
                                buildFind.removeSelf();
                                buildFind.visible = false;
                                buildFind.destroy(true);
                            };
                            
                            if(this.bigType!=5 && this.bigType!=2){
                                break;
                            }
                        };


                        
                        


                    };



                }
            };


        });
    };


    

    //发现周围怪物
    _proto.hasGuai = function(){
        var guaiBox = tafang.guaiBox;
        var guaiArr = [];
        for(var k=0;k<guaiBox.numChildren;k++){
            var tGuai = guaiBox.getChildAt(k);
            var xdiff = (this.x+this.width/2) - (tGuai.x+tGuai.width/2);            // 计算两个点的横坐标之差
            var ydiff = (this.y+this.height/2) - (tGuai.y+tGuai.height/2);            // 计算两个点的纵坐标之差
            var tGuaiJuli =  parseInt(Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5));
            //怪物进入攻击范围
            if(!tGuai.visible || tGuai.hp<=0){
                buildFind.removeSelf();
                buildFind.visible = false;
                buildFind.destroy(true);
            }else if(tGuaiJuli<=this.range){
                guaiArr.push(tGuai); //锁定范围内的怪物
            };
        };
        return guaiArr;
    };

    _proto.addBuff = function(data){
        var self = this;
        //{'attack':1.2,'jiange':0.8,'time':3000}
        this.attack *= data.attack;
        this.jiange *= data.jiange;
        this.buff = data;
        setTimeout(function(){
            self.attack = self.defattack;
            self.jiange = self.defjiange;
            self.buff = null;
            //self.buffRun.clear();
        },data.time);
    };

    //获取周围的友军
    _proto.aroundFriend = function(range){
        var MapBg = tafang.gameMap.MapBg;
        var friendArr = [];
        for(var k=0;k<MapBg.numChildren;k++){
            var tFriend = MapBg.getChildAt(k);
            var xdiff = (this.x+this.width/2) - (tFriend.x+tFriend.width/2);            // 计算两个点的横坐标之差
            var ydiff = (this.y+this.height/2) - (tFriend.y+tFriend.height/2);            // 计算两个点的纵坐标之差
            var tFriendJuli =  parseInt(Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5));
            //范围内的友军
            if(tFriendJuli<=range){
                friendArr.push(tFriend); //锁定范围内的怪物
            };
        };
        return friendArr;
    };

    return CreateBuild;
})(Laya.Sprite);




var GameInfo = (function(_tafangUI){

    function GameInfo(){
        GameInfo.super(this);
        //this.play1_score.text = '玩家1：';
        this.player1_jifen = 0;
        this.player2_jifen = 0;
        this.jinbi = 0;
        this.mucai = 0;
        this.renkou = 0;
        this.jidiHp(20);
        
        this.uiInit();
    };

    Laya.class(GameInfo,'GameInfo',_tafangUI);

    var _proto = GameInfo.prototype;

    _proto.uiInit = function(number,tp){
        //设置顶部宽度
        this.top_bg.width = 750;
        
    };

    //设置积分
    _proto.addJifen = function(number,tp){
        if (tp==2){
            this.player2_jifen += number;
            this.play2_score.text = playerName2+'杀敌：' + this.player2_jifen;
            return this.player2_jifen;
        }else{
            this.player1_jifen += number;
            this.play1_score.text = playerName1+'杀敌：' + this.player1_jifen;
            return this.player1_jifen;
        }
    };

    //设置金币
    _proto.addJinbi = function(number){
        this.jinbi += number
        this.jinbi_text.text = this.jinbi;
    };
    //设置木材
    _proto.addMucai = function(number){
        this.mucai += number;
        this.mucai_text.text = this.mucai;
    };
    //设置人口
    _proto.addRenkou = function(number){
        this.renkou += number;
        this.renkou_text.text = this.renkou;
    };

    //设置基地生命
    _proto.jidiHp = function(number){
        this.jidi.text = '基地生命：'+number;
    };

    
    //获取金币
    _proto.getJinbi = function(){
        return this.jinbi;
    };
    //获取木材
    _proto.getMucai = function(){
        return this.mucai;
    };
    //获取人口
    _proto.getRenkou = function(){
        return this.renkou;
    };

    //扣金币
    _proto.minusJinbi = function(number){
        this.jinbi -= number;
        this.jinbi_text.text = this.jinbi;
    };
    //扣木材
    _proto.minusMucai = function(number){
        this.mucai -= number;
        this.mucai_text.text = this.mucai;
    };
    //扣人口
    _proto.minusRenkou = function(number){
        this.renkou -= number;
        this.renkou_text.text = this.renkou;
    };


    return GameInfo;
})(ui.tafangUI);



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

        //this.tiledMap.scale = 1.2;
        //设置缩放
        stage.on(Event.RESIZE, this, this.resize);
        
        //拖拽地图
        stage.on(Event.MOUSE_DOWN, this, self.mouseDown);

        stage.on(Event.MOUSE_UP, this, self.mouseUp);

        //点击地图
        //stage.on(Event.CLICK, this, self.onClick);

        //console.log(this);
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
        var maxY = this.tiledMap.height - 1250; //-90
        if(y>maxY){
            y = maxY;
        };
        this.mX = x;
        this.mY = y;
        this.tiledMap.moveViewPort(x,y);
        this.MapBg.pos(-x,-y);
        tafang.guaiBox.pos(-x,-y);
        //隐藏loading
        loading.style.display = 'none';
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





var Browser = Laya.Browser;
var WebGL = Laya.WebGL;
var Event = Laya.Event;
var Stage = Laya.Stage;
var Sprite = Laya.Sprite;
var Stat =  Laya.Stat;
var Handler = Laya.Handler;
//重玩次数
var playNumber = 0;
var isDanji = true;
var mapload = false;
//玩家阵营
var playerCamp = 'player1';
var playerName = userInfo.name;

var playerName1 = '玩家1';
var playerName2 = '玩家2';

//弹窗对象
var loading = document.getElementById('loading');
var dialog_box = document.getElementById('dialog_box');
var change_moshi = document.getElementById('change_moshi');
var change_room = document.getElementById('change_room');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var js_start = document.getElementById('js_start');
var js_back = document.getElementById('js_back');
var js_sell =  document.getElementById('js_sell');
var tuichu_tip = document.getElementById('tuichu_tip');
var js_jixu = document.getElementById('js_jixu');
var js_tuichu = document.getElementById('js_tuichu');

//游戏数据
var player_build = [];
var sendDetail = null;
//开始游戏
var tafang = null;




//返回按钮 
// window.history.pushState("三国塔防", "");    
// window.addEventListener("popstate", function(e) {  //popstate 只有在history实体被改变时才会触发  
//     gameChange.outRoom();
// }, false);

//关闭按钮
// window.onbeforeunload = function(event){	
//     gameChange.outRoom();
// };


var getroom = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
var gameChange = {
    init:function(){
        this.event();
        var urlroomid = this.urlData('roomid');
        this.roomid = urlroomid?urlroomid:null;

        if(urlroomid){
            this.inRoom(userInfo.name,userInfo.headimgurl);
            //this.player = 2;
            playerCamp = 'player2';
        }else{
            change_moshi.style.display = 'block';
        }
    },
    player: 1,
    event:function(){
        var self = this;
        document.addEventListener('touchstart', function(event) {
            event.stopPropagation();
            event.preventDefault();
            var target = event.target;
            var eName = target.className;

            setTimeout(function(){
                if(eName=='close'){
                    dialog_box.style.display = 'none';
                }else if(eName=='btn js_sell'){
                    //隐藏明细框
                    dialog_box.style.display = 'none';
                    //出售英雄
                    tafang.sell();
                }else if(eName=='danren'){
                    change_moshi.style.display = 'none';
                    playerCamp = 'player1';
                    playerName1 = userInfo.name;
                    tafang = new startGame();
                    isDanji = true;
                }else if(eName=='shuangren'){
                    change_room.style.display = 'block';
                    player1.innerHTML = '<div class="photo"><img src="'+ userInfo.headimgurl +'" width="100%" alt=""></div><p>'+userInfo.name+'</p>';
                    //创建房间
                    self.createRoom(userInfo.name,userInfo.headimgurl);
                    //显示开始按钮
                    js_start.style.display = 'block';
                    //设置玩家1
                    //self.player = 1;
                    playerCamp = 'player1';
                    
                    //event.target.innerHTML = '<span class="c_f60">敬请期待！！！</span>';
                }else if(eName=='btn btn_disabled js_back'){
                    //退出队伍
                    change_moshi.style.display = 'block';
                    change_room.style.display = 'none';
                    player1.innerHTML = '<div class="photo"></div>';
                    player2.innerHTML = '<div class="photo">?</div>';
                    clearInterval(self.getDataTimer);
                    self.outRoom();

                    //重置分享设置
                    var fxInfo = {
                        title: '三国塔防', // 分享标题
                        desc: '三国题材塔防游戏，双人防守更刺激！', // 分享描述
                        link: url_mulu, //分享地址
                        imgUrl:url_mulu+'css/fx_img.png',  //分享的图片地址，需绝对路径
                        success: function () { 
                            //alert(url_mulu+'images/fx_img.jpg');
                        },
                        cancel: function () { 
                            
                        }
                    };
                    wx.onMenuShareTimeline(fxInfo);
                    wx.onMenuShareAppMessage(fxInfo);
                }else if(eName=='btn js_start'){
                    
                    if(player2.getElementsByTagName('img').length){
                        var startRoom = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
                        startRoom.open('GET', 'php/index.php?action=startRoom&roomid='+self.roomid+'&start=1', true);
                        startRoom.onreadystatechange = function() {
                            if(startRoom.readyState==4){
                                if (startRoom.status == 200) { // readyState == 4说明请求已完成
                                    var data = JSON.parse(startRoom.responseText);
                                    console.log('队伍开始游戏！')
                                }else{
                                    alert('网络异常！');
                                }
                            };
                            
                        };
                        startRoom.send();
                        
                    }else{
                        alert('点击微信右上角，给好友发送邀请！');
                    }
                }else if(target.id == 'js_jixu'){
                    tuichu_tip.style.display = 'none';
                    
                }else if(target.id == 'js_tuichu'){

                    //重置分享设置
                    var fxInfo = {
                        title: '三国塔防', // 分享标题
                        desc: '三国题材塔防游戏，双人防守更刺激！', // 分享描述
                        link: url_mulu, //分享地址
                        imgUrl:url_mulu+'css/fx_img.png',  //分享的图片地址，需绝对路径
                        success: function () { 
                            //alert(url_mulu+'images/fx_img.jpg');
                        },
                        cancel: function () { 
                            
                        }
                    };
                    wx.onMenuShareTimeline(fxInfo);
                    wx.onMenuShareAppMessage(fxInfo);
                    //隐藏退出游戏面板
                    tuichu_tip.style.display = 'none';
                    //清楚
                    clearInterval(gameChange.getDataTimer);
                    //关闭所有定时器
                    tafang.clearGame();
                    tafang.restart();
                };
            },100)
            
        }, false);
    },
    getDataTimer : null,
    createRoom:function(name,headimgurl){
        var self = this;
        var room = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
        room.open('GET', 'php/index.php?action=createRoom&name1='+name+'&photo1='+headimgurl, true);
        room.onreadystatechange = function() {
            if(room.readyState==4){
                if (room.status == 200) { // readyState == 4说明请求已完成
                    var data = JSON.parse(room.responseText);
                    self.roomid = data.id;
                    self.getDataTimer = setInterval(function(){
                        self.getNewGameData();
                    },500);


                    //alert(data.id);
                    //分享设置
                    var fxInfo = {
                        title: '好友邀请', // 分享标题
                        desc: '加入我的队伍，我们一起防守阵地，联盟作战！', // 分享描述
                        link: url_mulu+'?roomid='+data.id, //分享地址
                        imgUrl:url_mulu+'css/fx_img.png',  //分享的图片地址，需绝对路径
                        success: function () { 
                            //alert(url_mulu+'images/fx_img.jpg');
                        },
                        cancel: function () { 
                            
                        }
                    };
                    wx.onMenuShareTimeline(fxInfo);
                    wx.onMenuShareAppMessage(fxInfo);
                }else{
                    alert('网络异常！');
                }
            };
            
        };
        room.send();
    },
    inRoom:function(name,headimgurl){
        var self = this;
        var inroom = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
        inroom.open('GET', 'php/index.php?action=inRoom&roomid='+this.roomid+'&name2='+name+'&photo2='+headimgurl, true);
        inroom.onreadystatechange = function() {
            if(inroom.readyState==4){
                if (inroom.status == 200) { // readyState == 4说明请求已完成
                    var data = JSON.parse(inroom.responseText);
                    
                    
                    if(data.code == 3){
                        var json = data.json[0];

                        if(userInfo.headimgurl==json.player1_photo){
                            playerCamp='player1';
                        };


                        change_room.style.display = 'block';
                        player1.innerHTML = '<div class="photo"><img src="'+ json.player1_photo +'" width="100%" alt=""></div><p>'+json.player1_name+'</p>';
                        player2.innerHTML = '<div class="photo"><img src="'+ headimgurl +'" width="100%" alt=""></div><p>'+name+'</p>';

                        self.getDataTimer = setInterval(function(){
                            self.getNewGameData();
                        },500);

                    }else if(data.code == 4){
                        change_moshi.style.display = 'block';
                        alert('队伍已满，点击确定回到大厅！');
                        clearInterval(self.getDataTimer);
                    };
                    
                    
                }else{
                    alert('网络异常！');
                }
            }
        };
        inroom.send();
    },
    outRoom:function(){
        
        var inroom = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
        inroom.open('GET', 'php/index.php?action=outRoom&roomid='+this.roomid+'&player='+playerCamp, true);
        inroom.onreadystatechange = function() {
            if(inroom.readyState==4){
                if (inroom.status == 200) { // readyState == 4说明请求已完成
                    var data = JSON.parse(inroom.responseText);
                    
                    if(data.code == 3){
                        console.log('成功退出队伍!');
                    }
                }else{
                    alert('网络异常！');
                }
            }
        };
        inroom.send();

        
    },
    removeRoom:function(){
        
        var delroom = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
        delroom.open('GET', 'php/index.php?action=removeRoom&roomid='+this.roomid, true);
        delroom.onreadystatechange = function() {
            if(delroom.readyState==4){
                if (delroom.status == 200) { // readyState == 4说明请求已完成
                    var data = JSON.parse(delroom.responseText);
                    
                    if(data.code == 3){
                        console.log('房间删除成功!');
                    }
                }else{
                    alert('网络异常！');
                }
            }
        };
        delroom.send();

    },
    //刷新数据
    start:false,
    chonglian : false,
    getNewGameData:function(){
        var self = this;
        getroom.open('GET', 'php/index.php?action=getData&roomid='+this.roomid, true);
        getroom.onreadystatechange = function() {
            if(getroom.readyState==4){
                if (getroom.status == 200) { // readyState == 4说明请求已完成
                    var data = JSON.parse(getroom.responseText),
                        json = data.json[0];

                    if(json && json.player1_photo){
                        if(json.player2_photo){
                            player2.innerHTML = '<div class="photo"><img src="'+ json.player2_photo +'" width="100%" alt=""></div><p>'+json.player2_name+'</p>';
                        }else{
                            player2.innerHTML = '<div class="photo">?</div>';
                        };

                        //开始游戏，切地图渲染完毕
                        if(json.start !='0' && !self.chonglian){

                            if(!self.start){
                                self.start = true;
                                playerName1 = json.player1_name.replace(/\?/g,'').substring(0,5);
                                playerName2 = json.player2_name.replace(/\?/g,'').substring(0,5);

                                isDanji = false;
                                tafang = new startGame();
                                
                                change_moshi.style.display = 'none';
                                change_room.style.display = 'none';

                                
                                //self.getBoshu();
                                if(json.boshu>1){
                                    tafang.send('您掉线了，已经重新连接!');
                                };
                                
                                
                                
                                
                                if(json.jidiHp<=0 && json.boshu>0){
                                    tafang.send('游戏已经结束!');
                                    clearInterval(gameChange.getDataTimer);
                                    //清理
                                    tafang.clearGame();
                                    //关闭所有定时器
                                    var btn_shibai = tafang.gameinfo.btn_shibai;
                                    btn_shibai.visible = true;
                                    btn_shibai.on('click',this,function(){
                                        btn_shibai.removeSelf();
                                        tafang.restart();
                                    });
                                }else if(json.jidiHp>0 && json.boshu>0){
                                    //重连后设置最新波数
                                    tafang.startGuai(json.boshu);
                                };

                                //设置基地血量
                                tafang.jidiHp = json.jidiHp;
                                tafang.gameinfo.jidiHp(json.jidiHp);
                                tafang.boshu = json.boshu;
                            }


                            
                            

                            //获取最新波数信息
                            if(json.boshu>0 && mapload){
                                self.chonglian = true;
                                //重连后设置建筑
                                if(playerCamp=='player1' && json.player1_build){
                                    var player_build = json.player1_build;
                                    var thisBuild = player_build.split(','); 
                                    tafang.updateBuild(thisBuild,'player1');
                                }else if(json.player2_build){
                                    var player_build = json.player2_build;
                                    var thisBuild = player_build.split(','); 
                                    tafang.updateBuild(thisBuild,'player2');
                                }
                                
                                
                            }
                            
                        };
                        

                        //地图渲染完毕
                        if(mapload){
                            //刷新队友建筑
                            if(playerCamp=='player1'){
                                var player_build = json.player2_build;
                                if(player_build){
                                    var thisBuild = player_build.split(',');
                                    tafang.updateBuild(thisBuild,'player2');
                                }
                            }else{
                                var player_build = json.player1_build;
                                if(player_build){
                                    var thisBuild = player_build.split(',');
                                    tafang.updateBuild(thisBuild,'player1');
                                }
                            }
                        }
                        
                    }else{
                        clearInterval(self.getDataTimer);
                        alert('队伍已解散！');
                        //退出队伍
                        change_moshi.style.display = 'block';
                        change_room.style.display = 'none';
                        player1.innerHTML = '<div class="photo"></div>';
                        player2.innerHTML = '<div class="photo">?</div>';
                    }
                    
                }else{
                    console.log('网络异常！');
                }
            }
            
        };
        getroom.send();
    },
    upDataBuild:function(){
        var buildData = tafang.gameMap.buildArr;
        var inroom = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
        inroom.open('GET', 'php/index.php?action=buildInfo&roomid='+this.roomid+'&player='+playerCamp+'&build='+buildData.join(','), true);
        inroom.onreadystatechange = function() {
            if(inroom.readyState==4){
                if (inroom.status == 200) { // readyState == 4说明请求已完成
                    var data = JSON.parse(inroom.responseText);
                    if(data.code == 3){
                        console.log('更新建筑数据!');
                    }
                }else{
                    alert('网络异常！');
                }
            }
        };
        inroom.send();
    },
    upDataBoshu:function(boshu){
        var setBoshu = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
        setBoshu.open('GET', 'php/index.php?action=setBoshu&roomid='+this.roomid+'&boshu='+boshu, true);
        setBoshu.onreadystatechange = function() {
            if(setBoshu.readyState==4){
                if (setBoshu.status == 200) { // readyState == 4说明请求已完成
                    var data = JSON.parse(setBoshu.responseText);
                    if(data.code == 3){
                        console.log('波数更新成功!');
                    }
                }else{
                    alert('网络异常！');
                }
            }
        };
        setBoshu.send();
    },

    setjidiHp:function(){
        var setHp = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
        setHp.open('GET', 'php/index.php?action=setHp&roomid='+this.roomid+'&jidiHp='+tafang.jidiHp, true);
        setHp.onreadystatechange = function() {
            if(setHp.readyState==4){
                if (setHp.status == 200) { // readyState == 4说明请求已完成
                    var data = JSON.parse(setHp.responseText);
                    if(data.code == 3){
                        console.log('基地血量更新成功!');
                    }
                }else{
                    alert('网络异常！');
                }
            }
        };
        setHp.send();
    },
    getBoshu:function(){
        var getBoshuHttp = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
        getBoshuHttp.open('GET', 'php/index.php?action=getBoshu&roomid='+this.roomid, true);
        getBoshuHttp.onreadystatechange = function() {
            if(getBoshuHttp.readyState==4){
                if (getBoshuHttp.status == 200) { // readyState == 4说明请求已完成
                    var data = JSON.parse(getBoshuHttp.responseText);
                    if(data.code == 3){
                        console.log('波数获取成功!');
                        //断线重连后设置当前波数
                        tafang.boshu = parseInt(data.boshu);
                    }
                }else{
                    alert('网络异常！');
                }
            }
        };
        getBoshuHttp.send();
    },
    urlData:function(dataName){
        function getUrlVars(){ 
            var vars = [], hash; 
            var hashes = window.location.href.slice(window.location.href.indexOf('?')+1).split('&'); 
            for(var i = 0; i < hashes.length; i++) { 
                hash = hashes[i].split('='); 
                vars.push(hash[0]); 
                vars[hash[0]] = hash[1]; 
            } 
            return vars; 
        } 
        var params = getUrlVars(); 
        for(var i=0;i<params.length;i++){
            if(params[i]==dataName){ 
                return decodeURI(params[params[i]]);
            }
        };
        return false;
    }
};

gameChange.init();


var startGame = (function(_Laya){

    function startGame(){
        //游戏属性
        this.jidiHp = 20;
        //游戏刷怪时间（毫秒）
        this.guaiStartTime = 20000;
        //刷怪间隔--每个小怪出现的间隔
        this.guaiSpeed = 900;
        //每波怪的间隔系数
        this.nextTime = 25;
        //每波怪刷多少个
        this.guaiLength = 30;
        //boss间隔多少波
        this.bossJiange = 15;
        //建筑升一级需要多少经验
        this.lvExp = 25;
        //开始游戏
        this.init();
        //游戏消息记录
        this.sendArr = [];
        //当前选中的英雄
        this.selectBuild = null;

        //测试参数 
         //this.guaiStartTime = 1000;
         //this.guaiSpeed = 500;
         //this.nextTime = 2;
        // this.guaiLength = 2;
         //this.lvExp = 1;
        // this.bossJiange = 2;

    };

    //建筑数组
    var buildData = [
        {
            'name' : '张飞',
            'jinbi' : 500,
            'renkou' : 2,
            'mucai' : 0,
            'camp' : playerCamp,
            'attack' : 800,
            'range' : 450,
            'bigRange': 450,
            'bigType' : 3,
            'bigDetail' : '致命一击，造成5倍伤害，每攻击4次触发一次。',
            'miji': '张飞、关羽、刘备3个英雄都达到3级后，间距在600像素范围内，可以触发逆天秘技-死亡锁链。',
            'jiange' : 1000,
            'maxLen' : 4,
            'lv' : 1
        },
        {
            'name' : '夏侯惇',
            'jinbi' : 1000,
            'renkou' : 3,
            'mucai' : 0,
            'camp' : playerCamp,
            'attack' : 2000,
            'range' : 450,
            'bigRange' : 450,
            'bigType' : 1,
            'bigDetail' : '掌控自然之力，召唤超级龙卷风对敌人发起攻击，每攻击6次触发一次。',
            'miji': '无',
            'jiange' : 1000,
            'maxLen' : 6,
            'lv' : 1
        },
        {
            'name' : '诸葛亮',
            'jinbi' : 2500,
            'renkou' : 4,
            'mucai' : 1,
            'camp' : playerCamp,
            'attack' : 4000,
            'range' : 350,
            'bigRange': 450,
            'bigType' : 2,
            'bigDetail' : '寒冰术，对范围内所有敌人发起攻击，使敌人减速50%，寒冰持续时间（1.5*人物等级）秒，每攻击10次触发一次。',
            'miji': '无',
            'jiange' : 1000,
            'maxLen' : 10,
            'lv' : 1
        },
        {
            'name' : '关羽',
            'jinbi' : 6000,
            'renkou' : 4,
            'mucai' : 1,
            'camp' : playerCamp,
            'attack' : 8000,
            'range' : 550,
            'bigRange': 550,
            'bigType' : 4, //致命一击+眩晕
            'bigDetail' : '致命一击，造成8倍伤害，并使敌人眩晕（1*人物等级）秒，每攻击2次触发一次。',
            'miji': '张飞、关羽、刘备3个英雄都达到3级后，间距在600像素范围内，可以触发逆天秘技-死亡锁链。',
            'jiange' : 900,
            'maxLen' : 2,
            'lv' : 1
        },
        {
            'name' : '赵云',
            'jinbi' : 12000,
            'renkou' : 5,
            'mucai' : 3,
            'camp' : playerCamp,
            'attack' : 20000,
            'range' : 450,
            'bigRange': 450,
            'bigType' : 5, //风暴
            'bigDetail' : '抢刃风暴，疯狂旋转百鸟朝凤枪，形成飓风攻击周围大片敌人，每攻击3次触发一次。攻击太高写不下...',
            'miji': '无',
            'jiange' : 1000,
            'maxLen' : 3,
            'lv' : 1
        },
        {
            'name' : '刘备',
            'jinbi' : 25000,
            'renkou' : 5,
            'mucai' : 5,
            'camp' : playerCamp,
            'attack' : 80000,
            'range' : 950,
            'bigRange': 450,
            'bigType' : 6, //光环
            'bigDetail' : '犒赏三军，使大招范围内的所有友军士气大增，攻击、攻速提升20%，BUFF持续（人物等级*2）秒，每攻击15次触发一次。',
            'miji': '张飞、关羽、刘备3个英雄都达到3级后，间距在600像素范围内，可以触发逆天秘技-死亡锁链。',
            'jiange' : 600,
            'maxLen' : 15,
            'lv' : 2
        }
    ];
    
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
        Laya.stage.scaleMode = 'fixedall';
    
        

        //创建地图
        this.gameMapInit();

        //初始化资源和积分
        this.gameinfo = new GameInfo();

        //添加怪物容器
        this.guaiBox = new Laya.Sprite();

        this.boshu = 0;

        mapload = false;

        //打BOSS死亡数量
        this.bigBossDie = 0;
        

    };
    //播放动画
    _proto.gameMapInit = function(){
        var gameSelf = this;
        //创建地图和默认信息
        this.gameMap = new CreateMap(function(){
            var self = this;

            
            
            //加载图集英雄
            Laya.loader.load("../bin/res/atlas/pic.atlas",Handler.create(this,function(){

                
                mapload = true;
                
                //添加怪物容器
                gameSelf.guaiBox.pos(0,0);
                gameSelf.guaiBox.name = 'guaiBox';
                gameSelf.guaiBox.size(self.tiledMap.width, self.tiledMap.height);
                Laya.stage.addChild(gameSelf.guaiBox);
                //玩法提示
                gameSelf.send('系统提示：点击草坪区域，建造防御将领！',true);
                
                
                
                
                // Laya.timer.once(gameSelf.guaiStartTime, this, function(){
                    
                // })
                
                

                //添加建筑层
                self.MapBg = new Laya.Sprite();
                self.MapBg.pos(0,0);
                self.MapBg.name = 'MapBg';
                self.MapBg.size(self.tiledMap.width, self.tiledMap.height);
                Laya.stage.addChild(self.MapBg);


                //添加传送阵
                var animation = Laya.Animation;
                animation.createFrames(['pic/chuansong1.png','pic/chuansong2.png','pic/chuansong3.png'],'chuansong');
                var chuansong = new Laya.Animation();
                chuansong.size(100,100);
                chuansong.interval = 200;
                chuansong.x = -30;
                chuansong.y = 530;
                self.MapBg.addChild(chuansong);
                chuansong.play(0,true,'chuansong');

                var chuansong2 = new Laya.Animation();
                chuansong2.size(100,100);
                chuansong2.interval = 200;
                chuansong2.x = 3930;
                chuansong2.y = 1430;
                self.MapBg.addChild(chuansong2);
                chuansong2.play(0,true,'chuansong');

                //初始化位置
                if(playerCamp=='player1'){
                    this.setPos(500,0);
                }else{
                    this.setPos(2700,600);
                }
                


                //开始计时
                var game_time = gameSelf.gameinfo.game_time,
                    times = 0;
                game_time.text = '0:00';
                Laya.timer.loop(1000, this, function(){
                    times++;
                    var Syu = times%60,
                        M = parseInt(times/60),
                        Myu = M%60,
                        H = parseInt(M/60);
                    game_time.text = (H>0?H+':':'') + Myu + ':' + (Syu>9?Syu:'0'+Syu);
                });
                
                //开始刷怪
                if(gameSelf.boshu==0){
                    //刷怪提醒
                    gameSelf.send('敌军'+gameSelf.guaiStartTime/1000+'秒后到达战场！\n共60波怪，这是一场血战...');
                    if(playerCamp = 'player1'){
                        gameSelf.send('您是玩家1，怪物从左侧传送阵出现');
                    }else{
                        gameSelf.send('您是玩家2，怪物从右侧传送阵出现');
                    }
                    

                    gameSelf.startTimer = setTimeout(function(){
                        gameSelf.send('',true);
                        gameSelf.startGuai(1);
                    },gameSelf.guaiStartTime);
                }
                
                
                //游戏面板
                Laya.stage.addChild(gameSelf.gameinfo);

                //初始化积分
                gameSelf.gameinfo.addJifen(0);
                if(!isDanji){
                    gameSelf.gameinfo.addJifen(0,2);
                }else{
                    gameSelf.gameinfo.play2_score.text = '';
                }
                

                //初始化资源
                gameSelf.gameinfo.addJinbi(800);
                gameSelf.gameinfo.addMucai(10);
                gameSelf.gameinfo.addRenkou(20);
                
                //添加选英雄面板
                Laya.stage.addChild(gameSelf.gameinfo.change_build);

                //创建Image实例
                Laya.stage.on('click', this,gameSelf.onClick);

                //显示选中格子
                this.change_rect = new Laya.Sprite();
                self.MapBg.addChild(this.change_rect);
                
                //显示退出游戏按钮
                gameSelf.gameinfo.btn_tuichu.visible = true;
                Laya.stage.addChild(gameSelf.gameinfo.btn_tuichu);
                
                //检测是否激活秘技
                gameSelf.addMiji();


                //添加游戏广告
                gameSelf.GameCreaterInfo();
                
            }),null,Laya.Loader.ATLAS);


        });
    };

    

    _proto.onClick = function(e){
        //e.stopPropagation();
        var eName = e.target.name;
        var self = this,
            gameSelf = tafang;
        var gameinfo = gameSelf.gameinfo,
            buildArr = this.buildArr;
        
        //检测点击
        
        if(self.isclick){
            
            var tiledMap = self.tiledMap;
            var thisMapLayer = tiledMap.getLayerByIndex(0);
            var p = new Laya.Point(0, 0);
            
            //获取对应格子
            thisMapLayer.getTilePositionByScreenPos(Laya.stage.mouseX, Laya.stage.mouseY, p);
            var thisPoint = {x:Math.floor(p.x),y:Math.floor(p.y)};

            //点击地图
            
            if(eName=='' || eName=='MapBg' ){
                //显示选中格子
                var gridW = gridH = tiledMap.tileWidth,
                    thisRect = this.change_rect.graphics;
                thisRect.clear();

                if(thisMapLayer.getTileData(thisPoint.x,thisPoint.y)!=4){
                    var hasBuild = false;
                    //检测当前格子是否有建筑
                    for(var i=0;i<buildArr.length;i++){
                        var thisArr = buildArr[i].split('|');
                        if(thisPoint.x+'_'+thisPoint.y == thisArr[0] && thisArr[2]!=0){
                            hasBuild = true;
                            return false;
                        }
                    };

                    //console.log(buildArr);

                    thisRect.drawLines(thisPoint.x*gridW, thisPoint.y*gridH, [0, 0,0,100,100,100,100,0,0,0], '#FF7F50',2);
                    //显示建造列表
                    gameinfo.change_build.visible = true;
                    //点击建造按钮
                    var btn_jianzao = gameinfo.btn_jianzao;
                    //传递当前建造得对象
                    btn_jianzao.thisPoint = thisPoint;
                    gameSelf.changeBuild(0);
                }else{
                    //拖动隐藏
                    gameinfo.change_build.visible = false;
                };
            }else if(/build_/.test(eName)){
                //点击选英雄模块
                var num = eName.split('_')[1];
                //设置当前选择得英雄
                gameSelf.changeBuild(num-1);

            }else if(eName=='btn_jianzao'){
                //点击建造按钮
                gameSelf.clickCreate();
            }else if(eName=='btn_tuichu'){
                //退出游戏
                tuichu_tip.style.display = 'block';
            }else if(eName=='张飞' || eName=='夏侯惇' || eName=='诸葛亮' || eName=='关羽' || eName=='赵云' || eName=='刘备'){
                gameSelf.buildInfo(e.target);
            }
            

        };
        

    };

    _proto.changeBuild = function(num){
        //设置当前选择得英雄
        var gameinfo = this.gameinfo;
        
        gameinfo.btn_jianzao.thisBuildNum = num;
        //设置英雄简介
        var thisBuildData = buildData[num];
        gameinfo.build_name.text = thisBuildData.name;
        gameinfo.build_consume.text = '消耗：'+thisBuildData.jinbi+'黄金、'+thisBuildData.renkou+'人口、'+thisBuildData.mucai+'木材';
        gameinfo.build_attack.text = '攻击：'+thisBuildData.attack;
        gameinfo.build_range.text = '范围：'+thisBuildData.range;
        gameinfo.build_jiange.text = '攻速：'+parseInt(100+(1000-thisBuildData.jiange)/10);
        gameinfo.build_big_detail.text = thisBuildData.bigDetail;

    };

    //点击建造按钮
    _proto.clickCreate = function(){
        var gameinfo = this.gameinfo,
            btn_jianzao = gameinfo.btn_jianzao,
            thisPoint = btn_jianzao.thisPoint,
            thisBuildNum = btn_jianzao.thisBuildNum;
        //thisMapLayer.getScreenPositionByTilePos(thisPoint.x, thisPoint.y, p);
        //格子宽高
        var gridW = gridH = this.gameMap.tiledMap.tileWidth;

        //依赖父级对象
        var parentObj = {
            'gridW' : gridW,
            'gridH' : gridH,
            'thisPoint' : thisPoint,
            'gameinfo' : gameinfo,
            'map' : this.gameMap
        };
        
        //建造建筑
        this.setBuild(buildData[thisBuildNum],parentObj,thisBuildNum);
        
    };

    //建造函数
    _proto.setBuild = function(data,parentObj,thisBuildNum){
        var gameinfo = parentObj.gameinfo;
        data.camp = playerCamp;
        //是否有资源建造
        if(gameinfo.getJinbi() < data.jinbi){
            //资源不足
            this.send('金币不足，加油杀敌!');
        }else if(gameinfo.getRenkou() < data.renkou){
            this.send('人口不足，每杀敌200个或击杀BOSS可以奖励人口!');
        }else if(gameinfo.getMucai() < data.mucai){
            this.send('木材不足，击杀BOSS可以奖励木材!');
        }else{

            //位置
            var thisPoint = parentObj.thisPoint;
            var pointXY = thisPoint.x+'_'+thisPoint.y;


            gameinfo.minusJinbi(data.jinbi);
            gameinfo.minusRenkou(data.renkou);
            gameinfo.minusMucai(data.mucai);
            
            
            //添加建筑
            var build = new CreateBuild();
            build.name = data.name;
            //build.init(data.camp,data.name,data.attack,data.range,data.bigRange,data.bigType,data.bigDetail,data.miji,data.jiange,data.maxLen,data.lv);  //阵营，名字，攻击，范围，间隔，等级
            build.init(data);
            build.pos(thisPoint.x*parentObj.gridW,thisPoint.y*parentObj.gridH);
            build.width = parentObj.gridW;
            build.height = parentObj.gridH;
            build.pointXY = pointXY;

            //添加到舞台上显示
            parentObj.map.MapBg.addChild(build);
            //记录创建建筑得格子

            //检测当前格子是否有建筑
            var hasBuild =false;
            var buildArr = parentObj.map.buildArr;
            for(var i=0;i<buildArr.length;i++){
                var thisArr = buildArr[i].split('|');
                if(thisPoint.x+'_'+thisPoint.y == thisArr[0]){
                    hasBuild = true;
                    buildArr[i] = pointXY+'|'+thisBuildNum+'|'+data.lv;
                    break;
                }
            };
            if(!hasBuild){
                buildArr.push(pointXY+'|'+thisBuildNum+'|'+data.lv);
            }
            
            
            //更新服务器数据
            if(!isDanji){
                gameChange.upDataBuild();
            }
            

            //关闭建筑列表
            gameinfo.change_build.visible = false;
            //隐藏选中格子
            var thisRect = parentObj.map.change_rect.graphics;
            thisRect.clear();


            
            
        }
    };

    //更新其他玩家的建筑数据
    _proto.updateBuild = function(playerBuild,camp){
        var gameMap = this.gameMap,
            MapBg = gameMap.MapBg,
            gridW = gameMap.tiledMap.tileWidth,
            gridH = gameMap.tiledMap.tileWidth;
        //服务器数据
        for(var i=0;i<playerBuild.length;i++){
            var thisArr = playerBuild[i].split('|'),
                thisBuildData = buildData[parseInt(thisArr[1])],
                thisData = {},
                thisLv = parseInt(thisArr[2]);
            
                
            
            //拷贝对象
            for(var key in thisBuildData){
                thisData[key] = thisBuildData[key];
            };

            var hasThis = false;
            //检测地图上建筑是否需要建造或者删除
            for(var j=0;j<MapBg.numChildren;j++){
                var thisBuild = MapBg.getChildAt(j),
                    thisX = thisBuild.x,
                    thisY = thisBuild.y;
                
                if(thisBuild.camp==camp){
                    thisPonitStr = thisX/gridW+'_'+thisY/gridH;
                    //服务器和地图上都存在这个对象
                    if(thisArr[0] == thisPonitStr){ // && thisBuild.camp=='player2'
                        
                        if(thisLv==0){
                            thisBuild.removeSelf();
                            thisBuild.visible = false;
                            thisBuild.destroy(true);
                        }else{
                            hasThis = true;
                        }
                    };  
                    
                };
                
                
            };

            
            if(!hasThis && thisLv){
                var pointArr = thisArr[0].split('_');
                thisData.camp = camp;
                thisData.lv = thisLv;

                //升级操作
                if(thisLv==2){
                    thisData.attack *= 1.5; //this.defattack*this.lv
                    //攻击范围
                    thisData.range *= 1.1;
                    //大招范围
                    thisData.bigRange *= 1.1;
                    //攻击间隔
                    thisData.jiange *= 0.8;
                }else if(thisLv==3){
                    thisData.attack *= 1.5; //this.defattack*this.lv
                    thisData.attack *= 1.5; //this.defattack*this.lv
                    //攻击范围
                    thisData.range *= 1.1;
                    thisData.range *= 1.1;
                    //大招范围
                    thisData.bigRange *= 1.1;
                    thisData.bigRange *= 1.1;
                    //攻击间隔
                    thisData.jiange *= 0.8;
                    thisData.jiange *= 0.8;
                }

                //添加建筑
                var build = new CreateBuild();
                build.init(thisData);
                build.pos(pointArr[0]*gridW,pointArr[1]*gridH);
                build.width = gridW;
                build.height = gridH;

                //添加到舞台上显示
                MapBg.addChild(build);
            }
            
        };
        //console.log(newData);
        
    }


    //出售英雄
    _proto.sell = function(){
        var selectBuild = this.selectBuild;
        if(selectBuild){
            var buildArr = this.gameMap.buildArr,
                pointXY = selectBuild.pointXY;
            //当前位置
            for(var i=0;i<buildArr.length;i++){
                var thisArr = buildArr[i].split('|');
                if(thisArr[0] == pointXY){
                    //buildArr.splice(i,1);
                    //出售英雄等级设为0
                    buildArr[i] = thisArr[0] +'|'+ thisArr[1] +'|0';
                    break;
                };
            };

            //更新服务器数据
            if(!isDanji){
                gameChange.upDataBuild();
            }

            //当前价格
            var price = selectBuild.price,
                gameinfo = this.gameinfo;
             //初始化资源
            gameinfo.addJinbi(price.jinbi*0.8);
            gameinfo.addMucai(price.mucai);
            gameinfo.addRenkou(price.renkou);
            this.send('返还金币'+price.jinbi*0.8+'、木材'+price.mucai+'、人口'+price.renkou);
            //摧毁
            selectBuild.removeSelf();
            selectBuild.visible = false;
            selectBuild.destroy(true);
            //返还金币
            
        }
    };

    _proto.addMiji = function(){
        //初始数据
        this.mijiData = [];
        
        //创建线条精灵
        var ape = new Sprite();
        var graphics = ape.graphics;
        this.gameMap.MapBg.addChild(ape);
        //ape.zOrder = 10;
        
        //发光初始值
        var colorNum = 1,
            isUp = 1;
        //线条发光
        Laya.timer.frameLoop(2,this,function(){
            //检测是否存在秘技
             var data = this.mijiData;
             if(!data.length){ return;};

            if(colorNum>7){isUp=-1;}else if(colorNum<3){isUp = 1;};
            colorNum+=isUp;
            //画直线
            graphics.clear();
            //检测多个秘技
            for(var i=0;i<data.length;i++){
                var thisMijiData = data[i],
                    thisXY = thisMijiData.xyArr,
                    x1 = thisXY[0],y1 = thisXY[1],
                    x2 = thisXY[2],y2 = thisXY[3],
                    x3 = thisXY[4],y3 = thisXY[5];
                //渲染线条
                graphics.drawPoly(0, 0, thisMijiData.xyArr,null,thisMijiData.lineColor,colorNum);
                //创建一个发光滤镜
                var glowFilter = new Laya.GlowFilter(thisMijiData.filterColor, colorNum, 0, 0);


                //碰撞检测
                var guaiBox = this.guaiBox;
                for(var j=0;j<guaiBox.numChildren;j++){
                    var thisGuai = guaiBox.getChildAt(j);
                    var guaiR = thisGuai.radius,
                        x = thisGuai.x + thisGuai.width/2,
                        y = thisGuai.y + thisGuai.height/2;
                        
                    var isInMiji = this.pointInTriangle(x,y,x1,y1,x2,y2,x3,y3);
                    if(isInMiji){
                        //怪物归属
                        thisGuai.locking = thisMijiData.camp;
                        //设置血量
                        var attack = thisMijiData.attack;
                        thisGuai.setHp(attack);
                    }
                }


            }
            //渲染秘技
            ape.filters = [glowFilter];

        });
    };

    //某个点是否存在三角形的范围内
    _proto.pointInTriangle = function(x0, y0, x1, y1, x2, y2, x3, y3) {
        var divisor = (y2 - y3)*(x1 - x3) + (x3 - x2)*(y1 - y3);
        var a = ((y2 - y3)*(x0 - x3) + (x3 - x2)*(y0 - y3)) / divisor;
        var b = ((y3 - y1)*(x0 - x3) + (x1 - x3)*(y0 - y3)) / divisor;
        var c = 1 - a - b;

        return a >= 0 && a <= 1 && b >= 0 && b <= 1 && c >= 0 && c <= 1;
    }

    _proto.startGuai = function(setBoshu){
        var gameSelf = this;
        //添加怪物
        var guai = new CreateGuai();
        this.boshu = setBoshu;
        var thisNum = 0;
        var guaiName = 1;
        var bossName = 1;
        gameSelf.send('第'+this.boshu+'波敌人,即将到达战场');

        //组队难度系数
        var onlineXishu = 1;
        if(!isDanji){
            onlineXishu = 1.2;
        }

        Laya.timer.loop(gameSelf.guaiSpeed, this,shuaGuai);

        function shuaGuai(){
            
            thisNum++;
            if(thisNum<=this.guaiLength){
                var boshu = this.boshu;
                var thisGuai1 = Laya.Pool.getItemByClass('CreateGuai',CreateGuai);
                var thisGuai2 = null;
                if(!isDanji){
                    thisGuai2 = Laya.Pool.getItemByClass('CreateGuai',CreateGuai);
                }
                
                //每波怪属性算法
                //4+parseInt(boshu*0.1)
                //刷BOSS
                if(boshu%this.bossJiange==0){
                    thisNum+=29;
                    if(boshu==60){
                        thisGuai1.init('guaiwu_player1','boss'+bossName,900*boshu*boshu*40*onlineXishu,4,boshu*50,true); //阵营，名字，血量，移动速度，携带金币
                        if(!isDanji){
                            thisGuai2.init('guaiwu_player2','boss'+bossName,900*boshu*boshu*40*onlineXishu,4,boshu*50,true); //阵营，名字，血量，移动速度，携带金币
                        }
                        gameSelf.send('终极BOSS来袭，绝对不能放走它，不然就前功尽弃了！',true); 
                        //停止刷怪
                        Laya.timer.clear(this,shuaGuai);
                    }else{
                        thisGuai1.init('guaiwu_player1','boss'+bossName,800*boshu*boshu*18*onlineXishu,4,boshu*50,true); //阵营，名字，血量，移动速度，携带金币
                        if(!isDanji){
                            thisGuai2.init('guaiwu_player2','boss'+bossName,800*boshu*boshu*18*onlineXishu,4,boshu*50,true); //阵营，名字，血量，移动速度，携带金币
                        }
                        gameSelf.send('警告：BOSS来袭，抓紧防御！',true);
                        setTimeout(function(){
                            gameSelf.send('',true);
                        },10000);
                    }
                    
                    bossName++;
                    if(bossName>4){bossName=1;}
                }else{
                    thisGuai1.init('guaiwu_player1','guai'+guaiName,730*boshu*boshu*onlineXishu,4+parseInt(boshu*0.06),20+parseInt(boshu)); //阵营，名字，血量，移动速度，携带金币
                    if(!isDanji){
                        thisGuai2.init('guaiwu_player2','guai'+guaiName,730*boshu*boshu*onlineXishu,4+parseInt(boshu*0.06),20+parseInt(boshu)); //阵营，名字，血量，移动速度，携带金币
                    }
                }
                
                thisGuai1.pos(-50,500);
                //添加到舞台上显示
                gameSelf.guaiBox.addChild(thisGuai1);

                if(!isDanji){
                    thisGuai2.pos(4000,1400);
                    gameSelf.guaiBox.addChild(thisGuai2);
                }
                
            }else if(thisNum%gameSelf.nextTime==0){
                this.boshu++;
                thisNum = 0;
                if(this.boshu<60){
                    gameSelf.send('第'+this.boshu+'波敌人,即将到达战场');
                }else{
                    gameSelf.send('第'+this.boshu+'波敌人,终极BOSS即将到达战场');
                }
                

                guaiName++;
                if(guaiName>7){guaiName=1;}

                if(!isDanji){
                    //同步怪物波数信息
                    gameChange.upDataBoshu(this.boshu);
                }
                
                
            }
            
        }

        //移动地图上的怪物
        var self = this;
        Laya.timer.frameLoop(2,this,this.guaiRun);
    };

     _proto.guaiRun = function(){
        //循环建所有怪物
        var guaiBox = this.guaiBox;
        for(var i=0;i<guaiBox.numChildren;i++){
            var guai = guaiBox.getChildAt(i);
            
            if(guai && guai.camp=='guaiwu_player1'){
                //移动玩家1的怪物
                if(guai.x>=3000){
                    guai.y += guai.run;
                }else{
                    guai.x += guai.run;
                };
                //怪物通过，游戏生命减少
                if(guai.y>=2000){

                    if(/boss/.test(guai.name)){
                        //基地血量信息
                        if(guai.name=='boss4'){
                            this.jidiHp=0;
                            this.send('终极BOSS冲进基地，基地生命剩余'+this.jidiHp);
                        }else{
                            this.jidiHp-=4;
                            this.send('1个BOSS冲进基地，基地生命剩余'+this.jidiHp);
                        };
                        
                    }else{
                        //基地血量信息
                        this.jidiHp--;
                        this.send('1个小怪冲进基地，基地生命剩余'+this.jidiHp);
                    }

                    this.gameinfo.jidiHp(this.jidiHp);
                    //同步服务器血量
                    if(!isDanji){
                        gameChange.setjidiHp();
                    }
                    

                    
                    //console.log(guai)
                    //回收动画
                    //Laya.Pool.recover('guai',guai);

                    //设置游戏生命
                    if(guai.name=="boss4" || this.jidiHp<=0){
                        //关闭数据刷新
                        clearInterval(gameChange.getDataTimer);
                        //删除房间
                        //gameChange.removeRoom();
                        //清理
                        this.clearGame();
                        //关闭所有定时器
                        var btn_shibai = this.gameinfo.btn_shibai;
                        btn_shibai.visible = true;
                        btn_shibai.on('click',this,function(){
                            btn_shibai.removeSelf();
                            tafang.restart();
                        });
                        
                    };

                    //移除
                    guai.y = 3000;
                    guai.removeSelf();
                    guai.destroy(true);
                    
                }
            
            }else if(guai && guai.camp=='guaiwu_player2'){
                //移动玩家2的怪物
                if(guai.x<=920){
                    guai.y -= guai.run;
                }else{
                    guai.x -= guai.run;
                }

                //怪物通过，游戏生命减少
                if(guai.y<=0){

                    if(/boss/.test(guai.name)){
                        //基地血量信息
                        if(guai.name=='boss4'){
                            this.jidiHp=0;
                            this.send('终极BOSS冲进基地，基地生命剩余'+this.jidiHp);
                        }else{
                            this.jidiHp-=4;
                            this.send('1个BOSS冲进基地，基地生命剩余'+this.jidiHp);
                        };
                        
                    }else{
                        //基地血量信息
                        this.jidiHp--;
                        this.send('1个小怪冲进基地，基地生命剩余'+this.jidiHp);
                    }

                    this.gameinfo.jidiHp(this.jidiHp);
                    //同步服务器血量
                    if(!isDanji){
                        gameChange.setjidiHp();
                    }

                    
                    //console.log(guai)
                    //回收动画
                    //Laya.Pool.recover('guai',guai);

                    //设置游戏生命
                    if(guai.name=="boss4" || this.jidiHp<=0){
                        //关闭数据刷新
                        clearInterval(gameChange.getDataTimer);
                        //删除房间
                        //gameChange.removeRoom();
                        //清理
                        this.clearGame();
                        //关闭所有定时器
                        var btn_shibai = this.gameinfo.btn_shibai;
                        btn_shibai.visible = true;
                        btn_shibai.on('click',this,function(){
                            btn_shibai.removeSelf();
                            tafang.restart();
                        });
                        
                    };

                    //移除
                    guai.y = -1000;
                    guai.removeSelf();
                    guai.destroy(true);
                    
                }
            }
        }
     };

    
    //游戏消息发送
    _proto.send = function(text,isXitong){
        var gameinfo = this.gameinfo,
            thisSend = this.sendArr;

        if(isXitong){
            gameinfo.xitong_send.text = text;
        }else{
            thisSend.push(text);
            if(thisSend.length>5){
                thisSend.shift();
            };
            gameinfo.send_box.text = thisSend.join('\n');
        }
    };

    

    //查看英雄属性
    _proto.buildInfo = function(build){
        if(build.camp==playerCamp){
            js_sell.style.display = 'block';
        }else{
            js_sell.style.display = 'none';
        }
        
        dialog_box.style.display = 'block';
        var infoHtml = '<p><b>归属：</b><span>'+build.camp+'</span></p>'
                    +' <p><b>等级：</b><span>Lv'+build.lv+'</span></p>'
                    +' <p><b>经验：</b><span>'+build.exp+'/'+build.lv*this.lvExp+'</span></p>'
                    +' <p><b>攻击：</b><span>'+parseInt(build.attack)+'</span></p>'
                    +' <p><b>攻速：</b><span>'+parseInt(100+(1000-build.jiange)/10)+'</span></p>'
                    +' <p><b>攻击范围：</b><span>'+parseInt(build.range)+'</span></p>'
                    +' <p><b>大招范围：</b><span>'+parseInt(build.bigRange)+'</span></p>'
                    +' <p><b>大招：</b><span>'+build.bigDetail+'</span></p>'
                    +' <p><b>秘技：</b><span>'+build.miji+'</span></p>';
        var dt = dialog_box.getElementsByTagName('dt')[0];
        var dd = dialog_box.getElementsByTagName('dd')[0];
        dt.innerHTML = build.name;
        dd.innerHTML = infoHtml;
        this.selectBuild = build;
    }

    


    //游戏结束    
    _proto.gameOver = function(){
        var self = this;
        
        this.clearGame();

        this.GameText("防守失败，再玩一次！");

        
    };

    //清理游戏
    _proto.clearGame = function(){
        //关闭所有定时器
        Laya.timer.clearAll(this);
        //移除所有事件
        Laya.stage.off(Event.MOUSE_UP, this.gameMap,this.gameMap.mouseUp);
        Laya.stage.off(Event.MOUSE_DOWN, this.gameMap, this.gameMap.mouseDown);
        Laya.stage.off("click", this.gameMap,this.onClick);
    };

    _proto.pause = function(){
        Laya.stage.renderingEnabled = false;
    };

    _proto.restart = function(){
        

        //清理建筑层
        this.gameMap.MapBg.removeSelf();
        this.gameMap.MapBg.destroy(true);

        //清理怪物层
        this.guaiBox.removeSelf();

        //删除地图
        this.gameMap.tiledMap.destroy();
        //重新开始
        //tafang = new startGame();
        change_moshi.style.display = 'block';
        //恢复组队数据
        gameChange.start = false;
        //重玩次数
        playNumber++;
    };

    _proto.GameText = function(text){
        var self = this;

        
        var txt = new Laya.Text();
        //给文本的text属性赋值
        txt.text = text;
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

        txt.on("click", this,function(e){
            txt.removeSelf();
        });
    };

    _proto.GameCreaterInfo = function(){
        var self = this;
        var txt = new Laya.Text();
        txt.text = '开发者：安云大神\nBUG反馈：237364436';
        txt.fontSize = 50;
        txt.font = "Microsoft YaHei";
        txt.color = "#ffffff";
        txt.leading = 50;
        //设置描边属性
        txt.stroke = 8;
        txt.strokeColor = "#0a4c02";
        txt.x = 1800;
        txt.y = 900;
        this.gameMap.MapBg.addChild(txt);
    };


    return startGame;
    
})(Laya);































































