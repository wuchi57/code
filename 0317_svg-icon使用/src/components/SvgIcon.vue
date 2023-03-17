<script setup>
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#333',
  },
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<style lang="sass" scoped>
.svg-icon
  width: 1em
  height: 1em
  fill: currentColor
  /* icon高度16，文字高度22，默认向上对齐 */
  vertical-align: -2px
</style>
