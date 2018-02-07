<?php
/**
 * 申请类
 * @author：雷管 loonghere@163.com
 * @CreateTime：2015-4-21 16:08:34
 */

//header('Content-type:text/html;charset=utf-8');
require 'mysql.php';
class tafang
{
    private static $_instance;
    public $db;
    public $data = array();

    private function __construct() {
        $config = require 'database.php';
        $this->db = new cls_mysql($config['DB_HOST'], $config['DB_USER'], $config['DB_PASS'], $config['DB_NAME']);
    }

    public function __clone() {}

    public static function getInstance() {
        if (!self::$_instance instanceof self) {
            self::$_instance = new self;
        }
        return self::$_instance;
    }

    public function run() {
        $action = isset($_GET['action']) ? $_GET['action'] : 0;
        if (!$action) $action = isset($_POST['action']) ? $_POST['action'] : 0;
        if (!$action) $action = 'index';
        if (!method_exists($this, $action)) $action = 'index';
        $this->$action();
    }

    public function result() {
        die(json_encode($this->data,256));
    }

    public function index() {
        $this->data = array('code' => '0', 'msg' => '方法不存在');
        $this->result();
    }


    /*public function createRoom(){

        $sql = 'CREATE TABLE Persons3 
            (
            id int NOT NULL AUTO_INCREMENT, 
            PRIMARY KEY(id),
            player1_name varchar(50),
            player2_name varchar(50),
            player1_photo text,
            player2_photo text,
            player1_build text,
            player2_build text,
            sendDetail text,
            time TIMESTAMP NOT NULL  DEFAULT CURRENT_TIMESTAMP
            )';
        $this->db->query($sql);

        if ($this->db->affected_rows() >= 0){
            $this->data = array('code' => 3, 'msg' => '成功');
        }else{
            $this->data = array('code' => 2, 'msg' => '失败');
        }
        $this->result();
    }*/

    //删除房间
    public function removeRoom(){
        $roomid = isset($_GET['roomid']) ? $_GET['roomid'] : '';
        
        if (!$roomid) {
            $this->data = array('code' => 1, 'msg' => '有未填项');
            $this->result();
        }

        //$sql = 'delete from info where id='.$roomid;
        $sql = 'delete from tafang_room where id='.$roomid;
        $this->db->query($sql);

        if ($this->db->affected_rows() >= 0){
            $this->data = array('code' => 3, 'msg' => '房间删除成功！');
        }else{
            $this->data = array('code' => 2, 'msg' => '删除失败');
        }
        $this->result();
    }
    

    public function createRoom() {
        $name1 = isset($_GET['name1']) ? $_GET['name1'] : '';
        $photo1 = isset($_GET['photo1']) ? $_GET['photo1'] : '';

        if (!$name1 || !$photo1) {
            $this->data = array('code' => 1, 'msg' => '有未填项');
            $this->result();
        }


        $sql = "insert into tafang_room (player1_name,player1_photo) values ('$name1','$photo1') ON DUPLICATE KEY UPDATE player1_name='$name1',player1_photo='$photo1'";
        $this->db->query($sql);

        if ($this->db->affected_rows() >= 0){
            $id = mysql_insert_id();
            $this->data = array('code' => 3, 'msg' => '成功','id'=>$id);
        }else{
            $this->data = array('code' => 2, 'msg' => '失败');
        }
        $this->result();
    }


    public function inRoom() {
        $roomid = isset($_GET['roomid']) ? $_GET['roomid'] : '';
        $name2 = isset($_GET['name2']) ? $_GET['name2'] : '';
        $photo2 = isset($_GET['photo2']) ? $_GET['photo2'] : '';

        if (!$roomid || !$name2 || !$photo2) {
            $this->data = array('code' => 1, 'msg' => '有未填项');
            $this->result();
        }

        $sqlfind="select player2_photo from tafang_room where id='$roomid'";//mysql语句
        $player2_photo = $this->db->getOne($sqlfind);
        if($player2_photo && $photo2!=$player2_photo){
            $this->data = array('code' => 4, 'msg' => '房间已满');
            $this->result();
        };

        $sql = "insert into tafang_room (id,player2_name,player2_photo) values ('$roomid','$name2','$photo2') ON DUPLICATE KEY UPDATE player2_name='$name2',player2_photo='$photo2'";
        $this->db->query($sql);

        if ($this->db->affected_rows() >= 0){
            //获取序号
            $sqlall = "select * from tafang_room where id='$roomid'";//desc
            $json = $this->db->getAll($sqlall);

            $this->data = array('code' => 3, 'msg' => '成功','json'=>$json);
        }else{
            $this->data = array('code' => 2, 'msg' => '失败');
        }
        $this->result();
    }

    public function startRoom() {
        $roomid = isset($_GET['roomid']) ? $_GET['roomid'] : '';
        $start = isset($_GET['start']) ? $_GET['start'] : '';

        if (!$roomid || !$start) {
            $this->data = array('code' => 1, 'msg' => '有未填项');
            $this->result();
        }


        $sql = "insert into tafang_room (id,start,boshu) values ('$roomid','$start',1) ON DUPLICATE KEY UPDATE start='$start',boshu=1";
        $this->db->query($sql);

        if ($this->db->affected_rows() >= 0){

            $this->data = array('code' => 3, 'msg' => '成功');
        }else{
            $this->data = array('code' => 2, 'msg' => '失败');
        }
        $this->result();
    }


    public function outRoom() {
        $roomid = isset($_GET['roomid']) ? $_GET['roomid'] : '';
        $player = isset($_GET['player']) ? $_GET['player'] : '';

        if (!$roomid || !$player) {
            $this->data = array('code' => 1, 'msg' => '有未填项');
            $this->result();
        };

        if($player=='player1'){
            $sql = 'delete from tafang_room where id='.$roomid;
        }else{
            $sql = "insert into tafang_room (id,player2_name,player2_photo) values ('$roomid','','') ON DUPLICATE KEY UPDATE player2_name='',player2_photo=''";
        }

        
        $this->db->query($sql);

        if ($this->db->affected_rows() >= 0){
            $this->data = array('code' => 3, 'msg' => '成功');
        }else{
            $this->data = array('code' => 2, 'msg' => '失败');
        }
        $this->result();
    }

    public function setBoshu() {
        $roomid = isset($_GET['roomid']) ? $_GET['roomid'] : '';
        $boshu = isset($_GET['boshu']) ? $_GET['boshu'] : '';

        if (!$roomid || !$boshu) {
            $this->data = array('code' => 1, 'msg' => '有未填项');
            $this->result();
        }


        $sql = "insert into tafang_room (id,boshu) values ('$roomid','$boshu') ON DUPLICATE KEY UPDATE boshu='$boshu'";
        $this->db->query($sql);

        if ($this->db->affected_rows() >= 0){

            $this->data = array('code' => 3, 'msg' => '成功');
        }else{
            $this->data = array('code' => 2, 'msg' => '失败');
        }
        $this->result();
    }


    public function setHp() {
        $roomid = isset($_GET['roomid']) ? $_GET['roomid'] : '';
        $jidiHp = isset($_GET['jidiHp']) ? $_GET['jidiHp'] : '';

        if (!$roomid) {
            $this->data = array('code' => 1, 'msg' => '有未填项');
            $this->result();
        }


        $sql = "insert into tafang_room (id,jidiHp) values ('$roomid','$jidiHp') ON DUPLICATE KEY UPDATE jidiHp='$jidiHp'";
        $this->db->query($sql);

        if ($this->db->affected_rows() >= 0){

            $this->data = array('code' => 3, 'msg' => '成功');
        }else{
            $this->data = array('code' => 2, 'msg' => '失败');
        }
        $this->result();
    }



    public function getBoshu() {
        $roomid = isset($_GET['roomid']) ? $_GET['roomid'] : '';

        if (!$roomid) {
            $this->data = array('code' => 1, 'msg' => '有未填项');
            $this->result();
        }


        $sql = "select boshu from tafang_room where id='$roomid'";//mysql语句
        $boshu = $this->db->getOne($sql);

        if ($this->db->affected_rows() >= 0){
            $this->data = array('code' => 3, 'msg' => '成功','boshu'=>$boshu);
        }else{
            $this->data = array('code' => 2, 'msg' => '失败');
        }
        $this->result();
    }
    



    public function buildInfo() {
        $roomid = isset($_GET['roomid']) ? $_GET['roomid'] : '';
        $player = isset($_GET['player']) ? $_GET['player'] : '';
        $build = isset($_GET['build']) ? $_GET['build'] : '';

        if (!$roomid || !$player) {
            $this->data = array('code' => 1, 'msg' => '有未填项');
            $this->result();
        }

        if($player=='player1'){
            $sql = "insert into tafang_room (id,player1_build) values ('$roomid','$build') ON DUPLICATE KEY UPDATE player1_build='$build'";
        }else{
            $sql = "insert into tafang_room (id,player2_build) values ('$roomid','$build') ON DUPLICATE KEY UPDATE player2_build='$build'";
        }
        
        $this->db->query($sql);

        if ($this->db->affected_rows() >= 0){

            $this->data = array('code' => 3, 'msg' => '成功');
        }else{
            $this->data = array('code' => 2, 'msg' => '失败');
        }
        $this->result();
    }


    public function getData() {
        $roomid = isset($_GET['roomid']) ? $_GET['roomid'] : '';

        if (!$roomid) {
            $this->data = array('code' => 1, 'msg' => '房间不存在!');
            $this->result();
        }
        //获取序号
        $sql = "select * from tafang_room where id='$roomid'";//desc
        $json = $this->db->getAll($sql);

        if ($this->db->affected_rows() >= 0)
            $this->data = array('code' => 3, 'msg' => '获取成功','json'=>$json);
        else
            $this->data = array('code' => 2, 'msg' => '失败');
        $this->result();
    }


    
}

tafang::getInstance()->run();