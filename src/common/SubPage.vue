<template>
 <div class="subpage" :id="pageId">
     
         <slot></slot>
     
</div> 
</template>

<script>
export default {
    name:'subpage',
    props:{
        pageId:String
    }
}
</script>

<style>
    
</style>
