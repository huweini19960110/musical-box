<template>
  <div class="search-head">
      <span class="back-ic" @click="gobackfn"></span>
      <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  
  methods:{
    gobackfn(){
      console.log('in')
      this.$router.go(-1)
    }
  },
  computed:{
    title(){
      console.log(this.$route)
      return this.$route.path === '/navlist'? '搜索' : '歌手'
    }
  }
}
</script>

<style>
  .search-head{
    width: 100%;
    height: 42px;
    text-align: center;
    line-height: 42px;
    color: #333;
    background-color: white;
    z-index: 4;
  }
  .search-head .back-ic{
    height: 100%;
    width: 24px;
    background: url('http://m.kugou.com/v3/static/images/index/goback.png') no-repeat;
    background-size: 50% 50%;
    float: left;
    background-position: 50%;
  }
</style>