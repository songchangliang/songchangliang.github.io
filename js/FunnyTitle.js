<!--浏览器搞笑标题-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    $('[rel="icon"]').attr('href', "/img/trhx2.png");
    document.title = 'ヽ(●-`Д´-)ノ你丑你就走！';
    clearTimeout(titleTime);
  }
  else {
    $('[rel="icon"]').attr('href', "/img/trhx2.png");
    document.title = 'ヾ(Ő∀Ő3)ノ你帅就回来！' + OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
---------------------
  作者：TRHX
来源：CSDN
原文：https://blog.csdn.net/qq_36759224/article/details/85420403
  版权声明：本文为博主原创文章，转载请附上博文链接！
