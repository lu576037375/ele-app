<template>
 <div class="pages" :id="pageId" ref="page">
     <div class="wrapper">
         <slot></slot>
     </div>
</div> 
</template>

<script>
import IScroll from 'iscroll'
export default {
    name:'page',
    props:{
        pageId:String
    },
    mounted(){
        let pageScroller = new IScroll( this.$refs.page , {
                mouseWheel:true
        })
        pageScroller.on("scroll",()=>{
            let searchTop = $(".search-wrap").offset().top;	
           			
         
                let scrollTop = $(window).scrollTop();
               console.log(searchTop)
                if (scrollTop >= searchTop) {
                    console.log("shang")
                    $(".search-wrap").css({position:"absoulte", top:0});
                }
                else {
                    console.log("xia")
                    $(".search-wrap").css({position:"static"});
                }
         
        })
    }
    
}
</script>

<style>

</style>
