---
layout: post
title: ERROR 2003 (HY000):Can’t connect to MySQL server on ‘localhost:3306’ (10061)
date: 2021-12-20 17:20:57
tags: 
    - 程序人生
    - 菜鸟进阶路
categories:
    - 菜鸟进阶路
keywords: "MySQL、ERROR、程序人生"
description: "ERROR 2003 (HY000)"
top_img: 
cover: /img/mysqlError/face.jpg
swiper_index: 2
swiper_desc: 解决mysql修改初始化密码犯的错
swiper_cover: /img/mysqlError/face.jpg
---

## ERROR 2003 (HY000): Can't connect to MySQL server on 'localhost:3306' (10061)

&emsp;&emsp;这周开始我们有两周的实训课，实训内容竟与Mysql有关，本来以为安装软件就是无脑安装，一直点next就行了，但这个软件硬生生搞了一个小时，阿巴阿巴……小炒面，我应该还能承受的来 

&emsp;&emsp;[mysql最详细安装过程](https://www.cnblogs.com/Nefeltari/p/5952387.html)

&emsp;&emsp;想要自定义密码启动mysql，但是在cmd中直接输入mysql -u root -p时出现了如下问题：
<img src="/img/mysqlError/1.png"/>


### 解决办法

&emsp;&emsp;以管理员身份运行cmd（win+Q，搜索cmd后点击 ' 以管理员身份运行 ' ），输入net start mysql，启动成功后，回到刚刚输入mysql -u root -p的cmd中再次执行，就可以正常操作了。

<img src="/img/mysqlError/2.png"/>

------------------------------------------------------------------------------更新------------------------------------------------------------------------------

### 其他问题

&emsp;&emsp;由于我安装的跟教程的版本（8.0.27）不一样，导致最后一步会报错，所以就按照下面新的步骤进行即可。

&emsp;&emsp;切换到mysql数据库

```javascript
use mysql
```
&emsp;&emsp;修改root密码
```javascript
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
```
&emsp;&emsp;退出并重启mysql，就可以使用新密码登录了

```javascript
mysql >quit;
service mysqld restart
```
<img src="/img/blog.png"/>



