<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent = 'appQuote'">Quote</button>
              <button @click="selectedComponent = 'appAuthor'">Author</button>
              <button @click="selectedComponent = 'appNew'">New</button>
              <hr>
              <p>{{selectedComponent}}</p>
              <keep-alive>
              <component :is="selectedComponent">
                <h2 slot="title">{{quoteTitle}}</h2>
                <p slot="content">As you sow, so shall you reap!</p>
                <p>Be the change you wish to see in the world!</p>
              </component>
            </keep-alive>
              <!--<app-quote>
                <h2 slot="title">{{quoteTitle}}</h2>
                <p slot="content">As you sow, so shall you reap!</p>
                <p>Be the change you wish to see in the world!</p>
              </app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'

    export default {
      data() {
        return {
          quoteTitle : "The Quote",
          selectedComponent : "appQuote"
        }
      },
      components: {
        appQuote : Quote,
        appAuthor : Author,
        appNew : New
      }
    }
</script>

<style>
</style>
