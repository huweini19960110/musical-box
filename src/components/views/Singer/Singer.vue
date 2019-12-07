<template>
<div class="singer-contaner">
  <mt-cell
      class="singer-cell"
      :title="item.classname"
      :to="`singer/Singerss/${item.classid}`"
      is-link
      v-for="item in singerlists"
      :key="item.classid"
      >
    </mt-cell>
</div>
</template>

<script>
import Vue from 'vue'
import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);
export default {
  data(){
    return {
      singerlists: []
    }
  },
  async created() {
    let {data} = await this.$axios.get('singer/class&json=true')
    console.log(data);
    this.singerlists = data.list

  }
}
</script>

<style>
  .singer-contaner .mint-cell{
    min-height: 40px;
  }
  .singer-contaner .mint-cell-text{
    font-size: .3rem;
  }

  .singer-contaner .singer-cell {
    border:  1px solid #e4e4e4;
    background-color: #fbfbfb;
    border-radius: .125rem;
    margin-left:.25rem;
    margin-right:.25rem;
  }
  .singer-contaner .singer-cell:nth-child(1),
  .singer-contaner .singer-cell:nth-child(2),
  .singer-contaner .singer-cell:nth-child(5),
  .singer-contaner .singer-cell:nth-child(9){
    margin-top: .25rem;
  }
</style>