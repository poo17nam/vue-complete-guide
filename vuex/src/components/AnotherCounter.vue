<template>
    <div>
        <button class="btn btn-primary" @click="incrementval(100)">Increment</button>
        <button class="btn btn-primary" @click="decrementval(50)">Decrement</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        methods: {
            ...mapActions([
              'incrementval',
              'decrementval'
            ])/*,
            incrementval(by){
              this.$store.dispatch('incrementval',by)
            }*/
        }
    }
</script>
