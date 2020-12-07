module.exports = {
  title: '游鸟驿站',
  description: '方生方死，方死方生。',
  base:'/driftIces.github.io/',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    mode: 'dark', 
    "logo": "/avatar.jpg",
    "head": [
      [
        "link",
        {
          "rel": "icon",
          "href": "/favicon.ico"
        }
      ],
      [
        "meta",
        {
          "name": "viewport",
          "content": "width=device-width,initial-scale=1,user-scalable=no"
        }
      ]
    ],

    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "有下拉窗的导航",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/",
            "icon": "reco-github"
          }
        ]
      },
    ],
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "烈火焚冰",
    "authorAvatar": "/avatar.jpg",
    "record": "xxxx",
    "startYear": "2020",
  },
  plugins: [
    [
      "ribbon",
      {
         size: 90, // 彩带的宽度，默认为 90
         opacity: 0.8, // 彩带的不透明度，默认为 0.3
         zIndex: -1 // 彩带的 z-index 属性，默认值为 -1
      }
    ],
    ['go-top']
  ],

}