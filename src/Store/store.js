import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //Enable it

export const store=new Vuex.Store({
    state:{
        counter:0,
        value:0,
    },
    getters:{
        doubleTheCounter: state => {
            return state.counter*2;
        },
        stringCounter: state=>{
            return state.counter+'clicks';
        },
        value:state=>{
            return state.value;
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
        },
        updateValue:(state, val)=>{
            state.value=val;
        }
    },
    actions:{
        increment:($store)=>{                  //using $store fully is unnecessary we just need the {commit} object method
            $store.commit('increment');
        },
        decrement:({commit})=>{
            commit('decrement');
        },
        incrementWithPayload:({commit}, payload)=>{
            commit('incrementWithPayload', payload);
        },
        asyncIncrement:({commit}, payload)=> {
            setTimeout(()=>{commit('increment');}, payload.duration);
        },
        asyncDecrement:({commit})=>{
            setTimeout(()=>{commit('decrement');}, 1000);
        },
        updateValue:({commit}, val)=>{
            commit('updateValue', val);
        }
    }
});