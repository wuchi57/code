<script setup>
import ElementIcon from 'components/ElementIcon.vue'
import SvgIcon from 'components/SvgIcon.vue'
import { Apple, Search } from '@element-plus/icons-vue'
</script>

<template>
  <ElementIcon />
  <div>
    <SvgIcon name="lock" />
    <SvgIcon name="user" />
    <span>你哈</span>
  </div>
  <div>
    <el-icon><Apple/></el-icon>
    <el-icon><Search/></el-icon>
    <span>你哈</span>
  </div>
</template>
