module.exports = {
  base:'/rua-ui/',
  title: '狗头人UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: 'GitHub', link: 'https://github.com/Ruaxin/rua-ui'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
        ]
      },

    ]
  }
}