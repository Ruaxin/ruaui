<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <g-input value="内容"></g-input>
    <g-input value="内容" disabled></g-input>
    <g-input value="内容" readonly></g-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components: {'g-input':Input},
  data () {
    return {
      selected: '1',
      content: `
          <g-input></g-input>
          <g-input value="中文"></g-input>
          <g-input value="中文" disabled></g-input>
          <g-input value="中文" readonly></g-input>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>