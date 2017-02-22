import Mock from 'mockjs';

let meta = {
      error:"",
      login:true,
      message:"登录成功",
      timeused:"71ms"
    }


let userData = [
        {
        'id|+1':1,
        username:'@name',
        cname:'@cname',
        email:'@email',
        lastlogin:'@ip',
        expire:'1500',
        token:/[a-zA-Z1-9]{16}/,
        lastLogTime: '@datetime',
        // avator:function(){ return Mock.Random.dataImage('125x125', this.username.substr(0, 1))}
      }
];
let usersData = Mock.mock({
      'info|10':userData
    });

export default {
  // 获取菜单
  'GET /api/dashboard/sider': {
    'title': 'MyDMP',
    'options': [{
      'title': '首页',
      'alias': '/',
      'icon': ''
    },
      {
        'title': '人群管理',
        'alias': '/crowd',
        'icon': '',
        'sub': [
          {
            'title': '概览',
            'alias': '/crowd',
            'icon': ''
          },
          {
            'title': '网站访客分析',
            'alias': '/crowd',
            'icon': '',
            'sub': [
              {
                'title': '地域分析',
                'alias': '/crowd',
                'icon': ''
              },
              {
                'title': '兴趣偏好',
                'alias': '/crowd',
                'icon': ''
              },
              {
                'title': '人口特征',
                'alias': '/crowd',
                'icon': ''
              }
            ]
          },
          {
            'title': '我的人群',
            'alias': '/crowd',
            'icon': ''
          }
        ]
      },
      {
        'title': '流量分析',
        'alias': '/',
        'icon': '',
        'sub': [
          {
            'title': '营销分析',
            'alias': '/',
            'icon': ''
          },
          {
            'title': '营销分析',
            'alias': '/',
            'icon': ''
          }
        ]
      },
      {
        'title': '营销分析',
        'alias': '/',
        'icon': ''
      },
      {
        'title': '电商分析',
        'alias': '/',
        'icon': ''
      },
      {
        'title': '设置',
        'alias': '/setting',
        'icon': ''
      }
    ]
  },

  'POST /api/login':{
    meta:meta,
    result:Mock.mock({
      'info|1':userData
    })
  },

  'GET /api/users':{
    meta:meta,
    result:usersData
  }
}
