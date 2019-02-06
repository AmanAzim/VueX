<template>
    <div>
        <p>Counter is: {{ $store.state.counter }}</p>
        <p>Double Counter is: {{doubleTheCounter}}</p>
        <p>String counter: {{stringCounter}}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        // props: ['counter']
        computed:{
            ...mapGetters([
                'doubleTheCounter',
                'stringCounter',
            ])
        }
    }
</script>