/*
 * @Author: liuruijun
 * @Date: 2020-09-02 14:12:08
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-02 18:19:10
 * @Description: file content
 */
const CUSTOME_UI = 'use another ui library'
const deletePath = {
  h5: [],
  pc: ['src/assets/js/common.js', 'src/assets/less/hairline.less']
}
const h5ask = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Please enter the project name'
  },
  {
    type: 'input',
    name: 'proxyIp',
    message: 'Please enter the project proxyIp'
  },
  {
    type: 'list',
    name: 'uiLibrary',
    choices: [
      'mint-ui',
      'vant',
      CUSTOME_UI
    ],
    message: 'Please choose a ui library'
  }]
  
const pcask = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Please enter the project name'
  },
  {
    type: 'input',
    name: 'proxyIp',
    message: 'Please enter the project proxyIp'
  },
  {
    type: 'list',
    name: 'uiLibrary',
    choices: [
      'element-ui',
      'bootstrap',
      CUSTOME_UI
    ],
    message: 'Please choose a ui library'
  }]

module.exports = {
  h5ask,
  pcask,
  CUSTOME_UI,
  deletePath
}
