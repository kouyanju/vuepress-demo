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
            { text: '布局', link: '/css/css-aaa/' },
            { text: '动画', link: '/css/css-bbb/' }
          ]
        }
    ],

  }


}