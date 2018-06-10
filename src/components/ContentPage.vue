<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This is a content page</h2>
  </div>
</template>

<script>
export default {
  name: 'ContentPage',
  data () {
    return {
      msg: 'Welcome to content page',
      today: new Date()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
