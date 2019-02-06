<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Double Counter is: {{counterDouble}}
        <p>String counter: {{clicks}}</p>
    </div>
</template>

<script>
    export default {
       // props: ['counter']
        computed:{
            counter(){
                return this.$store.state.counter;
            },
            counterDouble(){
                return this.$store.getters.doubleTheCounter;
            },
            clicks(){
                return this.$store.getters.stringCounter;
            }
        }
    }
</script>