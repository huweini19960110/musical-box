<template>
  <div class="rank-list">
    <mt-cell
    :title="item.rankname || item.specialname"
    :to="`http://m.kugou.com/rank/info/${item.rankid}`"
    is-link
    class="cell" 
    v-for="item in listss"
    :key="item.rankid"
    >
        <slot :say="item.playcount" class="thetest"></slot>
        <img class="rank-img" slot="icon" :src="item.imgurl|imgfilter" width="74" height="74">
    </mt-cell>

  </div>
</template>

<script>
import Vue from 'vue';
import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);
export default {
    data(){
        return {
            ranklist: []
        }
    },
    props:{
        listss: Array
    }
    

}
</script>

<style>
    .rank-list .cell{
        height: 96px;
        border-bottom: .05px solid #e5e5e5;
    }
    .rank-list .mint-cell-text{
        margin-left: 8px;
        color: black;
        font-size: 15px;
        display: inline-block;
        width: 180px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .rank-img {
        margin-top: 13px;
        height: 74px;
        width: 74px;
    }
    .rank-list .mint-cell-value{
        position: absolute;
        top: 50%;
        transform: translateY(100%);
        left: 96px;
    }
</style>