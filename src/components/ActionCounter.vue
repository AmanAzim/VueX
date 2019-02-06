<template>
    <div>
        <button class="btn btn-primary" @click="incrementWithPayload(100)">Increment by 100</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement({duration:1000})">Asyn Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement">Asyn Decrement</button>

    </div>
</template>

<script>

    export default {
        methods: {
            increment(){
                this.$store.dispatch('increment');
            },
            incrementWithPayload(payload){
                this.$store.dispatch('incrementWithPayload', payload);
            },
            decrement(){
                this.$store.dispatch('decrement');
            },
            asyncIncrement(payload){
                this.$store.dispatch('asyncIncrement', payload);
            },
            asyncDecrement(){
                this.$store.dispatch('asyncDecrement');
            }

        }
    }
</script>