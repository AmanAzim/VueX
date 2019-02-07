<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
               <!-- <app-result :counter="counter"></app-result> -->
                <app-result></app-result>
                <hr>
                <app-secondResult></app-secondResult>
                <hr>
                <app-thirdResult></app-thirdResult>
                <hr>
               <!-- <app-counter @updated="counter += $event"></app-counter> -->
                <app-counter></app-counter>
                <br><br><hr>
                <app-mutatedCounter></app-mutatedCounter>
                <br><br><hr>
                <app-secondMutatedCounter></app-secondMutatedCounter>
                <br><br><hr>
                <app-actionCounter></app-actionCounter>
                <br><br><hr>
                <app-actionCounter2></app-actionCounter2>
                <br><hr>

                <p>Using v-bind :</p>
                <input type="text" v-bind:value="value" @input="updateValue">
                <p>Value: {{value}}</p>
                <br><hr>

                <p>Using v-model and advance computed property :</p>
                <input type="text" v-model="value">
                <p>Value: {{value}}</p>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import MutatedCounter from './components/MutatedCounter.vue';
    import SecondMutatedCounter from './components/MutatedCounter2.vue';
    import ActionCounter from './components/ActionCounter.vue';
    import ActionCounter2 from './components/ActionCounter2.vue';
    import Result from './components/Result.vue';
    import SecondResult from './components/SecondResult.vue';
    import ThirdResult from './components/ThirdResult.vue';

    export default {
        data() {
            return {
               // counter: 0
            }
        },
        computed:{
            value:{
                get(){
                    return this.$store.getters.value;
                },
                set(val){
                    this.$store.dispatch('updateValue', val);
                }
            }
        },
        methods:{
            updateValue(event){
                this.$store.dispatch('updateValue', event.target.value);
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            'app-secondResult':SecondResult,
            'app-thirdResult':ThirdResult,
            'app-mutatedCounter':MutatedCounter,
            'app-secondMutatedCounter':SecondMutatedCounter,
            'app-actionCounter':ActionCounter,
            'app-actionCounter2':ActionCounter2,
        }
    }
</script>

