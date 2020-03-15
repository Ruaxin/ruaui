<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GtrTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  inject: ['eventBus'],
  computed: {
    classes () {
      return {
        active: this.active
      }
    }
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected',this.name,this)
    }
  },
  data () {
    return {
      active: false
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
}
</script>

<style lang="scss" scoped>
  $blue:blue;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
      color: $blue;
      font-weight: bold;
    }
  }
</style>