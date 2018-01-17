<template>
    <header class="home-header">
        <div class="location">
            <i class="iconfont icon-dingwei"></i>
            <h3>福中三路深圳市民多少度</h3>
        </div>
        <div class="search-wrap">
            <div class="search">
                <i class="iconfont icon-sousuo"></i>
                <span>搜索商家、商品名称</span>
            </div>
        </div>
    </header>
</template>

<script>
export default{
    
}
   
</script>

<style scoped>
.home-header{
    width:100%;
    /* height:85px; */    
}
.location{
    width:100%;
    height: 40px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color:white;
    position: relative;
    padding: 15px 10px;
    box-sizing: border-box;
}
.location .icon-dingwei{
    position: absolute;
}
.location h3{
    font-size: 14px;
    font-weight: 900;
    padding-left:20px; 
    max-width: 45%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

}
.search-wrap{
    width:100%;
    height: 45px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: flex;
    justify-content: center;
    align-items: center; 
    position: absolute;   
}
.search{
    width:93%;
    height: 30px;
    background: white;
    text-align: center;
    line-height: 30px;
    color: #999999;
     
}
</style>
