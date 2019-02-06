import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //Enable it

export const store=new Vuex.Store({
    state:{
        counter:0,
    },
    getters:{
        doubleTheCounter: state => {
            return state.counter*2;
        },
        stringCounter: state=>{
            return state.counter+'clicks';
        }
    },
    mutations:{
        increment:(state)=>{
            state.counter++;
        },
        decrement:state=>{
            state.counter--;
        },
        incrementWithPayload:(state, payload)=>{
            state.counter+=payload;
        }
    },
    actions:{
        increment:({commit})=>{
            commit('increment');
        },
        decrement:({commit})=>{
            commit('decrement');
        },
        incrementWithPayload:({commit}, payload)=>{
            commit('incrementWithPayload', payload);
        },
        asyncIncrement:({commit})=> {
            setTimeout(()=>{commit('increment');}, 1000);
        },
        asyncDecrement:({commit})=>{
            setTimeout(()=>{commit('decrement');}, 1000);
        }
    }
});