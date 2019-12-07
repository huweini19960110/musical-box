<template>
  <div class="rank-contaner">

    <Ranklist :listss='getlist'></Ranklist>

  </div>
</template>

<script>
import Ranklist from '@/components/views/Rank/Ranklist'
export default {
  data(){
    return {
      getlist:[]
    }
  },
  components:{
    Ranklist
  },
  async created(){
        let {data} = await this.$axios.get('rank/list&json=true')
        console.log(data)
        this.getlist = data.rank.list
  }
}
</script>

<style>

</style>