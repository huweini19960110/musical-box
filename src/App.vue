<template>
  <div id="app">
    <div class="header" v-show="showheader">
      <mt-header title="下载酷狗">
        <router-link to="/" slot="left">
          <mt-button icon="" class="header-icon"></mt-button>
        </router-link>
        <mt-button icon="search" slot="right" @click.native="gotosearch"></mt-button>
      </mt-header>
      <router-view name="Onav"></router-view>
    </div>
      <div class="under-header" v-show="showheader"></div>
      
      <router-view></router-view>

      <Buttomplayer></Buttomplayer>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header,Button } from 'mint-ui';
import Buttomplayer from '@/components/views/Player/Bottomplayer'
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
export default {
  name: 'App',
  components:{
    Buttomplayer
  },
  methods:{
    gotosearch(){
      this.$router.push({
        path: '/navlist'
      })
    }


  },
  computed:{
    showheader(){
        return this.$route.name==="Singerssong" ? false : true
      }  
  }
}
</script>

<style lang="less" scope>
  .header {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 3;
    .header-icon {
      width: 2.7rem;
      height: .7rem;
      background: url(./assets/logo.png) no-repeat;
      background-size: 100% 84%;
      background-position-y: .0625rem; 
    }
    .mint-header-title{
      position: relative;
      overflow: initial;
      font-weight: 700;
      font-size: 12px;
    }
    .mint-header-title::after{
      content: '';
      display: block;
      border: .025rem solid white;
      height: .7rem;
      width: 70%;
      position: absolute;
      top: -0.2rem;
      left: .49rem;
      border-radius: .125rem;      
    }
  }
  .under-header{
    height: 85px;
    width: 100%;
  }
</style>
