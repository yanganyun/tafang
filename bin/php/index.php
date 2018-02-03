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


    public function createRoom(){

        $sql = 'CREATE TABLE Persons 
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
    }

    public function submit() {
        $name = isset($_POST['name']) ? $_POST['name'] : '';
        $mobile = isset($_POST['mobile']) ? $_POST['mobile'] : '';
        $email = isset($_POST['email']) ? $_POST['email'] : '';
        $shalong = isset($_POST['shalong']) ? $_POST['shalong'] : '';
        $detail = isset($_POST['detail']) ? $_POST['detail'] : '';
        $zuopinImg = isset($_POST['zuopinImg']) ? $_POST['zuopinImg'] : '';
        $photoImg = isset($_POST['photoImg']) ? $_POST['photoImg'] : '';

        if (!$name || !$mobile || !$email || !$shalong || !$detail || !$zuopinImg || !$photoImg) {
            $this->data = array('code' => 1, 'msg' => '有未填项');
            $this->result();
        }

        //保存图片
        $zpname = 'userimg/'.$mobile.'_zp.jpg';
        file_put_contents($zpname,base64_decode($zuopinImg));

        $slname = 'userimg/'.$mobile.'_sl.jpg';
        file_put_contents($slname,base64_decode($photoImg));

        $sql = "insert into oulaiya (name,mobile,email,shalong,detail,zuopinSrc,shalongSrc) values ('$name','$mobile','$email','$shalong','$detail','$zpname','$slname') ON DUPLICATE KEY UPDATE name='$name',email='$email',shalong='$shalong',detail='$detail',zuopinSrc='$zpname',shalongSrc='$slname'";
        $this->db->query($sql);

        if ($this->db->affected_rows() >= 0){
            $this->data = array('code' => 3, 'msg' => '成功');
        }else{
            $this->data = array('code' => 2, 'msg' => '失败');
        }
        $this->result();
    }


    /*public function photo() {
        $mobile = isset($_POST['mobile']) ? $_POST['mobile'] : '';
        $photoImg = isset($_POST['photoImg']) ? $_POST['photoImg'] : '';

        if (!$mobile || !$photoImg) {
            $this->data = array('code' => 1, 'msg' => '有未填项');
            $this->result();
        }

        //保存图片
        $img= base64_decode($imgBase);
        $imgname = $mobile.'.jpg';

        file_put_contents('userimg/'.$imgname,$img);

        $sql = "insert into oulaiya (photoImg) values ('$photoImg') ON DUPLICATE KEY UPDATE photoImg='$photoImg'";
        $this->db->query($sql);

        if ($this->db->affected_rows() >= 0){
            $this->data = array('code' => 3, 'msg' => '全部上传完毕','src' => $imgname);
        }else{
            $this->data = array('code' => 2, 'msg' => '失败');
        }
        $this->result();
    }
*/


    public function getUser() {
        $pass = isset($_GET['pass']) ? $_GET['pass'] : '';

        if ($pass!='voguezt') {
            $this->data = array('code' => 1, 'msg' => '密码错误!');
            $this->result();
        }
        //获取序号
        $sql = "select * from oulaiya order by time asc";//desc
        $json = $this->db->getAll($sql);

        if ($this->db->affected_rows() >= 0)
            $this->data = array('code' => 3, 'msg' => '获取成功','json'=>$json);
        else
            $this->data = array('code' => 2, 'msg' => '失败');
        $this->result();
    }


    
}

tafang::getInstance()->run();