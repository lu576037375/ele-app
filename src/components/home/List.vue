<template>
<div class="seller-list">
    <div class="seller-title">
        推荐商家
    </div>

  <ul class="all-list">
      <li class="list">          
              <span class="seller-img"><img src="http://placehold.it/60x60"></span>
                <div class="seller-info">
                    <section>                            
                        <span>
                            <i>品牌</i>
                            <h3>永和大王</h3>
                        </span>                       
                        <p>票</p>
                    </section>
                    <section>
                        <p>4.9月售910单</p>
                        <p>蜂鸟转送</p>
                    </section>
                    <section>
                        <p>￥20起送 | 配送费￥5</p>
                        <p>798m | 28分钟</p>
                    </section>
                    <section>口碑人气好店</section>
                    <section>
                        <ul>
                            <li>新用户下单立减17元</li>
                            <li>满38减10元，满60减20</li>
                        </ul>
                        <span>3个活动</span>
                    </section>
                    
                </div>                    
      </li>
  </ul>
</div>
</template>

<script>
export default {
    mounted(){
     
    }
}
</script>

<style>
.seller-list{
    width:100%;
    padding: 0 10px;
    box-sizing: border-box;
    background: #ffffff;
}
.seller-title{
    width:100%;
    padding: 10px 0;
    font-size:13px;
    display: flex;
    justify-content: center;
    align-items: center; 
    color: black;
}
.seller-title:before{   
    content: "";
    display: block;
    width: 5%;
    height: 1px;
    background: #999;
    margin-right:5px;
    transform: scaleY(0.5); 
}
.seller-title:after{   
    content: "";
    display: block;
    width: 5%;
    height: 1px;
    background: #999;
    margin-left:5px;
    transform: scaleY(0.5); 
}
.all-list{
    width:100%;
    height: 800px;
    /* background: lightcoral; */
    box-sizing: border-box;
    margin-top:5px; 
}
.list{
    width:100%;
    display: flex;
}
.list .seller-img{
    margin-right:10px;
}
.list .seller-info{
    width: 100%;
}
.list .seller-info section:first-child{
    width: 100%;
    display: flex;
    /* background: palegoldenrod; */
    justify-content: space-between;
    margin-bottom: 6px;
}
.seller-info section:first-child span{
    display: flex;
}
.seller-info section:first-child span i{
    margin-right: 10px;
}
.list .seller-info section:nth-child(2),.list .seller-info section:nth-child(3){
    display: flex;
    /* background: lemonchiffon; */
    justify-content: space-between;
    margin-bottom: 6px;
    font-size: 10px;
}
.list .seller-info section:nth-child(4){
    color: red;
    font-size: 10px;
    padding:6px 0;
    margin-bottom: 6px;
    border-bottom: 1px solid #eeeeee;
}
.list .seller-info section:nth-child(5){
    display: flex;
    justify-content: space-between;
}
</style>