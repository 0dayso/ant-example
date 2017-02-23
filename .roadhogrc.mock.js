import Mock from 'mockjs'

/**
 * 组装API返回内容方法
 * @param {any} data - 存在errorno时候为错误内容
 * @param {number} erroono - 错误码，不存在错误码时候data为返回消息内容
 * @return {Object} - object
 */
function response (data, errorno = 0) {
  let result = {
    'errno': 0,
    'errmsg': ''
  }
  if (errorno > 0) {
    result.errno = errorno
    result.errmsg = data
  }else {
    result.data = data
  }
  return result
}

let userData = [
  {
    'id|+1': 1,
    username: '@name',
    cname: '@cname',
    email: '@email',
    lastlogin: '@ip',
    expire: '1500',
    token: /[a-zA-Z1-9]{16}/,
    lastLogTime: '@datetime'
  }
]

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

  'GET /api/login': response(Mock.mock({
    'info|1': userData
  })),

  'GET /api/users': response(Mock.mock({
    'info|10': userData
  }))
}
