<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>关闭按钮设置</strong>
    </p>

    <div>
      <g-button @click="onClickButton">上方弹出</g-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .gtr-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
import plugin from '../../../src/plugin'
import Button from '../../../src/button'
import Vue from 'vue'
Vue.use(plugin)
export default {
  components: {'g-button':Button},
  data () {
    return {
      content: `
          <style>
            .gtr-toast {
              z-index: 30;
            }
          </style>
          <div>
            <g-button @click="onClickButton">上方弹出</g-button>
          </div>
          methods: {
            onClickButton () {
              this.$toast('弹出内容', {
                closeButton: {
                  text: '点这',
                  callback: () => {
                    console.log('关闭了')
                  }
                }
              })
            }
          }`.replace(/^ {8}/gm, '').trim()
    }
  },
  methods: {
    onClickButton () {
      this.$toast('弹出内容', {
        closeButton: {
          text: '点这',
          callback: () => {
            console.log('关闭了')
          }
        }
      })
    }
  },
}
</script>