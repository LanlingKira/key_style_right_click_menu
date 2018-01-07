# GalMenu.js 右键环形菜单
## 使用方法
### 引入文件
在页面中引入 GalMenu.css，jquery 和 GalMenu.js 文件
``` html
<link rel="stylesheet" type="text/css" href="css/GalMenu.css">
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/GalMenu.js"></script>
```
### HTML 结构
为菜单项设置相应的跳转或点击事件
``` html
<div class="galMenu galRing">
  <div class="circle" id="gal">
    <div class="ring">
      <a href="#" title="Home" class="menuItem">Home</a>
      <a href="#" title="Blog" class="menuItem">Blog</a>
      <a href="#" title="About" class="menuItem">About</a>
      <a href="#" title="Contact" class="menuItem">Contact</a>
      <a href="#" title="Social" class="menuItem">Social</a>
      <a href="#" title="Other" class="menuItem">Other</a>
    </div>
    <audio id="galAudio" src="audio/nyanpass.mp3"></audio>
  </div>
</div>
<div id="overlay" style="opacity: 1; cursor: pointer;"></div>
```
### CSS 样式
为右键菜单的菜单项设置背景图片
``` css
.ring a:nth-of-type(1){background-image:url(1.jpg)}
.ring a:nth-of-type(2){background-image:url(2.jpg)}
.ring a:nth-of-type(3){background-image:url(3.jpg)}
.ring a:nth-of-type(4){background-image:url(4.jpg)}
.ring a:nth-of-type(5){background-image:url(5.jpg)}
.ring a:nth-of-type(6){background-image:url(6.jpg)}
```
### 初始化插件
在页面 DOM 元素加载完毕之后，通过 galMenu() 方法来初始化该右键菜单插件
``` javascript
$(document).ready(function() {
  $("body").galMenu({
    menu:"galRing",
    click_to_close:true,
    stay_open:false
  });
});
```
### 配置参数
GalMenu.js 有 2 个可用的配置参数
 - `click_to_close`：是否在点击遮罩层时关闭右键菜单，默认为 true
 - `stay_open`：是否在点击菜单项后一直显示右键菜单，默认为 false

### 关闭菜单
3 个方式
 - 再次右键
 - 左键点击遮罩层
 - ESC 关闭

## 演示地址：
[https://thkira.com/key.html](http://thkira.com/key.html "仿Key游戏风格jQuery右键菜单") 
