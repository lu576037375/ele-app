<template>
  <div id="app">
    
      <router-view></router-view>

      <tabs></tabs>

  </div>
</template>

<script>
import Tabs from './common/Tabs'
export default {
  components:{
    [Tabs.name]:Tabs   //[Tabs.name]  tabs组件的属性名
  }
}
</script>

<style>

</style>
