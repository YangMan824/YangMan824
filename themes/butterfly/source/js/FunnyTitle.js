// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = 'w(ﾟДﾟ)w不要走!再看看嘛!';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '♪(´▽｀) 欢迎回来！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
