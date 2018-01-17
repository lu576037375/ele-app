<template>

<div class="banner-wrap">
    <div class="banner">
        banner
    </div>

    <div class="gift">
        <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/">
    </div>
</div>
</template>

<script>
import {banner} from '../../main.js'
export default {
    created(){
        
    }
}
</script>

<style>
.banner-wrap{
    width:100%;
    height:235px;
    border-bottom: 6px solid #f5f5f5;
    background: white;
}
.banner{
    width:100%;
    height: 150px;
    background: paleturquoise;
}
.gift{
    width:100%;
    height:75px;
    box-sizing: border-box;
    padding: 0 10px;
}
.gift img{
    width:100%;
   
}
</style>