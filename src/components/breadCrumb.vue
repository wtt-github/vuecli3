<template>
<div>
  <el-breadcrumb separator="/" class="bread">
    <el-breadcrumb-item v-for="(item,index) in breadcrumb" :key="index" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>

<script>
export default {
  created() {
    // console.log(this.breadcrumb)
  },
  props: ['breadcrumb']
}
</script>

<style>
.bread {
  margin: 20px 10px;
}
</style>
