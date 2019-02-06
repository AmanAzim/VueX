<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment by 100</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement">Asyn Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement">Asyn Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement'
            ]),
        }
    }
</script>