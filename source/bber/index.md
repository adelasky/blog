---
title: 说说
date: 2022-01-24 21:44:20
comment: true
---

<div id='speak'></div>
<!-- 使用markdown渲染 -->
<!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bber/ispeak-bber-md.min.js" charset="utf-8" ></script> -->
<!-- 不使用markdown渲染 -->
<script type="text/javascript" src="/js/bber.js" charset="utf-8" ></script>
<!-- 解析微信表情（参考：https://github.com/buddys/qq-wechat-emotion-parser） -->
<!-- <script src="https://cdn.jsdelivr.net/gh/buddys/qq-wechat-emotion-parser@master/dist/qq-wechat-emotion-parser.min.js"></script> -->
<script>
ispeakBber
    .init({
      el: '#speak', // 容器选择器
      name: '归梦', // 显示的昵称
      envId: 'bber-6gf3b3s99d6327dc', // 环境id
      region: 'ap-guangzhou', // 腾讯云地址，默认为上海
      limit: 5, // 每次加载的条数，默认为5
      avatar: '/image/avatar.jpg',
      fromColor:'rgb(122, 144, 194)', // 下方标签背景颜色 默认 rgb(245, 150, 170)
      loadingImg: '/image/bberloading.gif', // 自定义loading的图片，示例值为默认值
      dbName:'talks' // 数据的名称，默认talks，避免有人的命名不是这个，所以加入此配置字段。
    })
    .then(function() {
      // 哔哔加载完成后的回调函数，你可以写你自己的功能
      console.log('哔哔 加载完成')
    })
</script>

------