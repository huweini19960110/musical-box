<template>
<div class="songlist-contaner">

  <Ranklist :listss="songlistss">
    <template slot-scope="bb">
      <span class="songlist-icn"></span>
      <span class="songlist-count">{{bb.say}}</span>
    </template>
  </Ranklist>
</div>
</template>

<script>
import Ranklist from '@/components/views/Rank/Ranklist'
export default {
  data(){
    return {
      songlistss: []
    }
  },
  components:{
    Ranklist
  },
  async created(){
    let {data} = await this.$axios.get('plist/index&json=true')
    console.log(data)
    this.songlistss = data.plist.list.info
  }

  
}
</script>

<style scoped>
  .songlist-contaner .icon-img{
    border: 1px solid red;
    float: right;

  }

    .songlist-contaner .mint-cell-text {
    font-size: .35rem;
    display: inline-block;
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    .songlist-contaner .songlist-icn{
      display: inline-block;
      height: .25rem;
      width: .25rem;
      background: url('http://m.kugou.com/v3/static/images/index/icon_music.png') no-repeat;
      background-size: 100% 100%;
      margin-right: .1rem;
    }
    .songlist-contaner .songlist-count{
      font-size: .25rem;
    }
</style>