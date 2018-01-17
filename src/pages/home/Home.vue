<template>
<div>
  <page pageId="home" >

    <home-header></home-header>
    <home-banner></home-banner>
    <home-list></home-list>
     



  </page>
    <!-- 子页面 -->
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
import Page from '../../common/Pages.vue'
import Header from '../../components/home/Header.vue'
import Banner from '../../components/home/Banner.vue'
import List from '../../components/home/List.vue'
export default {
    components:{
      [Page.name]:Page,
      'home-header':Header,
      'home-banner':Banner,
      'home-list':List
    }
}
</script>

<style scoped>
  #home{
    background: white;    
  }
</style>

  

