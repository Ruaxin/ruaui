<template>
  <div style="padding-top: 16px;">
    <h2>使用方法</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
import Button from '../../../src/button'
import Popover from '../../../src/popover'
export default {
  components: {
    'g-button':Button,
    'g-popover':Popover
  },
  data () {
    return {
      content: `
          <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
      `.replace(/^ {8}/gm, '').trim()
    }
  },
  methods: {
    onClickButton () {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      })
    }
  },
}
</script>