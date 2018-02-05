<?php
/**
 * 微信获取用户信息
 * @author 王雷 loonghere@qq.com
 * 2016-9-1 17:07:20
 */
class WeiXin
{
    public $appid = 'wx8b20cfe2ad0dd09a';
    public $appsecret = 'ed0aeb129699d88cd6088294eec5c2ac';
    public $user = [];

    public function __construct()
    {
        session_start();
        $ua = strtolower($_SERVER['HTTP_USER_AGENT']);
        if ( preg_match('/micromessenger/', $ua)) {
            if (!isset($_SESSION['tafang']['openid'])) {
                if (isset($_GET['state']) && $_GET['state'] == 'getOpenid') {
                    $code = $_GET['code'];
                    $this->getOpenidByCode($code);
                } else {
                    $this->redirectWeiXin();
                }
            }
        } else {
            header('Content-type: text/html; charset=utf-8');
            exit('请在微信内置浏览器内访问');
        }
    }

    public function index()
    {
        $this->getUserInfo();
        $user = $this->user;
        include 'tpl.php';
    }

    public function redirectWeiXin()
    {
        $p['state'] = 'getOpenid';
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ?"https://" : "http://";
        $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        $p['redirect_uri'] = $url; //preg_replace("/www./","",$url);;
        $this->redirtUrlForOpenid($p);
    }

    public function redirtUrlForOpenid($p)
    {
        if(!empty($p["state"]) && !empty($p["redirect_uri"])){
            $wxUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?';
            $wxUrl .= 'appid=' . $this->appid;
            $wxUrl .= '&redirect_uri=' . urlencode($p['redirect_uri']);
            $wxUrl .= '&response_type=code&scope=snsapi_userinfo';
            $wxUrl .= '&state=' . $p["state"];
            $wxUrl .= '#wechat_redirect';
            header("Location: $wxUrl\n");
        }
    }
    
    public function getOpenidByCode($code)
    {
        if(!empty($code))
        {
            $wxJsonUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?";
            $wxJsonUrl .= 'appid=' . $this->appid;
            $wxJsonUrl .= '&secret=' . $this->appsecret;
            $wxJsonUrl .= '&code=' . $code;
            $wxJsonUrl .= '&grant_type=authorization_code';

            $re = json_decode($this->curlGet($wxJsonUrl));
            if (isset($re->openid)) {
                $_SESSION['tafang'] = [
                    'openid' => $re->openid,
                    'access_token' => $re->access_token,
                ];
            } else {
                // throw new Exception($re->errcode."  ".$re->errmsg . "<br>");
                exit($re->errcode."  ".$re->errmsg);
            }
        }
    }

    public function getUserInfo()
    {
        $wxJsonUrl = 'https://api.weixin.qq.com/sns/userinfo?';
        $wxJsonUrl .= 'access_token=' . $_SESSION['tafang']['access_token'];
        $wxJsonUrl .= '&openid=' . $_SESSION['tafang']['openid'];
        $wxJsonUrl .= '&lang=zh_CN';

        $re = json_decode($this->curlGet($wxJsonUrl));
        if (isset($re->openid)) {
            $this->user = [
                'openid' => $re->openid,
                'nickname' => $re->nickname,
                'sex' => $re->sex,
                'headimgurl' => $re->headimgurl,
            ];
        } else {
            // throw new Exception($re->errcode."  ".$re->errmsg . "<br>");
            // exit($re->errcode."  ".$re->errmsg);
            unset($_SESSION['tafang']);
            $this->redirectWeiXin();
        }
    }

    public function defaultHeader()
    {
        $header = "User-Agent:Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12\r\n";
        $header.="Accept:text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\r\n";
        $header.="Accept-language: zh-cn,zh;q=0.5\r\n";
        $header.="Accept-Charset: GB2312,utf-8;q=0.7,*;q=0.7\r\n";
        return $header;
    }

    public function curlGet($url, $timeout = 5, $header = '')
    {
        $header = empty($header) ? $this->defaultHeader() : $header;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);    // https请求 不验证证书和hosts
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array($header)); //模拟的header头
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }
}

$wx = new WeiXin;
$wx->index();