<template>
  <div class="singssong-contaner">
    <div class="singer-pic" :style="{background: `url(${imgF}) center center no-repeat`}">
        <p>{{singername}}</p>
        <span>关注</span>
    </div>
    <div class="singerssong-list">
        <div class="allplay">
            <span class="play-icon"></span>
            <span>全部播放</span>
            <span>{{'/'+songscount+'首'}}</span>
        </div>
        <mt-cell slot="" :title="item.filename.split('-')[0]" class="cell-title"
        v-for="item in singersonglist" :key="item.hash" @touchstart.native="gotostate(item)">
            <span class="songnamne">{{item.filename.split('-')[1]}}</span>
      </mt-cell>
    </div>
    <div class="look-more">
        查看更多
    </div>
  </div>
</template>

<script>
import {mapMutation} from 'vuex'
export default {
    data(){
        return {
            singername:'',
            singersonglist:[],
            singerpic: '',
            songscount: ''
        }
    },
    async created(){
        let {data} = await this.$axios.get(`singer/info/${this.$route.params.singerid}?json=true`)
        console.log(data)
        this.singername = data.info.singername
        this.singersonglist = data.songs.list
        this.singerpic = data.info.imgurl
        this.songscount = data.info.songcount
        this.$store.commit('givelists',{list:this.singersonglist})
    
    },
    methods:{
        gotostate(item){
            console.log(item)
            this.$store.commit('tohash',{item:item.hash})
        }
    },
    computed:{
        imgF(){
            return this.singerpic.replace(/{size}/,400)
        }
    },
    watch: {
        $route:{
            handler(val){
                console.log(val)
            },
            immediate:true
        }
    }
}
</script>

<style>

    .singssong-contaner .singer-pic{
        width: 100%;
        height: 5.1rem;
        position: relative;
    }
    .singssong-contaner .singer-pic::before{
        display: block;
        content: '';
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,.3);
        position: absolute;
        top: 0;
        left: 0;
    }
    .singer-pic>p,.singer-pic>span{
        position: absolute;
        left: .3rem;
    }
    .singer-pic>p:nth-child(1){
        color: #FFFFFF;
        font-size: .5rem;
        top: .8rem;
    }
    
    .singer-pic>span{
        color: #FFFFFF;
        border: 1px solid #FFFFFF; 
        padding: .04rem .24rem;;
        border-radius: .8rem;
        font-size: 12px;
        background: rgba(0,0,0,.3);
        top: 1.7rem;
    }
    .singerssong-list{
        border-top-left-radius: .225rem;
        border-top-right-radius: .225rem;
        margin-top: -0.25rem;
    }
    .singssong-contaner .allplay{
        width: 100%;
        height: 1.124rem;
        background-color: white;
        border-top-left-radius: .245rem;
        border-top-right-radius: .245rem;
        line-height: 1.124rem;
        border-bottom: 1px solid #e5e5e5;
        position: relative;
    }
    .singssong-contaner .play-icon{
        display: inline-block;
        height: 0.525rem;
        width: 0.525rem;
        border-radius: 50%;
        background: url('http://m.kugou.com/v3/static/images/singer/icon-play.png') no-repeat;
        background-size: 100% 100%;
        transform: translateY(20%) translateX(50%);
    }
    .singssong-contaner .allplay>span:nth-child(2){
        color: white;
        padding-left: .25rem;
        color: black;
        font-size: 14px;
    }
    .singssong-contaner .allplay>span:nth-child(3){
        font-size: 12px;
    }
    .singerssong-list .mint-cell-text{
        color: #888888;
        font-size: 12px;
        position: absolute;
        left: .25rem;
        bottom: .25rem;
    }
    .singerssong-list .songnamne{
        color: black;
        font-size: 12.25px;
        position: absolute;
        left: .25rem;
        top: .25rem;
    }
    .singerssong-list .cell-title{
        border-bottom: 1px solid #e5e5e5;
    }
    .look-more{
        height: .8rem;
        width: 50%;
        position: fixed;
        bottom: .25rem;
        left: 25%;
        border-radius: 1.2rem;
        color: #fff;
        background: #3c90f7;
        text-align: center;
        line-height: .8rem;
        font-size: .3rem;
    }
</style>