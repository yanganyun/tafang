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
// window.history.pushState("塔防联盟", "");    
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
                        title: '塔防联盟', // 分享标题
                        desc: '三国题材，超级塔防联盟游戏，双人防守更刺激！', // 分享描述
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
                        title: '塔防联盟', // 分享标题
                        desc: '三国题材，超级塔防联盟游戏，双人防守更刺激！', // 分享描述
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
                    thisGuai1.init('guaiwu_player1','guai'+guaiName,720*boshu*boshu*onlineXishu,4+parseInt(boshu*0.06),20+parseInt(boshu)); //阵营，名字，血量，移动速度，携带金币
                    if(!isDanji){
                        thisGuai2.init('guaiwu_player2','guai'+guaiName,720*boshu*boshu*onlineXishu,4+parseInt(boshu*0.06),20+parseInt(boshu)); //阵营，名字，血量，移动速度，携带金币
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
























