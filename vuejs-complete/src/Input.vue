<template>
  <div>
  <input type="text" v-model="title">
  <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title : ""
    }
  }
}
</script>

<style scoped>
  p {
    background-color: beige;
  }
</style>
