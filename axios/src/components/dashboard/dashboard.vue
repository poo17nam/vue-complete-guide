<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address : {{email}}</p>
  </div>
</template>

<script>
import axioss from 'axios';
  export default {
    data(){
      return{
        email:''
      }
    },
    created(){
      axioss.get('/users.json')
      .then(res => {
        console.log("res:",JSON.stringify(res,null,2))
        const data = res.data
        const users = []
        for(let key in data){
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log("Users:",JSON.stringify(users,null,2))
        this.email = users[0].email
      })
      .catch(error => console.log(error))
    }
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
