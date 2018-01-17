<template>
    
<subpage pageId="home-detail">
    <h1>详情页</h1>
</subpage>




</template>

<script>
import SubPage from '../../common/SubPage.vue'
export default {
    components:{
        [SubPage.name]:SubPage
    }
}
</script>

<style>
#home-detail{
    background: lightcoral;
}
</style>
