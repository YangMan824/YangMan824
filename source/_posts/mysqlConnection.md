---
layout: post
title: "Server returns invalid timezone. Go to Advanced tab and set serverTimezone prope"
date: 2021-12-22 15:48:24
tags: 
    - MySQL
    - database
    - serverTimezone
    - IDEA
categories:
    - 菜鸟进阶路
keywords: "MySQL、数据库、database、serverTimezone、IDEA"
abbrlink: mysqlConnection
description: "Server returns invalid timezone"
top_img: 
cover: /img/mysqlError/face.jpg
swiper_index: 4
swiper_desc: 解决IDEA中连接数据库时区报错
swiper_cover: /img/mysqlError/face.jpg
---


# Server returns invalid timezone. Go to 'Advanced' tab and set 'serverTimezone' prope

&emsp;&emsp;前进的道路永远充满荆棘。

# 错误界面

&emsp;&emsp;IDEA连接mysql，地址，用户名，密码，数据库名，全都配置好了，点测试连接，咔！不成功！
<img src="/img/mysqlConnection/1.png"/>

&emsp;&emsp;翻译一下就是：服务器返回无效的时区。到“高级”选项卡，手动设置“serverTimezone”属性。

### 解决办法：设置mysql时区

1. 进入命令窗口（win+R），输入cmd，进入数据库 `mysql -hlocalhost -uroot -p ` => 输入密码=>回车，如图所示：
<img src="/img/mysqlConnection/2.png"/>

2. 继续输入 `show variables like'%time_zone';`  （**注意：**不要漏掉后面的分号），回车，如图：
<img src="/img/mysqlConnection/3.png"/>

3. 输入`set global time_zone = '+8:00';` (**注意：**不要漏掉后面的分号），回车，如图：
<img src="/img/mysqlConnection/4.png"/>

4. 修改成功后退出，回到idea中点击**Test Connection**测试下，就成功啦！
<img src="/img/mysqlConnection/5.png"/>

