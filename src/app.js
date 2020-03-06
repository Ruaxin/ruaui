import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from  './row'
import Col from  './col'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message:'hi'
  },
  created(){
  },
  methods:{
  }
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