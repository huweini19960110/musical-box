<template>
 
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item :id="item.name" v-for="item in thelist" :key="item.name" @click.native="gotofun(item.name)">{{item.meta.title}}</mt-tab-item>
        </mt-navbar>


    </div>

</template>

<script>
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui';
import thelist from '@/router/nav'


Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

export default {
    data(){
        return {
            selected: 'Newsong',
            thelist
        }
    },
    methods:{
        gotofun(name){
            this.$router.push({name:name})
        }
    },
    watch:{
        $route:{
            handler(val){
                this.selected = val.name
            },
            immediate:true
        }
    }



}
</script>

<style>

</style>