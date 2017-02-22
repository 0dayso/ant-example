import request from '../utils/request';

/**
 * 登录API请求
 */
export async function login (params) {
  return request('/api/login', {
    method: 'post',
    data: params
  })
}

/**
 * 退出API请求
 */
export async function logout (params) {
  return request('/api/logout', {
    method: 'post',
    data: params
  })
}

/**
 * 获取登录的用户信息API
 */
export async function userInfo (params) {
  return request('/api/userInfo', {
    method: 'get',
    data: params
  })
}