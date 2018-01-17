<template>
    
    <nav class="tabs border-top">
        <router-link class="tab" v-for="(item,index) in list" 
        :to="item.path" :key="index">
        <span class="iconfont icon" :class="item.icon"></span>
        <span>{{item.title}}</span>
        </router-link>
    </nav>



</template>

<script>
export default {
    name:'tabs',
    data(){
        return{
            list:[
                { title:'首页' , path:'/home',icon:'icon-home'},
                { title:'发现' , path:'/discover',icon:'icon-discover'},
                { title:'订单' , path:'/order',icon:'icon-order'},
                { title:'我的' , path:'/mine',icon:'icon-mine'}
            ]
        }
    }
}
</script>
    
<style scoped>
    .tabs{
        width:100%;
        height: 49px;;
        background: white;
        position: absolute;
        left: 0;
        bottom:0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .tabs .tab{
                       
        text-align: center;
    }
    .tabs .tab .icon{
        display: block;
        font-size: 24px;
    }
   .router-link-active{
        color: #0089dc;
    }
</style>

  

