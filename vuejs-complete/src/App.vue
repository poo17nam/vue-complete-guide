<template>
  <div>
  <my-header></my-header>
  <app-servers></app-servers>
  </div>
</template>

<script>
import Header from './Header.vue'
  export default {
    components : {
      'my-header' : Header
    }
  }
</script>
