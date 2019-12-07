<template>
  <div class="newsonglist">
    <mt-cell :title="item.filename" class="cell-title" v-for="item in datalist" :key="item.hash">
      <img
        slot="icon"
        src="http://m.kugou.com/v3/static/images/index/download_icon_2.png"
        width="15"
        height="15"
        class="icon-img"
      />
    </mt-cell>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell } from "mint-ui";

Vue.component(Cell.name, Cell);
export default {
  props: {
    datalist: Array
  }
};
</script>

<style scroped>
.icon-img {
  height: 15px;
  float: right;
  width: 15px;
}
.newsonglist .mint-cell-text {
  font-size: 0.35rem;
  display: inline-block;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>