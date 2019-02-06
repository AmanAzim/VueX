<template>
    <div>
        <button class="btn btn-primary" @click="incrementWithPayload(100)">Increment by 100</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement({duration:1000})">Asyn Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement">Asyn Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'increment',
                'incrementWithPayload',
                'decrement',
                'asyncIncrement',
                'asyncDecrement'
            ]),
        }
    }
</script>