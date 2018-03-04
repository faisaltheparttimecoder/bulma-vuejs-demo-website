<template>
  <div>
    <app-navbar> </app-navbar>
    <section class="section">
      <div class="columns">
        <div class="column is-2">
          <app-menu> </app-menu>
        </div>
        <div class="container">
          <h2> Hello from bulma </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import menu from './menu';
  export default {
    components: {
      "app-menu": menu
    },
    data: function () {
      return {}
    }
  }

</script>

<style>

</style>
