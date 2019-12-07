import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'

Vue.use(Vuex)


const store = new Vuex.Store({
    strict:true,
    state:{
        songlists:[],
        hash: ''
    },
    mutations:{
        tohash(state,{item}){
            state.hash = item
        },
        givelists(state,{list}){
            state.songlists = list
        },
        updatehash(state,{thehsh}){
            state.hash = thehsh
        }
    },
    getters:{
        idx(state){
            return state.songlists.findIndex(item=>state.hash===item.hash)
        }
    }


})

export default store