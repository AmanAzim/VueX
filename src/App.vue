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
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import SecondResult from './components/SecondResult.vue';
    import ThirdResult from './components/ThirdResult.vue';

    export default {
        data() {
            return {
               // counter: 0
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            'app-secondResult':SecondResult,
            'app-thirdResult':ThirdResult,
        }
    }
</script>

