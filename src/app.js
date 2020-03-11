import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from  './sider'
import Content from  './content'
import Footer from  './footer'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi'
  },
})

// import chai from 'chai'
//
// const expect = chai.expect
// // input单元测试
// {
//   const Constructor = Vue.extend(Input)
//   const vm = new Constructor({
//     propsData: {
//       error: '你错了'
//     }
//   })
//   vm.$mount()
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   console.log(vm.$el)
//   expect(href).to.eq('#i-error')
//   const errorMessage = vm.$el.querySelector('.errorMessage')
//   console.log(errorMessage)
//   expect(errorMessage.innerText).to.equal('你错了')
//   vm.$el.remove()
//   vm.$destroy()
// }