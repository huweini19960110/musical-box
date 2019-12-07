<template>
  <div class="aaabb">
    <mt-cell
      :title="item.singername"
      :to="{name:'Singerssong',params:{singerid:item.singerid}}"
      class="cell"
      v-for="item in singerslst"
      :key="item.singerid">
      <slot></slot>
      <img class="rank-img" slot="icon" :src="item.imgurl|imgfilter" width="48" height="48" />
    </mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      singerslst: []
    };
    
  },
    
  async created() {
    let { data } = await this.$axios.get(`singer/list/${this.$route.params.id}?json=true`);
    console.log(data);
    this.singerslst = data.singers.list.info;
  }
};
</script>

<style>

.aaabb .mint-cell-wrapper {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: .5px solid #e5e5e5;
  color: black;
  font-size: 15px;
}
.aaabb .rank-img{
    height: 48px;
    width: 48px;
}
.aaabb .mint-cell-text{
    margin-left: 8px;
}
</style>