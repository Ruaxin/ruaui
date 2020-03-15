const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })
  it('接受selected属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-tabs selected="dog">
      <g-tabs-head>
        <g-tabs-item name="dog">机核王鱼奎恩</g-tabs-item>
        <g-tabs-item name="bear" disabled>苏州消防栓</g-tabs-item>
        <g-tabs-item name="duck">义乌首富</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="dog">狗头人资讯</g-tabs-pane>
        <g-tabs-pane name="bear">天哥资讯</g-tabs-pane>
        <g-tabs-pane name="duck">爽哥资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="dog"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
})