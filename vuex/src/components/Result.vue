<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks : {{stringCounter}}</p>
    <p>Central store value : {{$store.state.counter}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        computed : {
          ...mapGetters([
            'doubleCounter',
            'stringCounter'
          ])
        }
    }
</script>
