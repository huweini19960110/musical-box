<template>
  <div class="bottom-player" :style="playya? 'bottom:0':'bottom:-60px'">
      <audio ref="audio" :src="audioUrl"></audio>
      <div class="player-left">
            <img :src="imgUrl" alt="">
        <span>{{songName}}</span>
        <span>{{singerName}}</span>
      </div>
      <div class="player-right">
          <span class="playnpause" :class="onoff?'toplay':'pause'" @click="toggleplay"></span>
          <span class="next-icon" @click="gotonextsong"></span>
          <span class="download-icon"></span>
      </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import Vue from 'vue'

export default {
    data(){
        return {
            imgUrl: 'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
            singerName: '',
            songName: '',
            audioUrl: '',
            playya: false,
            onoff: false
        }
    },
    computed:{
        ...mapState(['hash','songlists']),
        ...mapGetters(['idx'])
    },
    watch:{
        hash:{
            async handler(val){
                let {data} = await this.$axios.get('api/v1/song/get_song_info',
                {params:{
                    cmd: 'playInfo',
                    hash: this.hash,
                }})
                console.log(data)
                if(data.error == '需要付费'){
                    MessageBox('错误提示', '因版权问题无法播放此歌曲');
                    return;
                }

                if(data.error!='请求参数无效'){
                    this.imgUrl = data.imgUrl.replace(/{size}/,400)
                    this.singerName = data.singerName
                    this.songName = data.songName
                    this.audioUrl = data.url
                }
                let _this = this
                this.$refs.audio.addEventListener('loadeddata',function(){
                    console.log('加载完成')
                    this.play()
                    _this.playya = true
                    _this.onoff = true
                })
                
            },
            immediate:true
        }
    },
    methods:{
        gotonextsong(){
            if(this.idx+1 <= this.songlists.length){
                this.$store.commit('updatehash',{thehsh:this.songlists[this.idx+1].hash})
            }
        },
        toggleplay(){
            if(this.onoff===true){
                this.$refs.audio.pause()
                this.onoff = false
            }else{
                this.$refs.audio.play()
                this.onoff = true
            } 
        }
    }


}
</script>

<style>
    #app .bottom-player{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.3rem;
        background-color: rgba(0, 0, 0, .9);
        display: flex;
    }
    .bottom-player .player-left{
        height: 100%;
        width: 60%;
        position: relative;
    }
    .bottom-player .player-left img{
        height: 100%;
        width: auto;
        border-radius: 5px;
    }
    .bottom-player .player-left>span:nth-of-type(1){
        color: white;
        font-size: .3rem;
        position: absolute;
        top: 20%;
        left: 32%;
    }
    .bottom-player .player-left>span:nth-of-type(2){
        position: absolute;
        bottom: 10%;
        color: #888888;
        left: 32%;
        
    }
    .bottom-player .player-right{
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .bottom-player .player-right>span{
        height: 0.625rem;
        width: 0.625rem;
    }
    .bottom-player .pause{
        background: url('http://m.kugou.com/v3/static/images/index/play_icon.png') no-repeat;
        background-size: 100% 100%;
    }
    .bottom-player .toplay{
        background: url('http://m.kugou.com/v3/static/images/index/pause_icon.png') no-repeat;
        background-size: 100% 100%;
    }
    .bottom-player .player-right>span:nth-child(2){
        background: url('http://m.kugou.com/v3/static/images/index/next_icon.png') no-repeat;
        background-size: 100% 100%;
    }
        .bottom-player .player-right>span:nth-child(3){
        background: url('http://m.kugou.com/v3/static/images/index/download_icon.png') no-repeat;
        background-size: 100% 100%;
    }
</style>