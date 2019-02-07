import * as types from '../types';

const state={
    value:0,
};

const getters={
    value:state=>{
        return state.value;
    }
};

const mutations={
    updateValue:(state, val)=>{
        state.value=val;
    }
};

const actions={
    updateValue:({commit}, val)=>{
        commit('updateValue', val);
    }
};

export default{
    state,
    getters,
    mutations,
    actions
}