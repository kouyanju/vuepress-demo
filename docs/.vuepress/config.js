module.exports = {
  title:"Glowing'blog",//网站的标题
  description:"May everything you do for it have romantic results",//网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。

  themeConfig: {
    logo: '/assets/logo.png',// 导航栏logo图
    lastUpdated: '更新时间',
    nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link:'/about1'},
        {
          text: 'Study',
          items: [ // items 数组将显示为一个下拉列表
            { text: '布局', link: '/all/css/css-aaa/' },
            { text: '动画', link: '/all/css/css-bbb/' }
          ]
        }
    ],
  },
  head:[
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  plugins: {
    '@vuepress/back-to-top':true,
    '@vuepress/pwa':{
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      },
    },
    '@vssue/vuepress-plugin-vssue': {
      // set `platform` rather than `api`
      platform: 'github-v4',
      // 其他的 Vssue 配置
      // all other options of Vssue are allowed
      owner: 'kouyanju',//github账户名
      repo: 'kouyanju.github.io',//github一个项目的名称
      clientId: 'a830cd404f595faa19ac',//注册的Client ID
      clientSecret: '6d227535a0f91602c758f9cae19b9eead126bd3f',//注册的Client Secret
      autoCreateIssue: true,// 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
    "vuepress-plugin-auto-sidebar": {}
  }
}