<template>
  <!-- BreadCreamb -->
  <div class="main-container">
    <bread-crumb />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from '@/components/BreadCrumb/breadCrumb.vue'
</script>

<style lang="less" scoped>
.main-container {
  margin: 0px 0px 12px 24px;
  width: calc(100% - 48px);
  height: calc(100% - 24px);
  position: relative;

  .main-content {
    background-color: #ffffff;
    width: 100%;
    height: calc(100% - 36px);
    border-radius: 5px;
  }
}
</style>