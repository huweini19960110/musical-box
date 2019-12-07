<template>
  <div class="newsong-contaner">
    <mt-swipe :auto="1000" class="banner">
      <mt-swipe-item v-for="item in bannerlist" :key="item.id">
        <a :href="item.extra.tourl">
          <img :src="item.imgurl" alt="#">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <Newsonglist :datalist='tolist'></Newsonglist>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';

import Newsonglist from '@/components/views/Newsong/Newsonglist'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data(){
    return {
      bannerlist: [],
      tolist: []
    }
  },
  components:{
    Newsonglist
  },
  async created(){
    let {data} = await this.$axios.get('?json=true')
    console.log(data)
    this.bannerlist = data.banner
    this.tolist = data.data

  }

}
</script>

<style>

  .banner{
    height: 125px;
    
  }
  img{
      height: 100%;
      width: 100%;
    }
</style>