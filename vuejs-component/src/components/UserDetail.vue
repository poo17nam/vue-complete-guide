<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click="resetName()">Reset Name</button>
        <button @click="resetFn">Reset Name</button>
        <p>{{userAge}}</p>
    </div>
</template>

<script>
import {eventBus} from '../main';
  export default {
    /*props : {
      {                 // Props validation
      name : String,
      required : true
     },
     restFn : Function,
     userAge : Number
    },*/
    props : ['myName','resetFn','userAge'],
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("")
      },
      resetName(){
        this.myName = "Poonam",
        this.$emit('nameWasReset',this.myName)
      }
    },
    created() {
      eventBus.$on('ageWasChanged', (age) => this.userAge = age)
    }
  }

</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
