<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editAge">Edit age</button>
        <p>{{userAge}}</p>
    </div>
</template>

<script>
import {eventBus} from '../main';

export default {
  props : ['userAge'],
  methods: {
    editAge() {
      this.userAge = 30;
      //this.$emit('ageWasChanged',this.userAge)
      //eventBus.$emit('ageWasChanged',this.userAge);
      eventBus.changeAge(this.userAge);
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
