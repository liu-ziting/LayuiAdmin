# LayuiAdmin

## 项目介绍

> LayuiAdmin是基于layui的博客后台管理系统模板

该项目基于Layui经典模块化前端UI框架搭建而成的，通用的博客后台管理系统模板；
后台模块主页包括：登录、首页、文章列表、类别管理、留言管理、用户管理、系统设置等页面

* 如果对您对此项目有兴趣，可以点 "Star" 支持一下！

* 或者您可以 "follow" 一下，如有问题请直接在 Issues 中提

* 传送门：[Demo演示点这里][1]

----------


### 产品依赖于:
 - [Layui][6]

## 项目运行

    # 克隆到本地
	
    git clone https://github.com/liu-ziting/LayuiAdmin.git
    

## 项目目录结构
```
LayuiAdmin
│  index.html			项目主体
│  
├─css				css存放目录
│      main.css
│      news.css
│      
├─images			静态图片目录

├─js				公共js目录
│      bodyTab.js		头部tab切换js配置
│      index.js			项目主体js文件
│      jquery-1.8.2.min.js
│      leftNav.js		解析右侧导航栏
│      main.js			
│      newList.js		公共方法
│      
├─json			
│      navs.json		左侧导航栏json文件
│      
├─layui				layui框架文件
│              
└─page
    ├─main.html			主页
    │  
    ├─category
    │      categoryList.html	类别列表
    │      
    ├─login
    │  	   login.html		登录页面
    │                  
    ├─message
    │      messageList.html	留言列表
    │      
    ├─news
    │      newsAdd.html		文章添加
    │      newsEdit.html	文章修改
    │      newsList.html	文章列表
    │      
    └─user
            changePwd.html	修改密码
            setup.html		系统设置
            userInfo.html	个人资料
            userList.html	用户列表

```		

## 项目部分截图

![主页][2]

![列表1][3]

![列表2][4]

![锁屏][5]



  [1]: http://liuziting.coding.me/layuiAdmin/blog/index.html
  [2]: http://tc.lihail.cn/layuiadmin1.png
  [3]: http://tc.lihail.cn/layuiadmin2.png
  [4]: http://tc.lihail.cn/layuiadmin3.png
  [5]: http://tc.lihail.cn/layuiadmin4.png
  [6]: https://www.layui.com/

