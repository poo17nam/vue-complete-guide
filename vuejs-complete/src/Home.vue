<template>
  <div>
    <app-title></app-title>
    <div id="container">
    <app-server-status v-for="x in 5"></app-server-status>
    </div>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue';
  import Input from './Input.vue'

export default {
  components : {
    'app-server-status' : ServerStatus,
    'app-title' : Input
  }

}
</script>

<style scoped>
  #container {
    background-color: lightblue;
  }
</style>
