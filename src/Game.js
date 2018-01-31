var Browser = Laya.Browser;
var WebGL = Laya.WebGL;
var Event = Laya.Event;
var Stage = Laya.Stage;
var Sprite = Laya.Sprite;
var Stat =  Laya.Stat;
var Handler = Laya.Handler;
//重玩次数
var playNumber = 0;
//玩家阵营
var playerCamp = 'player1';

//弹窗对象
dialog_box = document.getElementById('dialog_box');

//开始游戏
var tafang = (function(_Laya){

    function startGame(){
        //游戏属性
        this.jidiHp = 10;
        //游戏刷怪时间（毫秒）
        this.guaiStartTime = 10000;
        //刷怪间隔--每个小怪出现的间隔
        this.guaiSpeed = 800;
        //开始游戏
        this.init();
        //游戏消息记录
        this.sendArr = [];
        //当前选中的英雄
        this.selectBuild = null;

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
            'bigDetail' : '致命一击，每攻击5次触发一次。',
            'miji': '张飞、关羽、赵云3个英雄都达到3级后，使用朱雀图腾可以触发逆天秘技。',
            'jiange' : 1000,
            'maxLen' : 5,
            'lv' : 1
        },
        {
            'name' : '夏侯惇',
            'jinbi' : 1000,
            'renkou' : 3,
            'mucai' : 0,
            'camp' : playerCamp,
            'attack' : 1500,
            'range' : 450,
            'bigRange' : 600,
            'bigType' : 1,
            'bigDetail' : '掌控自然之力，召唤超级龙卷风对敌人发起攻击，每攻击10次触发一次。',
            'miji': '无',
            'jiange' : 1000,
            'maxLen' : 10,
            'lv' : 1
        },
        {
            'name' : '诸葛亮',
            'jinbi' : 3000,
            'renkou' : 4,
            'mucai' : 0,
            'camp' : playerCamp,
            'attack' : 3000,
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
            'jinbi' : 9000,
            'renkou' : 4,
            'mucai' : 0,
            'camp' : playerCamp,
            'attack' : 5000,
            'range' : 550,
            'bigRange': 550,
            'bigType' : 4, //致命一击+眩晕
            'bigDetail' : '致命一击，使敌人眩晕（1*人物等级）秒，每攻击2次触发一次。',
            'miji': '张飞、关羽、赵云3个英雄都达到3级后，使用朱雀图腾可以触发逆天秘技。',
            'jiange' : 1000,
            'maxLen' : 2,
            'lv' : 1
        },
        {
            'name' : '赵云',
            'jinbi' : 30000,
            'renkou' : 5,
            'mucai' : 5,
            'camp' : playerCamp,
            'attack' : 10000,
            'range' : 450,
            'bigRange': 450,
            'bigType' : 5, //风暴
            'bigDetail' : '抢刃风暴，疯狂旋转百鸟朝凤枪，形成飓风攻击周围大片敌人，每攻击5次触发一次。攻击太高写不下...',
            'miji': '无',
            'jiange' : 1000,
            'maxLen' : 5,
            'lv' : 1
        },
        {
            'name' : '刘备',
            'jinbi' : 100000,
            'renkou' : 5,
            'mucai' : 5,
            'camp' : playerCamp,
            'attack' : 20000,
            'range' : 850,
            'bigRange': 550,
            'bigType' : 6, //光环
            'bigDetail' : '犒赏三军，使大招范围内的所有友军士气大增，攻击提升20%，攻速提升20%，每攻击15次触发一次。',
            'miji': '无',
            'jiange' : 800,
            'maxLen' : 15,
            'lv' : 1
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

        

    };
    //播放动画
    _proto.gameMapInit = function(){
        var gameSelf = this;
        //创建地图和默认信息
        this.gameMap = new CreateMap(function(){
            var self = this;

            
            
            //加载图集英雄
            Laya.loader.load("../bin/res/atlas/pic.atlas",Handler.create(this,function(){

                //隐藏loading
                var loadBox = document.getElementById('loading');
                loadBox.style.display = 'none';
                //添加怪物容器
                gameSelf.guaiBox.pos(0,0);
                gameSelf.guaiBox.name = 'guaiBox';
                gameSelf.guaiBox.size(self.tiledMap.width, self.tiledMap.height);
                Laya.stage.addChild(gameSelf.guaiBox);

                gameSelf.send('敌军'+gameSelf.guaiStartTime/1000+'秒后到达战场！');
                //开始刷怪
                Laya.timer.once(gameSelf.guaiStartTime, this, function(){
                    gameSelf.startGuai();
                })
                

                //添加建筑层
                self.MapBg = new Laya.Sprite();
                self.MapBg.pos(0,0);
                self.MapBg.name = 'MapBg';
                self.MapBg.size(self.tiledMap.width, self.tiledMap.height);
                Laya.stage.addChild(self.MapBg);

                //初始化位置
                this.setPos(500,0);
                
                //游戏面板
                Laya.stage.addChild(gameSelf.gameinfo);

                //初始化积分
                gameSelf.gameinfo.addJifen(0);
                gameSelf.gameinfo.addJifen(0,2);

                //初始化资源
                gameSelf.gameinfo.addJinbi(800);
                gameSelf.gameinfo.addMucai(10);
                gameSelf.gameinfo.addRenkou(20);
                
                //添加选英雄面板
                Laya.stage.addChild(gameSelf.gameinfo.change_build);

                //创建Image实例
                Laya.stage.on("click", this,gameSelf.onClick);

                //显示选中格子
                this.change_rect = new Laya.Sprite();
                self.MapBg.addChild(this.change_rect);
                
                
                
                
            }),null,Laya.Loader.ATLAS);


        });
    };

    

    _proto.onClick = function(e){
        var self = this,
            gameSelf = tafang;
        var gameinfo = gameSelf.gameinfo,
            buildArr = this.buildArr;
        
        //检测点击
        if(self.isclick){
            var eName = e.target.name;

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
                    for(var i=0;i<buildArr.length;i++){
                        var thisArr = buildArr[i];
                        if(thisPoint.x+'_'+thisPoint.y == thisArr){
                            hasBuild = true;
                            return false;
                        }
                    };

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
        gameinfo.build_jiange.text = '攻速：'+thisBuildData.jiange/10;
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
        this.setBuild(buildData[thisBuildNum],parentObj);
        
    };

    //建造函数
    _proto.setBuild = function(data,parentObj){
        var gameinfo = parentObj.gameinfo;
        //是否有资源建造
        if(gameinfo.getJinbi() < data.jinbi){
            //资源不足
            this.send('金币不足，加油杀敌!');
        }else if(gameinfo.getRenkou() < data.renkou){
            this.send('人口不足，每杀敌200个或击杀BOSS可以奖励人口!');
        }else if(gameinfo.getMucai() < data.mucai){
            this.send('木材不足，无法建造!');
        }else{

            gameinfo.minusJinbi(data.jinbi);
            gameinfo.minusRenkou(data.renkou);
            gameinfo.minusMucai(data.mucai);
            
            //位置
            var pointXY = parentObj.thisPoint.x+'_'+parentObj.thisPoint.y;
            //添加建筑
            var build = new CreateBuild();
            build.name = data.name;
            //build.init(data.camp,data.name,data.attack,data.range,data.bigRange,data.bigType,data.bigDetail,data.miji,data.jiange,data.maxLen,data.lv);  //阵营，名字，攻击，范围，间隔，等级
            build.init(data);
            build.pos(parentObj.thisPoint.x*parentObj.gridW,parentObj.thisPoint.y*parentObj.gridH);
            build.width = parentObj.gridW;
            build.height = parentObj.gridH;
            build.pointXY = pointXY;

            //添加到舞台上显示
            parentObj.map.MapBg.addChild(build);
            //记录创建建筑得格子
            parentObj.map.buildArr.push(pointXY);

            //关闭建筑列表
            gameinfo.change_build.visible = false;
            //隐藏选中格子
            var thisRect = parentObj.map.change_rect.graphics;
            thisRect.clear();
            
        }
    };

    _proto.startGuai = function(){
        var gameSelf = this;
        //添加怪物
        var guai = new CreateGuai();
        var boshu = 1;
        var thisNum = 0;
        gameSelf.send('第'+boshu+'波敌人,即将到达战场');
        Laya.timer.loop(gameSelf.guaiSpeed, this, function(){
            thisNum++;
            if(thisNum<=30){
                var thisGuai = Laya.Pool.getItemByClass('CreateGuai',CreateGuai);
                //每波怪属性算法
                thisGuai.init('guaiwu_player1','guai1',500*boshu*(boshu/2+1),4+parseInt(boshu*0.1),10+boshu*10); //阵营，名字，血量，移动速度，携带金币
                thisGuai.pos(-50,500);
                //添加到舞台上显示
                gameSelf.guaiBox.addChild(thisGuai);
            }else if(thisNum%20==0){
                boshu++;
                thisNum = 0;

                gameSelf.send('第'+boshu+'波敌人,即将到达战场');
            }
            
        });

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
                if(guai.x>=3020){
                    guai.y += guai.run;
                }else{
                    guai.x += guai.run;
                };
                //怪物通过，游戏生命减少
                if(guai.y>=2000){
                    //基地血量信息
                    this.jidiHp--;
                    this.gameinfo.jidiHp(this.jidiHp);
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
                        
                        
                        this.send('出逃一个怪物，基地生命剩余'+this.jidiHp);
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

    
    //游戏消息发送
    _proto.send = function(text){
        var gameinfo = this.gameinfo,
            thisSend = this.sendArr;
        thisSend.push(text);
        if(thisSend.length>5){
            thisSend.shift();
        };
        gameinfo.send_box.text = thisSend.join('\n');
    };

    //查看英雄属性
    _proto.buildInfo = function(build){
        dialog_box.style.display = 'block';
        var infoHtml = '<p><b>归属：</b><span>'+build.camp+'</span></p>'
                    +' <p><b>等级：</b><span>Lv'+build.lv+'</span></p>'
                    +' <p><b>经验：</b><span>'+build.exp+'/'+build.lv*30+'</span></p>'
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

    //出售英雄
    _proto.sell = function(){
        var selectBuild = this.selectBuild;
        if(selectBuild){
            var buildArr = this.gameMap.buildArr,
                pointXY = selectBuild.pointXY;
            //当前位置
            for(var i=0;i<buildArr.length;i++){
                if(buildArr[i] == pointXY){
                    buildArr.splice(i,1);
                    break;
                };
            };
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
            selectBuild.visible = true;
            selectBuild.destroy(true);
            //返还金币
            
        }
    };


    //游戏结束    
    _proto.gameOver = function(){
        var self = this;

        var txt = new Laya.Text();
        //给文本的text属性赋值
        txt.text = "防守失败，再玩一次！";
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
        Laya.stage.off("click", this.gameMap,this.onClick);
        
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
        this.gameMap.MapBg.removeSelf();
        this.gameMap.MapBg.destroy(true);

        

    };

    return new startGame();
})(Laya);

document.addEventListener('touchstart', function(event) {
    event.stopPropagation();
    event.preventDefault();
    var eName = event.target.className;

    setTimeout(function(){
        if(eName=='close'){
            dialog_box.style.display = 'none';
        }else if(eName=='btn'){
            //隐藏明细框
            dialog_box.style.display = 'none';
            //出售英雄
            tafang.sell();
        }    
    },100)
    
}, false);

















