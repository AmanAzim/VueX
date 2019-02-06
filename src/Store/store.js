import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //Enable it

export const store=new Vuex.Store({
    state:{
        counter:0,
    }
});